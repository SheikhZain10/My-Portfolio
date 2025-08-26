import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const Header = ({ isDarkMode }) => {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-black"
    >

      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-4xl mt-5 sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                     dark:from-green-400 dark:via-teal-400 dark:to-cyan-400"
      >
        <TypeAnimation
          preRenderFirstString={true}
          cursor={true}
          sequence={[
            "ZAIN UL ABIDIN",
            2000,
            "FULL STACK .NET DEVELOPER",
            2000,
          ]}
          speed={40}
          repeat={Infinity}
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-row items-center text-lg sm:text-2xl text-gray-700 mt-4 dark:text-white whitespace-nowrap"
      >
        From Lahore, Pakistan
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          src="/pakistan-flag-icon.svg"
          alt="Pakistan Flag"
          className="w-8 h-5 ml-4 mt-1"
        />
      </motion.p>

      <div className="mt-10 max-w-3xl text-center">
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-black"
        >
          Crafting robust web applications with modern technologies. 
          Specialized in .NET Core, C#, and scalable SaaS solutions.
        </motion.h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition-all duration-400 cursor-pointer"
          href="#contact"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="dark:text-black dark:bg-slate-200 px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:scale-105 transition-all duration-400 cursor-pointer"
          href="/resume"
        >
          View Resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="px-10 py-3 border-2 border-blue-600 rounded-full bg-blue-600 text-white flex items-center gap-2 hover:scale-105 hover:bg-blue-700 transition-all duration-400 cursor-pointer"
          href="/Zain_Resume.pdf"
          download="Zain_Resume.pdf"
        >
          Download PDF
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </motion.a>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="w-full mt-8 flex justify-center"
      >
        <img
          src="/Work/zain-picture.png"
          alt="Zain"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain rounded-full border-4 border-white shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default Header;
