"use server";
import { createAdminClient } from "@/config/appwrite";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";

async function createJob(previousState, formData) {
  // Get DB instance
  const { databases } = await createAdminClient();

  try {
    const { user } = await checkAuth();

    if (!user) {
      return {
        error: "you must be logged in to create a job",
      };
    }
    // Process form data
    const functieEisenString = formData.get("functieEisen") || "";
    const functieEisen = functieEisenString
      ? functieEisenString.split(",").map((item) => item.trim())
      : [];

    const voorwaardenString = formData.get("arbeidsvoorwaarden") || "";
    const arbeidsvoorwaarden = voorwaardenString
      ? voorwaardenString.split(",").map((item) => item.trim())
      : [];

    const featured = formData.get("featured") === "on";

    // Create Job
    const newJob = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_JOBS,
      ID.unique(),
      {
        vacatureNummer: formData.get("vacatureNummer"),
        vacatureTitel: formData.get("vacatureTitel"),
        subTitel: formData.get("subTitel"),
        category: formData.get("categorie"),
        werkgever: formData.get("werkgever"),
        standplaats: formData.get("standplaats"),
        introductie: formData.get("introductie"),
        functieomschrijving: formData.get("functieomschrijving"),
        eisenKoptekst: formData.get("eisenKoptekst"),
        functieEisen: functieEisen,
        voorwaardenKoptekst: formData.get("voorwaardenKoptekst"),
        arbeidsvoorwaarden: arbeidsvoorwaarden,
        uren: formData.get("uren"),
        opleiding: formData.get("opleiding"),
        niveau: formData.get("niveau"),
        salaris: formData.get("salaris"),
        featured: featured,
      }
    );

    revalidatePath("/", "layout");

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    const errorMessage = "unexpected error";
    return {
      error: errorMessage,
    };
  }
}

export default createJob;
