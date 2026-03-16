import React from "react";
import { Funnel, Menu, LayoutGrid } from "lucide-react";
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
        className="hover:text-primary transition-colors"
        title="Filter"
      >
        <Funnel />
      </button>
      <button
        onClick={onMenuClick}
        className="hover:text-primary transition-colors"
        title="Menu"
      >
        <Menu />
      </button>
      <button
        onClick={onViewChange}
        className="text-primary hover:text-primary-red transition-colors"
        title="Change view"
      >
        <LayoutGrid />
      </button>
    </div>
  );
};
