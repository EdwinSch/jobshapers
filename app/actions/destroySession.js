"use server";

import { cookies } from "next/headers";
import { createSessionClient } from "@/config/appwrite";

async function destroySession() {
  // Retrieve session cookie
  const sessionCookie = cookies().get("appwrite-session");

  if (!sessionCookie) {
    return {
      error: "no cookie found",
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);
    // Delete session
    await account.deleteSession("current");
    // Delete cookie
    cookies().delete("appwrite-session");
    return {
      success: true,
    };
  } catch (error) {
    return {
      error: "uitloggen niet gelukt",
    };
  }
}

export default destroySession;
