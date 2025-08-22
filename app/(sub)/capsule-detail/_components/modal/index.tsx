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
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  overlayClassName,
  contentClassName,
  fullScreenOnMobile = true,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}: ModalProps) {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen && closeOnEsc) {
        onClose();
      }
    };

    if (isOpen) {
      if (closeOnEsc) {
        document.addEventListener("keydown", handleEscapeKey);
      }
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closeOnEsc]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const contentStyles = fullScreenOnMobile
    ? `${styles.content} ${contentClassName || ""}`
    : `${styles.contentWithoutFullScreen} ${contentClassName || ""}`;

  return createPortal(
    <div
      className={`${styles.overlay} ${overlayClassName || ""}`}
      onClick={handleOverlayClick}
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
