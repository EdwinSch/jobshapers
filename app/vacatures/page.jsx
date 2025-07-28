import getAllJobs from "../actions/getAllJobs";
import JobListItem from "@/components/JobListItem";
import SearchAndFilter from "@/components/SearchAndFilter";

const JobsPage = async ({ searchParams }) => {
  const jobs = await getAllJobs();
  // sort jobs new to old
  const sortedJobs = jobs.sort(
    (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
  );

  // Filter jobs based on search parameters
  const resolvedSearchParams = await searchParams;
  const searchTerm = resolvedSearchParams?.search || "";
  const categoryFilter = resolvedSearchParams?.category || "";

  let filteredJobs = sortedJobs;

  // Apply text search filter
  if (searchTerm) {
    filteredJobs = filteredJobs.filter((job) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        job.vacatureTitel?.toLowerCase().includes(searchLower) ||
        job.standplaats?.toLowerCase().includes(searchLower)
      );
    });
  }

  // Apply category filter
  if (categoryFilter) {
    filteredJobs = filteredJobs.filter((job) => {
      return job.category === categoryFilter;
    });
  }

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
            {searchTerm || categoryFilter ? (
              <>
                gevonden
                {searchTerm && ` voor "${searchTerm}"`}
                {categoryFilter && ` in categorie "${categoryFilter}"`}
                {searchTerm && categoryFilter && " "}
              </>
            ) : (
              "beschikbaar"
            )}
          </p>

          {/* vacature mapping */}
          <section>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                return <JobListItem key={job.$id} {...job} />;
              })
            ) : (
              <p className="text-jsGreen font-semibold">
                {searchTerm || categoryFilter ? (
                  <>
                    Geen vacatures gevonden
                    {searchTerm && ` voor "${searchTerm}"`}
                    {categoryFilter && ` in categorie "${categoryFilter}"`}.
                  </>
                ) : (
                  "Er zijn momenteel geen vacatures beschikbaar."
                )}
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
};
export default JobsPage;
