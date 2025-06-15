import LinkButton from "./LinkButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-10">
      <article>
        <h1 className="text-3xl sm:text-4xl font-bold text-jsBlue uppercase">
          jobshapers
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-jsGreen">
          Wij gaan pas verder als het écht klopt.
        </h2>
        <p className="text-jsMidnight text-base sm:text-lg mt-4">
          Op zoek naar een baan die écht bij je past of naar nieuw talent voor
          jouw organisatie? JOBSHAPERS brengt werkzoekenden en werkgevers op
          unieke wijze samen. Dankzij persoonlijk contact, diepgaand inzicht in
          elke functie én directe kennis van de werkplek, bieden wij vacatures
          die kloppen. Wij geloven in échte matches, niet zomaar werk. Vind
          vandaag nog jouw ideale baan of de juiste kandidaat.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <LinkButton
            href="/vacatures"
            label="vind jouw baan"
            variant="secondary"
          />
          <LinkButton
            href="/werknemers"
            label="vind jouw kandidaat"
            variant="primary"
          />
        </div>
      </article>

      <Image
        src={"/businessman.jpg"}
        alt="profile picture"
        width={400}
        height={0}
        className="block rounded-xl object-cover shadow-imgShadow"
      />
    </section>
  );
};

export default Hero;
