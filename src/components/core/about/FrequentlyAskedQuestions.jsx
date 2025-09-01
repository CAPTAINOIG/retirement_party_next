import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Accordion, AccordionItem } from '@heroui/react';
import faqs from '@/lib/faqs';

const FAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div id="faq" ref={sectionRef}>
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.h2
              className="sticky top-36 text-center text-3xl font-semibold tracking-tight md:text-5xl lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Frequently asked questions
            </motion.h2>
          </div>
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <Accordion
                variant="splitted"
                className="gap-4"
                itemClasses={{
                  base: 'px-0 bg-default-100 rounded-large shadow-none',
                  title: 'font-medium text-default-900 text-left cursor-pointer',
                  trigger: 'px-8 py-5 data-[hover=true]:bg-default-100 rounded-large',
                  content: 'text-default-700 leading-relaxed px-8 pb-6',
                }}
              >
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} aria-label={faq.q} title={faq.q}>
                    {faq.a}
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
