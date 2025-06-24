import ContactItem from "./ContactItem";

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";

const ContactInfoBox = () => {
  return (
    <div className="flex-1 p-6 bg-white border border-slate-300 rounded-md">
      <h2 className="mb-6 text-lg font-semibold text-jsMidnight">
        Contact informatie
      </h2>

      {/* Contact info items */}
      <div className="flex flex-col gap-6">
        <ContactItem title="locatie" icon={FaLocationDot}>
          <p className="text-jsText">Breda, Netherlands</p>
        </ContactItem>

        <ContactItem
          title="telefoon"
          icon={FaPhone}
          iconColor="text-jsGreen"
          iconShade="#d2fae5"
        >
          <a href="tel:+31 6 12345678" className="text-jsText">
            +31 6 12345678
          </a>
        </ContactItem>
      </div>
    </div>
  );
};

export default ContactInfoBox;
