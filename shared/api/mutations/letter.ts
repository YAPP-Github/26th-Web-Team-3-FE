import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { WriteLetterReq } from "@/shared/types/api/letter";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export const useWriteLetter = () => {
  return useMutation({
    mutationFn: async (data: WriteLetterReq) => {
      return await apiClient.post(ENDPOINTS.WRITE_LETTER, {
        json: data,
      });
    },
  });
};
