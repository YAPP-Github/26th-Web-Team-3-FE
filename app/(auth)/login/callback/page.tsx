"use client";

import { useSocialLogin } from "@/app/(auth)/_api/api.queries";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();
  const { mutate, isPending, isError } = useSocialLogin();

  useEffect(() => {
    if (!code) return;

    mutate(
      { provider: "NAVER", code: code },
      {
        onSuccess: ({ token }) => {
          // setAccessToken(accessToken);
          console.log(token);
          router.push("/");
        },
        onError: () => {
          console.log("로그인 실패");
        },
      },
    );
  }, [code]);

  if (isPending) return <p>로그인 중입니다...</p>;
  if (isError) return <p>로그인 실패! 다시 시도해주세요.</p>;

  return null;
}
