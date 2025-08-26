import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { cardData } from "@/assets/assets";
import { motion, useScroll, useTransform } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const [stopScroll, setStopScroll] = useState(false);
  const [active, setActive] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div id="mywork" className="w-full px-[12%] py-15 scroll-mt-4">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-green-400 dark:via-teal-400 dark:to-cyan-400 z-50 origin-left"
        style={{ scaleX }}
      />

      <h4 className="text-center mb-2 text-lg font-outfit">My Portfolio</h4>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-outfit"
      >
        My Latest Work
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-6xl mx-auto mt-5 mb-12 font-outfit"
      >
        Explore some of my most recent projects, showcasing my skills in
        creating responsive, user-friendly, and visually engaging applications.
        Each project reflects my focus on clean code, intuitive design, and
        practical functionality.
      </motion.p>

      <div
        className="overflow-hidden w-full relative max-w-6xl mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div
          className="absolute left-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none
                     bg-gradient-to-r from-white dark:from-black to-transparent"
        />

        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 4000 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-[28rem] h-[16rem] mx-4 relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-green-400 dark:via-teal-400 dark:to-cyan-400">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain bg-gray-900 group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/70 dark:bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4 z-10">
                      <h3 className="text-white dark:text-gray-100 text-xl font-bold mb-2 truncate">
                        {card.title}
                      </h3>
                      <p className="text-gray-200 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                        {card.description}
                      </p>
                      {card.badges && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {card.badges.map((b, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-white/10 border border-white/30 text-white">
                              {b}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-gray-300 dark:text-gray-400 text-xs mb-4 truncate">
                        <span className="font-semibold">Tech: </span>
                        {card.tech.join(", ")}
                      </p>
                      <div className="flex gap-2">
                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 px-6 text-sm dark:bg-black bg-slate-100 opacity-65 hover:opacity-100 transition-all cursor-pointer"
                        >
                          Live Preview
                        </a>
                        {card.gallery && card.gallery.length > 0 && (
                          <button 
                            onClick={() => setActive(card)} 
                            className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 px-4 text-sm dark:bg-black bg-slate-100 opacity-65 hover:opacity-100 transition-all cursor-pointer"
                          >
                            Gallery
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="absolute right-0 top-0 h-full w-10 md:w-40 z-10 pointer-events-none
                     bg-gradient-to-l from-white dark:from-black to-transparent"
        />
      </div>

      <div className="flex justify-center mt-6">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 border border-gray-800 rounded-full py-2 px-12 dark:bg-black bg-slate-100 opacity-65 hover:opacity-100 hover:scale-110 duration-400 cursor-pointer transition-all"
          href="#contact"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
          </svg>
          Discuss Project
          <Image
            src={assets.right_arrow_bold}
            alt="Arrow"
            className="w-5"
          />
        </motion.a>
      </div>

      <style>{`
        .marquee-inner {
          display: flex;
          animation: marqueeScroll linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {active && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="bg-white dark:bg-gray-900 max-w-5xl w-full rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold">{active.title}</h3>
              <button onClick={() => setActive(null)} className="px-3 py-1 border rounded">Close</button>
            </div>
            <div className="max-h-[75vh] overflow-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(active.gallery || [active.image]).map((src, i) => (
                <img key={i} src={src} alt={`${active.title} ${i+1}`} className="w-full h-auto rounded border" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
