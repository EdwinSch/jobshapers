"use server";

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import checkAuth from "./checkAuth";

const deleteJob = async (jobId) => {
  try {
    // Check authentication
    const { isAuthenticated } = await checkAuth();
    
    if (!isAuthenticated) {
      return { success: false, error: "Unauthorized" };
    }

    const { databases } = await createAdminClient();
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_JOBS,
      jobId
    );
    
    // Revalidate relevant paths
    revalidatePath("/vacatures");
    revalidatePath("/vacatures/manageJobs");
    revalidatePath("/");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete job", error);
    return { success: false, error: error.message };
  }
};

export default deleteJob;
