import jobs from "@/data/jobsCollection.json";

const JobsPage = () => {
  return (
    <>
      {/* filters */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        filter container
      </div>

      {/* vacatures */}
      <div className="bg-jsOffWhite">
        <section className="mx-auto max-w-7xl py-12 px-4 md:px-6 lg:px-8 bg-jsOffWhite">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-jsGreen uppercase">
            Vacatures
          </h1>

          {jobs.length > 0 ? (
            jobs.map((job) => {
              return <article key={job.$id}>{job.vacatureTitel}</article>;
            })
          ) : (
            <p>Geen vacatues beschikbaar</p>
          )}
        </section>
      </div>
    </>
  );
};
export default JobsPage;
