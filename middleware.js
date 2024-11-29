import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('authToken'); // Example: Check for an auth token

  // Redirect to login if not authenticated
  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  // Optionally: Check user role/authorization
  const user = JSON.parse(Buffer.from(token, 'base64').toString());
  if (!user.isAuthorized) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [], // Apply middleware only to this route
};
