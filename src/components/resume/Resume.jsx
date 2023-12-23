import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(true);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section
      id="resume"
      className="w-full py-12 xl:py-16 border-b-gray-300 border-b-[1px] dark:border-b-gray-600">
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT I'VE DONE SO FAR" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-2 md:grid-cols-2 text-gray-900 dark:text-gray-300">
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${experienceData
              ? "border-designColor bg-[#E5E5E5] dark:bg-[#191b1e]"
              : "border-transparent"
              } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${educationData
              ? "border-designColor rounded-lg bg-[#E5E5E5] dark:bg-[#191b1e]"
              : "border-transparent"
              } resumeLi`}
          >
            Education
          </li>
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li> */}

          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li> */}
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume