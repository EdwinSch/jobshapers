import LinkButton from "./LinkButton";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-jsMidnight">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* footer top */}
        <div className="py-16 text-center">
          <h4 className="text-white text-3xl font-bold mb-4">
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
        <section className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-30 my-6">
          {/* socials */}
          <article>
            <h5 className="text-white text-lg font-semibold">LOGO</h5>
          </article>

          {/* quicklinks */}
          <article>
            <h5 className="text-white text-lg font-semibold mb-3">
              Quicklinks
            </h5>
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
          </article>

          {/* contact info */}
          <article>
            <h5 className="text-white text-lg font-semibold mb-3">
              Contact Info
            </h5>
            <p className="text-jsSubtext font-normal mb-2 flex items-center gap-3">
              <FaPhone />
              +31 6 12345678
            </p>
            <p className="text-jsSubtext font-normal mb-2 flex items-center gap-3">
              <FaEnvelope />
              hello@jobshapers.com
            </p>
          </article>
        </section>

        <hr className="border border-jsText" />

        <p className="text-white text-center py-8 text-sm">
          &copy; {year} JOBSHAPERS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
