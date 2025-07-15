import getAllJobs from "@/app/actions/getAllJobs";
import {
  FaLocationDot,
  FaClock,
  FaEuroSign,
  FaGraduationCap,
} from "react-icons/fa6";
import LinkButton from "./LinkButton";
import Link from "next/link";

const TopJobs = async () => {
  // Get jobs
  const jobs = await getAllJobs();
  // Filter featured jobs
  const featuredJobs = jobs
    .filter((job) => job.featured === true)
    .sort((a, b) => new Date(b.$createdAt) - new Date(a.$createdAt))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl py-10 px-4 md:px-6 lg:px-8">
      <h2 className="text-jsGreen text-2xl md:text-3xl font-bold capitalize text-center">
        top vacatures
      </h2>

      <section className="flex flex-col md:flex-row gap-6 my-12">
        {featuredJobs.map((job) => {
          return (
            <article
              key={job.$id}
              className="flex-1 rounded-md border border-slate-300 shadow-md"
            >
              <Link
                href={`/vacatures/${job.$id}`}
                className="p-6 block  bg-jsOffWhite hover:bg-jsGreen/10 duration-200"
              >
                <h3 className="text-xl text-jsMidnight font-bold mb-3">
                  {job.vacatureTitel}
                </h3>

                <div className="flex flex-col gap-1">
                  <p className="flex items-center gap-1.5">
                    <FaLocationDot className="text-jsGreen" />
                    <span className="text-jsText">{job.standplaats}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <FaGraduationCap className="text-jsGreen" />
                    <span className="text-jsText">{job.opleiding}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <FaClock className="text-jsGreen" />
                    <span className="text-jsText">{job.uren} uur</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <FaEuroSign className="text-jsGreen" />
                    <span className="text-jsText">{job.salaris}</span>
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </section>

      <LinkButton
        href="/vacatures"
        variant="tertiary"
        label={"bekijk alle vacatures"}
        className="m-auto text-center w-fit"
      />
    </div>
  );
};

export default TopJobs;
