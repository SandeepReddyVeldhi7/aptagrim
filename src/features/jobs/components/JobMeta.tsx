import React from "react";
import { IdCard, MapPin } from "lucide-react";

interface JobMetaProps {
  jobId: string;
  jobType: string;
  location: string;
  onMoreClick?: () => void;
}

export const JobMeta: React.FC<JobMetaProps> = ({
  jobId,
  jobType,
  location,
}) => {
  return (
    <>
      <hr className=" border-primary" />

      <div className="flex items-center gap-1.5 text-xs text-primary-gray flex-wrap">
        <IdCard className="w-3.5 h-3.5 text-primary" />
        <span>{jobId}</span>
        <span className="w-3.5 h-3.5 text-primary">•</span>
        <span>{jobType}</span>
        <MapPin className="w-3.5 h-3.5 text-primary ml-1" />
        <span>{location}</span>
      </div>
    </>
  );
};
