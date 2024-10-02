import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

//Navigation
import { AdminNavs, ModeratorNavs } from './Components/Sidebar/data';

export async function middleware(req: NextRequest) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${req.cookies.get("NAOWSbL1sKQ30aq9")?.value}`
        },
        body: JSON.stringify({
            query: `
            query GET_PROFILE {
              getProfile {
                role
              }
            }`
        }),
        cache: "no-store"
    });

    const { data } = await response.json();

    const pathname = req.nextUrl.pathname;

    if (!data?.getProfile && pathname !== "/login") {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (data?.getProfile && pathname === "/login") {
        return NextResponse.redirect(new URL('/', req.url));
    }

    //I try by removing this code, but getting same issues.
    const filteredAdminNavs = AdminNavs.filter(adminNav =>
        !ModeratorNavs.some(moderatorNav => moderatorNav.id === adminNav.id)
    );

    if (pathname !== "/") {
        if (data?.getProfile.role === "moderator" && filteredAdminNavs.find(a => pathname.startsWith(a.path))) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
