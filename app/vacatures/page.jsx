import getAllJobs from "../actions/getAllJobs";
import JobListItem from "@/components/JobListItem";
import SearchAndFilter from "@/components/SearchAndFilter";

const JobsPage = async ({ searchParams }) => {
  const jobs = await getAllJobs();
  // sort jobs new to old
  const sortedJobs = jobs.sort(
    (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
  );

  // Filter jobs based on text search parameter
  const resolvedSearchParams = await searchParams;
  const searchTerm = resolvedSearchParams?.search || "";
  const filteredJobs = searchTerm
    ? sortedJobs.filter((job) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          job.vacatureTitel?.toLowerCase().includes(searchLower) ||
          job.standplaats?.toLowerCase().includes(searchLower)
        );
      })
    : sortedJobs;

  return (
    <>
      {/* search section */}
      <div className="mx-auto max-w-7xl py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-2xl sm:text-3xl font-bold text-jsGreen uppercase">
          Vacatures
        </h1>

        <SearchAndFilter />
      </div>

      {/* vacature section */}
      <div className="bg-jsOffWhite">
        <div className="mx-auto max-w-7xl py-10 px-4 md:px-6 lg:px-8">
          <h2 className="text-xl font-semibold capitalize">
            vacature overzicht
          </h2>
          <p className="text-sm text-jsText mb-6">
            {filteredJobs.length} vacature{filteredJobs.length !== 1 ? "s" : ""}{" "}
            {searchTerm ? `gevonden voor "${searchTerm}"` : "beschikbaar"}
          </p>

          {/* vacature mapping */}
          <section>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                return <JobListItem key={job.$id} {...job} />;
              })
            ) : (
              <p className="text-jsGreen font-semibold">
                {searchTerm
                  ? `Geen vacatures gevonden voor "${searchTerm}".`
                  : "Er zijn momenteel geen vacatures beschikbaar."}
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
};
export default JobsPage;
