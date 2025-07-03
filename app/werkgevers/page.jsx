import EmployersHero from "@/components/EmployersHero";
import SellingPointCard from "@/components/SellingPointCard";
import { FaRegCircleCheck } from "react-icons/fa6";

import {
  FaSuitcase,
  FaUserCheck,
  FaMagnifyingGlass,
  FaGaugeHigh,
  FaLink,
} from "react-icons/fa6";

const EmployersPage = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-jsOffWhite">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <EmployersHero />
        </div>
      </div>

      {/* USPs */}
      <div className="mx-auto max-w-7xl py-14 px-4 md:px-6 lg:px-8">
        <h2 className="mb-10 text-jsMidnight text-2xl md:text-3xl font-bold text-center">
          Waarom kiezen voor JOBSHAPERS?
        </h2>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
          <SellingPointCard
            icon={FaSuitcase}
            title="Diepgaande kennis van de markt"
            text="Met jarenlange ervaring en een uitgebreid netwerk weten wij precies waar we de beste talenten vinden."
          />
          <SellingPointCard
            icon={FaUserCheck}
            iconColor="text-jsGreen"
            iconShade={"#d2fae5"}
            title="Persoonlijke aanpak"
            text="We leren jouw organisatie écht kennen en stemmen onze dienstverlening volledig af op jouw specifieke behoeften."
          />
          <SellingPointCard
            icon={FaMagnifyingGlass}
            title="Strenge selectie"
            text="Door onze grondige screenings garanderen we dat alleen de meest geschikte kandidaten aan jou worden voorgesteld."
          />
          <SellingPointCard
            icon={FaGaugeHigh}
            iconColor="text-jsGreen"
            iconShade={"#d2fae5"}
            title="Snel en efficiënt"
            text="Wij combineren snelheid met kwaliteit, zodat jij altijd verzekerd bent van de juiste match."
          />
          <SellingPointCard
            icon={FaLink}
            title="Langdurige partnerships"
            text="We bouwen aan duurzame relaties, zodat wij ook in de toekomst jouw betrouwbare specialist blijven."
          />
        </section>
      </div>

      {/* Info */}
      <div className="bg-jsOffWhite">
        <div className="mx-auto py-12 max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-0 md:mx-20 p-6 md:p-10 bg-white border border-slate-300 rounded-md shadow-md flex flex-col items-center gap-8">
            <h2 className="text-jsMidnight text-2xl md:text-3xl font-bold text-center">
              Verbinding maken die écht werkt.
            </h2>
            <hr className="border-2 border-jsBlue w-16" />
            <p className="text-center text-jsText">
              Bij JOBSHAPERS draait alles om het verbinden van de juiste mensen.
              Wij geloven dat dat alleen kan met oprechte aandacht en écht
              luisteren naar elkaar. Niet zomaar een vacature invullen, maar een
              match creëren die duurzaam is en écht impact maakt — voor jou,
              voor de organisatie en voor de toekomst.
            </p>
            <div>
              <h3 className="mb-2 font-bold text-2xl text-jsMidnight text-center">
                Onze kernwaarden
              </h3>
              <ul>
                <li className="mb-1 flex justify-center items-center gap-2">
                  <FaRegCircleCheck className="text-jsGreen" />
                  <span className="text-jsText">
                    Echte betrokkenheid bij mensen
                  </span>
                </li>
                <li className="mb-1 flex justify-center items-center gap-2">
                  <FaRegCircleCheck className="text-jsGreen" />
                  <span className="text-jsText">
                    Diepgaande kennis van de arbeidsmarkt
                  </span>
                </li>
                <li className="mb-1 flex justify-center items-center gap-2">
                  <FaRegCircleCheck className="text-jsGreen" />
                  <span className="text-jsText">
                    Relaties voor de lange termijn
                  </span>
                </li>
                <li className="mb-1 flex justify-center items-center gap-2">
                  <FaRegCircleCheck className="text-jsGreen" />
                  <span className="text-jsText">
                    Betrouwbare partner voor vaste posities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployersPage;
