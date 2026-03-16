import React from "react";
import { JobCard } from "./JobCard";
import { AddJobButton } from "./AddJobButton";
import { Job } from "@/src/types";

interface JobListProps {
  jobs: Job[];
  onAddJob: () => void;
  onJobCheck?: (jobId: string, checked: boolean) => void;
  onJobAction?: (jobId: string, actionType: string) => void;
}

export const JobList: React.FC<JobListProps> = ({
  jobs,
  onAddJob,
  onJobCheck,
  onJobAction,
}) => {
  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-text dark:text-white">
          No jobs found
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-4 gap-4 mt-2 p-4">
      <AddJobButton onClick={onAddJob} />
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onCheck={onJobCheck}
          onAction={onJobAction}
        />
      ))}
    </div>
  );
};
