'use client';

import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';

//TODO: Change profile pic

export function ProfilePicture() {
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="relative w-50 h-50 md:w-64 md:h-64 lg:w-100 lg:h-100 mb-10">
        <Image
          src="/merrick.jpg"
          alt="Profile picture of Merrick"
          fill
          className="rounded-full object-cover border-2 border-black dark:border-white"
          sizes="(max-width: 640px) 8rem,
                 (max-width: 768px) 12rem,
                 (max-width: 1024px) 16rem,
                 24rem"
        />
        <div className="absolute top-1 right-1 max-sm:translate-x-6 z-10">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
