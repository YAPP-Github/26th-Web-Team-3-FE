import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { FileRes } from "@/shared/types/api/file";
import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export const fileQueryOptions = {
  presignedUrl: (fileId: string, letterId: number) =>
    queryOptions({
      queryKey: ["file", "presigned", fileId, letterId],
      queryFn: () => getPresignedUrl(fileId),
      enabled: !!fileId,
    }),
};

const getPresignedUrl = (fileId: string) => {
  return apiClient.get<FileRes>(ENDPOINTS.PRESIGNED_URL(fileId));
};
