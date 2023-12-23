import React from "react";
import { Link } from "react-scroll";
import { HiOutlineDownload } from "react-icons/hi";
import Button from "../layouts/Button";

export const AboutLeft = () => {
  // const onResumeClick = () => {
  //   window.open(resumeFile);
  // };
  return (
    <div className="w-full lgl:w-[60%] h-auto py-5 mdl:py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg boxBackground">
      <div className="flex flex-col gap-5 py-2 px-2 text-gray-800 dark:text-gray-400">
        <p className="text-sm text-justify leading-5 mdl:leading-6 tracking-tight mdl:tracking-normal lgl:tracking-wide whitespace-pre-line">
          Hey, My name is <b>Ali Husnain Shah</b> and I'm a{" "}
          <b>.NET Developer</b> building dynamic and scalable Web Applications
          that leads to the success of the overall product. Check out some of my
          work in the <b>Projects</b> section.
          <br />
          <br />
          I'm open to <b>Job</b> opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don't hesitate to <b>contact</b> me.
        </p>
        <div className="w-full flex justify-center mdl:justify-start space-x-4 mt-2">
          <a
            // download="ALI_HUSNAINSHAH_Resume.pdf"
            href="/files/ALI_HUSNAIN_SHAH_Resume.pdf"
            target="_blank"
          >
            <Button title="My Resume" />
          </a>
          <Link to="contact" smooth={true} offset={-50} duration={900}>
            <Button title="Hire Me" />
          </Link>
        </div>
      </div>
    </div>
  );
};
