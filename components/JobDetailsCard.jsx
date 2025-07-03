import LinkButton from "./LinkButton";

const JobDetailsCard = ({ standplaats, uren, salaris, opleiding }) => {
  return (
    <section className="mt-4 md:mt-0 min-w-full sm:min-w-[340px] p-6 sm:p-8 border border-slate-300 rounded-md shadow-sm">
      {/* info */}
      <article className="flex justify-between mb-3">
        <p className="text-jsText">Standplaats</p>
        <p className="text-jsMidnight">{standplaats}</p>
      </article>
      <article className="flex justify-between mb-3">
        <p className="text-jsText">Opleiding</p>
        <p className="text-jsMidnight">{opleiding}</p>
      </article>
      <article className="flex justify-between mb-3">
        <p className="text-jsText">Uren</p>
        <p className="text-jsMidnight">{uren}u p/w</p>
      </article>
      <article className="flex justify-between mb-3">
        <p className="text-jsText">Salaris indicatie</p>
        <p className="text-jsMidnight">{salaris}</p>
      </article>

      <hr className="border-slate-300 mb-6 mt-4" />

      {/* buttons */}
      <LinkButton
        variant="tertiary"
        href="/contact"
        label={"solliciteer nu"}
        className="text-center"
      />
    </section>
  );
};

export default JobDetailsCard;
