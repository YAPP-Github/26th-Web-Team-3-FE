import { PATH } from "@/shared/constants/path";
import Chip from "@/shared/ui/chip";
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
          <Chip variant="gray" className={styles.button}>
            타임캡슐 만들기
          </Chip>
        </Link>
      </footer>
    </div>
  );
};
export default Footer;
