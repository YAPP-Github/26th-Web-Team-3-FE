import { useFileUpload } from "@/shared/api/mutations/file";
import { useCallback, useEffect, useRef, useState } from "react";

interface useImageUploadProps {
  onObjectKeyChange: (value: string | undefined) => void;
}

export const useImageUpload = ({ onObjectKeyChange }: useImageUploadProps) => {
  const fileUploadMutation = useFileUpload();
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (uploadedImageUrl) {
        URL.revokeObjectURL(uploadedImageUrl);
      }
    };
  }, [uploadedImageUrl]);

  const handleFileChange = useCallback(
    async (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        return;
      }

      try {
        const fileName = "LETTER";
        const extension = file.name.split(".").pop();

        if (!extension) {
          throw new Error("파일 확장자를 찾을 수 없습니다.");
        }

        const uploadedObjectKey = await fileUploadMutation.mutateAsync({
          fileName,
          extension,
          file,
        });

        const objectUrl = URL.createObjectURL(file);

        setUploadedImageUrl(objectUrl);
        onObjectKeyChange(uploadedObjectKey);
      } catch (error) {
        console.error("이미지 업로드 실패 상세:", error);
        alert(
          `업로드 실패: ${
            error instanceof Error ? error.message : "알 수 없는 오류"
          }`,
        );
      }
    },
    [fileUploadMutation, onObjectKeyChange],
  );

  const handleImageUpload = useCallback(() => {
    inputRef.current?.click();
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.addEventListener("change", handleFileChange);
      return () => {
        input.removeEventListener("change", handleFileChange);
      };
    }
  }, [handleFileChange]);

  const removeImage = useCallback(() => {
    if (uploadedImageUrl) {
      URL.revokeObjectURL(uploadedImageUrl);
    }
    setUploadedImageUrl(null);
    onObjectKeyChange(undefined);
  }, [uploadedImageUrl, onObjectKeyChange]);

  return {
    uploadedImageUrl,
    handleImageUpload,
    removeImage,
    isUploading: fileUploadMutation.isPending,
    inputRef,
  };
};
