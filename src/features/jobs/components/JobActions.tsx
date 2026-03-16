import React from "react";
import {
  Mail,
  Share2,
  Link,
  QrCode,
  CloudUpload,
} from "lucide-react";

import { JOB_ACTION_TYPES } from "@/src/constants";

const icons = [Mail, Share2, Link, QrCode, CloudUpload];

interface JobActionsProps {
  onAction?: (actionType: string) => void;
}

export const JobActions: React.FC<JobActionsProps> = ({ onAction }) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-4 pt-3">
      {icons.map((Icon, i) => {
        const actionType = JOB_ACTION_TYPES[i];
        return (
          <Icon
            key={actionType}
            className="w-5 h-5 cursor-pointer text-primary-blue  hover:opacity-70 transition-opacity"
            onClick={() => onAction?.(actionType)}
          />
        );
      })}
    </div>
  );
};
