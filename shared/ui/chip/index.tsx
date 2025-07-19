import { cn } from "@/shared/utils/cn";
import type { PropsWithChildren } from "react";
import { chipBase, chipSize, chipVariant } from "./chip.css";

interface ChipProps extends PropsWithChildren {
  variant?: keyof typeof chipVariant;
  size?: keyof typeof chipSize;
  className?: string;
}

const Chip = ({
  children,
  variant = "purple",
  size = "default",
  className,
}: ChipProps) => {
  return (
    <span
      className={cn(chipBase, chipVariant[variant], chipSize[size], className)}
    >
      {children}
    </span>
  );
};

export default Chip;
