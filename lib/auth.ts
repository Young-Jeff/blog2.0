import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { PrismaAdapter } from '@auth/prisma-adapter';

import { NODE_ENV } from '@/config';

import { PATHS } from '@/constants';

import { prisma } from './prisma';

export const { handlers, auth, signOut, signIn } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  trustHost: true,
  providers: [
    // 允许多个account关联同一个user（email相同）
    GithubProvider({ allowDangerousEmailAccountLinking: true }),
    GoogleProvider({ allowDangerousEmailAccountLinking: true }),
  ],
  pages: {
    signIn: PATHS.AUTH_SIGNIN,
  },
  debug: NODE_ENV === 'development',
  callbacks: {
    session: ({ session, token }) => {
      if (session.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    authorized({ request, auth }) {
      // 将来用作 Next.js middleware，如果是访问后台页面，校验是否登录
      if (request.nextUrl.pathname.startsWith(PATHS.ADMIN_HOME)) {
        return !!auth?.user;
      }

      // 其它路径直接放行
      return true;
    },
  },
});
