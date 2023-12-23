import React from 'react'
import { motion } from 'framer-motion';
import Title from '../layouts/Title';
import { skills } from '../../constants';
import { BallCanvas } from '../canvas';

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-12 xl:py-16 border-b-gray-300 border-b-[1px] dark:border-b-gray-600"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Professional Knowledge" des="My Skills" />
      </div>
      <div className="flex flex-wrap justify-center gap-12 my-5">
        {skills.map((skill) => (
          <div className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28" key={skill.name}>
            <BallCanvas icon={skill.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills