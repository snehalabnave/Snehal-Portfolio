'use client';
import React from 'react';
import { FaPython, FaWindows, FaJava, FaGithub } from 'react-icons/fa';
import { RiReactjsFill, RiNextjsLine } from 'react-icons/ri';
import { IoLogoHtml5 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { BsDatabaseFillCheck } from 'react-icons/bs';
import { RiTailwindCssFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

interface Skill {
  icon: JSX.Element;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: <IoLogoHtml5 size={50} />,
    title: 'HTML & CSS',
    description:
      'I am skilled in creating responsive web designs using HTML and CSS, ensuring optimal user experience.',
  },
  {
    icon: <FaJava size={50} />,
    title: 'Java',
    description: 'Knowledgeable in Java',
  },
  {
    icon: <IoLogoJavascript size={50} />,
    title: 'JavaScript',
    description: 'Knowledgeable in JavaScript for creating dynamic webpages.',
  },
  {
    icon: <FaWindows size={50} />,
    title: 'Operating Systems',
    description: 'Knowledgeable in operating systems',
  },
  {
    icon: <FaPython size={50} />,
    title: 'Python',
    description: 'Adept in Python for backend development and data manipulation',
  },
  {
    icon: <RiNextjsLine size={50} />,
    title: 'Next.js',
    description: 'Experienced in Next.js for building fast and scalable React applications',
  },
  {
    icon: <RiReactjsFill size={50} />,
    title: 'React JS',
    description: 'Skilled in React.js for dynamic and responsive web application development',
  },
  {
    icon: <BsDatabaseFillCheck size={50} />,
    title: 'Database',
    description: 'Adept in MySQL, SQL, and MongoDB for database management and querying',
  },
  {
    icon: <RiTailwindCssFill size={50} />,
    title: 'Tailwind CSS',
    description: 'Skilled in Tailwind CSS for streamlined and responsive UI development',
  },
  {
    icon: <FaGithub size={50} />,
    title: 'Github',
    description: 'Experienced GitHub repositories with modern and efficient design solutions.',
  },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-gradient-to-tr from-black to-gray-800 w-full min-h-screen overflow-x-hidden md:pt-10 relative">
      <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="mx-auto max-w-[100vw] h-full py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <motion.h2
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="font-bold font-mono mb-2 text-3xl text-white sm:text-3xl md:text-5xl lg:text-6xl text-center">
          Skills and Expertise
        </motion.h2>
        <motion.p 
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="max-w-[85%] text-white mb-6 md:-center sm:text-lg sm:leading-7 text-center">
          Skilled in Python, HTML, CSS, operating systems, Java, React.js, Next.js, and Node.js, with
          hands-on experience in web development and software engineering.
        </motion.p>

        <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg::max-w-full">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="relative overflow-hidden rounded-lg text-white bg-gradient-to-t from-blue-950 to-gray-900 select-none hover:shadow hover:shadow-teal-200 p-2">
      <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="flex h-[180px] flex-col justify-between rounded-md p-6">
        {icon}
        <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}
     className="space-y-2">
          <motion.h3
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="font-bold">{title}</motion.h3>
          <motion.p
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} className="text-sm text-muted-foreground">{description}</motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
