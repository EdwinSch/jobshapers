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
    if (!confirm(`Weet je zeker dat je de vacature "${jobTitle}" wilt verwijderen?`)) {
      return;
    }

    startTransition(async () => {
      try {
        const result = await deleteJob(jobId);
        
        if (result.success) {
          // Remove the job from the local state
          setJobList(prev => prev.filter(job => job.$id !== jobId));
          toast.success("Vacature succesvol verwijderd");
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
    <div className="space-y-4">
      {jobList.map((job) => (
        <div
          key={job.$id}
          className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-jsMidnight mb-1">
                {job.vacatureTitel}
              </h3>
              <p className="text-jsText text-sm mb-2">
                {job.standplaats} • {job.category}
              </p>
              <p className="text-jsText text-sm mb-2">
                Werkgever: {job.werkgever}
              </p>
              <p className="text-xs text-slate-500">
                Aangemaakt: {formatDate(job.$createdAt)}
              </p>
              {job.featured && (
                <span className="inline-block bg-jsGreen text-white text-xs px-2 py-1 rounded mt-2">
                  Uitgelicht
                </span>
              )}
            </div>
            
            <div className="flex space-x-2 ml-4">
              <ActionButton
                onClick={() => handleViewJob(job.$id)}
                variant="blue"
                className="!p-2 !px-3"
              >
                <FaEye />
              </ActionButton>
              
              <ActionButton
                onClick={() => handleDeleteJob(job.$id, job.vacatureTitel)}
                variant="red"
                className="!p-2 !px-3"
                disabled={isPending}
              >
                <FaTrashAlt />
              </ActionButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageJobsClient;
