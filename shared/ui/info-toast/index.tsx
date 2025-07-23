"use client";

import CheckIcon from "@/shared/assets/icon/check.svg";
import LockIcon from "@/shared/assets/icon/lock.svg";
import { cn } from "@/shared/utils/cn";
import { useEffect, useState } from "react";
import * as styles from "./info-toast.css";

type InfoToastProps = {
  status: "success" | "locked";
  infoText: string;
};

const InfoToast = ({ status, infoText }: InfoToastProps) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 3000);
    return () => {
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className={cn(styles.container, exiting ? styles.exit : styles.enter)}>
      {status === "success" && <CheckIcon className={styles.checkIcon} />}
      {status === "locked" && <LockIcon />}
      {infoText}
    </div>
  );
};

export default InfoToast;
