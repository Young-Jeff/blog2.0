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

const noLocalePaths = ['/api', '/server-sitemap-index.xml'];

// 合并中间件
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 检查是否是不需要国际化的路径
  if (noLocalePaths.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  // 检查是否是admin路径（带语言前缀）
  // 匹配 /zh/admin, /en/admin 等格式
  const adminPathRegex = /^\/[a-z]{2}\/admin/;
  if (adminPathRegex.test(pathname)) {
    // 手动调用 auth() 获取会话信息
    const session = await auth();
    if (!session?.user) {
      // 获取当前语言前缀
      const locale = pathname.split('/')[1] || routing.defaultLocale;
      // 未登录，重定向到对应语言的登录页
      return NextResponse.redirect(
        new URL(`/${locale}/auth/signin`, request.url),
      );
    }
  }

  // 处理其他路径的国际化
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // 匹配所有路径，除了api、_next、静态文件等
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
