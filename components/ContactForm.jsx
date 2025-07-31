"use client";

import { useState, useRef } from "react";
import ActionButton from "./ActionButton";
import { sendContactEmail } from "@/app/actions/sendMail.js";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const result = await sendContactEmail(formData);

      if (result?.success) {
        formRef.current?.reset();
        setMessage("✅ Je bericht is ontvangen! We nemen spoedig contact op.");
      } else {
        setMessage(
          "❌ Er ging iets mis bij het verzenden. Probeer het opnieuw."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("❌ Er ging iets mis bij het verzenden. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex-1 p-6 bg-white border border-slate-300 rounded-md"
    >
      <h2 className="text-lg font-semibold text-jsMidnight">
        Stuur ons een bericht
      </h2>
      <p className="mb-5 text-jsText text-sm">
        Vul het formulier in en we komen spoedig bij je terug.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        {/* first name */}
        <div>
          <label htmlFor="firstname" className="text-jsMidnight text-sm">
            Voornaam *
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Jan"
            className="mt-1 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
            required
          />
        </div>
        {/* last name */}
        <div>
          <label htmlFor="lastname" className="text-jsMidnight text-sm">
            Achternaam *
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Janssen"
            className="mt-1 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
            required
          />
        </div>
      </div>

      {/* email*/}
      <label htmlFor="email" className="text-jsMidnight text-sm">
        Email *
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="mail@voorbeeld.com"
        className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
        required
      />

      {/* phone number*/}
      <label htmlFor="phone" className="text-jsMidnight text-sm">
        Telefoonnummer *
      </label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="+31612345678"
        className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
        required
      />

      {/* role */}
      <label htmlFor="role" className="text-jsMidnight text-sm">
        Ik ben:
      </label>
      <select
        name="role"
        id="role"
        className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
      >
        <option value="werknemer">Werknemer</option>
        <option value="werkgever">Werkgever</option>
      </select>

      {/* message */}
      <label htmlFor="message" className="text-jsMidnight text-sm">
        Waar kunnen we je mee helpen? *
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Typ je vraag of bericht"
        className="min-h-28 mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
        required
        style={{ resize: "none" }}
      />

      {/* Status message */}
      {message && (
        <div
          className={`mb-4 p-3 rounded-md text-sm ${
            message.includes("✅")
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {message}
        </div>
      )}

      <ActionButton type="submit" variant="blue" disabled={isSubmitting}>
        {isSubmitting ? "Bezig met verzenden..." : "Verstuur"}
      </ActionButton>
    </form>
  );
};

export default ContactForm;
