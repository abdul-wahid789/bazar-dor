import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request: NextRequest) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const authRoutes = ["/sign-in", "/sign-up"]

    const isProductRoute = request.nextUrl.pathname.startsWith("/product/");
    const isAuthRoute = authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

    if (!session && isProductRoute) {
        return NextResponse.redirect(
            new URL(`/sign-in?callbackUrl=${request.nextUrl.pathname}`, request.url)
        );
    }

    if (!session || isAuthRoute) {
        return NextResponse.redirect(new URL('/', request.url))
    }

}

export const config = {
    matcher: ['/product/:path*', '/profile', '/sign-in', '/sign-up'],
}