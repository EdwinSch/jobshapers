import ListCard from "./ListCard";

const JobDetailsBody = ({
  employerBenefits,
  functieEisen,
  arbeidsvoorwaarden,
}) => {
  return (
    <div className="bg-jsOffWhite">
      <div className="py-12 mt-6 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ListCard
          title="functie eisen"
          list={functieEisen}
          iconColor="text-jsGreen"
        />
        <ListCard
          title="arbeidsvoorwaarden"
          list={arbeidsvoorwaarden}
          iconColor="text-jsGreen"
        />
        <ListCard
          title="werkgever"
          list={employerBenefits}
          iconColor="text-jsBlue"
        />
      </div>
    </div>
  );
};

export default JobDetailsBody;
