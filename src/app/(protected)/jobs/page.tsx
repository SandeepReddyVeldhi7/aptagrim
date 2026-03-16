import { JobsView } from "@/src/features/jobs/components";

export const metadata = {
  title: "Jobs - Dashboard",
  description: "Manage your job listings",
};

export default function Page() {
  return <JobsView />;
}
