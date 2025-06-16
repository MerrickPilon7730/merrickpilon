'use client';

import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';

export function ProfilePicture() {
  return (
    <div className="flex justify-center items-center max-w-[80%]">
      <div className="relative w-[400px] h-[400px]">
        <Image
          src="/merrick.jpg"
          alt="Profile picture of Merrick"
          width={400}
          height={400}
          className="rounded-full object-cover"
        />
        <div className="absolute top-1 right-1 z-10">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
