import React from "react";
import { JOB_STATUS_LIST } from "@/src/constants";

interface FilterButtonProps {
  status: string;
  isActive: boolean;
  onClick: (status: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  status,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(status)}
      className={`pb-2 transition-colors ${
        isActive
          ? "border-b-2 border-primary text-text font-semibold"
          : "text-text-secondary hover:text-text"
      } cursor-pointer`}
    >
      {status}
    </button>
  );
};

interface JobFilterProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

export const JobFilter: React.FC<JobFilterProps> = ({
  selectedStatus,
  onStatusChange,
}) => {
  return (
    <div className="flex gap-6 mt-4">
      {JOB_STATUS_LIST.map((status) => (
        <FilterButton
          key={status}
          status={status}
          isActive={selectedStatus === status}
          onClick={onStatusChange}
        />
      ))}
    </div>
  );
};
