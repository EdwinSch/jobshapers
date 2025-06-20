import jobs from "@/data/jobsCollection.json";
import LinkButton from "@/components/LinkButton";

const JobDetailPage = ({ params }) => {
  const { id } = params;
  const jobDetails = jobs.find((job) => job.$id === id);

  return (
    <div className="mx-auto max-w-7xl py-4 px-4 md:px-6 lg:px-8">
      <LinkButton
        label="&#60; terug naar vacature overzicht"
        href="/vacatures"
        variant="ghost"
        className="mb-4"
      />

      {!jobDetails ? (
        <p>vacature niet gevonden</p>
      ) : (
        <p>{jobDetails.vacatureTitel}</p>
      )}
    </div>
  );
};

export default JobDetailPage;
