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

export const NotFound =()=>{
  return(
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold  ">
          No jobs found
        </h1>
      </div>
  )
}

export const JobList: React.FC<JobListProps> = ({
  jobs,
  onAddJob,
  onJobCheck,
  onJobAction,
}) => {

  if (jobs?.length === 0) {
    return (
      <NotFound/>
    );
  }

  return (
    <div className="card">
      <AddJobButton onClick={onAddJob} />
      {jobs?.map((job) => (
        <JobCard
          key={job?.id}
          job={job}
          onCheck={onJobCheck}
          onAction={onJobAction}
        />
      ))}
    </div>
  );
};
