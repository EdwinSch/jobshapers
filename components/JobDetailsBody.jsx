import ListCard from "./ListCard";
import LinkButton from "./LinkButton";

const JobDetailsBody = ({
  eisenKoptekst,
  functieEisen,
  voorwaardenKoptekst,
  arbeidsvoorwaarden,
  functieomschrijving,
  introductie,
}) => {
  return (
    <div className="bg-jsOffWhite">
      <div className="py-12 mt-6 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Introductie */}
        <div className="mb-8 bg-white border border-slate-300 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold capitalize mb-5">Introductie</h2>
          <p className="text-jsText">{introductie}</p>
        </div>

        {/* Functieomschrijving */}
        <div className="mb-8 bg-white border border-slate-300 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold capitalize mb-5">
            Functieomschrijving
          </h2>
          <p className="text-jsText">{functieomschrijving}</p>
        </div>

        {/* Lists */}
        <ListCard
          title="Functie-eisen"
          list={functieEisen}
          iconColor="text-jsGreen"
          eisenKoptekst={eisenKoptekst}
        />
        <ListCard
          title="Arbeidsvoorwaarden"
          list={arbeidsvoorwaarden}
          iconColor="text-jsGreen"
          voorwaardenKoptekst={voorwaardenKoptekst}
        />

        <LinkButton
          variant="tertiary"
          href="/contact"
          label={"solliciteer nu"}
          className="mt-4 w-fit mx-auto"
        />
      </div>
    </div>
  );
};

export default JobDetailsBody;
