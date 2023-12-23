import React from 'react'
import { RightBanner } from './RightBanner';
import { LeftBanner } from './LeftBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-20 xl:py-24 border-b-gray-300 border-b-[1px] dark:border-b-gray-600"
    >
      <div className="w-full flex flex-col gap-10 xl:gap-0 lg:flex-row items-center font-titleFont"
      >
        <LeftBanner />
        <RightBanner />
      </div>
    </section>
  );
}

export default Banner