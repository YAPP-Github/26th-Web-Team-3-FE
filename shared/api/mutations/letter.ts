import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { FileUploadReq } from "@/shared/types/api/file";
import type { WriteLetterReq } from "@/shared/types/api/letter";
import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { getUploadPresignedUrl } from "../queries/file";

export const letterMutationKeys = {
  all: () => ["letter"],
  write: () => [...letterMutationKeys.all(), "write"],
  upload: () => [...letterMutationKeys.all(), "upload"],
};

export const letterMutationOptions = {
  write: mutationOptions({
    mutationKey: letterMutationKeys.write(),
    mutationFn: async (data: WriteLetterReq) => {
      await apiClient.post(ENDPOINTS.WRITE_LETTER, {
        json: data,
      });
      return data;
    },
  }),
  upload: mutationOptions({
    mutationKey: letterMutationKeys.upload(),
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
  }),
};
