import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { educations } from '../../constants';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const EducationCard = ({ education }) => {
  const [activeTheme, setTheme] = useThemeSwitcher()
  console.log(activeTheme)
  return (
    <VerticalTimelineElement
      contentStyle={{
        color: '#000',
      }}
      contentArrowStyle={{
        borderRight: '7px solid #ff014f',
      }}
      date={
        <div >
          <h3 className="text-designColor font-bold z-50">
            {education.date}
          </h3>
        </div>
      }
      icon={
        <span className="text-white">
          {education.icon}
        </span>
      }>
      <div>
        <h3 className="text-gray-900 dark:text-gray-300 text-lg font-bold tracking-[2px]">
          {education.degree}
        </h3>
        <p
          className="mb-5 text-gray-900 dark:text-gray-300 text-md font-semibold tracking-[1px]"
          style={{ margin: 0 }}>
          {education.institute}
        </p>
        <p className="py-2 text-designColor font-semibold bg-[#E5E5E5] dark:bg-black dark:bg-opacity-25 rounded-lg flex justify-center items-center text-sm">
          {education.result}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-10 font-titleFont flex gap-20"
    >
      <div className="w-full">
        <div className="flex flex-col gap-4 text-center font-bold">
          <p className="text-xs mdl:text-sm text-designColor tracking-[4px]">2011 - 2021</p>
          <h2 className="text-3xl mdl:text-4xl text-gray-900 dark:text-gray-300">Education</h2>
        </div>
        <div className="mt-18 w-full">
          <VerticalTimeline className="vertical-timeline-custom-line">
            {educations.map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </motion.div>
  );
}

export default Education