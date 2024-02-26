import React, { useEffect } from 'react';
import Backdrop from './Backdrop.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import IconButton from './IconButton.jsx';
import { useMediaQuery } from 'react-responsive';
import { IconX } from '@tabler/icons-react';
import Portal from '@/components/global/Portal';
import { cn } from '@/lib/utils';

const Drawer = ({ isOpen, title, padding = true, onClose, children }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflowY = 'auto';
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
              className={cn(
                'fixed bottom-0 right-0 top-0 z-[999] flex h-full w-full flex-col justify-end overflow-hidden sm:max-w-xl',
                'pointer-events-none md:p-4'
              )}
            >
              <div
                className={cn(
                  'relative inset-x-0 bottom-0 h-min max-h-full overflow-y-auto overflow-x-hidden bg-white sm:h-full',
                  'pointer-events-auto flex min-h-[50vh] flex-col rounded-t-[30px] md:rounded-l-[30px] md:rounded-r-[30px]',
                  { 'p-8 md:p-10': padding }
                )}
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Drawer;
