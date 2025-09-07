'use client'
import NoneImage from "@/shared/assets/2D-illust/none.svg";
import * as styles from "./not-found.css";

import { PATH } from "@/shared/constants/path";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  
  return (
    <main className={styles.container}>
      <NoneImage width={120} height={65} />
      <p className={styles.title}>페이지를 찾을 수 없습니다.</p>
      <p className={styles.description}>
        찾으시는 페이지가 존재하지 않거나 </p>
        <p className={styles.description}>이동되었을 수 있습니다.</p>
      <button 
        onClick={() => router.push(PATH.HOME)} 
        className={styles.button}
      >
        홈으로 돌아가기
      </button>
    </main>
  );
}
