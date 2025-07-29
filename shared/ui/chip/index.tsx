import { cn } from "@/shared/utils/cn";
import type { PropsWithChildren } from "react";
import { chipBase, chipSize, chipVariant } from "./chip.css";

interface ChipProps extends PropsWithChildren {
  variant?: keyof typeof chipVariant;
  size?: keyof typeof chipSize;
  className?: string;
  onClick?: () => void;
}

const Chip = ({
  children,
  variant = "purple",
  size = "default",
  className,
  onClick,
}: ChipProps) => {
  return (
    <button
      className={cn(chipBase, chipVariant[variant], chipSize[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Chip;
