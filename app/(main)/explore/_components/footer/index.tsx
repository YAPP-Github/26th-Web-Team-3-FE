import TabButton from "@/app/(main)/_components/tab-button";
import PlusIcon from "@/shared/assets/icon/plus.svg";
import { PATH } from "@/shared/constants/path";
import Link from "next/link";
import * as styles from "./footer.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <p className={styles.footerTitle}>찾고 있는 타임 캡슐이 없나요?</p>
          <p className={styles.footerDescription}>
            타임캡슐을 만들고 사람들을 초대해보세요.
          </p>
        </div>
        <div className={styles.desktopButtonContainer}>
          <TabButton text="타임캡슐 만들기" href={PATH.CREATE_CAPSULE} />
        </div>
        <Link href={PATH.CREATE_CAPSULE} className={styles.mobileButton}>
          <PlusIcon width={20} height={20} />
        </Link>
      </footer>
    </div>
  );
};
export default Footer;
