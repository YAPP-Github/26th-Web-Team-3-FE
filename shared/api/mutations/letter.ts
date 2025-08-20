import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { WriteLetterReq } from "@/shared/types/api/letter";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { capsuleQueryKeys } from "@/shared/api/queries/capsule";
import { useQueryClient } from "@tanstack/react-query";

export const useWriteLetter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: WriteLetterReq) => {
      await apiClient.post(ENDPOINTS.WRITE_LETTER, {
        json: data,
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: capsuleQueryKeys.detail(data.capsuleId),
      });
    },
  });
};
