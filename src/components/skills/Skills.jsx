import React from "react";
import { skills } from "../../constants";
import Title from "../layouts/Title";
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-12 xl:py-16 border-b-gray-300 border-b-[1px] dark:border-b-gray-600 relative"
    >
      <div className="text-textColor-dark dark:text-textColor-light text-center">
        <div className="flex justify-center items-center text-center">
          <Title title="My Professional Knowledge" des="My Skills" />
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-designColor relative min-w-[8rem] max-w-[16rem] dark:bg-bodyColor-dark bg-bodyColor-light p-5 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(255, 1, 79) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-24 h-24  mdl:w-28 mdl:h-28 flex items-center justify-center rounded-full"
              >
                <div className="w-20 h-20 mdl:w-24 mdl:h-24 dark:bg-gray-900 bg-gray-600 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img className="h-12 w-12 mdl:h-16 mdl:w-16" src={skill.logo} alt={skill.name} />
                </div>
              </div>
              <p className="text-sm mdl:text-base mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
