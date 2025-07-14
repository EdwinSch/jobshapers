import Hero from "@/components/Hero";
import SellingPointCard from "@/components/SellingPointCard";
import TopJobs from "@/components/TopJobs";

import { FaLink, FaUsers, FaCircleQuestion } from "react-icons/fa6";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <div className="w-full bg-jsOffWhite">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Hero />
        </div>
      </div>

      {/* Quote */}
      <div className="mx-auto py-14 md:py-18 max-w-7xl px-4 md:px-6 lg:px-8">
        <h3 className="italic mx-16 md:mx-28 text-2xl md:text-3xl text-center font-bold text-jsMidnight leading-snug">
          "Bij JOBSHAPERS draait het niet om het vullen van functies, maar om
          het creëren van de juiste vorm waarin talent en organisatie elkaar
          versterken."
        </h3>
      </div>

      {/* Mission */}
      <div className="w-full bg-jsOffWhite">
        <div className="mx-auto py-12 max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="p-6 md:p-10 bg-white border border-slate-300 rounded-md shadow-md flex flex-col items-center gap-8">
            <h2 className="text-jsMidnight text-2xl md:text-3xl font-bold text-center">
              Onze missie
            </h2>
            <hr className="border-2 border-jsBlue w-16" />
            <p className="text-center text-jsText">
              Bij JOBSHAPERS verbinden we mensen en organisaties met oprechte
              aandacht en diepgaand inzicht. Wij zorgen voor de perfecte match
              door te luisteren, te begrijpen en vorm te geven aan unieke
              carrières en succesvolle samenwerkingen. Zo creëren we duurzame
              verbindingen die waarde toevoegen — voor kandidaten,
              opdrachtgevers én de toekomst.
            </p>

            {/* About us */}
            <div className="mt-6 flex flex-col md:flex-row gap-6">
              <SellingPointCard
                icon={FaLink}
                title="Bij JOBSHAPERS draait alles om verbinding die écht werkt."
                text="Wij brengen mensen en organisaties samen op een manier die verder gaat dan een cv of vacaturetekst. Of je nu op zoek bent naar nieuw talent of zelf klaar bent voor de volgende stap in je carrière — wij luisteren, denken mee en gaan voor een match die klopt. Persoonlijk, doordacht en duurzaam."
                className={"flex-1"}
                fontSize="text-base"
              />
              <SellingPointCard
                icon={FaUsers}
                iconColor="text-jsGreen"
                iconShade={"#d2fae5"}
                title="Zo werken wij met klanten en kandidaten:"
                text="Wij geloven dat echte samenwerking begint met oprechte aandacht. Daarom nemen we de tijd om jou goed te leren kennen: je wensen, je doelen, je verhaal. We zijn transparant in wat we doen, houden lijnen kort en beloven niets wat we niet waarmaken. Voor opdrachtgevers zijn we geen leverancier, maar een betrokken sparringpartner. Voor kandidaten zijn we geen tussenstation, maar een betrouwbare gids naar werk dat bij hen past."
                className={"flex-1"}
                fontSize="text-base"
              />
              <SellingPointCard
                icon={FaCircleQuestion}
                title="Waarom we dit doen?"
                text="Omdat we geloven dat werk meer is dan een baan. Het is een plek waar je tot je recht komt, waar je mag groeien en waar je waarde toevoegt. En die vormgeven — dát is waar JOBSHAPERS elke dag voor staat."
                className={"flex-1"}
                fontSize="text-base"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Top vacatures */}
      <TopJobs />
    </main>
  );
}
