import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const y3 = useTransform(scrollY, [0, 300], [0, -150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.3]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-black dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 dark:bg-purple-800/20 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-200 dark:bg-green-800/20 rounded-full blur-2xl"
        style={{ y: y3 }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ opacity }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-outfit text-gray-800 dark:text-white mb-4">
            Zain
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ opacity }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-outfit text-gray-600 dark:text-gray-300 mb-4">
            Full Stack .NET Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ opacity }}
        >
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Crafting robust web applications with modern technologies. 
            Specialized in .NET Core, C#, and scalable SaaS solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ opacity }}
        >
          <motion.p
            className="flex flex-col sm:flex-row items-center text-lg sm:text-2xl text-gray-700 mt-4 dark:text-white gap-2 sm:gap-0"
          >
            <span className="text-center sm:text-left">Lahore, Pakistan</span>
            <span className="hidden sm:inline"> · </span>
            <span className="text-center sm:text-left">sheikzain1355@gmail.com</span>
            <span className="hidden sm:inline"> · </span>
            <span className="text-center sm:text-left">03034871146</span>
            <motion.img
              src="/pakistan-flag-icon.svg"
              alt="Pakistan Flag"
              className="w-8 h-5 mt-2 sm:mt-0 sm:ml-4"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          style={{ opacity }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition-all duration-400 cursor-pointer"
            href="#contact"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            className="dark:text-black dark:bg-slate-200 px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:scale-105 transition-all duration-400 cursor-pointer"
            href="/resume"
          >
            View Resume
            <Image src={assets.download_icon} alt="Download" className="w-4" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="px-10 py-3 border-2 border-blue-600 rounded-full bg-blue-600 text-white flex items-center gap-2 hover:scale-105 hover:bg-blue-700 transition-all duration-400 cursor-pointer"
            href="/Zain_Resume.pdf"
            download="Zain_Resume.pdf"
          >
            Download PDF
            <Image src={assets.download_icon} alt="Download" className="w-4" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          style={{ opacity }}
          className="w-full mt-8 flex justify-center"
        >
          <img
            src="/Work/zain-picture.png"
            alt="Zain"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain rounded-full border-4 border-white shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
