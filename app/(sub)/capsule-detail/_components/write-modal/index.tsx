"use client";

import Close from "@/shared/assets/icon/close.svg";
import Plus from "@/shared/assets/icon/plus.svg";
import Chip from "@/shared/ui/chip";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import ShakeYMotion from "@/shared/ui/motion/shakeY-motion";
import PopupConfirmLetter from "@/shared/ui/popup/popup-confirm-letter";
import PopupWarningLetter from "@/shared/ui/popup/popup-warning-letter";
import SprinkleContainer from "@/shared/ui/sprinkle-container";

import { useWriteLetter } from "@/shared/api/mutations/letter";
import type { CapsuleDetailRes } from "@/shared/types/api/capsule";
import type { WriteLetterReq } from "@/shared/types/api/letter";
import { formatOpenDateString } from "@/shared/utils/date";
import Image from "next/image";
import { overlay } from "overlay-kit";
import { useForm } from "react-hook-form";
import Modal from "../modal";
import { useImageUpload } from "./_hooks/use-image-upload";
import * as styles from "./write-modal.css";

interface WriteModalProps {
  capsuleData: CapsuleDetailRes;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const WriteModal = ({
  capsuleData,
  isOpen,
  onClose,
  onSuccess,
}: WriteModalProps) => {
  const { mutate: writeLetterMutate, isPending } = useWriteLetter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WriteLetterReq>({
    defaultValues: {
      capsuleId: capsuleData.result.id.toString(),
      content: "",
      from: "",
      objectKeys: "",
    },
  });

  const { uploadedImageUrl, handleImageUpload, removeImage, isUploading } =
    useImageUpload({
      onObjectKeyChange: (value) => setValue("objectKeys", value),
    });

  const onSubmit = (data: WriteLetterReq) => {
    overlay.open(({ isOpen, close }) => (
      <PopupConfirmLetter
        openDate={formatOpenDateString(capsuleData.result.openAt)}
        isOpen={isOpen}
        close={close}
        onConfirm={() => {
          writeLetterMutate(data, {
            onSuccess: () => {
              close();
              onClose();
        onSuccess();
            },
            onError: (error) => {
              console.error("편지 제출 실패:", error);
            },
          });
        }}
      />
    ));
  };

  const handleCloseWithWarning = () => {
    overlay.open(({ isOpen, close }) => (
      <PopupWarningLetter isOpen={isOpen} close={close} />
    ));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.sprinkleWrapper}>
          <SprinkleContainer />
        </div>

        <div className={styles.header}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleCloseWithWarning}
          >
            닫기
          </button>
          <button type="submit" className={styles.title} disabled={isPending}>
            {isPending ? "제출 중..." : "편지담기"}
          </button>
        </div>

        <div className={styles.content}>
          <RevealMotion delay={0.3}>
            <div className={styles.capsuleInfo}>
              <h3 className={styles.capsuleTitle}>
                {capsuleData.result.title}
              </h3>
              <div className={styles.timeInfo}>
                <p className={styles.timeCaption}>마감까지</p>
                <ShakeYMotion>
                  <div className={styles.chipContainer}>
                    <Chip>{`${capsuleData.result.remainingTime.days}일`}</Chip>
                    <Chip>{`${capsuleData.result.remainingTime.hours}시간`}</Chip>
                    <Chip>{`${capsuleData.result.remainingTime.minutes}분`}</Chip>
                  </div>
                </ShakeYMotion>
              </div>
            </div>
          </RevealMotion>

          <RevealMotion delay={0.6}>
            <div className={styles.textareaContainer}>
              <textarea
                className={styles.textarea}
                placeholder="나누고 싶은 생각을 공유해보세요!"
                {...register("content", {
                  required: "편지 내용을 입력해주세요.",
                })}
              />

              {errors.content && (
                <div className={styles.errorMessage}>
                  {errors.content.message}
                </div>
              )}

              {uploadedImageUrl ? (
                <div className={styles.imagePreviewContainer}>
                  <button
                    type="button"
                    onClick={removeImage}
                    className={styles.removeImageButton}
                  >
                    <Close />
                  </button>
                  <Image
                    src={uploadedImageUrl}
                    alt="업로드된 이미지"
                    width={80}
                    height={80}
                    className={styles.imagePreview}
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className={styles.imageAddButton}
                  onClick={handleImageUpload}
                  disabled={isUploading}
                  aria-label="이미지 추가"
                >
                  <div className={styles.plusIconWrapper}>
                    <Plus className={styles.plusIcon} />
                  </div>
                  <span className={styles.imageCaption}>
                    {isUploading ? "업로드 중..." : "이미지 추가"}
                  </span>
                </button>
              )}
            </div>
          </RevealMotion>

          <RevealMotion delay={0.9}>
            <div className={styles.inputSection}>
              <p className={styles.senderTitle}>보내는 사람</p>
              <input
                id="sender-name"
                type="text"
                placeholder="꼭 입력하지 않아도 괜찮아요"
                className={styles.senderInput}
                {...register("from")}
              />
            </div>
          </RevealMotion>
        </div>
      </form>
    </Modal>
  );
};

export default WriteModal;
