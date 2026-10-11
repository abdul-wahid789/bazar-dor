import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request: NextRequest) {

    const session = await auth.api.getSession({
        headers: await headers()
    })


    const pathname = request.nextUrl.pathname;


    const authRoutes = ["/sign-in", "/sign-up"];
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
    const isProtectedRoute = pathname.startsWith("/product/") || pathname.startsWith("/profile");

    if (!session) {
        if (isProtectedRoute) {
            return NextResponse.redirect(
                new URL(`/sign-in?callbackUrl=${pathname}`, request.url)
            );
        }
        return NextResponse.next();
    }
    if (session) {
        if (isAuthRoute) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }

    return NextResponse.next();

}

export const config = {
    matcher: ['/product/:path*', '/profile', '/sign-in', '/sign-up'],
}