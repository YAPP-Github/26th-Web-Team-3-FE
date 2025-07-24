"use client";

import BackIcon from "@/shared/assets/icon/left.svg";
import { cn } from "@/shared/utils/cn";
import { useRouter } from "next/navigation";
import type { ReactElement } from "react";
import * as styles from "./navbar-detail.css";

interface NavbarDetailProps {
  renderRight?: () => ReactElement;
  className?: string;
}

const NavbarDetail = ({ renderRight, className }: NavbarDetailProps) => {
  const router = useRouter();
  const renderRightElement = renderRight ? renderRight() : null;

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={() => router.back()}
        className={styles.backButton}
      >
        <BackIcon />
      </button>
      <div className={cn(styles.rightElement, className)}>
        {renderRightElement}
      </div>
    </div>
  );
};

export default NavbarDetail;
