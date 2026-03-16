import React from "react";
import { Copy } from "lucide-react";

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
          className="accent-purple-600 cursor-pointer"
          onChange={(e) => onCheck?.(e.target.checked)}
        />
        <h3 className="font-semibold text-gray-900 truncate">{jobTitle}</h3>
      </div>
      <Copy className="w-4 h-4 text-purple-600 cursor-pointer hover:opacity-70" />
    </div>
  );
};
