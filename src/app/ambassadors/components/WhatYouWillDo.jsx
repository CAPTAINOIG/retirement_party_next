'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MdPresentToAll, MdEvent, MdCampaign, MdShare, MdFavorite, MdFeedback } from 'react-icons/md';

const WhatYouWillDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: MdPresentToAll,  
      title: 'Introducing students to Immortal products', 
      color: 'from-blue-500 to-cyan-500', 
    },
    {
      icon: MdEvent,  
      title: 'Hosting small campus meetups or info sessions',
      color: 'from-purple-500 to-violet-500',    
    },
    {
      icon: MdCampaign,
      title: 'Promoting Immortal events and opportunities',
      color: 'from-teal-500 to-green-500',   
    },
    {
      icon: MdShare,
      title: 'Creating awareness through social media',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MdFavorite,
      title: 'Building a community of students interested in data and technology',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MdFeedback,
      title: 'Gathering student feedback to improve the platform',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  

  return (
    <div ref={sectionRef} className="relative w-full bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
       <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ duration: 0.6 }}
               className="mb-16 text-center"
             >
               <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                 What You <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">Will Do</span>
               </h2>
               <p className="mx-auto max-w-2xl text-lg text-gray-400">
                 As an Immortal Student Partner, you will help introduce students to the power of <b>data, predictive intelligence, and modern analytics tools.</b> Think of it as <b>leading the Immortal movement in your school.</b>

               </p>
             </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
                  className="relative text-left"
                >

                  {/* Icon */}
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-2xl font-bold text-foreground`}>
                    <IconComponent size={48} className="text-foreground"    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl font-bold text-foreground">{step.title}</h3>

                 
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillDo;
