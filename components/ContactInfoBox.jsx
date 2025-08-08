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
        {/* location */}
        <ContactItem title="locatie" icon={FaLocationDot}>
          <p className="text-jsText">Sprundel, Netherlands</p>
        </ContactItem>

        {/* Telephone */}
        <ContactItem
          title="telefoon"
          icon={FaPhone}
          iconColor="text-jsGreen"
          iconShade={"#d2fae5"}
        >
          <a
            href="tel:+31634708727"
            className="text-jsText hover:text-jsMidnight duration-200"
          >
            +31 6 34708727
          </a>
        </ContactItem>

        {/* email */}
        <ContactItem title="email" icon={FaEnvelope} iconColor="text-jsBlue">
          <a
            href="mailto:info@jobshapers.nl"
            className="text-jsText hover:text-jsMidnight duration-200"
          >
            info@jobshapers.nl
          </a>
        </ContactItem>

        {/* social */}
        <ContactItem
          title="LinkedIn"
          icon={FaLinkedin}
          iconColor="text-jsGreen"
          iconShade={"#d2fae5"}
        >
          <a
            href="https://linkedin.com/company/jobshapers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jsText hover:text-jsMidnight duration-200"
          >
            LinkedIn
          </a>
        </ContactItem>
      </div>
    </div>
  );
};

export default ContactInfoBox;
