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
	python,
	angular,
	netcore,
	aspmvc,
	asp,
	jquery,
	mssql,
	blazor,
	mudblazor,
	apksoft,
	dolphindigital,
	hybridtechpK,
	qllmsoft,
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
];

export const about = [
	{
		text: "Years experience",
		count: "4",
	},
	{
		text: "Projects Completed",
		count: "10",
	},
	{
		text: "Companies Work",
		count: "04",
	},
];

export const projects = [
	{
		id: 1001,
		title: "Portfolio Website",
		des: "A simple portfolio website built with React and Tailwind CSS and having different features like dark/light mode, email, animations and back to top.",
		github: "https://github.com/ahshah322/ahshah-portfolio",
		site: "https://ahshah-portfolio.netlify.app/",
		src: projectOne,
	},
	{
		id: 1002,
		title: "IMDB Movie Ratings Analysis",
		des: "IMDB movie analysis using Python, Pandas, NumPy, Seaborn, featuring data cleaning, visualizations, and insights on ratings, genres, and runtimes.",
		github: "https://github.com/ahshah322/IMDB-Movie-Ratings-Analysis",
		site: "https://colab.research.google.com/github/ahshah322/IMDB-Movie-Ratings-Analysis/blob/main/notebooks/IMDB_Movie_Ratings_Analysis.ipynb",
		src: projectTwo,
	},
	{
		id: 1003,
		title: "World Happiness Report 2025",
		des: "Data analysis and visualization of the 2025 World Happiness Report using Python, examining how GDP, health and factors influence global happiness.",
		github: "https://github.com/ahshah322/World-Happiness-Report-2025",
		site: "https://colab.research.google.com/github/ahshah322/World-Happiness-Report-2025/blob/main/notebooks/World_Happiness_Report_2025.ipynb",
		src: projectThree,
	},
];

export const skills = [
	{
		name: "HTML5",
		logo: html,
		level: "Advance",
		count: 86,
	},
	{
		name: "CSS3",
		level: "Expect",
		count: 90,
		logo: css,
	},
	{
		name: "Python",
		level: "Beginner",
		count: 45,
		logo: python,
	},
	{
		name: "C#",
		level: "Expect",
		count: 80,
		logo: csharp,
	},
	{
		name: "ASP.NET",
		level: "Expect",
		count: 80,
		logo: asp,
	},
	{
		name: "ASP.NET Core",
		level: "Intermediate",
		count: 80,
		logo: netcore,
	},
	{
		name: "Blazor",
		level: "Intermediate",
		count: 80,
		logo: blazor,
	},
	{
		name: "MudBlazor",
		level: "Intermediate",
		count: 80,
		logo: mudblazor,
	},
	{
		name: "JavaScript",
		level: "Intermediate",
		count: 80,
		logo: javascript,
	},
	{
		name: "jQuery",
		level: "Expect",
		count: 90,
		logo: jquery,
	},
	{
		name: "Angular",
		level: "Beginner",
		count: 40,
		logo: angular,
	},
	{
		name: "ReactJS",
		level: "Intermediate",
		count: 75,
		logo: reactjs,
	},
	{
		name: "Redux",
		level: "Beginner",
		count: 40,
		logo: redux,
	},
	{
		name: "TailwindCSS",
		level: "Intermediate",
		count: 75,
		logo: tailwind,
	},
	{
		name: "PostgreSQL",
		level: "Intermediate",
		count: 75,
		logo: postgresql,
	},
	{
		name: "Git",
		level: "Advance",
		count: 85,
		logo: git,
	},
	{
		name: "Docker",
		level: "Beginner",
		count: 40,
		logo: docker,
	},
];

export const experiences = [
	{
		id: 1001,
		title: ".NET Full Stack Developer",
		company_name: "QllmSoft",
		location: "Lalamusa, Pakistan",
		icon: qllmsoft,
		date: "July 2024 – Current",
	},
	{
		id: 1002,
		title: ".NET Developer",
		company_name: "Hybrid Tech PK",
		location: "Kharian, Pakistan",
		icon: hybridtechpK,
		date: "January 2024 – March 2024",
	},
	{
		id: 1003,
		title: "Senior Software Engineer",
		company_name: "Dolphin Digital OOH Media",
		location: "Plano, USA",
		icon: dolphindigital,
		date: "July 2022 – October 2023",
	},
	{
		id: 1004,
		title: ".NET Developer",
		location: "Kharian, Pakistan",
		company_name: "APKSoft",
		icon: apksoft,
		date: "February 2022 – July 2022",
	},
	{
		id: 1005,
		title: "Data Processing Executive",
		location: "Kharian, Pakistan",
		company_name: "APKSoft",
		icon: apksoft,
		date: "October 2020 – January 2022",
	},
	{
		id: 1006,
		title: "Data Posting Officer",
		location: "Kharian, Pakistan",
		company_name: "APKSoft",
		icon: apksoft,
		date: "September 2016 – December 2020",
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
