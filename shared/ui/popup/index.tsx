import { themeClass } from "@/shared/styles/base/theme.css";
import { cn } from "@/shared/utils/cn";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import * as styles from "./popup.css";

interface PopupProps {
  children: ReactNode;
  className?: string;
}

const PopupTitle = ({ children, className }: PopupProps) => {
  return <h2 className={cn(styles.title, className)}>{children}</h2>;
};

const PopupContent = ({ children, className }: PopupProps) => {
  return <div className={cn(styles.content, className)}>{children}</div>;
};

const PopupActions = ({ children, className }: PopupProps) => {
  return <div className={cn(styles.actions, className)}>{children}</div>;
};

interface PopupRootProps extends PopupProps {
  open: boolean;
}

const PopupRoot = ({ children, className, open, ...props }: PopupRootProps) => {
  if (typeof window === "undefined" || !open) return null;

  return createPortal(
    <div className={themeClass}>
      <div className={cn(styles.dim)} {...props}>
        <div
          className={cn(styles.root, className)}
          role="dialog"
          aria-modal="true"
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

const Popup = Object.assign(PopupRoot, {
  Title: PopupTitle,
  Content: PopupContent,
  Actions: PopupActions,
});

export default Popup;
