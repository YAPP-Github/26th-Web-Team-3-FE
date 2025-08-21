"use client";

import type React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import * as styles from "./modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  overlayClassName?: string;
  contentClassName?: string;
  fullScreenOnMobile?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  overlayClassName,
  contentClassName,
  fullScreenOnMobile = true,
}: ModalProps) {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;


  const contentStyles = fullScreenOnMobile
    ? `${styles.content} ${contentClassName || ""}`
    : `${styles.contentWithoutFullScreen} ${contentClassName || ""}`;

  return createPortal(
    <div
      className={`${styles.overlay} ${overlayClassName || ""}`}
      onKeyDown={(event) => {
        if (
          (event.key === "Enter" || event.key === " ") &&
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      <div className={contentStyles}>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
