import { NextResponse, NextRequest } from 'next/server';

export function middleware(req, event) {
    const url = req.nextUrl.clone();
    if (url.pathname === '/') {
        url.pathname = '/v3/home';
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
}