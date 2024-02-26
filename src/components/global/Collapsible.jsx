import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { IconChevronRight } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const Collapsible = ({ header, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-hidden">
      <div
        onClick={() => setExpanded((v) => !v)}
        className={cn('flex cursor-pointer items-center justify-between px-6 py-4', {
          'border-accent-400': expanded,
        })}
      >
        {header}
        <div>
          <div
            className={cn('flex h-8 w-8 items-center justify-center rounded-full border', {
              'border-0 bg-primary-700 text-white': expanded,
            })}
          >
            <IconChevronRight size="20" className={cn('transition-all duration-300', { 'rotate-90': expanded })} />
          </div>
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
          >
            {content}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

Collapsible.propTypes = {
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Collapsible;
