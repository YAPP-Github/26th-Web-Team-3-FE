"use client";

import PlusIcon from "@/shared/assets/icon/plus.svg";
import { useInView } from "@/shared/hooks/use-in-view";

import { PATH } from "@/shared/constants/path";
import Link from "next/link";

import * as styles from "./add-capsule-button.css";

const AddCapsuleButton = () => {
  const { ref, isIntersecting } = useInView(0.2);

  return (
    <>
      <div ref={ref} className={styles.refDiv} />
      <div className={styles.buttonContainer({ isIntersecting })}>
        <div className={styles.lineInteract({ isIntersecting })} />
        <Link
          href={PATH.CREATE_CAPSULE}
          className={styles.buttonStyle({ isIntersecting })}
        >
          <PlusIcon />
          {isIntersecting && "만들기"}
        </Link>
      </div>
    </>
  );
};

export default AddCapsuleButton;
