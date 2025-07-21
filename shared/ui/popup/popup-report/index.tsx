"use client";
import CheckIcon from "@/shared/assets/icon/check.svg";
import CopyIcon from "@/shared/assets/icon/copy.svg";
import Popup from "@/shared/ui/popup";
import { useState } from "react";
import * as styles from "./popup-report.css";

interface PopupReportProps {
  isOpen: boolean;
  close: () => void;
}

const PopupReport = ({ isOpen, close }: PopupReportProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleClickCopyButton = () => {
    setIsCopied(true);
  };
  if (!isOpen) return null;
  return (
    <div className={styles.layout}>
      <Popup open={isOpen}>
        <Popup.Title className={styles.title}>
          불편한 경험을 하셨나요?
        </Popup.Title>
        <Popup.Content>
          아래 이메일로 연락 주시면 빠르게 조치하겠습니다.
        </Popup.Content>
        <div className={styles.captionContainer}>
          <p>lettie@gmail.com</p>
          <button
            type="button"
            className={styles.copyButton}
            onClick={handleClickCopyButton}
          >
            {isCopied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
        <Popup.Actions>
          <button className={styles.closeButton} onClick={close}>
            닫기
          </button>
        </Popup.Actions>
      </Popup>
    </div>
  );
};

export default PopupReport;
