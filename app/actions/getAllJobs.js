"use server";

import { createAdminClient } from "@/config/appwrite";
import { redirect } from "next/navigation";

const getAllJobs = async () => {
  try {
    // await database from Appwrite
    const { databases } = await createAdminClient();
    // fetch jobs
    const { documents: jobs } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_JOBS
    );
    return jobs;
  } catch (error) {
    console.log("failed to get jobs", error);
    return [];
  }
};

export default getAllJobs;
