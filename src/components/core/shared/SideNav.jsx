import React from 'react';
import {FaPlus} from "react-icons/fa6";
import {motion} from "framer-motion";
import {IoIosMenu} from "react-icons/io";
import {CiGrid2V, CiGrid41} from "react-icons/ci";
import {HiOutlineTemplate, HiOutlineUsers} from "react-icons/hi";

const SideNav = () => {
  return (
    <div
      className="rounded-lg shadow-lg bg-[#282A30] md:w-[70px] w-full md:h-[500px] md:py-10 py-6 px-2 xl:px-0 flex flex-row md:flex-col items-center justify-between">
      <motion.div
        className="h-[35px] w-[35px] rounded-full text-sm text-gray-50 bg-[#1C1D22] flex items-center justify-center">
        <img src="/images/logo-icon.png"/>
      </motion.div>
      <div className="flex flex-row md:flex-col gap-5">
        <motion.div
          className="h-[25px] w-[25px] rounded-lg text-gray-200">
          <FaPlus size="25px"/>
        </motion.div>
        <motion.div
          className="h-[25px] w-[25px] text-gray-200">
          <IoIosMenu size="25px"/>
        </motion.div>
        <motion.div
          transition={{delay: 6.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] text-gray-200">
          <CiGrid2V size="25px"/>
        </motion.div>
        <motion.div
          className="h-[25px] w-[25px] rounded-lg text-gray-200">
          <HiOutlineTemplate size="25px"/>
        </motion.div>
        <motion.div
          className="h-[25px] w-[25px] rounded-lg text-gray-200">
          <CiGrid41 size="25px"/>
        </motion.div>
        <motion.div
          className="h-[25px] w-[25px] rounded-lg text-gray-200">
          <HiOutlineUsers size="25px"/>
        </motion.div>
      </div>
    </div>

  );
};

export default SideNav;
