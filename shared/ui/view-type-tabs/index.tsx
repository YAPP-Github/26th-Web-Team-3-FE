"use client";

import GridIcon from "@/shared/assets/icon/grid.svg";
import LayerIcon from "@/shared/assets/icon/layers.svg";
import { cn } from "@/shared/utils/cn";

import { ViewType } from "@/shared/types/view-type";
import * as styles from "./view-type-tabs.css";

interface ViewTypeTabsProps {
  viewType: ViewType;
  handleClick: (viewType: ViewType) => void;
}

const ViewTypeTabs = ({ viewType, handleClick }: ViewTypeTabsProps) => {
  return (
    <div className={styles.viewTypeTabs}>
      <button
        onClick={() => handleClick(ViewType.LAYERS)}
        className={cn(
          styles.tabButton({ isSelected: viewType === ViewType.LAYERS }),
          styles.iconColor({ isSelected: viewType === ViewType.LAYERS }),
        )}
        type="button"
        aria-label="Layers"
      >
        <LayerIcon />
        {viewType === ViewType.LAYERS && ViewType.LAYERS}
      </button>
      <button
        onClick={() => handleClick(ViewType.GRID)}
        className={cn(
          styles.tabButton({ isSelected: viewType === ViewType.GRID }),
          styles.iconColor({ isSelected: viewType === ViewType.GRID }),
        )}
        type="button"
        aria-label="Grid"
      >
        <GridIcon />
        {viewType === ViewType.GRID && ViewType.GRID}
      </button>
    </div>
  );
};

export default ViewTypeTabs;
