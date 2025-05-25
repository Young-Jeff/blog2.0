import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { auth } from '@/lib/auth';

import { routing } from './i18n/routing';

// 创建国际化中间件
const intlMiddleware = createIntlMiddleware({
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  localeDetection: true,
  localePrefix: 'always',
});
const noLocalePaths = ['/auth', '/admin', '/api', '/server-sitemap-index.xml'];
// 合并中间件
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (noLocalePaths.some((prefix) => pathname.startsWith(prefix))) {
    if (pathname.startsWith('/admin')) {
      const session = await auth(request);
      console.log('session111', session?.user);
      if (!session?.user) {
        // 未登录，重定向到登录页
        return NextResponse.redirect(new URL('/auth/signin', request.url));
      }
    }
    return NextResponse.next();
  }

  // 处理其他路由的国际化
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // 匹配所有路径，除了api、_next、静态文件等
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // 匹配管理后台路径
    '/admin/:path*',
  ],
};
