import React from "react";
import { Copy , Info,
  MoreVertical,} from "lucide-react";

interface JobHeaderProps {
  jobId: string;
  jobTitle: string;
  onCheck?: (checked: boolean) => void;
}

export const JobHeader: React.FC<JobHeaderProps> = ({
  jobId,
  jobTitle,
  onCheck,
  
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 min-w-0">
        <input
          type="checkbox"
          className="primary cursor-pointer"
          onChange={(e) => onCheck?.(e.target.checked)}
        />
        <h3 className="job-Title">{jobTitle}</h3>
      </div>
     
      <div className="flex items-center gap-1.5 "> 
         <Copy className="job-headerFilter" />
          <Info className="job-headerFilter" />
          <MoreVertical
            className="job-headerFilter"
          
          />
        </div>
      
    </div>
  );
};
