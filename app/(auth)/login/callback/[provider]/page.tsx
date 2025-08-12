"use client";

import { useSocialLogin } from "@/app/(auth)/_api/auth.queries";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * React page component that handles OAuth callback for social login.
 *
 * When the URL contains a `code` query parameter and the dynamic route `provider`
 * ("naver" | "google") is present, this component invokes the social login
 * mutation. On successful login it replaces the current route with "/", and on
 * error it logs a failure message to the console.
 *
 * While the mutation is pending it renders "로그인 중입니다...". If the
 * mutation fails it renders "로그인 실패! 다시 시도해주세요.". Otherwise it
 * renders nothing.
 *
 * @returns A React element showing the current login state (loading or error), or null.
 */
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
          router.replace("/");
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
