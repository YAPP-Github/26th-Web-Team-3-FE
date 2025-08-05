import { useMutation } from "@tanstack/react-query";
import { getOAuthCode } from "./auth.api";

export const useSocialLogin = () => {
  return useMutation({
    mutationFn: ({
      provider,
      code,
    }: {
      provider: "NAVER" | "GOOGLE";
      code: string;
    }) => getOAuthCode(provider, code),
  });
};
