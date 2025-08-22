import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLogin, postLogout } from "./auth.api";
import { userQueryKeys } from "@/shared/api/queries/user";
export const useSocialLogin = () => {
  return useMutation({
    mutationFn: ({
      provider,
      code,
    }: {
      provider: "naver" | "google";
      code: string;
    }) => postLogin(provider, code),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      queryClient.clear();
      queryClient.invalidateQueries({ queryKey: userQueryKeys.userInfo() });
    },
  });
};
