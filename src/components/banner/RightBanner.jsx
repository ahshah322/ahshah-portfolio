import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiDotnet, DiMsqlServer } from "react-icons/di";

export const RightBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      ".NET Full Stack Developer.",
      "React Js Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lg:w-[50%] flex flex-col items-center gap-10 md:gap-10">
      <div className="w-full flex flex-col items-center lg:items-start gap-5 text-black dark:text-white text-center lg:text-left">
        <h4 className="text-sm lg:text-base text-gray-900 dark:text-gray-300 mb-2">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-4xl lg:text-6xl md font-bold">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Ali<span className="hand ml-3">🤚</span>
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold">
          a <span className="text-designColor capitalize">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
      </div>
      <div className="w-full flex flex-col mdl:flex-row mdl:space-x-8 gap-5 justify-center lg:justify-start lg:space-x-14">
        <div>
          <h2 className="text-sm mdl:text-base text-center mdl:text-left text-gray-900 dark:text-gray-300 uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="space-x-4 flex justify-center">
            <a href="https://github.com/ahshah322" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ahshah322/" target="_blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="text-sm mdl:text-base text-center mdl:text-left text-gray-900 dark:text-gray-300 uppercase font-titleFont mb-4">
            Best skill on
          </h2>
          <div className="space-x-4 flex justify-center">
            <span className="bannerIcon">
              <DiDotnet />
            </span>
            <span className="bannerIcon">
              <DiMsqlServer />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
