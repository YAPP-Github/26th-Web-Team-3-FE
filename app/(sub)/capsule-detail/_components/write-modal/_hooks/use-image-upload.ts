import { useFileUpload } from "@/shared/api/mutations/file";
import { useEffect, useState, useCallback } from "react";

interface useImageUploadProps {
  onObjectKeyChange: (value: string) => void;
}

export const useImageUpload = ({ onObjectKeyChange }: useImageUploadProps) => {
  const fileUploadMutation = useFileUpload();
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (uploadedImageUrl) {
        URL.revokeObjectURL(uploadedImageUrl);
      }
    };
  }, [uploadedImageUrl]);

  const handleImageUpload = async (): Promise<void> => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    return new Promise((resolve, reject) => {
      input.onchange = async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) {
          resolve();
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

          setUploadedImageUrl(URL.createObjectURL(file));
          onObjectKeyChange(uploadedObjectKey);
          resolve();
        } catch (error) {
          console.error("이미지 업로드 실패:", error);
          reject(error);
        }
      };

      input.click();
    });
  };

  const removeImage = useCallback(() => {
    if (uploadedImageUrl) {
      URL.revokeObjectURL(uploadedImageUrl);
    }
    setUploadedImageUrl(null);
    onObjectKeyChange("");
  }, [uploadedImageUrl, onObjectKeyChange]);

  return {
    uploadedImageUrl,
    handleImageUpload,
    removeImage,
    isUploading: fileUploadMutation.isPending,
  };
};
