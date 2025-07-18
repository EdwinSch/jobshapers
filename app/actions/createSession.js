"use server";

import { cookies } from "next/headers";
import { createAdminClient } from "@/config/appwrite";

async function createSession(previousState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      error: "Alle velden moet ingevuld zijn",
    };
  }

  // Get account instance
  const { account } = await createAdminClient();

  try {
    // Generate session
    const session = await account.createEmailPasswordSession(email, password);
    // Create session cookie
    (await cookies()).set("appwrite-session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log("Authentication Error: ", error);
    return {
      error: "login gegevens onjuist",
    };
  }
}

export default createSession;
