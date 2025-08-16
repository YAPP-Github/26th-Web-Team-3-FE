import { FileUploadReq } from "@/shared/types/api/file";
import { useMutation } from "@tanstack/react-query";
import { getUploadPresignedUrl } from "../queries/file";

export const useFileUpload = () => {
  return useMutation({
    mutationFn: async ({
      fileName,
      extension,
      file,
    }: FileUploadReq): Promise<string> => {
      const presignedResponse = await getUploadPresignedUrl(
        fileName,
        extension,
      );

      const { presignedUrl, objectKey } = presignedResponse;

      const uploadResponse = await fetch(presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      if (!uploadResponse.ok) {
        throw new Error(`파일 업로드 실패: ${uploadResponse.status}`);
      }

      return objectKey;
    },
    onSuccess: (data) => {
      console.log("File uploaded successfully:", data);
    },
    onError: (error) => {
      console.error("File upload failed:", error);
    },
  });
};
