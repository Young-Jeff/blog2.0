'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const TypeIntro = () => {
  return (
    <TypeAnimation
      className={'text-2xl md:text-5xl font-semibold text-[#00d8ff]'}
      sequence={[
        500,
        'TypeScript',
        2000,
        'React/Next.js',
        2000,
        'Vue/Nuxt.js',
        2000,
        'Express/Nest.js...',
        5000,
      ]}
      speed={10}
      repeat={Infinity}
    />
  );
};
