import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { FileRes } from "@/shared/types/api/file";
import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";

const fileQueryKeys = {
  all: () => ["file", "presigned"],
  presigned: (fileId: string, letterId: number) => [
    ...fileQueryKeys.all(),
    fileId,
    letterId,
  ],
};

export const fileQueryOptions = {
  presignedUrl: (fileId: string, letterId: number) =>
    queryOptions({
      queryKey: fileQueryKeys.presigned(fileId, letterId),
      queryFn: () => getDownloadPresignedUrl(fileId),
      enabled: !!fileId,
    }),
};

const getDownloadPresignedUrl = (fileId: string) => {
  return apiClient.get<FileRes>(ENDPOINTS.PRESIGNED_URL(fileId));
};

export const getUploadPresignedUrl = (fileName: string, extension: string) => {
  return apiClient.get<FileRes>(ENDPOINTS.UPLOAD_FILE(fileName, extension));
};
