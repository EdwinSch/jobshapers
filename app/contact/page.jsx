import ContactForm from "@/components/ContactForm";
import ContactInfoBox from "@/components/ContactInfoBox";

const ContactPage = () => {
  return (
    <>
      {/* Contact header */}
      <div className="mx-auto max-w-7xl py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <h1 className="mb-2 text-center text-2xl sm:text-3xl font-bold text-jsBlue uppercase">
          Contact
        </h1>
        <p className="text-center text-lg text-jsText">
          Klaar voor de volgende stap? Wij helpen je graag met het vinden van
          een top baan of kandidaat.
        </p>
      </div>

      {/* Contact body */}
      <div className="bg-jsOffWhite">
        <div className="mx-auto max-w-7xl py-8 md:py-12 px-4 md:px-6 lg:px-8 flex gap-8">
          <ContactForm />
          <ContactInfoBox />
        </div>
      </div>
    </>
  );
};
export default ContactPage;
