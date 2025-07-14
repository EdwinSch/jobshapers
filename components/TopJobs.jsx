import getAllJobs from "@/app/actions/getAllJobs";

const TopJobs = async () => {
  // Get jobs
  const jobs = await getAllJobs();
  // Filter featured jobs
  const featuredJobs = jobs.filter((job) => job.featured === true);

  //   console.log(featuredJobs);

  return (
    <div className="mx-auto max-w-7xl py-10 px-4 md:px-6 lg:px-8">
      <h2 className="text-jsGreen text-2xl md:text-3xl font-bold capitalize text-center">
        top vacatures
      </h2>

      <section>
        {featuredJobs.map((job) => {
          return <article key={job.$id}>{job.vacatureTitel}</article>;
        })}
      </section>
    </div>
  );
};

export default TopJobs;
