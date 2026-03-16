import React from "react";
import { Plus } from "lucide-react";

interface AddJobButtonProps {
  onClick: () => void;
}

export const AddJobButton: React.FC<AddJobButtonProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-bg border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary-light transition-colors min-h-[280px]"
    >
      <div className="w-16 h-16 rounded-full bg-bg-secondary flex items-center justify-center mb-3">
        <Plus className="w-8 h-8 text-text-muted" />
      </div>
      <span className="text-text-secondary font-medium">Post Job</span>
    </div>
  );
};
