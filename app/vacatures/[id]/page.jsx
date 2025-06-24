import jobs from "@/data/jobsCollection.json";
import LinkButton from "@/components/LinkButton";
import JobDetailsHeader from "@/components/JobDetailsHeader";
import JobDetailsBody from "@/components/JobDetailsBody";

const JobDetailPage = async ({ params }) => {
  const { id } = await params;
  const jobDetails = jobs.find((job) => job.$id === id);

  return (
    <>
      <div className="mt-6 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* return route */}
        <LinkButton
          label="&#60;&#8211; Terug naar vacature overzicht"
          href="/vacatures"
          variant="ghost"
          className="font-normal text-sm"
        />
      </div>

      {/* Error handling */}
      {!jobDetails && (
        <p>
          Er ging iets mis, we kunnen deze vacature helaas niet (meer) vinden.
        </p>
      )}

      {/* Render when job is valid */}
      {jobDetails && (
        <>
          <JobDetailsHeader jobDetails={jobDetails} />
          <JobDetailsBody {...jobDetails} />
        </>
      )}
    </>
  );
};

export default JobDetailPage;
