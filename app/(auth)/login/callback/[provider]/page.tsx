"use client";
import { useSocialLogin } from "@/app/(auth)/_api/auth.queries";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const code = searchParams.get("code");
  const nextUrl = searchParams.get("next");
  const provider = params.provider as "naver" | "google";
  const router = useRouter();
  const { mutate, isPending, isError } = useSocialLogin();

  useEffect(() => {
    if (!(code && provider)) return;

    mutate(
      { provider: provider, code: code },
      {
        onSuccess: () => {
          const redirectUrl =
            nextUrl?.startsWith("/") && !nextUrl.startsWith("//")
              ? nextUrl
              : "/";
          router.replace(redirectUrl);
        },
        onError: () => {},
      },
    );
  }, [code, provider, nextUrl]);

  if (isPending) return <LoadingSpinner loading={isPending} />;

  if (isError) return <p>로그인 실패! 다시 시도해주세요.</p>;

  return null;
}
