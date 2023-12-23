import {
  FaGraduationCap,
  FaUserGraduate,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";
import {
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  graphql,
  postgresql,
  rubyrails,
  csharp,
  angular,
  netcore,
  aspmvc,
  jquery,
  mssql,
  blazor,
  mudblazor,
  apksoft,
  dolphindigital,
  projectOne,
  projectTwo,
  projectThree,
} from "../assets";

export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "About",
    link: "about",
  },
  {
    _id: 1003,
    title: "Skills",
    link: "skills",
  },
  {
    _id: 1004,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1005,
    title: "Resume",
    link: "resume",
  },
  {
    _id: 1006,
    title: "Contact",
    link: "contact",
  },
  //
  // {
  //   _id: 1007,
  //   title: "Testimonial",
  //   link: "testimonial",
  // },
];

export const about = [
  {
    text: "Years experience",
    count: "2.5",
  },
  {
    text: "Projects Completed",
    count: "10",
  },
  {
    text: "Companies Work",
    count: "03",
  },
];

export const projects = [
  {
    id: 1001,
    title: "Portfolio Website",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    github: "https://github.com/ahshah322",
    site: "https://ahshah-portfolio.netlify.app/",
    src: projectOne,
  },
];

export const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "CSharp",
    icon: csharp,
  },
  {
    name: "ASP NET MVC",
    icon: aspmvc,
  },
  {
    name: "NET Core",
    icon: netcore,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Blazor",
    icon: blazor,
  },
  {
    name: "MudBlazor",
    icon: mudblazor,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
];

export const experiences = [
  {
    id: 1001,
    title: "Senior Software Engineer",
    company_name: "Dolphin Digital OOH Media",
    location: "Plano, USA",
    icon: dolphindigital,
    date: "July 2022 – October 2023",
  },
  {
    id: 1002,
    title: ".NET Developer",
    location: "Kharian, Pakistan",
    company_name: "APKSoft",
    icon: apksoft,
    date: "February 2022 – July 2022",
  },
];

export const educations = [
  {
    id: 1001,
    degree: "MSc in Computer Science",
    institute: "Government College University, Faisalabad",
    result: "3.9/4",
    date: "2019 – 2021",
    icon: <FaGraduationCap />,
  },
  {
    id: 1002,
    degree: "BSc in Computer Science",
    institute: "University of Gujrat",
    result: "Passed",
    date: "2017 – 2018",
    icon: <FaUserGraduate />,
  },
  {
    id: 1003,
    degree: "Intermediate of Computer Science",
    institute: "Government Postgraduate College, Kharian",
    result: "Passed",
    date: "2013 - 2015",
    icon: <FaUniversity />,
  },
  {
    id: 1004,
    degree: "Secondary School Certificate",
    institute: "Dolphin Digital OOH Media",
    result: "Passed",
    date: "2011 - 2013",
    icon: <FaSchool />,
  },
];
