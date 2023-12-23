import React from 'react'
import { myImage } from "../../assets/index";

export const LeftBanner = () => {
  return (
    <div className="w-full lg:w-[50%] flex flex-col items-center gap-20">
      <div className="sm:shrink-0">
        {/* <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
        <img
          className='p-2 lg:p-3 rounded-full object-fill h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]'
          alt={'image of developer'}
          style={{ background: 'linear-gradient(#00FFA4, #A668FF)', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.4)' }}
          src={myImage}
        />
      </div>
      {/* <img
        className='p-3 rounded-full object-fill h-[300px] w-[300px]'
        alt={'image of developer'}
        style={{ background: 'linear-gradient(#00FFA4, #A668FF)', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.4)' }}
        src={myImage}
      /> */}
    </div>
  );
}
