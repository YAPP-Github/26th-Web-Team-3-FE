import { PATH } from "@/shared/constants/path";

import Link from "next/link";

import * as styles from "./home-button-section.css";

const HomeButtonSection = () => {
  return (
    <div className={styles.container}>
      <Link href={PATH.EXPLORE} className={styles.exploreButton} tabIndex={0}>
        타임캡슐 보러가기
        <div className={styles.lineInteractContainer}>
          <div className={styles.lineInteract}></div>
        </div>
      </Link>

      <Link href={PATH.CREATE_CAPSULE} className={styles.button}>
        타임캡슐 만들기
      </Link>
    </div>
  );
};

export default HomeButtonSection;
