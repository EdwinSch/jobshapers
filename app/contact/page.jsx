import ContactForm from "@/components/ContactForm";
import ContactInfoBox from "@/components/ContactInfoBox";
import Faq from "@/components/Faq";

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
        <div className="mx-auto max-w-7xl py-8 md:py-12 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row gap-8 md:items-start">
          <ContactForm />
          <ContactInfoBox />
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-7xl py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <h2 className="mb-2 text-center text-2xl sm:text-3xl font-bold text-jsMidnight capitalize">
          Veelgestelde vragen
        </h2>
        <p className="text-center text-jsText">
          Snelle antwoorden op veel voorkomende vragen.
        </p>
        <Faq />
      </div>
    </>
  );
};
export default ContactPage;
