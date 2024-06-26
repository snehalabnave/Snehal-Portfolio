'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import cont from '/public/home/cont.png';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.2,
        scale: { type: 'spring', stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: 'easeInOut',
      }}
      className="bg-black max-h-screen flex items-center"
    >
      <div className="container mb-20 px-6 py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                scale: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="mt-28 px-6 py-3 text-center text-3xl font-medium text-blue-400 "
            >
              Contact Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                scale: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="mt-2 text-4xl text-center font-bold text-gray-50 md:text-4xl"
            >
              GET IN TOUCH
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                scale: { type: 'spring', stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: 'easeInOut',
              }}
              className="mt-3 text-center text-lg text-white"
            >
              Welcome! I&apos;m here and eager to connect.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              scale: { type: 'spring', stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: 'easeInOut',
            }}
            className="grid grid-cols-1 justify-center gap-5 mt-10 md:grid-cols-2 lg:grid-cols-2"
          >
            <div className="transition-transform transform hover:scale-105 ">
              <span className="inline-block p-3 ml-28 text-center text-blue-500 rounded-full bg-blue-100/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-2xl ml-[100px] font-semibold text-white">Email</h2>
              <p className="mt-2 text-center text-blue-300 ">snehalabnave.sae.comp@gmail.com</p>
            </div>
            <div className="transition-transform transform hover:scale-105">
              <span className="inline-block p-3 ml-28 text-center text-blue-500 rounded-full bg-blue-100/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-2xl text-center font-semibold text-white">Phone</h2>
              <p className="mt-2 text-center text-blue-400">+91 9075254568</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut',
          }}
          className="flex items-center justify-center"
        >
          <Image
            src={cont}
            alt="Contact Image"
            className="rounded-lg shadow-lg"
          ></Image>
        </motion.div>
      </div>
    </motion.div>
  );
}
