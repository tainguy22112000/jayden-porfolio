"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import { Socials } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-20 mt-40 w-full z-[20] min-h-[800px]"
    >
      <div className="flex flex-col justify-center h-full gap-5 mb-10 sm:mb-0 items-center text-center sm:text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col mt-16 text-6xl font-bold text-white max-w-[300px] w-auto h-auto"
        >
          <span className="text-4xl">
            Hi, I am <br />
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Jayden
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[300px] flex flex-row gap-5"
        >
          {Socials.map(social => (
            <Image src={social.src} alt={social.name} key={social.name} width={24} height={24} />
          ))}
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex items-center justify-center w-full h-full"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={620}
          width={620}
          className="absolute hidden sm:block top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]"
        />
      </motion.div>

      <div className="flex flex-col justify-center gap-5 max-w-[400px]">
        <motion.span variants={slideInFromRight(0.8)} className="text-2xl text-white">
          Software Engineer based on Ho Chi Minh city, Vietnam
        </motion.span>

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text-md text-gray-400">
          I&apos;m a multi-disciplinary Full Stack Software Engineer with experience creating
          projects in Website, Mobile, Software development, and have worked with diverse clients
          from all over the world. Check out my projects and skills.
        </motion.p>

        <div className="flex flex-row justify-center h-full gap-2">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-secondary text-center text-white cursor-pointer rounded-lg min-w-[120px]"
          >
            Reach me
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 bg-transparent hover:text-primary text-center text-white cursor-pointer rounded-lg min-w-[120px]"
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
