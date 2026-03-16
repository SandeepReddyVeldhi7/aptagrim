import React from "react";
import {
  IdCard,
  MapPin,
  Info,
  MoreVertical,
} from "lucide-react";

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
  onMoreClick,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div></div>
        <div className="flex items-center gap-1.5 shrink-0">
          <Info className="w-4 h-4 text-purple-600 cursor-pointer" />
          <MoreVertical
            className="w-4 h-4 text-purple-600 cursor-pointer"
            onClick={onMoreClick}
          />
        </div>
      </div>

      <hr className="my-2 border-purple-600" />

      <div className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
        <IdCard className="w-3.5 h-3.5 text-purple-600" />
        <span>{jobId}</span>
        <span className="w-3.5 h-3.5 text-purple-600">•</span>
        <span>{jobType}</span>
        <MapPin className="w-3.5 h-3.5 text-purple-600 ml-1" />
        <span>{location}</span>
      </div>
    </>
  );
};
