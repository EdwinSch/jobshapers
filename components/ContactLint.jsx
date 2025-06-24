import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa6";

const ContactLint = () => {
  return (
    <div className="bg-jsMidnight py-1.5">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex justify-center sm:justify-end items-center gap-5">
        <a
          href="tel:+31 6 12345678"
          className="text-sm text-jsSubtext hover:text-jsBlue dureation-200 font-normal flex items-center gap-1"
        >
          <FaPhone size={12} />
          +31 6 12345678
        </a>
        <a
          href="mailto:hello@jobshapers.com"
          className="text-sm text-jsSubtext hover:text-jsBlue dureation-200 font-normal flex items-center gap-1"
        >
          <FaEnvelope size={12} />
          hello@jobshapers.com
        </a>
      </div>
    </div>
  );
};

export default ContactLint;
