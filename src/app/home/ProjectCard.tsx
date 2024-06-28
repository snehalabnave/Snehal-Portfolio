import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  // Adjusting background position for portfolio and notivos images
  const backgroundImageStyle = imgUrl.includes("portfolio.png")
    ? {
        background: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "left center", // Move the portfolio image slightly to the right
      }
    : imgUrl.includes("note.png")
    ? {
        background: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "left top", // Move the notivos image slightly to the left
      }
    : {
        background: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

  return (
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
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
        className="h-52 md:h-72 rounded-t-xl relative group flex items-center justify-center"
        style={backgroundImageStyle}>
        <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }} 
     className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </motion.div>
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
     className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <motion.h5
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}  className="text-xl font-semibold mb-2">{title}</motion.h5>
        <motion.p
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.2,
      x: { type: 'spring', stiffness: 30 },
      opacity: { duration: 0.5 },
      ease: 'easeInOut',
    }}  className="text-[#ADB7BE]">{description}</motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
