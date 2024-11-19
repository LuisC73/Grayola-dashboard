import { NextResponse, type NextRequest } from 'next/server';

const protectedRoutes = [
  '/dashboard',
  '/dashboard/projects',
  '/dashboard/projects/create',
  '/dashboard/projects/edit',
];
const publicRoutes = ['/login', '/register'];

export async function middleware(req: NextRequest) {
  const cookieStore = req.cookies;
  const token = cookieStore.get('supabase-auth-token');

  const { pathname } = req.nextUrl;

  if (protectedRoutes.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  if (publicRoutes.includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }

  return NextResponse.next();
}
