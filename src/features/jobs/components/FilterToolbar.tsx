import React from "react";
import { FaFilter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillAppstore } from "react-icons/ai";

interface FilterToolbarProps {
  onFilterClick?: () => void;
  onMenuClick?: () => void;
  onViewChange?: () => void;
}

export const FilterToolbar: React.FC<FilterToolbarProps> = ({
  onFilterClick,
  onMenuClick,
  onViewChange,
}) => {
  return (
    <div className="flex gap-6 mt-4">
      <button
        onClick={onFilterClick}
        className="hover:text-purple-600 transition-colors"
        title="Filter"
      >
        <FaFilter />
      </button>
      <button
        onClick={onMenuClick}
        className="hover:text-purple-600 transition-colors"
        title="Menu"
      >
        <RxHamburgerMenu />
      </button>
      <button
        onClick={onViewChange}
        className="text-red-500 hover:text-red-700 transition-colors"
        title="Change view"
      >
        <AiFillAppstore />
      </button>
    </div>
  );
};
