"use client";
import { useSocialLogin } from "@/app/(auth)/_api/auth.queries";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { oauthUtils } from "@/shared/utils/oauth";

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const code = searchParams.get("code");
  const provider = params.provider as "naver" | "google";
  const router = useRouter();
  const { mutate, isPending, isError } = useSocialLogin();

  useEffect(() => {
    if (!(code && provider)) return;

    mutate(
      { provider: provider, code: code },
      {
        onSuccess: () => {
          const redirectUrl = oauthUtils.getAndClearNextUrl();
          router.replace(redirectUrl);
        },
        onError: () => {},
      },
    );
  }, [code, provider]);

  if (isPending) return <LoadingSpinner loading={isPending} />;

  if (isError) return <p>로그인 실패! 다시 시도해주세요.</p>;

  return null;
}
