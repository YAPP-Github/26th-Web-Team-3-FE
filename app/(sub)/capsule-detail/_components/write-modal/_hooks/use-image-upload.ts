import { fileMutationOptions } from "@/shared/api/mutations/file";
import { useMutation } from "@tanstack/react-query";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";

export const useImageUpload = () => {
  const fileUploadMutation = useMutation(fileMutationOptions.upload);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const extension = file.name.split(".").pop();
    if (!extension) {
      alert("파일 확장자를 찾을 수 없습니다.");
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const objectUrl = URL.createObjectURL(file);

    setSelectedFile(file);
    setPreviewUrl(objectUrl);
  };

  const uploadFile = async (): Promise<string> => {
    if (!selectedFile) {
      throw new Error("선택된 파일이 없습니다.");
    }

    const fileName = "LETTER";
    const extension = selectedFile.name.split(".").pop();

    if (!extension) {
      throw new Error("파일 확장자를 찾을 수 없습니다.");
    }

    const uploadedObjectKey = await fileUploadMutation.mutateAsync({
      fileName,
      extension,
      file: selectedFile,
    });

    return uploadedObjectKey;
  };

  const removeImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  return {
    previewUrl,
    handleFileChange,
    removeImage,
    uploadFile,
    hasFile: !!selectedFile,
    isUploading: fileUploadMutation.isPending,
  };
};
