import React from "react";
import Title from '../layouts/Title';
import { AboutLeft } from "./AboutLeft";
import { AboutRight } from "./AboutRight";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-12 xl:py-16 border-b-gray-300 border-b-[1px] dark:border-b-gray-600"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Know Who I'M" des="About" />
      </div>
      <div className="w-full h-auto flex flex-col gap-10 lgl:flex-row justify-between">
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  );
}

export default About

