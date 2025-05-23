import { useEffect, useState } from 'react';

import { ReleaseDate } from '@/consts/dates';
import { getDaysFromRightNow } from '@/utils/dates';

import GTA6LogoImg from '@/components/GTA6LogoImg/GTA6LogoImg';
import Zoom from '@/components/Zoom/Zoom';

export default function Timer() {
  const getDaysUntilGTA6Release = () => getDaysFromRightNow(ReleaseDate.GTA6);

  const [daysUntilGTA6Release, setDaysUntilGTA6Release] = useState(
    getDaysUntilGTA6Release(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysUntilGTA6Release(getDaysUntilGTA6Release());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex min-h-full flex-col items-center justify-center bg-pink-500 bg-gradient-to-tr from-blue-700 from-5% via-pink-500 via-60% to-orange-300 pb-8 font-satisfy text-xl font-bold leading-none text-white sm:text-2xl sm:leading-none">
        <Zoom
          className="mb-4 transition-opacity hover:opacity-90 active:opacity-75"
          order={0}
        >
          <a
            href="https://www.rockstargames.com/VI"
            target="_blank"
            rel="noreferrer"
          >
            <GTA6LogoImg />
          </a>
        </Zoom>
        <Zoom order={1}>is at least</Zoom>
        <Zoom className="font-russo text-[7rem] sm:text-[9rem]" order={2}>
          {daysUntilGTA6Release}
        </Zoom>
        <Zoom order={3}>days away from release</Zoom>
      </div>
    </>
  );
}
