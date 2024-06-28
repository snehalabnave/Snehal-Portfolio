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
    image: "/home/portfolio.png", // Correct path from the public directory
    tag: ["All"],
    gitUrl: "https://github.com/snehalabnave/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Password Generator",
    description: "A random Password generator which helps in secure login",
    image: "/home/pass.jpg", // No image URL provided here
    tag: ["All"],
    gitUrl:
      "https://github.com/snehalabnave/Projects/tree/main/Random%20password%20generator",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "An e-commerce application for online shopping.",
    image: "/home/ecom.jpg", // No image URL provided here
    tag: ["All"],
    gitUrl: "https://github.com/snehalabnave/Ecommerce-project",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Counter App with darkmode feature",
    description:
      "A counter app lets users increment or decrement a number displayed on the screen, demonstrating basic UI development",
    image: "/home/counter.png", // Correct path from the public directory
    tag: ["All"],
    gitUrl:
      "https://github.com/snehalabnave/nextjs-projects/tree/main/counterdarkmode",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "BMI Calculator with darkmode",
    description:
      "Calculates Body Mass Index (BMI) based on height and weight, providing health insights efficiently.",
    image: "/home/bmi.png", // Correct path from the public directory
    tag: ["All"],
    gitUrl: "https://github.com/snehalabnave/nextjs-projects",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Notivos",
    description:
      "NOTIVOS is a notepad for us to right down notes ,you can add or delete if you want. This app has been created by using reactjs technology.",
    image: "/home/note.png", 
    tag: ["All", "Web"],
    gitUrl: "https://github.com/snehalabnave/Notivos-reactjsproj",
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
    <section id="projects" className="bg-gradient-to-b from-black to-gray-900 py-8">
      <motion.h2 
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="text-center text-6xl font-mono font-semibold text-white md:mb-8">
        My Projects
      </motion.h2>
      <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
           className="text-white flex flex-row justify-center items-center mb-5 py-2">
        {["All"].map((name) => (
          <ProjectTag
            key={name}
            onClick={() => handleTagChange(name)}
            name={name}
            isSelected={tag === name}
          />
        ))}
      </motion.div>
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
