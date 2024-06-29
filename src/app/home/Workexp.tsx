'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import im from "/public/home/we.jpg";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Vionsys IT Solutions",
    duration: "1st June, 2024 - Present",
    responsibilities: [
      "Collaborating with the team to develop and implement responsive and interactive web applications using HTML, CSS, JavaScript, and React.",
    ]
  },
  {
    title: "Data Science Intern",
    company: "CodSoft",
    duration: "15 Dec, 2023 - 15 Jan, 2024",
    responsibilities: [
      "Gained hands-on experience in analyzing large datasets using Python and various data science libraries such as pandas, NumPy, matplotlib, and seaborn."
    ]
  },
  {
    title: "Web Development and Designing Intern",
    company: "Oasis Infobyte",
    duration: "15 Oct, 2023 - 15 Nov, 2023",
    responsibilities: [
      "Utilized HTML, CSS, and JavaScript to create responsive and user-friendly interfaces, ensuring compatibility across different browsers and devices."
    ]
  },
  {
    title:"Java Programmer Intern",
    company: "InternPe",
    duration: "07 Aug, 2023 - 03 Sep, 2023",
    responsibilities: [
      "During this internship, I focused on enhancing my skills in Java programming, including object-oriented programming principles, data structures, and algorithms."
    ]
  },
];

export default function WorkExp() {
  return (
    <div className='md:items-center grid grid-cols-1 lg:grid-cols-3 gap-5 px-6 py-12 bg-gradient-to-t from-black to-gray-900 font-serif'>
      {/* Left Content Section */}
      <motion.div
       initial={{ opacity: 0, y: -100 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{
         delay: 0.2,
         x: { type: 'spring', stiffness: 30 },
         opacity: { duration: 0.5 },
         ease: 'easeInOut',
       }} 
        className='col-span-2'
      >
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.9 },
            ease: 'easeInOut',
          }} className='text-4xl md:text-6xl md:px-2 text-white text-center font-mono lg:px-6 py-2'>WORK EXPERIENCE</motion.h1>
        <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
          className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4'
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-gradient-to-bl from-black to-blue-900 text-base rounded-lg overflow-hidden p-4'
              
            >
             <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} >
  <motion.div
    initial={{ opacity: 0, x:-100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}  className='font-semibold text-white text-lg'>
    {exp.title}
  </motion.div>
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
     className='font-normal text-white text-md'>
    {exp.company} | {exp.duration}
  </motion.div>
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
     className='font-normal text-gray-100 text-sm'>
    {exp.responsibilities.map((responsibility, i) => (
      <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.2,
        x: { type: 'spring', stiffness: 30 },
        opacity: { duration: 0.5 },
        ease: 'easeInOut',
      }}  key={i} className="my-2">
        {responsibility}
      </motion.div>
    ))}
  </motion.div>
</motion.div>

            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='relative w-full h-64 lg:h-auto mt-8 md:px-3 lg:mt-0'
      >
        <Image
          src={im}
          alt="Side Image"
          className='w-full h-full object-cover rounded-lg'
        />
      </motion.div>
    </div>
  );
}