import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { SiweMessage } from 'siwe';
import type { SiweMessage as SiweMessageType } from 'siwe';

import { NODE_ENV } from '@/config';

import { PATHS } from '@/constants';

import { prisma } from './prisma';

export const { handlers, auth, signOut, signIn } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  trustHost: true,
  providers: [
    Credentials({
      name: 'Ethereum',
      credentials: {
        message: {
          label: 'Message',
          type: 'text',
          placeholder: '0x0',
        },
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0',
        },
      },
      async authorize(credentials) {
        const siwe = new SiweMessage(
          JSON.parse(
            credentials?.message as string,
          ) as Partial<SiweMessageType>,
        );
        const result = await siwe.verify({
          signature: credentials?.signature as string,
        });
        if (result.success) {
          return {
            id: siwe.address,
            name: siwe.address,
          };
        }
        return null;
      },
    }),
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
