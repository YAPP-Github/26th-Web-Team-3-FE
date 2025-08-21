"use client";

import BackIcon from "@/shared/assets/icon/left.svg";
import HomeIcon from "@/shared/assets/icon/home.svg";
import { cn } from "@/shared/utils/cn";
import { useRouter } from "next/navigation";
import type { ReactElement } from "react";
import { PATH } from "@/shared/constants/path";
import * as styles from "./navbar-detail.css";

interface NavbarDetailProps {
  renderRight?: () => ReactElement;
  className?: string;
}

const NavbarDetail = ({ renderRight, className }: NavbarDetailProps) => {
  const router = useRouter();
  const renderRightElement = renderRight ? renderRight() : null;

  const handleBack = () => {
    if (window.history.length <= 1) {
      router.push(PATH.EXPLORE);
    } else {
      router.back();
    }
  };

  const handleHome = () => {
    router.push(PATH.HOME);
  };

  return (
    <div className={styles.container}>
      <div>
      <button
        type="button"
        onClick={handleBack}
        className={styles.iconButton}
      >
        <BackIcon />
      </button>
      <button type="button" onClick={handleHome} className={styles.iconButton}>
        <HomeIcon />
      </button>
      </div>
      <div className={cn(styles.rightElement, className)}>
        {renderRightElement}
      </div>
    </div>
  );
};

export default NavbarDetail;
