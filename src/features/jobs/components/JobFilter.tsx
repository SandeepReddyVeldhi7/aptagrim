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
    <div className="w-full  ">
      <button
        onClick={() => onClick(status)}
        className={`pb-2  ${
          isActive ? "isActive " : "notActive"
        } cursor-pointer`}
      >
        {status}
      </button>
      <hr className=" border-primary absolute" />
    </div>
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
    <div className="flex flex-col">
      <div className="flex gap-6 mt-4 ">
        {JOB_STATUS_LIST.map((status) => (
          <FilterButton
            key={status}
            status={status}
            isActive={selectedStatus === status}
            onClick={onStatusChange}
          />
        ))}

        <div></div>
      </div>
      {/* <hr className={` border-[#9333ea] border-2 h-1   `} /> */}
    </div>
  );
};
