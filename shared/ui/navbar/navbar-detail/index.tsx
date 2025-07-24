"use client";

import BackIcon from "@/shared/assets/icon/left.svg";
import { useRouter } from "next/navigation";
import type { ReactElement } from "react";
import * as styles from "./navbar-detail.css";

interface NavbarDetailProps {
  renderRight?: () => ReactElement;
}

const NavbarDetail = ({ renderRight }: NavbarDetailProps) => {
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
      <div className={styles.rightElement}>{renderRightElement}</div>
    </div>
  );
};

export default NavbarDetail;
