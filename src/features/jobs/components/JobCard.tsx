import React from "react";
import { Job } from "@/src/types";
import { JobHeader } from "./JobHeader";
import { JobMeta } from "./JobMeta";
import { JobStats } from "./JobStats";
import { JobActions } from "./JobActions";

interface JobCardProps {
  job: Job;
  onCheck?: (jobId: string, checked: boolean) => void;
  onAction?: (jobId: string, actionType: string) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onCheck, onAction }) => {
  const candidate = job.candidates[0];

  const stats = [
    { label: "Resume Screened", value: candidate?.resumeScreened || 0 },
    { label: "In Progress", value: candidate?.inProgress || 0 },
    { label: "Hired", value: candidate?.hired || 0 },
    { label: "Rejected", value: candidate?.rejected || 0 },
  ];

  return (
    <div className="card flex flex-col">
      <JobHeader
        jobId={job.id}
        jobTitle={job.title}
        onCheck={(checked) => onCheck?.(job.id, checked)}
      />

      <JobMeta
        jobId={job.id}
        jobType={job.type}
        location={job.location}
      />

      {candidate && (
        <JobStats
          totalCandidates={candidate.totalCandidates}
          stats={stats}
        />
      )}

      <JobActions onAction={(action) => onAction?.(job.id, action)} />
    </div>
  );
};
