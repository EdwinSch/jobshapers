"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const role = formData.get("role");
  const message = formData.get("message");

  const html = `
    <h3>Nieuw contactformulier bericht</h3>
    <p><strong>Naam:</strong> ${firstname} ${lastname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefoon:</strong> ${phone}</p>
    <p><strong>Rol:</strong> ${role}</p>
    <p><strong>Bericht:</strong></p>
    <p>${message}</p>
  `;

  try {
    const emailData = {
      from: "Contact Form <onboarding@resend.dev>",
      to: "maurice@jobshapers.nl",
      subject: `Contact formulier van ${firstname} ${lastname}`,
      reply_to: email?.toString(),
      html,
    };

    const result = await resend.emails.send(emailData);

    return { success: true, data: result };
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    console.error("❌ Error details:", error.message);
    return { success: false, error: error.message };
  }
}
