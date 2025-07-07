import jobs from "@/data/jobsCollection.json";
import getAllJobs from "../actions/getAllJobs";
import JobListItem from "@/components/JobListItem";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ActionButton from "@/components/ActionButton";

const JobsPage = async () => {
  const jobs = await getAllJobs();
  // console.log(jobs);

  return (
    <>
      {/* search section */}
      <div className="mx-auto max-w-7xl py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-2xl sm:text-3xl font-bold text-jsGreen uppercase">
          Vacatures
        </h1>

        <div className="bg-jsOffWhite p-6 border border-slate-300 rounded-md">
          {/* search container */}
          <form className="flex gap-2 mb-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Zoek op functie of trefwoord"
              className="w-full bg-white py-2 px-3 rounded-md border border-slate-300 text-sm"
            />

            <ActionButton type="submit" variant="green">
              <FaMagnifyingGlass />
            </ActionButton>
          </form>

          {/* filter container */}
          <div className="flex md:flex-row flex-wrap items-center md:items-center gap-3">
            <p className="text-jsText text-sm">Filter per categorie:</p>
            <ActionButton label={"processindustrie"} className="text-sm" />
            <ActionButton label={"junior"} className="text-sm" />
            <ActionButton label={"medior"} className="text-sm" />
            <ActionButton label={"senior"} className="text-sm" />
          </div>
        </div>
      </div>

      {/* vacature section */}
      <div className="bg-jsOffWhite">
        <div className="mx-auto max-w-7xl py-10 px-4 md:px-6 lg:px-8">
          <h2 className="text-xl font-semibold capitalize">
            vacature overzicht
          </h2>
          <p className="text-sm text-jsText mb-6">
            {jobs.length} vacatures beschikbaar
          </p>

          {/* vacature mapping */}
          <section>
            {jobs.length > 0 ? (
              jobs.map((job) => {
                return <JobListItem key={job.$id} {...job} />;
              })
            ) : (
              <p className="text-jsGreen font-semibold">
                Er zijn momenteel geen vacatures beschikbaar.
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
};
export default JobsPage;
