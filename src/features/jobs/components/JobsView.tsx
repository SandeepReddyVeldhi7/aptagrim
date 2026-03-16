"use client";
import { useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useRedux";
import { addJob, setSelectedStatus } from "@/src/redux/slices";
import {
  JobList,
  JobFilter,
  FilterToolbar,
  AddJobModal,
} from "@/src/features/jobs/components";
import { generateJobId, filterJobs } from "@/src/utils";
import { FormData, Job } from "@/src/types";

export const JobsView = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const selectedStatus = useAppSelector((state) => state.search.selectedStatus);

  const filteredJobs = useMemo(
    () => filterJobs(jobs, searchTerm, selectedStatus),
    [jobs, searchTerm, selectedStatus],
  );

  const handleAddJob = (data: FormData) => {
    const newJob: Job = {
      id: generateJobId(),
      title: data.title,
      type: data.type,
      status: data.status,
      location: data.location,
      candidates: [
        {
          id: 1,
          totalCandidates: 0,
          resumeScreened: 0,
          inProgress: 0,
          hired: 0,
          rejected: 0,
        },
      ],
    };

    dispatch(addJob(newJob));
    setIsModalOpen(false);
  };

  const handleStatusChange = (status: string) => {
    dispatch(setSelectedStatus(status));
  };

  const handleJobCheck = (jobId: string, checked: boolean) => {
    console.log(`Job ${jobId} checked: ${checked}`);
  };

  const handleJobAction = (jobId: string, actionType: string) => {};

  return (
    <main className="min-h-screen bg-secondary">
      <div className="px-4">
        <div className="flex justify-between items-center mb-6">
          <JobFilter
            selectedStatus={selectedStatus}
            onStatusChange={handleStatusChange}
          />
          <FilterToolbar />
        </div>

        <JobList
          jobs={filteredJobs}
          onAddJob={() => setIsModalOpen(true)}
          onJobCheck={handleJobCheck}
          onJobAction={handleJobAction}
        />
      </div>

      <AddJobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddJob}
      />
    </main>
  );
};
