'use client';

import React, { useTransition, useState } from "react";
import Image from "next/image";
import abtt from "/public/home/abtt.jpeg";
import TabButton from "./TabButton";
import { FaCode, FaCloud, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 w-full h-full p-4 rounded-lg">
          <h3 className="text-lg text-yellow-400 flex items-center mb-2">
            <FaCode size={15} className="mr-2" /> Languages
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Java</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaTools className="mr-2" /> DevOps
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>GitHub</li>
            <li>Azure</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaLaptopCode className="mr-2" /> Framework
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaCloud className="mr-2" /> Cloud and Security Tools
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>AWS</li>
            <li>Azure Cloud</li>
            <li>SQL Server</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaDatabase className="mr-2" /> Database
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaTools className="mr-2" /> Others
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Problem Solving</li>
            <li>Data Science</li>
            <li>OOP (Object-Oriented Programming)</li>
            <li>DSA (Data Structures and Algorithms)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-2 gap-3 w-[1000px]">
        <div className="bg-gray-800 w-full h-full p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Sinhgad Academy of Engineering</li>
            <li>Army Public School</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-2 gap-3 w-[1000px] ">
        <div className="bg-gray-800 w-full h-full p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Solutions Architecture Job Simulation | AWS January 2024</li>
            <li>Python for beginners-start to code with Python | Infosys July 2023</li>
            <li>Fundamentals of AI & ML | Infosys July 2023</li>
            <li>The Complete 2024 Web Development Bootcamp | Udemy</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }} 
    className="text-white bg-gradient-to-b from-black to-gray-400 min-h-screen">
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 0.5 }} 
      className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
      initial={{ opacity: 0, x: 0.5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }} 
      className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h1
      initial={{ opacity: 0, x: 0.5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}  className="text-5xl text-white mb-4">About Me
      </motion.h1>
          <motion.p
      initial={{ opacity: 0, x: 0.5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}  className="lg:text-lg">
            Hello, I&apos;m Snehal Abnave, skilled in Java, Python, C++, HTML, JavaScript, React.js, Node.js, and SQL. I thrive on applying my expertise in real-world scenarios, driven by a passion for problem-solving and continuous growth. With strong collaboration and communication skills, I contribute effectively to team success and innovation.
          </motion.p>
          <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 100 }}  className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </motion.div>
          <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }} className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </motion.div>
        </motion.div>
        <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }} 
      className="flex justify-center">
          <Image src={abtt} alt="about" width={800} height={900} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
