"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import deleteJob from "@/app/actions/deleteJob";
import { formatDate } from "@/app/actions/formatDate";
import ActionButton from "@/components/ActionButton";
import { FaTrashAlt, FaEye } from "react-icons/fa";

const ManageJobsClient = ({ jobs }) => {
  const [jobList, setJobList] = useState(jobs);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDeleteJob = async (jobId, jobTitle) => {
    if (
      !confirm(
        `Weet je zeker dat je de vacature "${jobTitle}" wilt verwijderen?`
      )
    ) {
      return;
    }

    startTransition(async () => {
      try {
        const result = await deleteJob(jobId);

        if (result.success) {
          // Remove the job from the local state
          setJobList((prev) => prev.filter((job) => job.$id !== jobId));
          toast.success("Vacature verwijderd");
        } else {
          toast.error("Er is een fout opgetreden bij het verwijderen");
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        toast.error("Er is een fout opgetreden bij het verwijderen");
      }
    });
  };

  const handleViewJob = (jobId) => {
    router.push(`/vacatures/${jobId}`);
  };

  if (jobList.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-jsText">Geen vacatures beschikbaar.</p>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      {jobList.map((job) => (
        <article
          key={job.$id}
          className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center bg-white border border-slate-300 rounded-md p-6 shadow-md"
        >
          {/* Info container */}
          <div className="flex flex-col gap-0.5">
            {/* title */}
            <div className="mb-2 flex gap-3 items-center">
              <h3 className="text-lg font-semibold text-jsMidnight">
                {job.vacatureTitel}
              </h3>
              {job.featured && (
                <span className="block bg-jsGreen text-white text-xs p-1 rounded">
                  Top vacature
                </span>
              )}
            </div>

            <p className="text-jsText text-sm">
              Vacaturenummer: {job.vacatureNummer}
            </p>
            <p className="text-jsText text-sm">
              Aangemaakt op: {formatDate(job.$createdAt)}
            </p>
            <p className="text-jsText text-sm">Werkgever: {job.werkgever}</p>
            <p className="text-jsText text-sm">
              Standplaats: {job.standplaats}
            </p>
            <p className="text-jsText text-sm">Categorie: {job.category}</p>

            <p className="mt-2 text-xs text-slate-500 italic">
              Aangemaakt door: {job.postedBy}
            </p>
          </div>

          {/* actions container */}
          <div className="flex gap-3">
            <ActionButton onClick={() => handleViewJob(job.$id)} variant="blue">
              <FaEye />
            </ActionButton>

            <ActionButton
              onClick={() => handleDeleteJob(job.$id, job.vacatureTitel)}
              variant="destructive"
              disabled={isPending}
            >
              <FaTrashAlt />
            </ActionButton>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ManageJobsClient;
