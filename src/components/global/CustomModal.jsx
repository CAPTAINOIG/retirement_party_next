import React, { useLayoutEffect } from 'react';
import Portal from '@/components/global/Portal';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@heroui/react';
import { TbX } from 'react-icons/tb';
import { useKey } from 'react-use';
import { cn } from '@/lib/utils';

const CustomModal = ({ isOpen, onClose, width = 680, children, padding = true, isCloseable = true }) => {
  useKey('Escape', () => isCloseable && onClose());

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (isOpen) document.scrollingElement.style.overflowY = 'hidden';
    else document.scrollingElement.style.overflowY = 'initial';
  }, [isOpen]);

  return (
    <Portal selector="body">
      <AnimatePresence mode="wait" initial={false}>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'fixed inset-0 z-50 flex h-screen w-screen flex-col overflow-y-auto bg-black/80 lg:flex-row lg:justify-center dark:bg-black/80 dark:backdrop-blur-md',
              { 'px-4 py-4 md:py-10': padding }
            )}
          >
            <motion.div
              layout
              className="sticky top-0 right-0 z-50 self-end px-4 py-4 md:py-10 lg:order-2 lg:self-auto lg:pl-6"
            >
              {isCloseable && (
                <Button onPress={onClose} isIconOnly color="danger" radius="full">
                  <TbX size="20" />
                </Button>
              )}
            </motion.div>
            <AnimatePresence mode="popLayout" initial={false}>
              <div className="h-full w-full" style={{ maxWidth: !isNaN(width) ? `${width}px` : width }}>
                {children}
                <br />
                <br />
              </div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default CustomModal;
