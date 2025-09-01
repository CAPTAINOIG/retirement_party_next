import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button, Card } from '@heroui/react';

const positions = [
  {
    title: `Data Analyst`,
    description: `Are you passionate about data analysis and AI? Join our team of experts to analyze data from multiple sectors, providing valuable insights to our clients.`,
  },
  {
    title: `Sales and Marketing Specialist`,
    description: `If you have a knack for promoting innovative solutions and building client relationships across various sectors, we want you to help us expand our reach and impact.`,
  },
  {
    title: `Software Engineer`,
    description: `Join our development team to build and maintain cutting-edge AI tools that empower businesses with insights, no matter their industry.`,
  },
];

const OpenPositions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} aria-label="Open positions" className="container">
      <div className="grid gap-6 md:gap-10 lg:grid-cols-12">
        <div className="relative lg:col-span-4">
          <div className="sticky top-36 text-center lg:text-left">
            <motion.h2
              className="text-3xl font-semibold tracking-tight md:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Open positions
            </motion.h2>
            <motion.p
              className="text-default-700 mt-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Do you crave a challenge and love to innovate? Then we have a role for you.
            </motion.p>
          </div>
        </div>
        <div className="space-y-6 lg:col-span-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
            >
              <Card className="bg-default-100 flex flex-col px-12 py-10 md:flex-row md:items-center" shadow="none">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{position.title}</h4>
                  <p className="text-default-700 mt-2 leading-tight">{position.description}</p>
                </div>
                <a
                  href={`mailto:jobs@statisense.co?subject=Application for ${position.title}`}
                  target="_blank"
                  className="mt-4 md:mt-0 md:ml-4"
                >
                  <Button variant="flat" radius="full" className="text-base">
                    Apply
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
