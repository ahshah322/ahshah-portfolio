import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-10">
      <h3 className="text-xs mdl:text-sm uppercase font-semibold text-designColor tracking-wide">
       {title}
      </h3>
      <h1 className="text-3xl mdl:text-4xl text-gray-900 dark:text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title