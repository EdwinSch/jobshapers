import {
  FaLocationDot,
  FaClock,
  FaEuroSign,
  FaGraduationCap,
} from "react-icons/fa6";
import LinkButton from "./LinkButton";

const JobListItem = ({
  $id,
  vacatureTitel,
  standplaats,
  uren,
  opleiding,
  salaris,
}) => {
  return (
    <article className="shadow-md bg-white mb-6 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 rounded-md border border-slate-300">
      {/* left/top */}
      <div>
        <h3 className="text-xl font-bold mb-1.5">{vacatureTitel}</h3>

        <div className="flex flex-col md:flex-row gap-1 md:gap-4">
          <p className="flex items-center gap-1.5">
            <FaLocationDot className="text-jsGreen" />
            <span className="text-jsText">{standplaats}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <FaGraduationCap className="text-jsGreen" />
            <span className="text-jsText">{opleiding}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <FaClock className="text-jsGreen" />
            <span className="text-jsText">{uren} uur</span>
          </p>
          <p className="flex items-center gap-1.5">
            <FaEuroSign className="text-jsGreen" />
            <span className="text-jsText">{salaris}</span>
          </p>
        </div>
      </div>

      {/* right/bottom */}
      <div className="flex gap-2">
        <LinkButton variant="tertiary" href="/contact" label={"solliciteer"} />
        <LinkButton
          variant="primary"
          href={`/vacatures/${$id}`}
          label={"bekijk vacature"}
        />
      </div>
    </article>
  );
};

export default JobListItem;
