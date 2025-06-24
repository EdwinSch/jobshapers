import LinkButton from "./LinkButton";

const JobDetailsCard = ({ standplaats, urenPerWeek, salaris }) => {
  const shortSalaris = salaris.split(" per ")[0];

  return (
    <section className="mt-6 md:mt-0 p-8 border border-slate-300 rounded-md">
      {/* info */}
      <article className="flex justify-between gap-8 mb-4">
        <p className="text-jsText">Standplaats</p>
        <p className="text-jsMidnight">{standplaats}</p>
      </article>
      <article className="flex justify-between gap-8 mb-4">
        <p className="text-jsText">Uren</p>
        <p className="text-jsMidnight">{urenPerWeek} p/w</p>
      </article>
      <article className="flex justify-between gap-8 mb-4">
        <p className="text-jsText">Salaris indicatie</p>
        <p className="text-jsMidnight">{shortSalaris}</p>
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
