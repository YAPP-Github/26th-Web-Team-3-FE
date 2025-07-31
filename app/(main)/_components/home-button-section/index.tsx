import { PATH } from "@/shared/constants/path";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";

import * as styles from "./home-button-section.css";

const HomeButtonSection = () => {
  return (
    <div className={styles.container}>
      <Link href={PATH.CREATE_CAPSULE}>
        <button className={cn(styles.button, styles.gradientButton)}>
          타임캡슐 만들기
        </button>
      </Link>
      <Link href={PATH.EXPLORE}>
        <button className={styles.button}>타임캡슐 보러가기</button>
      </Link>
    </div>
  );
};

export default HomeButtonSection;
