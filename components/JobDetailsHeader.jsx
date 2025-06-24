import { FaClipboardCheck } from "react-icons/fa6";
import JobDetailsCard from "./JobDetailsCard";

const JobDetailsHeader = ({ jobDetails }) => {
  return (
    <div className="mt-6 flex flex-col md:flex-row justify-between">
      {/* left/top */}
      <div>
        <h1 className="text-2xl md:text-3xl text-jsMidnight font-bold mb-1">
          {jobDetails.vacatureTitel}
        </h1>
        <p className="flex items-center gap-1 text-jsText">
          <FaClipboardCheck />
          <span className="text-sm">Geplaatst op: 1 januarie 2025</span>
        </p>
      </div>

      {/* right/bottom */}
      <JobDetailsCard {...jobDetails} />
    </div>
  );
};

export default JobDetailsHeader;
