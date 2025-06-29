import { FaClipboardCheck } from "react-icons/fa6";
import JobDetailsCard from "./JobDetailsCard";

const JobDetailsHeader = ({ jobDetails }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-8 flex flex-col md:flex-row justify-between gap-10">
      {/* left/top */}
      <div>
        <h1 className="text-2xl md:text-3xl text-jsMidnight font-bold mb-1">
          {jobDetails.vacatureTitel}
        </h1>
        <p className="flex items-center gap-1 text-jsText mb-6">
          <FaClipboardCheck />
          <span className="text-sm">Geplaatst op: 1 januarie 2025</span>
        </p>
        {/* job description */}
        <p>{jobDetails.functieomschrijving}</p>
      </div>

      {/* right/bottom */}
      <JobDetailsCard {...jobDetails} />
    </div>
  );
};

export default JobDetailsHeader;
