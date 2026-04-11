import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import redirects from "../redirects.json";

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.slice(1);

  if (slug && slug in redirects) {
    return NextResponse.redirect(
      redirects[slug as keyof typeof redirects],
      302,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
