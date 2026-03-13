import { Plus } from "lucide-react";
import { AddJobProps } from "../types";

const AddJob = ({ onClick }: AddJobProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer  transition-colors min-h-[280px]"
    >
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
        <Plus className="w-8 h-8 text-gray-400" />
      </div>
      <span className="text-gray-500 font-medium">Post Job</span>
    </div>
  );
};

export default AddJob;
