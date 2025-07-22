"use client";

import GridIcon from "@/shared/assets/icon/grid.svg";
import LayerIcon from "@/shared/assets/icon/layers.svg";
import { cn } from "@/shared/utils/cn";

import { ViewType } from "@/shared/types/types";
import type { ComponentProps } from "react";
import * as styles from "./view-type-tabs.css";

interface ViewTypeTabsProps extends ComponentProps<"button"> {
  viewType: ViewType;
  handleClick: (viewType: ViewType) => void;
}

const ViewTypeTabs = ({
  viewType,
  handleClick,
  ...props
}: ViewTypeTabsProps) => {
  return (
    <div className={styles.viewTypeTabs}>
      <button
        {...props}
        onClick={() => handleClick(ViewType.LAYERS)}
        className={cn(
          styles.tabButton({ isSelected: viewType === ViewType.LAYERS }),
          styles.icon({ isSelected: viewType === ViewType.LAYERS }),
        )}
      >
        <LayerIcon />
        {viewType === ViewType.LAYERS && ViewType.LAYERS}
      </button>
      <button
        {...props}
        onClick={() => handleClick(ViewType.GRID)}
        className={cn(
          styles.tabButton({ isSelected: viewType === ViewType.GRID }),
          styles.icon({ isSelected: viewType === ViewType.GRID }),
        )}
      >
        <GridIcon />
        {viewType === ViewType.GRID && ViewType.GRID}
      </button>
    </div>
  );
};

export default ViewTypeTabs;
