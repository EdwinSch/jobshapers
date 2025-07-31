import EmployeeHero from "@/components/EmployeeHero";
import SellingPointCard from "@/components/SellingPointCard";
import TopJobs from "@/components/TopJobs";
import { FaSuitcase, FaUserCheck, FaLink, FaRegCompass } from "react-icons/fa6";
export const dynamic = "force-dynamic";

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

      {/* Info */}
      <div className="bg-jsOffWhite">
        <div className="mx-auto py-12 max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-0 md:mx-20 p-6 md:p-10 bg-white border border-slate-300 rounded-md shadow-md flex flex-col items-center gap-8">
            <h2 className="text-jsMidnight text-2xl md:text-3xl font-bold text-center">
              Jouw carrière, onze missie.
            </h2>
            <hr className="border-2 border-jsGreen w-16" />
            <p className="text-center text-jsText">
              Bij JOBSHAPERS sta jij centraal. Of je nu net begint, een volgende
              stap wilt zetten, of toe bent aan een nieuwe uitdaging: wij helpen
              je om een baan te vinden die écht bij je past. Niet zomaar een
              functie, maar een plek waar jij je talenten kunt inzetten en
              verder kunt ontwikkelen.
            </p>
          </div>
        </div>
      </div>

      {/* Top vacatures */}
      <TopJobs />
    </>
  );
};
export default EmployeesPage;
