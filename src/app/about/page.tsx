'use client';
import React, { useState } from "react";
import Image from "next/image";
import abt from "/public/home/abt.jpeg";
import TabButton from "./TabButton";
import { FaCode, FaCloud, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.9 },
            ease: 'easeInOut',
          }}
          className="bg-gradient-to-t from-black to-gray-800 font-serif w-full h-full p-4 rounded-lg"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-t from-black to-gray-800 p-4 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaTools className="mr-2" /> DevOps
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>GitHub</li>
            <li>Azure</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-t from-black to-gray-800 p-4 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaLaptopCode className="mr-2" /> Framework
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Next.js</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-t from-black to-gray-800 p-4 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaCloud className="mr-2" /> Cloud and Security Tools
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>AWS</li>
            <li>Azure Cloud</li>
            <li>SQL Server</li>
            <li>Linux</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.9 },
            ease: 'easeInOut',
          }}
          className="bg-gradient-to-t from-black to-gray-800 p-4 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaDatabase className="mr-2" /> Database
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.9 },
            ease: 'easeInOut',
          }}
          className="bg-gradient-to-t from-black to-gray-800 p-4 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center mb-2">
            <FaTools className="mr-2" /> Others
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Problem Solving</li>
            <li>Data Science</li>
            <li>OOP (Object-Oriented Programming)</li>
            <li>DSA (Data Structures and Algorithms)</li>
          </ul>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-2 gap-3 w-[1000px]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.5 },
            ease: 'easeInOut',
          }}
          className="bg-gradient-to-t from-black to-gray-800 w-full h-full p-4 rounded-lg"
        >
          <ul className="list-disc pl-6 space-y-1">
            <li>Sinhgad Academy of Engineering</li>
            <li>Army Public School</li>
          </ul>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-2 gap-3 lg:w-[1000px] md:w-[800px]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.5 },
            ease: 'easeInOut',
          }}
          className="bg-gradient-to-t from-black to-gray-800 w-[400px] h-full p-4 rounded-lg"
        >
          <ul className="list-disc pl-6 space-y-1">
            <li>Solutions Architecture Job Simulation | AWS January 2024</li>
            <li>Python for beginners-start to code with Python | Infosys July 2023</li>
            <li>Fundamentals of AI & ML | Infosys July 2023</li>
            <li>The Complete 2024 Web Development Bootcamp | Udemy</li>
          </ul>
        </motion.div>
      </div>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState<string>("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section
      className="text-white overflow-hidden bg-gradient-to-t from-black to-gray-900 font-serif min-h-screen"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.5 },
            ease: 'easeInOut',
          }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: 'easeInOut',
            }}
            className="text-5xl text-white font-light mb-4"
          >
            About Me
          </motion.h1>
          <div className="text-xl text-white font-normal">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                scale: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: 'easeInOut',
              }}
            >
              Hello, I&apos;m Snehal Abnave, skilled in Java, Python, C++, HTML,
              JavaScript, React.js, Node.js, and SQL. I thrive on applying my
              expertise in real-world scenarios, driven by a passion for
              problem-solving and continuous growth. With strong collaboration and
              communication skills, I contribute effectively to team success and
              innovation.
            </motion.p>
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: 'easeInOut',
            }}
            className="mt-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  delay: 0.2,
                  scale: { type: 'spring', stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: 'easeInOut',
                }}
              >
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image src={abt} alt="about" width={800} height={900} />
        </motion.div>
      </div>
    </section>
  );
}
