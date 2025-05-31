import { cn } from "@/shared/utils/cn";
import * as styles from "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

// TODO: 추후 수정
const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const modeStyle = primary ? styles.primaryButton : styles.secondaryButton;
  const sizeStyle = styles[`${size}Button` as keyof typeof styles];

  return (
    <button
      type="button"
      className={cn(styles.buttonStyle, modeStyle, sizeStyle)}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
