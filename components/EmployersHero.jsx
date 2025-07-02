import LinkButton from "./LinkButton";
import Image from "next/image";
import industryImg from "@/assets/industry.jpg";

const EmployersHero = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
      <article>
        <h1 className="text-2xl sm:text-3xl font-semibold text-jsBlue">
          De juiste mensen maken het verschil
        </h1>

        <p className="text-jsMidnight text-base mt-4">
          Als specialist in het vinden van de perfecte match binnen diverse
          branches begrijpt JOBSHAPERS als geen ander dat de juiste medewerkers
          het fundament zijn voor het succes van jouw organisatie. Wij gaan
          verder dan alleen het invullen van vacatures. We creëren duurzame
          samenwerkingen door kandidaten te selecteren die niet alleen de juiste
          vaardigheden hebben, maar ook naadloos aansluiten bij jouw
          bedrijfscultuur en toekomstvisie.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <LinkButton
            href="/contact"
            label="neem contact op"
            variant="secondary"
            className="w-fit"
          />
        </div>
      </article>

      <div className="relative w-[400px] h-[500px] shrink-0">
        <Image
          src={industryImg}
          alt="Some alt text"
          fill
          className="object-cover rounded-xl shadow-imgShadow"
          priority
        />
      </div>
    </section>
  );
};

export default EmployersHero;
