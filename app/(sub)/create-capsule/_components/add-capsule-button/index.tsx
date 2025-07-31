"use client";

import PlusIcon from "@/shared/assets/icon/plus.svg";
import { useInView } from "@/shared/hooks/use-in-view";
import { cn } from "@/shared/utils/cn";

import { PATH } from "@/shared/constants/path";
import Link from "next/link";

import * as styles from "./add-capsule-button.css";

const AddCapsuleButton = () => {
  const { ref, isIntersecting } = useInView(0.2);

  return (
    <>
      <div ref={ref} className={styles.refDiv} />
      <Link
        href={PATH.CREATE_CAPSULE}
        className={cn(
          styles.buttonStyle,
          isIntersecting ? styles.expanded : styles.collapsed,
        )}
      >
        <PlusIcon />
        {isIntersecting && "만들기"}
      </Link>
    </>
  );
};

export default AddCapsuleButton;
