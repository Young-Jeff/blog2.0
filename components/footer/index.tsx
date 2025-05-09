import { navItems } from '@/components/navbar/config';
import { NextLink } from '@/components/next-link';

import {
  BEI_AN_LINK,
  BEI_AN_NUMBER,
  NICKNAME,
  PATHS,
  PATHS_MAP,
} from '@/constants';
import { getPV, getTodayPV, getTodayUV, getUV } from '@/features/statistics';
import { cn } from '@/lib/utils';
import { formatNum } from '@/utils';

import { buttonVariants } from '../ui/button';

export const Footer = async () => {
  const pv = await getPV();
  const uv = await getUV();

  const todayUV = await getTodayUV();
  const todayPV = await getTodayPV();

  return (
    <footer className="w-full flex flex-col py-8 max-w-screen-xl mx-auto text-muted-foreground">
      <ul className="flex space-x-2 items-center justify-center flex-wrap">
        {navItems.map((el, idx) => (
          <li key={el.link}>
            {Boolean(idx) && <span className="mr-2">·</span>}
            <NextLink aria-label={el.label} href={el.link} className="px-0">
              {el.label}
            </NextLink>
          </li>
        ))}
        <li>
          <span className="mr-2">·</span>
          <NextLink
            aria-label={PATHS_MAP[PATHS.SITEMAP]}
            href={PATHS.SITEMAP}
            className="px-0"
          >
            {PATHS_MAP[PATHS.SITEMAP]}
          </NextLink>
        </li>
        <li>
          <span className="mr-2">·</span>
          <span
            className={cn(
              buttonVariants({ variant: 'link' }),
              '!no-underline px-0 text-muted-foreground',
            )}
          >
            Today PV：{formatNum(todayPV)} / PV：{formatNum(pv)}
          </span>
        </li>
        <li>
          <span className="mr-2">·</span>
          <span
            className={cn(
              buttonVariants({ variant: 'link' }),
              '!no-underline px-0 text-muted-foreground',
            )}
          >
            Today UV：{formatNum(todayUV)} / UV：{formatNum(uv)}
          </span>
        </li>
      </ul>
      <div className="w-full text-sm flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 ">
        <span>Copyright © PRESENT</span>
        <span className="hidden md:inline-block">·</span>
        <span className="hidden md:inline-block">{NICKNAME}</span>
        <span className="hidden md:inline-block">·</span>
        <NextLink
          target="_blank"
          aria-label={BEI_AN_NUMBER}
          href={BEI_AN_LINK}
          className="px-0 py-0 h-5 md:h-10 font-normal md:font-medium"
        >
          {BEI_AN_NUMBER}
        </NextLink>
      </div>
    </footer>
  );
};
