"use client";

import ActionButton from "./ActionButton";

const ContactForm = () => {
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("hello");
  };

  return (
    <form
      onSubmit={handleSubmit()}
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
            name=""
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
            name=""
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
        name=""
        id="email"
        placeholder="mail@voorbeeld.com"
        className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
        required
      />

      {/* phone number*/}
      <label htmlFor="phone" className="text-jsMidnight text-sm">
        Telefoonnummer
      </label>
      <input
        type="text"
        name=""
        id="phone"
        placeholder="+31612345678"
        className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
      />

      {/* role */}
      <label htmlFor="role" className="text-jsMidnight text-sm">
        Ik ben:
      </label>
      <select
        name=""
        id="role"
        className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
      >
        <option value="volvo">Werknemer</option>
        <option value="saab">Werkgever</option>
      </select>

      {/* message */}
      <label htmlFor="message" className="text-jsMidnight text-sm">
        Waar kunnen we je mee helpen? *
      </label>
      <textarea
        name=""
        id="message"
        placeholder="Typ je vraag of bericht"
        className="min-h-28 mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
        required
        style={{ resize: "none" }}
      />

      <ActionButton type="submit" variant="blue">
        Verstuur
      </ActionButton>
    </form>
  );
};

export default ContactForm;
