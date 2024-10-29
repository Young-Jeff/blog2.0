import Image from 'next/image';
import Link from 'next/link';

import { Button, buttonVariants } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
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
        <TypeIntro />
      </div>

      <ul
        className={cn(
          'flex space-x-4 mt-10',
          'animate-fade-up animate-ease-in-out',
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        {socialMediaList.map((el) => (
          <li key={el.link}>
            <Tooltip>
              <TooltipTrigger asChild>
                {el.isQRCode ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon">
                        {el.icon}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <div className="flex justify-center">
                        <Image
                          src={el.link}
                          alt={el.label}
                          width={200}
                          height={200}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button asChild variant="outline" size="icon">
                    <Link href={el.link} target="_blank">
                      {el.icon}
                    </Link>
                  </Button>
                )}
              </TooltipTrigger>
              <TooltipContent>{el.label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};
