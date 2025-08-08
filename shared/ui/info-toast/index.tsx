"use client";
import CheckIcon from "@/shared/assets/icon/check.svg";
import LockIcon from "@/shared/assets/icon/lock.svg";
import { useToast } from "@/shared/hooks/use-toast";
import type { CapsuleStatus } from "@/shared/types/api/capsule";
import { cn } from "@/shared/utils/cn";
import * as styles from "./info-toast.css";

type InfoToastProps = {
  status: Exclude<CapsuleStatus, "WRITABLE">;
};

const MESSAGE = {
  OPENED: "타임캡슐이 열렸어요!",
  WAITING_OPEN: "편지 작성이 마감된 캡슐이에요!",
};

const InfoToast = ({ status }: InfoToastProps) => {
  const { exiting } = useToast();

  return (
    <div className={cn(styles.container, exiting ? styles.exit : styles.enter)}>
      {status === "WAITING_OPEN" && <LockIcon />}
      {status === "OPENED" && <CheckIcon className={styles.checkIcon} />}
      {MESSAGE[status]}
    </div>
  );
};

export default InfoToast;
