import Link from 'next/link';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { NICKNAME, PATHS } from '@/constants';
import { TypeIntro } from '@/features/home';
import { cn } from '@/lib/utils';

import { socialMediaList } from './social-media';

export const HeroSection = () => {
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);

  return (
    <div className="max-w-screen-md 2xl:max-w-7xl  gap-5 flex flex-col justify-center min-h-full px-6 md:px-10">
      <p
        className="text-2xl md:text-5xl tracking-widest animate-fade-up animate-ease-in-out"
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        👋 你好，我是
      </p>
      <strong
        className={cn(
          `text-5xl md:text-8xl !leading-tight tracking-widest font-black  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500`,
          'animate-fade-up animate-ease-in-out',
        )}
        style={{
          WebkitTextFillColor: 'transparent',
          animationDelay: `${getDelay()}ms`,
        }}
      >
        {NICKNAME}
      </strong>
      <div className="text-1xl md:text-2xl tracking-widest">
        {'A Web <Developer /> .'}
      </div>
      <div
        className={cn('animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <span className="text-base md:text-lg tracking-widest">
          致力于：&nbsp;&nbsp;
        </span>
        <TypeIntro />
      </div>
      <p
        className={cn(
          'text-base md:text-2xl text-muted-foreground tracking-widest',
          'animate-fade-up animate-ease-in-out',
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        在这里我会分享各类技术栈所遇到问题与解决方案，也会记录一些经历感悟，希望对你有所帮助。
      </p>
      <div
        className={cn('flex space-x-4', 'animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <Link
          href={PATHS.SITE_BLOG}
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          我的博客
        </Link>
        <Link
          href={PATHS.SITE_ABOUT}
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          关于我
        </Link>
      </div>

      <ul
        className={cn('flex space-x-4', 'animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        {socialMediaList.map((el) => (
          <li key={el.link}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon">
                  <Link href={el.link} target="_blank">
                    {el.icon}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{el.label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};
