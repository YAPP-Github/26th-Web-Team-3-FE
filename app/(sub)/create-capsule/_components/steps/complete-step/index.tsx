"use client";

import LettieImage from "@/shared/assets/character/lettie_animate.png";
import { PATH } from "@/shared/constants/path";
import Button from "@/shared/ui/button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as styles from "./complete-step.css";

interface CapsuleInfo {
  id: number;
  inviteCode: string;
}

interface Props {
  capsuleInfo: CapsuleInfo;
}

const CompleteStep = ({ capsuleInfo }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <RevealMotion delay={0.1}>
        <h1 className={styles.titleCaption}>
          타임캡슐이
          <br />
          만들어졌어요!
        </h1>
        <p className={styles.letterCaption}>
          캡슐이 열리는 날 이메일로 알려드려요!
        </p>
      </RevealMotion>

      <Image
        src={LettieImage}
        alt="lettie"
        className={styles.lettieImage}
        unoptimized
      />
      <div className={styles.buttonWrapper}>
        <RevealMotion delay={0.8}>
          <Button
            variant="primary"
            text="만든 캡슐 보러가기"
            onClick={() => {
              router.push(
                PATH.CAPSULE_DETAIL(
                  capsuleInfo.inviteCode,
                  capsuleInfo.id.toString(),
                ),
              );
            }}
          />
        </RevealMotion>
      </div>
    </div>
  );
};

export default CompleteStep;
