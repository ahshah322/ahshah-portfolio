import React from "react";
import Title from "../layouts/Title";
import { projects } from "../../constants";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 xl:py-16 border-b-gray-300 border-b-[1px] dark:border-b-gray-600"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My awesome works" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
