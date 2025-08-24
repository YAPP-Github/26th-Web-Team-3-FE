"use client";

import { useWriteLetter } from "@/shared/api/mutations/letter";
import Close from "@/shared/assets/icon/close.svg";
import Plus from "@/shared/assets/icon/plus.svg";
import type { CapsuleDetailRes } from "@/shared/types/api/capsule";
import type { WriteLetterReq } from "@/shared/types/api/letter";
import Chip from "@/shared/ui/chip";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import ShakeYMotion from "@/shared/ui/motion/shakeY-motion";
import PopupConfirmLetter from "@/shared/ui/popup/popup-confirm-letter";
import PopupWarningLetter from "@/shared/ui/popup/popup-warning-letter";
import { formatOpenDateString } from "@/shared/utils/date";
import Image from "next/image";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
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
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const {
    handleSubmit,
    setValue,
    getValues,
    control,
    reset,
    formState: { errors },
  } = useForm<WriteLetterReq>({
    defaultValues: {
      capsuleId: capsuleData.result.id.toString(),
      content: "",
      from: "",
    },
  });

  const { field: contentField } = useController({
    name: "content",
    control,
  });

  const { field: fromField } = useController({
    name: "from",
    control,
  });

  const {
    uploadedImageUrl,
    handleImageUpload,
    removeImage,
    isUploading,
    inputRef,
  } = useImageUpload({
    onObjectKeyChange: (value) => setValue("objectKey", value),
  });

  const onSubmit = (data: WriteLetterReq) => {
    if (!data.content?.trim()) {
      alert("편지 내용을 입력해주세요.");
      return;
    }
    setIsConfirmOpen(true);
  };

  const handleConfirm = (data: WriteLetterReq) => {
    if (isPending) return;

    const submitData = { ...data };
    if (!submitData.objectKey?.trim()) {
      delete submitData.objectKey;
    }

    writeLetterMutate(submitData, {
      onSuccess: () => {
        setIsConfirmOpen(false);
        reset({
          capsuleId: capsuleData.result.id.toString(),
          content: "",
          from: "",
          objectKey: undefined,
        });
        if (uploadedImageUrl) {
          removeImage();
        }
        onClose();
        onSuccess();
      },
      onError: (error) => {
        setIsConfirmOpen(false);
        console.error("편지 제출 실패:", error);
      },
    });
  };

  const handleCloseWithWarning = (e: React.MouseEvent) => {
    e.stopPropagation();

    const hasContent =
      contentField.value?.trim() || fromField.value?.trim() || uploadedImageUrl;

    if (hasContent) {
      setIsWarningOpen(true);
    } else {
      onClose();
    }
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className={styles.imageInput}
          />
          <div className={styles.header}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleCloseWithWarning}
            >
              닫기
            </button>
            <button
              type="submit"
              className={styles.title}
              disabled={isPending || isUploading}
            >
              {isPending || isUploading ? (
                <PulseLoader color="#FFFFFF" size={5} />
              ) : (
                "편지담기"
              )}
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
                <div className={styles.textareaDiv}>
                  <textarea
                    className={styles.textarea}
                    placeholder="나누고 싶은 생각을 공유해보세요!"
                    {...contentField}
                    maxLength={1000}
                  />
                  <span className={styles.charCount}>
                    {contentField.value?.length || 0}/1000
                  </span>
                </div>

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
                  <div className={styles.imageAddButtonContainer}>
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
                  </div>
                )}
              </div>
            </RevealMotion>

            <RevealMotion delay={0.9}>
              <div className={styles.inputSection}>
                <p className={styles.senderTitle}>보내는 사람</p>
                <div className={styles.senderInputContainer}>
                  <input
                    id="sender-name"
                    type="text"
                    placeholder="꼭 입력하지 않아도 괜찮아요"
                    className={styles.senderInput}
                    {...fromField}
                    maxLength={20}
                  />
                  <span className={styles.senderCharCount}>
                    {fromField.value?.length || 0}/20
                  </span>
                </div>
              </div>
            </RevealMotion>
          </div>
        </form>
        {isConfirmOpen && (
          <PopupConfirmLetter
            openDate={formatOpenDateString(capsuleData.result.openAt)}
            isOpen={isConfirmOpen}
            close={() => setIsConfirmOpen(false)}
            onConfirm={() => {
              const currentData = getValues();
              handleConfirm(currentData);
            }}
          />
        )}
      </Modal>

      {isWarningOpen && (
        <PopupWarningLetter
          isOpen={isWarningOpen}
          close={() => {
            setIsWarningOpen(false);
          }}
          confirm={() => {
            setIsWarningOpen(false);
          }}
          onGoBack={() => {
            setIsWarningOpen(false);
            reset({
              capsuleId: capsuleData.result.id.toString(),
              content: "",
              from: "",
              objectKey: undefined,
            });
            if (uploadedImageUrl) {
              removeImage();
            }
            onClose();
          }}
        />
      )}
    </>
  );
};

export default WriteModal;
