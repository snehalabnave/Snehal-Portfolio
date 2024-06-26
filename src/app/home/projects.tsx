"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "A personal portfolio website built with React.",
    image: "/images/projects/1.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Password Generator",
    description: "A random Password generator which helps in secure login",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "/https://github.com/snehalabnave/Projects/tree/main/Random%20password%20generator",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "An e-commerce application for online shopping.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Counter App with darkmode feature",
    description: "A counter app lets users increment or decrement a number displayed on the screen, demonstrating basic UI development",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "/https://github.com/snehalabnave/Projects/tree/main/counterapp",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "BMI Calulator",
    description: "Calculates Body Mass Index (BMI) based on height and weight, providing health insights efficiently.",
    image: "/images/projects/5.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Notivos",
    description: "NOTIVOS is a notepad for us to right down notes ,you can add or delete if you want. This app has been created by using reactjs technology.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/snehalabnave/Notivos-reactjsproj",
    previewUrl: "/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-700 to-gray-900 py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-4 py-6">
        {["All"].map((name) => (
          <ProjectTag
            key={name}
            onClick={() => handleTagChange(name)}
            name={name}
            isSelected={tag === name}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 px-4">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
