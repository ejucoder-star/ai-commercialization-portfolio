import { NextRequest, NextResponse } from "next/server";

const SUPPORTED = new Set(["zh", "en", "ja"]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/zh";
    return NextResponse.redirect(url);
  }

  const parts = pathname.split("/").filter(Boolean);
  const lang = parts[0];
  if (lang && !SUPPORTED.has(lang)) {
    const url = req.nextUrl.clone();
    url.pathname = "/zh";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
