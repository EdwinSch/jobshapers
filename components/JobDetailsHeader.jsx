import JobDetailsCard from "./JobDetailsCard";

const JobDetailsHeader = ({ jobDetails }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-8 flex flex-col md:flex-row justify-between gap-10">
      {/* left/top */}
      <div>
        <h1 className="text-2xl md:text-3xl text-jsMidnight font-bold">
          {jobDetails.vacatureTitel}
        </h1>
        <p className="mb-1 text-jsMidnight font-semibold">
          {jobDetails.subTitel}
        </p>
        <p className="text-xs text-jsText mb-6">Geplaatst op: 01-01-2025</p>
        {/* job description */}
        <p>{jobDetails.introductie}</p>
      </div>

      {/* right/bottom */}
      <JobDetailsCard {...jobDetails} />
    </div>
  );
};

export default JobDetailsHeader;
