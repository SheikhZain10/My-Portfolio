import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import userAnimation from "../public/Developer.json"; // <- your animation file
import { TypeAnimation } from "react-type-animation";

const About = ({ isDarkMode }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -100]);
  const y2 = useTransform(scrollY, [0, 800], [0, -50]);
  const y3 = useTransform(scrollY, [0, 800], [0, -150]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.9]);

  return (
    <div className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* Additional SVG-like Animated Elements */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-green-200 to-teal-200 dark:from-green-800/30 dark:to-teal-800/30 rounded-lg blur-2xl"
        style={{ y: y3 }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-800/30 dark:to-rose-800/30 rounded-full blur-2xl"
        style={{ y: y1 }}
        animate={{ 
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-2/3 left-1/2 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-yellow-800/30 dark:to-orange-800/30 rounded-md blur-xl"
        style={{ y: y2 }}
        animate={{ 
          rotate: [0, -360],
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                "Full Stack .NET Developer",
                2000,
                "Client Solutions Expert",
                2000,
                "Performance Optimizer",
                2000,
                "Multi-Country Experience",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-600 dark:text-blue-400 font-semibold"
            />
          </div>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="my-2 font-outfit text-xl font-semibold text-gray-800 dark:text-white">Profile</h4>
            <motion.p 
              className="text-sm sm:text-base dark:text-white text-gray-600 mb-4 text-justify leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Results-driven Full Stack .NET Developer with 4+ years designing, developing, and optimizing robust web applications. Skilled in .NET Core, C#, ASP.NET MVC, and modern front-end technologies. Known for integrating third-party services, enhancing performance, and creating seamless, secure experiences. Passionate about clean code, problem-solving, and scalable SaaS solutions. Strong database expertise. 
            </motion.p>

            {/* Project Metrics */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.5+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-green-900/20 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-yellow-900/20 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">🏆</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Rising Star</div>
              </div>
            </motion.div>

            {/* Rising Star Award Highlight */}
            <motion.div 
              className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 text-lg">Rising Star Award Winner</h5>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Recognized for exceptional performance, innovative solutions, and rapid career growth in software development.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Lottie Animation Section - Below Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center my-8"
          >
            <div className="w-70 sm:w-86 max-w-none">
              <Lottie 
                animationData={userAnimation} 
                loop={true} 
                style={{ width: "100%", height: "100%" }} 
              />
            </div>
          </motion.div>

          <motion.h4 
            className="my-2 font-outfit"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Technologies & Tools
          </motion.h4>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Backend */}
            <div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Backend & APIs</div>
              <div className="flex flex-wrap gap-2">
                {['.NET Core', 'C#', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'SQL Server', 'MySQL'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Frontend & UI</div>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'Bootstrap', 'HTML/CSS', 'Razor Pages'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">DevOps & Tools</div>
              <div className="flex flex-wrap gap-2">
                {['GitHub', 'SiteGround', 'SSRS', 'Postman'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full border border-purple-200 dark:border-purple-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Project Management</div>
              <div className="flex flex-wrap gap-2">
                {['Jira', 'ClickUp'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs rounded-full border border-indigo-200 dark:border-indigo-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Integrations & Services</div>
              <div className="flex flex-wrap gap-2">
                {['QuickBooks', 'Zoho Books', 'Payment Gateways', 'IoT Access Control', 'TT Lock', 'Many More...'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded-full border border-orange-200 dark:border-orange-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Courses Section */}
          <motion.h4 
            className="my-2 font-outfit"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Education & Certifications
          </motion.h4>
          <motion.p 
            className="text-sm sm:text-base dark:text-white text-gray-600 mb-4 text-justify leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            I hold a Bachelor's degree in Computer Science and have continuously enhanced my skills through various online courses and professional certifications, including:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Advanced .NET Core and ASP.NET MVC Development</li>
              <li>Modern Front-End Development (JavaScript, Bootstrap, HTML/CSS)</li>
              <li>Database Management and SQL Server Optimization</li>
              <li>Server Management and Hosting (SiteGround)</li>
              <li>Payment Gateway Integration and API Development</li>
              <li>IoT and Access Control System Integration</li>
            </ul>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
