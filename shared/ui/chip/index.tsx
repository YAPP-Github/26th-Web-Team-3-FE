import { cn } from "@/shared/utils/cn";
import type { PropsWithChildren } from "react";
import { chipBase,  chipVariant } from "./chip.css";

interface ChipProps extends PropsWithChildren {
  variant?: keyof typeof chipVariant;
  className?: string;
}

const Chip = ({
  children,
  variant = "purple",
  className,
}: ChipProps) => {
  return (
    <span
      className={cn(chipBase, chipVariant[variant], className)}
    >
      {children}
    </span>
  );
};

export default Chip;
