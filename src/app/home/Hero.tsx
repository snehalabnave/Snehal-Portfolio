"use client";
import React from "react";
import Image from "next/image";
import img from "/public/home/img.jpeg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero(){
  return (
    <section className="bg-gradient-to-br from-black to-gray-800  w-full h-full md:pt-16 pt-12 text-white relative">
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
       className="grid grid-cols-1 sm:grid-cols-12">
    <motion.div
      initial={{ opacity: 0, x: 0.5 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
    >
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-pink-500">
          Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Snehal Abnave",
                2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.5 },
            ease: 'easeInOut',
          }}
           className="text-white font-thin md:justify-center sm:text-lg mb-6 ">I am a dedicated Computer Engineering student in Pune, currently pursuing a Bachelor&spos;s degree. I specialize in Java, Python, C++, HTML, CSS, JavaScript, React.js, Next.js, operating systems, Node.js, and SQL, using these skills for creative problem-solving and teamwork. As president of ACES (Association of Computer Engineering Students), I lead teams, communicate effectively, and achieve collective success. Outside academics, I enjoy painting, dancing, video editing, photography, and music, exploring various forms of creativity.
          </motion.p>
          <motion.div initial={{ opacity: 0, x: 0.5 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.5 }}
      >
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/CV(S.A).pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-500 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 0.5 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        < motion.div initial={{ opacity: 0, x: 0.5 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.5 }} 
      className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
      <motion.div initial={{ opacity: 0, x: 0.5 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center">
        <motion.div
         initial={{ opacity: 0, x: 0.5 }}
         animate={{ opacity: 1, x: 1 }}
         transition={{ duration: 0.5 }}
          className="rounded-full overflow-hidden w-full h-full">
          <Image
            src={img}
            alt="hero image"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            className="rounded-full"
          ></Image>
        </motion.div>
      </motion.div>
    </motion.div>
    </motion.div>
  </motion.div>
</section>
  );
};