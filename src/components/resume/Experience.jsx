import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { experiences } from '../../constants';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        color: '#000',
      }}
      className=".vertical-timeline--animate .vertical-timeline-element-content.bounce-in"
      contentArrowStyle={{
        borderRight: '7px solid #ff014f',
      }}
      date={
        <div className="text-designColor font-bold">
          {experience.date}
        </div>
      }
      // iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full" >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }>
      <div>
        <h3 className="text-gray-900 dark:text-gray-300 text-lg font-bold tracking-[2px]">
          {experience.title}
        </h3>
        <p
          className="text-gray-900 dark:text-gray-300 text-md font-semibold tracking-[1px]"
          style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <p className="px-4 py-2 text-designColor bg-[#E5E5E5] dark:bg-black dark:bg-opacity-25 rounded-lg flex justify-center items-center  text-sm font-medium">
          {experience.location}
        </p>
      </div>
    </VerticalTimelineElement >
  );
};


const Experience = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-10 font-titleFont flex gap-20"
    >
      <div className="w-full">
        <div className="flex flex-col gap-4 text-center font-bold">
          <p className="text-xs mdl:text-sm text-designColor tracking-[4px]">2016 - {year}</p>
          <h2 className="text-3xl mdl:text-4xl text-gray-900 dark:text-gray-300">Work Experience</h2>
        </div>
        <div className="mt-19 w-full">
          <VerticalTimeline className="vertical-timeline-custom-line">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
            {/* <VerticalTimelineElement
              contentStyle={{
                color: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              contentArrowStyle={{
                borderRight: '7px solid #ff014f',
              }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={resume}
                    alt="resume"
                    className="w-[45%] h-[45%] object-contain"
                  />
                </div>
              }>
              <button
                className="text-designColor hover:border border-designColor my-3 py-5 px-6 bg-[#E5E5E5] dark:bg-[#191b1e] flex justify-between sm:text-[18px] text-[14px]  
                font-bold items-center rounded-[10px]  hover:bg-opacity-25 
                hover:text-textColor-light textColor-dark transition duration-[0.2s] ease-in-out"
                onClick={() =>
                  window.open(
                    './src/assets/ALI_HUSNAIN SHAH_Resume.pdf', //paste the link to your resume here
                    '_blank'
                  )
                }
              // onMouseOver={() => {
              //   document
              //     .querySelector('.download-btn')
              //     .setAttribute('href', downloadHover);
              // }}
              // onMouseOut={() => {
              //   document
              //     .querySelector('.download-btn')
              //     .setAttribute('href', download);
              // }}
              >

                <a href="../src/assets/ALI_HUSNAIN SHAH_Resume.pdf" download
                  className="pl-2 flex justify-center align-center">
                  MY RESUME
                  <span className="text-[24px] pl-2">
                    <HiOutlineDownload />
                  </span>
                </a>
              </button>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
