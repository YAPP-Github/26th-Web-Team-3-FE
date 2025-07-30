"use client";
import { useState } from "react";

import CheckIcon from "@/shared/assets/icon/check.svg";
import ShareIcon from "@/shared/assets/icon/share.svg";
import Button from "@/shared/ui/button";
import Chip from "@/shared/ui/chip";
import ShakeYMotion from "@/shared/ui/motion/shakeY-motion";
import * as styles from "./responsive-footer.css";

interface Props {
  remainingTime: {
    days: number;
    hours: number;
    minutes: number;
  };
}

const ResponsiveFooter = ({ remainingTime }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClickShareButton = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isCopied ? (
          <Button
            variant="secondary"
            text="링크 복사됨"
            icon={<CheckIcon />}
            onClick={handleClickShareButton}
          />
        ) : (
          <Button
            variant="secondary"
            text="공유하기"
            icon={<ShareIcon />}
            onClick={handleClickShareButton}
          />
        )}
        <Button variant="primary" text="편지 담기" />
      </div>
      <div className={styles.captionContainer}>
        <p>작성 마감까지</p>
        <ShakeYMotion>
          <div className={styles.chipContainer}>
            <Chip>{`${remainingTime.days}일`}</Chip>
            <Chip>{`${remainingTime.hours}시간`}</Chip>
            <Chip>{`${remainingTime.minutes}분`}</Chip>
          </div>
        </ShakeYMotion>
      </div>
    </div>
  );
};

export default ResponsiveFooter;
