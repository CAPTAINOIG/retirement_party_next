import React, { useEffect } from 'react';
import Backdrop from './Backdrop.jsx';
import { AnimatePresence, motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';
import Portal from '@/components/global/Portal';
import { Button } from '@nextui-org/react';
import { TbX } from 'react-icons/tb';
import { cn } from '@/lib/utils';

const Drawer = ({ isOpen, title, padding = true, onClose, children, width = 550, className }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflowY = 'initial';
  }, [isOpen]);

  const variants = {
    hidden: {
      [isMobile ? 'y' : 'x']: '100%',
      opacity: 0,
    },
    visible: {
      [isMobile ? 'y' : 'x']: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
      },
    },
    exit: {
      [isMobile ? 'y' : 'x']: '100%',
      opacity: 0,
    },
  };

  return (
    <Portal selector="body">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && (
          <div>
            <Backdrop onClick={onClose} className="text-black" />
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ maxWidth: `${width}px` }}
              className={cn(
                'fixed bottom-0 right-0 top-0 z-[900] flex h-full w-full flex-col justify-end overflow-hidden',
                'pointer-events-none'
              )}
            >
              <div
                className={cn(
                  'relative inset-x-0 bottom-0 h-min max-h-full overflow-y-auto overflow-x-hidden bg-white dark:bg-default-50 sm:h-full',
                  'pointer-events-auto flex min-h-[50vh] flex-col rounded-t-2xl md:rounded-l-2xl md:rounded-r-none',
                  { 'p-8 md:p-10': padding },
                  className
                )}
              >
                {!!title && (
                  <div className="mb-10 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <Button onClick={onClose} isIconOnly size="sm" color="danger" variant="bordered" radius="full">
                      <TbX size="20" />
                    </Button>
                  </div>
                )}
                {children}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Drawer;
