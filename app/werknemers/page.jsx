import EmployeeHero from "@/components/EmployeeHero";
import SellingPointCard from "@/components/SellingPointCard";
import { FaSuitcase, FaUserCheck, FaLink, FaRegCompass } from "react-icons/fa6";

const EmployeesPage = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-jsOffWhite">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <EmployeeHero />
        </div>
      </div>

      {/* USPs */}
      <div className="mx-auto max-w-7xl py-14 px-4 md:px-6 lg:px-8">
        <h2 className="mb-10 text-jsMidnight text-2xl md:text-3xl font-bold text-center">
          Waarom kiezen voor JOBSHAPERS?
        </h2>

        <section className="justify-center grid gap-6 grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
          <SellingPointCard
            icon={FaUserCheck}
            title="Persoonlijke aandacht"
            text="We nemen de tijd om jou te leren kennen. Niet alleen wat je kunt, maar vooral wie je bent en wat je motiveert."
          />
          <SellingPointCard
            icon={FaSuitcase}
            iconColor="text-jsGreen"
            iconShade={"#d2fae5"}
            title="Passende vacatures"
            text="Met ons uitgebreide netwerk vinden we de baan die aansluit bij jouw wensen en ambities."
          />
          <SellingPointCard
            icon={FaRegCompass}
            title="Begeleiding op maat"
            text="Van sollicitatie tot indiensttreding — we ondersteunen je bij elke stap."
          />
          <SellingPointCard
            icon={FaLink}
            iconColor="text-jsGreen"
            iconShade={"#d2fae5"}
            title="Duurzame matches"
            text="Wij streven naar langdurige samenwerking, zodat jij niet alleen een baan vindt, maar een plek waar je écht thuishoort."
          />
        </section>
      </div>
    </>
  );
};
export default EmployeesPage;
