import { queryOptions } from "@tanstack/react-query";

import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { LetterDetailRes, LetterListRes } from "@/shared/types/api/letter";
import { apiClient } from "../api-client";

export const letterQueryKeys = {
  all: () => ["letter"],
  listByCapsule: (capsuleId: string, page?: number, size?: number) => [
    ...letterQueryKeys.all(),
    "list",
    capsuleId,
    { page, size },
  ],
  detail: (letterId: string) => [...letterQueryKeys.all(), "detail", letterId],
};

export const letterQueryOptions = {
  letterList: (capsuleId: string, page = 0, size = 20) =>
    queryOptions({
      queryKey: letterQueryKeys.listByCapsule(capsuleId, page, size),
      queryFn: () => getLetterList(capsuleId, page, size),
      enabled: !!capsuleId,
    }),

  letterDetail: (letterId: string) =>
    queryOptions({
      queryKey: letterQueryKeys.detail(letterId),
      queryFn: () => getLetterDetail(letterId),
      enabled: !!letterId,
    }),
};

const getLetterList = (capsuleId: string, page: number, size: number) => {
  return apiClient.get<LetterListRes>(
    ENDPOINTS.LETTER_LIST(capsuleId, page, size),
  );
};

const getLetterDetail = (letterId: string) => {
  return apiClient.get<LetterDetailRes>(ENDPOINTS.LETTER_DETAIL(letterId));
};
