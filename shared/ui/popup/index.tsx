import { cn } from "@/shared/utils/cn";
import type { ReactNode } from "react";
import * as styles from "./popup.css";

interface PopupProps {
  children: ReactNode;
  className?: string;
}

const PopupTitle = ({ children }: PopupProps) => {
  return <h2 className={styles.title}>{children}</h2>;
};

const PopupContent = ({ children }: PopupProps) => {
  return <p className={styles.content}>{children}</p>;
};

const PopupActions = ({ children, className }: PopupProps) => {
  return <div className={cn(styles.actions, className)}>{children}</div>;
};

const PopupRoot = ({ children, className }: PopupProps) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};

const Popup = Object.assign(PopupRoot, {
  Title: PopupTitle,
  Content: PopupContent,
  Actions: PopupActions,
});

export default Popup;
