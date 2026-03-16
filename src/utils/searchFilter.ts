import { Job } from "@/src/types";
import { JOB_STATUS } from "@/src/constants";

export const filterJobs = (
  jobs: Job[],
  searchTerm: string,
  status: string
): Job[] => {
  let filtered = jobs;

  // Filter by status
  if (status !== JOB_STATUS.ALL) {
    filtered = filtered.filter((job) => job.status === status);
  }

  // Filter by search term
  if (searchTerm) {
    filtered = filtered.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filtered;
};
