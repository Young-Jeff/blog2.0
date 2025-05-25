import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// 轻量级的 Next.js 导航 API 包装器
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
