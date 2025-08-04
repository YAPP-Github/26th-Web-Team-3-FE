import type { FileRes } from "@/shared/types/api/file";
import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export const fileQueryOptions = {
  presignedUrl: (fileId: string) =>
    queryOptions({
      queryKey: ["file", "presigned", fileId],
      queryFn: () => getPresignedUrl(fileId),
      enabled: !!fileId,
    }),
};

const getPresignedUrl = (fileId: string) => {
  return apiClient.get<FileRes>(`/api/v1/files/${fileId}/presigned-url`);
};
