export interface Candidate {
  id: number;
  totalCandidates: number;
  resumeScreened: number;
  inProgress: number;
  hired: number;
  rejected: number;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  status: string;
  location: string;
  candidates: Candidate[];
}

export interface JobDetailsProps {
  job: Job;
}

export interface FormData {
  title: string;
  location: string;
  type: string;
  status: string;
}

export interface register {
  name: string;
  email: string;
  password: string;
  message: string;
}

export interface login {
  email: string;
  password: string;
}

export interface AddJobProps {
  onClick: () => void;
}
