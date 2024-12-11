import { useEffect, useState } from 'react';

import { ReleaseDate } from '@/consts/dates';
import { getDaysFromRightNow } from '@/utils/dates';

export default function Timer(): JSX.Element {
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
      <div className="flex min-h-full flex-col items-center justify-center bg-gradient-to-tr from-blue-700 from-5% via-pink-500 via-60% to-orange-300 pb-8 font-satisfy text-xl font-bold leading-none text-white sm:text-2xl sm:leading-none">
        <div className="mb-4 transition-opacity hover:opacity-90 active:opacity-75">
          <a
            href="https://www.rockstargames.com/VI"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">GTA VI</span>
            <img
              className="w-[240px] sm:w-[360px]"
              src="img/logo-gta6.png"
              alt="GTA 6 logo."
            />
          </a>
        </div>
        <div>is at least</div>
        <div className="font-russo text-[7rem] sm:text-[9rem]">
          {daysUntilGTA6Release}
        </div>
        <div>days away from release</div>
      </div>
    </>
  );
}
