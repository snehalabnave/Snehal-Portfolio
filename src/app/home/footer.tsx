'use client';
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <div className="pt-7 lg:py-3 bg-gradient-to-br from-black to-gray-800 w-full">
      <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-8">
          {/* Column 1 */}
          <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}  className="sm:col-span-2 lg:col-span-2">
            <a
              href="/contact"
              aria-label="Go home"
              title="Get in Touch"
              className="inline-flex items-center"
            >
              <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}  className="lg:ml-2 text-3xl md:text-5xl font-bold text-white uppercase">
                Work with Me
              </motion.div>
            </a>
            <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}  className="mt-6 lg:ml-3 lg:max-w-sm">
              <p className="text-base text-white">
                Passionate about creating innovative solutions with technology.
              </p>
            </motion.div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
     className="space-y-2 text-sm text-white">
            <p className="text-xl font-bold tracking-wide">Contact Me</p>
            <div className="flex items-center">
            </div>
            <div className="flex items-center">
              <p className="mr-1">Email:</p>
              <a
                href="mailto:snehalabnave.sae.comp@gmail.com"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                snehalabnave.sae.comp@gmail.com
              </a>
            </div>
            <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
     className="flex items-center">
              <p className="mr-1">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Pune, Maharashtra
              </a>
            </motion.div>
          </motion.div>

          {/* Column 3 */}
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">Social</p>
            <div className="flex flex-wrap space-x-4 mt-1">
              <a
                href="https://www.linkedin.com/in/snehal-abnave-62391b249/"
                className="text-white flex items-center transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaLinkedin className="h-6 w-6 mr-1" /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/snehal_abnave/"
                className="text-white flex items-center transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaInstagram className="h-6 w-6 mr-1" /> Instagram
              </a>
              <a
                href="https://github.com/snehalabnave"
                className="text-white flex items-center transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaGithub className="h-6 w-6 mr-1" /> GitHub
              </a>
            </div>
            <p className="mt-2 text-white text-sm">
              Follow me on these platforms.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex justify-center items-center py-5 border-t text-sm text-white">
        <p>© Copyright 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
