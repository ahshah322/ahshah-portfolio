import React from 'react'
import { about } from '../../constants';

export const AboutRight = () => {
  return (
    <div className="w-full lgl:w-[40%] rounded-lg flex flex-col gap-5 justify-between items-center">
      {about.map((content) => (
        <div key={content.text} className='w-full h-full flex xs:py-4 lgl:py-0 flex-col justify-center boxBackground rounded-full text-gray-800 dark:text-gray-400 text-center'>
          <h3 className="text-2xl md:text-3xl font-semibold">
            {content.count}
            <span className="text-designColor">+</span>{" "}
          </h3>
          <span className="text-sm md:text-md">{content.text}</span>
        </div>
      ))}
    </div>
  )
}

