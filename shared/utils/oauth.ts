const OAUTH_NEXT_KEY = "oauth_next";

export const oauthUtils = {
  /**
   * OAuth 인증 후 리다이렉트할 경로를 저장합니다.
   * @param nextUrl - 리다이렉트할 경로 (예: "/dashboard")
   */
  saveNextUrl: (nextUrl: string | null) => {
    if (nextUrl?.startsWith("/") && !nextUrl.startsWith("//")) {
      sessionStorage.setItem(OAUTH_NEXT_KEY, nextUrl);
    }
  },

  /**
   * 저장된 리다이렉트 경로를 가져오고 저장소에서 삭제합니다.
   * @returns 저장된 경로 또는 기본 경로 "/"
   */
  getAndClearNextUrl: (): string => {
    const savedNext = sessionStorage.getItem(OAUTH_NEXT_KEY);
    sessionStorage.removeItem(OAUTH_NEXT_KEY);
    return savedNext || "/";
  },

  /**
   * 저장된 리다이렉트 경로가 있는지 확인합니다.
   * @returns 저장된 경로 존재 여부
   */
  hasNextUrl: (): boolean => {
    return sessionStorage.getItem(OAUTH_NEXT_KEY) !== null;
  },

  /**
   * 현재 경로와 쿼리 파라미터를 조합하여 완전한 URL을 생성합니다.
   * @param pathname - 현재 경로
   * @param searchParams - 쿼리 파라미터
   * @returns 완전한 URL 문자열
   */
  buildCurrentUrl: (
    pathname: string,
    searchParams?: URLSearchParams | null
  ): string => {
    return `${pathname}${
      searchParams?.toString() ? `?${searchParams.toString()}` : ""
    }`;
  },
};
