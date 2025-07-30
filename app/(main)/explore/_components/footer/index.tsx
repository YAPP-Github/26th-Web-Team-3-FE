import TabButton from "@/app/(main)/_components/tab-button";
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
        <Link href={PATH.MAKE_CAPSULE}>
          <TabButton text="타임캡슐 만들기" />
        </Link>
      </footer>
    </div>
  );
};
export default Footer;
