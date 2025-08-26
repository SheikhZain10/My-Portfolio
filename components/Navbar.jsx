import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-full");
    sideMenuRef.current.classList.add("translate-x-0");
  };

  const closeMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-0");
    sideMenuRef.current.classList.add("translate-x-full");
  };

  return (
    <motion.nav 
     initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
    className="bg-white w-full fixed px-5 lg:px-7 xl:px-[8%] pt-4 py-2 flex items-center justify-between z-50 dark:text-white dark:bg-[#121213]">
      <button
        className="cursor-pointer flex items-center justify-center"
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        <Image
          src={isDarkMode ? assets.sun_icon : assets.moon_icon}
          alt="Toggle dark mode"
          width={24}
          height={24}
          className="w-6"
        />
      </button>

      <ul className="hidden md:flex w-full items-center justify-center gap-6 lg:gap-8">
        {["Home", "About", "Services", "My Work", "Contact"].map((item) => (
          <li key={item}>
            <a
              className="font-outfit"
              href={`#${item.toLowerCase().replace(" ", "")}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button onClick={openMenu} className="block md:hidden cursor-pointer">
        <Image
          src={isDarkMode ? assets.menu_white : assets.menu_black}
          alt="Menu"
          width={24}
          height={24}
          className="w-6"
        />
      </button>

      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-2 py-20 px-0 fixed right-0 top-0 bottom-0 w-64 h-screen z-50 bg-white dark:bg-[#161616] transition-transform duration-500 transform translate-x-full"
      >
        <div onClick={closeMenu} className="absolute top-6 right-6">
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="Close menu"
            width={20}
            height={20}
            className="w-5 cursor-pointer"
          />
        </div>

        {["Home", "About", "Services", "My Work", "Contact"].map((item) => (
          <li key={item} className="w-full">
            <a
              onClick={closeMenu}
              className="font-outfit block w-full py-3 px-6 hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
              href={`#${item.toLowerCase().replace(" ", "")}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
