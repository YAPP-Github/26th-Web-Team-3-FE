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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
