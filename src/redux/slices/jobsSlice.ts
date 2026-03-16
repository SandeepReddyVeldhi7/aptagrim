import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/src/types";

interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const INITIAL_STATE: JobsState = {
  jobs: [
    {
      id: "FLUO1J67",
      title: "Testing",
      type: "Full-time",
      status: "Active",
      location: "Hyderabad-India",
      candidates: [
        {
          id: 1,
          totalCandidates: 1,
          resumeScreened: 0,
          inProgress: 0,
          hired: 0,
          rejected: 1,
        },
      ],
    },
    {
      id: "FLUO1J66",
      title: "QA",
      type: "Full-time",
      status: "Paused",
      location: "Hyderabad-India",
      candidates: [
        {
          id: 1,
          totalCandidates: 2,
          resumeScreened: 0,
          inProgress: 1,
          hired: 0,
          rejected: 1,
        },
      ],
    },
    {
      id: "FLUO1J65",
      title: "SDET 1",
      type: "Full-time",
      status: "Archive",
      location: "Hyderabad-India",
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
    },
    {
      id: "FLUO1J61",
      title: "Business Analyst",
      type: "Internship",
      status: "Draft",
      location: "Hyderabad-India +2",
      candidates: [
        {
          id: 1,
          totalCandidates: 1,
          resumeScreened: 0,
          inProgress: 0,
          hired: 0,
          rejected: 1,
        },
      ],
    },
    {
      id: "FLUO1J60",
      title: "Software Development Engineer",
      type: "Full-time",
      status: "Active",
      location: "Hyderabad-India",
      candidates: [
        {
          id: 1,
          totalCandidates: 1,
          resumeScreened: 0,
          inProgress: 0,
          hired: 0,
          rejected: 1,
        },
      ],
    },
    {
      id: "FLUO1J59",
      title: "Manual Testing",
      type: "Full-time",
      status: "Active",
      location: "Hyderabad-India",
      candidates: [
        {
          id: 1,
          totalCandidates: 12,
          resumeScreened: 2,
          inProgress: 3,
          hired: 1,
          rejected: 6,
        },
      ],
    },
    {
      id: "FLUO1J53",
      title: "QA Engineer (1)",
      type: "Full-time",
      status: "Active",
      location: "Hyderabad-India",
      candidates: [
        {
          id: 1,
          totalCandidates: 11,
          resumeScreened: 1,
          inProgress: 2,
          hired: 3,
          rejected: 5,
        },
      ],
    },
  ],
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: INITIAL_STATE,
  reducers: {
    addJob(state, action: PayloadAction<Job>) {
      state.jobs.push(action.payload);
    },
    removeJob(state, action: PayloadAction<string>) {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    updateJob(state, action: PayloadAction<Job>) {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state.jobs[index] = action.payload;
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { addJob, removeJob, updateJob, setLoading, setError } =
  jobsSlice.actions;
export default jobsSlice.reducer;
