import LinkButton from "./LinkButton";
import FooterList from "./FooterList";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-jsMidnight">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* footer top */}
        <div className="py-10 sm:py-16 text-center">
          <h4 className="text-white text-3xl font-bold mb-2">
            Klaar voor de volgende stap?
          </h4>
          <p className="text-jsSubtext text-lg mb-4">
            Wij geven vorm aan jouw carrière.
          </p>
          <LinkButton
            href="/contact"
            variant="secondary"
            label="start vandaag"
            className="w-fit m-auto"
          />
        </div>

        {/* footer bottom */}
        <section className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-30 my-0 sm:my-6">
          {/* socials */}
          <FooterList title={"LOGO"}>
            <a
              href="https://linkedin.com/company/jobshapers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-jsSubtext hover:text-jsBlue duration-200 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>
          </FooterList>

          {/* quicklinks */}
          <FooterList title={"Quicklinks"}>
            <LinkButton
              variant="ghost"
              label="voor werknemers"
              href="/werknemers"
              className="text-jsSubtext font-normal mb-2"
            />
            <LinkButton
              variant="ghost"
              label="voor werkgevers"
              href="/werkgevers"
              className="text-jsSubtext font-normal mb-2"
            />
            <LinkButton
              variant="ghost"
              label="vacatures"
              href="/vacatures"
              className="text-jsSubtext font-normal mb-2"
            />
            <LinkButton
              variant="ghost"
              label="contact"
              href="/contact"
              className="text-jsSubtext font-normal mb-2"
            />
          </FooterList>

          {/* contact info */}
          <FooterList title={"Contact Info"}>
            <a
              href="tel:+31 6 12345678"
              className="text-jsSubtext hover:text-jsBlue dureation-200 font-normal mb-2 flex items-center gap-3"
            >
              <FaPhone />
              +31 6 12345678
            </a>
            <a
              href="mailto:hello@jobshapers.com"
              className="text-jsSubtext hover:text-jsBlue dureation-200 font-normal mb-2 flex items-center gap-3"
            >
              <FaEnvelope />
              hello@jobshapers.com
            </a>
          </FooterList>
        </section>

        <hr className="border border-jsText" />

        <p className="text-white text-center py-4 sm:py-8 text-sm">
          &copy; {year} JOBSHAPERS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
