import { redirect } from "next/navigation";
import checkAuth from "@/app/actions/checkAuth";
import getAllJobs from "@/app/actions/getAllJobs";
import ManageJobsClient from "@/components/ManageJobsClient";

const ManageJobsPage = async () => {
  // Check if user is authenticated
  const { isAuthenticated, user } = await checkAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  // Fetch all jobs
  const jobs = await getAllJobs();

  // Sort jobs by creation date (newest first)
  const sortedJobs = jobs.sort(
    (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
  );

  return (
    <div className="bg-jsOffWhite min-h-screen">
      <div className="mx-auto max-w-7xl py-8 px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-jsMidnight mb-2">
            Vacatures beheren
          </h1>
          <p className="text-jsText">
            Welkom, {user.name}. Hier kun je alle vacatures bekijken of
            verwijderen.
          </p>
        </div>

        <p className="text-sm text-jsText mb-4">
          {sortedJobs.length} vacature{sortedJobs.length !== 1 ? "s" : ""} in
          database
        </p>

        <ManageJobsClient jobs={sortedJobs} />
      </div>
    </div>
  );
};

export default ManageJobsPage;
