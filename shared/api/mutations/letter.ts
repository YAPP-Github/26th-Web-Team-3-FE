import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { WriteLetterReq } from "@/shared/types/api/letter";
import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export const letterMutationKeys = {
  write: () => ["letter-write"],
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
};
