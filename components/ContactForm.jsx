const ContactForm = () => {
  return (
    <form
      action=""
      className="flex-1 p-6 bg-white border border-slate-300 rounded-md"
    >
      <h2 className="text-lg font-semibold text-jsMidnight">
        Stuur ons een bericht
      </h2>
      <p className="text-jsText text-sm">
        Vul het formulier in en we komen spoedig bij je terug.
      </p>

      <label htmlFor="" className="text-jsMidnight text-sm">
        Voornaam *
      </label>
      <input type="text" name="" id="" placeholder="" />
    </form>
  );
};

export default ContactForm;
