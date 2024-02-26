import React from 'react';
import { Menu } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const SimpleDropdown = ({ trigger, items, direction = 'bottom-right' }) => {
  const variants = {
    hidden: { y: '-10px', opacity: 0 },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '-10px',
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <Menu>
      {({ open }) => (
        <div className={cn('relative z-10 flex', { 'z-20': open })}>
          <Menu.Button as="div" className="w-full cursor-pointer">
            {trigger}
          </Menu.Button>
          <AnimatePresence initial={false} mode="wait">
            {open && (
              <Menu.Items
                as={motion.div}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                static
                className={cn(
                  'absolute z-50 flex min-w-[200px] flex-col rounded-xl border bg-white p-2 text-gray-900 shadow',
                  { 'right-0 top-full mt-4': direction === 'bottom-right' },
                  { 'bottom-full right-0 mb-4': direction === 'top-right' },
                  { 'bottom-0 left-full ml-4': direction === 'right-bottom' }
                )}
              >
                {items.map((item, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <button
                        className={cn(
                          `flex items-center space-x-4 whitespace-nowrap rounded-lg px-3 py-2 transition-all`,
                          { 'bg-zinc-900/5': active }
                        )}
                        onClick={item?.onClick ?? null}
                      >
                        {!!item.icon && <span>{item.icon}</span>}
                        <span>{item.text}</span>
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </AnimatePresence>
        </div>
      )}
    </Menu>
  );
};

SimpleDropdown.propTypes = {
  trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      icon: PropTypes.element,
      onClick: PropTypes.func,
    })
  ),
};

export default SimpleDropdown;
