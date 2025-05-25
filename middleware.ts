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

// 合并中间件
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 处理管理后台路由的认证
  if (pathname.startsWith('/auth') || pathname.startsWith('/admin')) {
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
