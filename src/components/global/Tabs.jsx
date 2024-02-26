import React from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';

const Tabs = ({ index, onChange, tabs, ...props }) => {
  return (
    <Tab.Group as="div" {...props} selectedIndex={index} onChange={onChange}>
      <Tab.List className="inline-flex space-x-1 rounded-full bg-blue-900/5 p-1.5">
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            className={({ selected }) =>
              cn(
                'rounded-full px-6 py-1.5 text-[.96rem] font-medium leading-5 transition-all duration-150 focus:outline-none',
                selected ? 'bg-white text-primary-800 shadow' : 'text-slate-500 hover:bg-white/[0.12]'
              )
            }
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-6 px-1">
        {tabs.map((tab) => (
          <Tab.Panel key={tab.key}>{tab.panel}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
