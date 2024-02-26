import React, { useEffect } from 'react';
import Backdrop from './Backdrop.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import IconButton from './IconButton.jsx';
import PropTypes from 'prop-types';
import { IconX } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const Modal = ({ isOpen, title, padding = true, onClose, children, size = 'md' }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [isOpen]);

  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen && (
        <Backdrop onClick={onClose} className="text-black">
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn('relative mx-auto min-h-52 w-full overflow-hidden rounded-2xl bg-white', {
              'p-8': padding,
              'max-w-3xl': size === 'md',
              'max-w-lg': size === 'sm',
            })}
          >
            {!!title && (
              <div className="mb-10 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{title}</h3>
                <IconButton
                  onClick={onClose}
                  rounded
                  icon={<IconX size="20" />}
                  size="sm"
                  color="red"
                  variant="outlined"
                />
              </div>
            )}
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  padding: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Modal;
