"use client";
import { motion } from "motion/react";
import { useState } from "react";

import CheckIcon from "@/shared/assets/icon/check.svg";
import ShareIcon from "@/shared/assets/icon/share.svg";
import Button from "@/shared/ui/button";
import Chip from "@/shared/ui/chip";

import { overlay } from "overlay-kit";
import WriteModal from "../write-modal";
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

  const handleWriteButtonClick = () => {
    overlay.open(({ isOpen, close }) => (
      <WriteModal
        capsuleTitle="비 오는 날의 타임캡슐"
        isOpen={isOpen}
        onClose={close}
        remainingTime={remainingTime}
      />
    ));
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
        <Button
          variant="primary"
          text="편지 담기"
          onClick={handleWriteButtonClick}
        />
      </div>
      <div className={styles.captionContainer}>
        <p>작성 마감까지</p>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0.6, y: -3 }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        >
          <div className={styles.chipContainer}>
            <Chip>{`${remainingTime.days}일`}</Chip>
            <Chip>{`${remainingTime.hours}시간`}</Chip>
            <Chip>{`${remainingTime.minutes}분`}</Chip>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResponsiveFooter;
