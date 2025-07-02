import LinkButton from "./LinkButton";
import Image from "next/image";
import profilePicture from "@/assets/businessman.jpg";

const Hero = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
      <article>
        <h1 className="text-3xl sm:text-4xl font-bold text-jsBlue uppercase">
          jobshapers
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-jsGreen">
          Wij gaan pas verder als het écht klopt.
        </h2>
        <p className="text-jsMidnight text-base mt-4">
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
            className="w-fit"
          />
          <LinkButton
            href="/werknemers"
            label="vind jouw kandidaat"
            variant="primary"
            className="w-fit"
          />
        </div>
      </article>

      <div className="relative w-[400px] h-[500px] shrink-0">
        <Image
          src={profilePicture}
          alt="profile picture"
          fill
          className="object-cover rounded-xl shadow-imgShadow"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
