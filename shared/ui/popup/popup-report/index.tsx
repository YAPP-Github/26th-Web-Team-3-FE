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
    navigator.clipboard.writeText("lettie@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <Popup open={isOpen} close={close}>
      <Popup.Title className={styles.title}>
        불편한 경험을 하셨나요?
      </Popup.Title>
      <Popup.Content>
        아래 이메일로 연락 주시면 빠르게 조치하겠습니다.
      </Popup.Content>
      <div className={styles.captionContainer}>
        <p>lettie.team@gmail.com</p>
        <button
          type="button"
          className={styles.copyButton}
          onClick={handleClickCopyButton}
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
      <Popup.Actions>
        <Popup.Button className={styles.closeButton} onClick={close}>
          닫기
        </Popup.Button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupReport;
