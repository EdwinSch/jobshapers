"use server";

import { createAdminClient } from "@/config/appwrite";
import { redirect } from "next/navigation";

const getSingleJob = async (id) => {
  try {
    // await database from Appwrite
    const { databases } = await createAdminClient();
    // fetch jobs
    const singleJob = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_JOBS,
      id
    );
    return singleJob;
  } catch (error) {
    console.log("failed to get this job", error);
    redirect("/error");
  }
};

export default getSingleJob;
