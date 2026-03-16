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

export interface FormData {
  title: string;
  location: string;
  type: string;
  status: string;
}

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface NavItem {
  id: string;
  name: string;
  to: string;
}
