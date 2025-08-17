import { PATH } from "@/shared/constants/path";

import Link from "next/link";

import * as styles from "./home-button-section.css";

const HomeButtonSection = () => {
  return (
    <div className={styles.container}>
      <Link href={PATH.EXPLORE}>
        <button className={styles.exploreButton}>
          타임캡슐 보러가기
          <div className={styles.lineInteractContainer}>
            <div className={styles.lineInteract}></div>
          </div>
        </button>
      </Link>

      <Link href={PATH.CREATE_CAPSULE}>
        <button type="button" className={styles.button}>
          타임캡슐 만들기
        </button>
      </Link>
    </div>
  );
};

export default HomeButtonSection;
