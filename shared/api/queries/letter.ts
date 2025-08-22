import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { LetterDetailRes, LetterListRes } from "@/shared/types/api/letter";
import { apiClient } from "../api-client";

export const letterQueryKeys = {
  all: () => ["letter"],
  listByCapsule: (capsuleId: string) => [
    ...letterQueryKeys.all(),
    "list",
    capsuleId,
  ],
  detail: (letterId: string) => [...letterQueryKeys.all(), "detail", letterId],
};

export const letterQueryOptions = {
  letterList: (capsuleId: string) =>
    infiniteQueryOptions({
      queryKey: letterQueryKeys.listByCapsule(capsuleId),
      queryFn: ({ pageParam = 0 }) => getLetterList(capsuleId, pageParam, 20),
      getNextPageParam: (lastPage) => {
        const { page, totalPages } = lastPage.result;
        return page < totalPages - 1 ? page + 1 : undefined;
      },
      initialPageParam: 0,
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
