"use client";
import CheckIcon from "@/shared/assets/icon/check.svg";
import ShareIcon from "@/shared/assets/icon/share.svg";
import Button from "@/shared/ui/button";
import Chip from "@/shared/ui/chip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import WriteModal from "../write-modal";

import ShakeYMotion from "@/shared/ui/motion/shakeY-motion";
import { overlay } from "overlay-kit";

import { PATH } from "@/shared/constants/path";
import type { CapsuleStatus } from "@/shared/types/api/capsule";
import { formatOpenDate } from "@/shared/utils/date";
import * as styles from "./responsive-footer.css";
interface Props {
  remainingTime: {
    days: number;
    hours: number;
    minutes: number;
    openDate: string;
  };
  status: CapsuleStatus;
  isLoggedIn: boolean;
}

const ResponsiveFooter = ({ remainingTime, status, isLoggedIn }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClickShareButton = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleWriteButtonClick = () => {
    if (!isLoggedIn) {
      const current = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;
      const loginUrl = `${PATH.LOGIN}?next=${encodeURIComponent(current)}`;
      router.push(loginUrl);
      return;
    }

    overlay.open(({ isOpen, close }) => (
      <WriteModal
        capsuleTitle="비 오는 날의 타임캡슐"
        isOpen={isOpen}
        onClose={close}
        remainingTime={remainingTime}
      />
    ));
  };

  const handleOpenCapsuleClick = () => {
    router.push(`${pathname}/letters`);
  };

  const renderButtons = () => {
    const shareButton = isCopied ? (
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
    );

    switch (status) {
      case "WRITABLE":
        return (
          <>
            {shareButton}
            <Button
              variant="primary"
              text="편지 담기"
              onClick={handleWriteButtonClick}
            />
          </>
        );
      case "WAITING_OPEN":
        return <div className={styles.buttonSoloContainer}>{shareButton}</div>;
      case "OPENED":
        return (
          <>
            {shareButton}
            <Button
              variant="primary"
              text="캡슐 열기"
              onClick={handleOpenCapsuleClick}
            />
          </>
        );
      default:
        return shareButton;
    }
  };

  const renderTimeInfo = () => {
    switch (status) {
      case "WRITABLE":
        return (
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
        );
      case "WAITING_OPEN":
        return (
          <div className={styles.captionContainer}>
            <p>오픈까지</p>
            <ShakeYMotion>
              <div className={styles.chipContainer}>
                <Chip>{`${remainingTime.days}일`}</Chip>
                <Chip>{`${remainingTime.hours}시간`}</Chip>
                <Chip>{`${remainingTime.minutes}분`}</Chip>
              </div>
            </ShakeYMotion>
          </div>
        );
      case "OPENED": {
        const { year, month, day } = formatOpenDate(remainingTime.openDate);

        return (
          <div className={styles.captionContainer}>
            <p>오픈완료</p>
            <ShakeYMotion>
              <div className={styles.chipContainer}>
                <Chip>{`${year}년`}</Chip>
                <Chip>{`${month}월`}</Chip>
                <Chip>{`${day}일`}</Chip>
              </div>
            </ShakeYMotion>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>{renderButtons()}</div>
      {renderTimeInfo()}
    </div>
  );
};

export default ResponsiveFooter;
