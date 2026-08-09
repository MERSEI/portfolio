import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ru", "en"];
const defaultLocale = "ru";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  // Root "/" is handled by app/page.tsx's own redirect — skip here to avoid a double hop.
  if (pathname === "/") return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
