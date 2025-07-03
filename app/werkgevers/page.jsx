import EmployersHero from "@/components/EmployersHero";
import SellingPointCard from "@/components/SellingPointCard";

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
      <div className="bg-jsOffWhite">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <EmployersHero />
        </div>
      </div>

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
    </>
  );
};
export default EmployersPage;
