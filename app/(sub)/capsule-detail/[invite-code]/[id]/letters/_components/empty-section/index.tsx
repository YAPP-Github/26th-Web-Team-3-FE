import TabButton from "@/app/(main)/_components/tab-button";
import NoneImage from "@/shared/assets/2D-illust/none.svg";
import { PATH } from "@/shared/constants/path";

import * as styles from "./empty-section.css";

const EmptySection = () => {
  return (
    <div className={styles.container}>
      <NoneImage className={styles.image} />
      <p className={styles.text}>담긴 편지가 없어요.</p>
      <TabButton text="새 타임캡슐 만들기" href={PATH.CREATE_CAPSULE} />
    </div>
  );
};

export default EmptySection;
