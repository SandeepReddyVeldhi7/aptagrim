import React from "react";

interface CandidateStat {
  label: string;
  value: number;
}

interface JobStatsProps {
  totalCandidates: number;
  stats: CandidateStat[];
}

export const JobStats: React.FC<JobStatsProps> = ({
  totalCandidates,
  stats,
}) => {
  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <span className="text-4xl font-bold text-indigo-600">
          {totalCandidates}
        </span>
        <span className="text-sm text-indigo-600">Candidates</span>
      </div>

      <div className="grid grid-cols-4 gap-1 mt-4 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center px-1 border-l first:border-l-0 border-gray-300`}
          >
            <span className="text-2xl font-semibold text-gray-500">
              {stat.value}
            </span>
            <span className="text-[10px] text-gray-500 leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
