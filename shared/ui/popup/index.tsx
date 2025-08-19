import { useEffect, useState } from "react";
import { useOutsideClickEffect } from "react-simplikit";
import { themeClass } from "@/shared/styles/base/theme.css";
import { cn } from "@/shared/utils/cn";
import type { ComponentProps, ReactNode } from "react";
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

const PopupButton = ({
  children,
  className,
  ...props
}: PopupProps & ComponentProps<"button">) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

interface PopupRootProps extends PopupProps {
  open: boolean;
  close: () => void;
}

const PopupRoot = ({ children, className, open, close }: PopupRootProps) => {
  const [wrapperEl, setWrapperEl] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && close) {
        close();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscKey);
      return () => document.removeEventListener("keydown", handleEscKey);
    }
  }, [open, close]);

  useOutsideClickEffect(wrapperEl, () => {
    close();
  });

  if (typeof window === "undefined" || !open) return null;

  return createPortal(
    <div className={themeClass} >
      <div className={styles.dim}>
        <div
          className={cn(styles.root, className)}
          role="dialog"
          aria-modal="true"
          ref={setWrapperEl}
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
  Button: PopupButton,
});

export default Popup;
