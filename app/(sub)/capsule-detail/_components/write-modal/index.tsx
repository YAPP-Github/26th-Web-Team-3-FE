"use client";

import Plus from "@/shared/assets/icon/plus.svg";
import Chip from "@/shared/ui/chip";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import PopupConfirmLetter from "@/shared/ui/popup/popup-confirm-letter";
import PopupWarningLetter from "@/shared/ui/popup/popup-warning-letter";
import SprinkleContainer from "@/shared/ui/sprinkle-container";
import { motion } from "motion/react";
import { overlay } from "overlay-kit";
import { useState } from "react";
import Modal from "../modal";
import * as styles from "./write-modal.css";

interface WriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  remainingTime: {
    days: number;
    hours: number;
    minutes: number;
  };
}

const WriteModal = ({ isOpen, onClose, remainingTime }: WriteModalProps) => {
  const [content, setContent] = useState("");

  const handlePopupOpen = () => {
    overlay.open(({ isOpen, close }) => (
      <PopupConfirmLetter
        openDate="2025. 06. 25"
        isOpen={isOpen}
        close={close}
      />
    ));
  };

  const handlePopupClose = () => {
    overlay.open(({ isOpen, close }) => (
      <PopupWarningLetter isOpen={isOpen} close={close} />
    ));
  };

  const handleImageUpload = () => {
    // TODO: 이미지 업로드 로직
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log("Selected file:", file);
        // 파일 처리 로직 추가
      }
    };
    input.click();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.sprinkleWrapper}>
          <SprinkleContainer />
        </div>

        <div className={styles.header}>
          <button className={styles.closeButton} onClick={handlePopupClose}>
            닫기
          </button>
          <button className={styles.title} onClick={handlePopupOpen}>
            편지담기
          </button>
        </div>

        <div className={styles.content}>
          <RevealMotion delay={0.3}>
            <div className={styles.capsuleInfo}>
              <h3 className={styles.capsuleTitle}>비 오는 날의 타임캡슐</h3>
              <div className={styles.timeInfo}>
                <p className={styles.timeCaption}>마감까지</p>
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
          </RevealMotion>
          <RevealMotion delay={0.6}>
            <div className={styles.textareaContainer}>
              <textarea
                className={styles.textarea}
                placeholder="나누고 싶은 생각을 공유해보세요!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <button
                className={styles.imageAddButton}
                onClick={handleImageUpload}
                aria-label="이미지 추가"
              >
                <div className={styles.plusIconWrapper}>
                  <Plus className={styles.plusIcon} />
                </div>
                <span className={styles.imageCaption}>이미지 추가</span>
              </button>
            </div>
          </RevealMotion>
          <RevealMotion delay={0.9}>
            <div className={styles.inputSection}>
              <p className={styles.senderTitle}>보내는 사람</p>
              <input
                id="sender-name"
                name="sender"
                type="text"
                placeholder="꼭 입력하지 않아도 괜찮아요"
                className={styles.senderInput}
              />
            </div>
          </RevealMotion>
        </div>
      </div>
    </Modal>
  );
};

export default WriteModal;
