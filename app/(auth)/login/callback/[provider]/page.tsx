"use client";

import { useSocialLogin } from "@/app/(auth)/_api/auth.queries";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const code = searchParams.get("code");
  const provider = params.provider as "naver" | "google";
  const router = useRouter();
  const { mutate, isPending, isError } = useSocialLogin();

  useEffect(() => {
    if (!code || !provider) return;

    mutate(
      { provider: provider, code: code },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: () => {
          console.log("로그인 실패");
        },
      },
    );
  }, [code, provider]);

  if (isPending) return <p>로그인 중입니다...</p>;
  if (isError) return <p>로그인 실패! 다시 시도해주세요.</p>;

  return null;
}
