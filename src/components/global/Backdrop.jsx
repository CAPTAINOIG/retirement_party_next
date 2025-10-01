import React, { useRef } from 'react';
import { motion } from 'motion/react';

const Backdrop = ({ children, onClick }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      onClick={(e) => {
        if (e.currentTarget === ref.current) onClick?.();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-opacity-70 fixed inset-0 z-99 m-0! flex items-center justify-center bg-black p-0"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
