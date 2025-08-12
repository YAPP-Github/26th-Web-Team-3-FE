import { type NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/", "/login", "/explore", "/search", "/capsule-detail"];
const protectedRoutes = ["/setting", "/create-capsule", "/my-capsule"];

const isPublicPath = (pathname: string): boolean => {
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    return false;
  }

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return true;
  }

  return false;
};

const getAccessToken = (request: NextRequest): string | undefined => {
  return request.cookies.get("accessToken")?.value;
};

// 토큰 만료 확인 함수
const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  } catch {
    return true;
  }
};

/**
 * Middleware that enforces authentication for protected routes, redirecting unauthenticated or expired sessions to the login page.
 *
 * Checks the incoming request path and:
 * - Allows API routes and configured public paths to pass through.
 * - For protected paths, reads the `accessToken` cookie and:
 *   - If missing, redirects to `/login` with a `next` query preserving the original URL.
 *   - If expired or malformed, deletes the `accessToken` cookie and redirects to `/login` with the same `next` query.
 *   - If valid, allows the request to continue.
 *
 * @returns A NextResponse allowing the request to continue or a redirect response to `/login`. When the token is expired, the response will also remove the `accessToken` cookie.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // 보호된 경로는 토큰 확인
  const accessToken = getAccessToken(request);

  if (!accessToken) {
    const loginUrl = new URL("/login", request.url);
    const originalUrl = request.nextUrl.pathname + request.nextUrl.search;
    loginUrl.searchParams.set("next", originalUrl);
    return NextResponse.redirect(loginUrl);
  }

  if (isTokenExpired(accessToken)) {
    // 만료된 토큰 쿠키 삭제 후 로그인 페이지로 리다이렉트
    const loginUrl = new URL("/login", request.url);
    const originalUrl = request.nextUrl.pathname + request.nextUrl.search;
    loginUrl.searchParams.set("next", originalUrl);

    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("accessToken");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
