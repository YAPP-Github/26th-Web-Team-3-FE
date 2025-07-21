import { cn } from "@/shared/utils/cn";
import type { ComponentProps, ReactNode } from "react";
import * as styles from "./button.css";

interface ButtonProps extends ComponentProps<"button"> {
  variant: keyof typeof styles.buttonVariants;
  icon?: ReactNode;
  text: string;
  className?: string;
}

const Button = ({
  variant = "primary",
  icon,
  text,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(styles.buttonVariants[variant], className)}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
