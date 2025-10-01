import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { IoIosMenu } from 'react-icons/io';
import { CiGrid2V, CiGrid41 } from 'react-icons/ci';
import { HiOutlineTemplate, HiOutlineUsers } from 'react-icons/hi';

const SideNav = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between rounded-lg bg-[#282A30] px-2 py-6 shadow-lg md:h-[500px] md:w-[70px] md:flex-col md:py-10 xl:px-0">
      <motion.div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#1C1D22] text-sm text-gray-50">
        <img src="/images/logo-icon.png" />
      </motion.div>
      <div className="flex flex-row gap-5 md:flex-col">
        <motion.div className="h-[25px] w-[25px] rounded-lg text-gray-200">
          <FaPlus size="25px" />
        </motion.div>
        <motion.div className="h-[25px] w-[25px] text-gray-200">
          <IoIosMenu size="25px" />
        </motion.div>
        <motion.div
          transition={{ delay: 6.5, duration: 1.5, repeat: Infinity, repeatDelay: 13 }}
          className="h-[25px] w-[25px] text-gray-200"
        >
          <CiGrid2V size="25px" />
        </motion.div>
        <motion.div className="h-[25px] w-[25px] rounded-lg text-gray-200">
          <HiOutlineTemplate size="25px" />
        </motion.div>
        <motion.div className="h-[25px] w-[25px] rounded-lg text-gray-200">
          <CiGrid41 size="25px" />
        </motion.div>
        <motion.div className="h-[25px] w-[25px] rounded-lg text-gray-200">
          <HiOutlineUsers size="25px" />
        </motion.div>
      </div>
    </div>
  );
};

export default SideNav;
