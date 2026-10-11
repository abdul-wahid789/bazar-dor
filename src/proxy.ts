import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request: NextRequest) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const isProtectedRoute = request.nextUrl.pathname.startsWith("/product/");

    if (!session && isProtectedRoute) {
        return NextResponse.redirect(
            new URL(`/sign-in?callbackUrl=${request.nextUrl.pathname}`, request.url)
        );
    }

    if (!session) {
        return NextResponse.redirect(new URL('/', request.url))
    }

}

export const config = {
    matcher: ['/product/:path*', '/profile'],
}