import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('supabase-auth-token');
  const { pathname } = req.nextUrl;

  if (token && pathname.startsWith('/dashboard')) {
    return NextResponse.next();
  }

  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if ((token && pathname === '/login') || (token && pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/projects',
    '/dashboard/projects/create',
    '/dashboard/projects/edit',
    '/login',
    '/register',
    '/',
  ],
};
