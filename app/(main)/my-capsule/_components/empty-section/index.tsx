import TabButton from "@/app/(main)/_components/tab-button";
import NoneImage from "@/shared/assets/2D-illust/none.svg";
import { PATH } from "@/shared/constants/path";
import Link from "next/link";
import * as styles from "./empty-section.css";

const EmptySection = () => {
  return (
    <div className={styles.container}>
      <NoneImage width={120} height={64.5} />
      <p className={styles.caption}>어라, 내 타임캡슐이 없어요</p>
      <Link href={PATH.CREATE_CAPSULE}>
        <TabButton text="타임캡슐 만들기" href={PATH.CREATE_CAPSULE} />
      </Link>
    </div>
  );
};

export default EmptySection;
