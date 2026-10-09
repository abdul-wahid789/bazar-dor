import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "better-auth/types";

export async function proxy(request: NextRequest) {

    const { data: session } = await betterFetch<Session>(
        "/api/auth/get-session",
        {
            baseURL: request.nextUrl.origin,
            headers: {
                cookie: request.headers.get("cookie") || "",
            },
        }
    );

    const isProtectedRoute = request.nextUrl.pathname.startsWith("/product/");

    if (!session && isProtectedRoute) {
        const signInUrl = request.nextUrl.clone();
        signInUrl.pathname = "/sign-in";
        signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/product/:path*', '/profile'],
}