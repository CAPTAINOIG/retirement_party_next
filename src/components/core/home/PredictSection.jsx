import React from 'react';
import { motion } from 'motion/react';
import CountryFlag from '@/components/global/CountryFlag';

const PredictSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-3 container grid grid-cols-[1fr_1fr] items-center gap-10 pt-28 pb-28 md:pt-32 md:pb-32">
        <div className="text-white">
          <h1 className="text-[3.4rem] leading-none font-bold tracking-tight md:text-[7rem]">
            Predicting the future of Africa
          </h1>
          <p className="mt-4 text-lg opacity-70 md:max-w-[70%] md:text-xl">
            We are connecting intelligence to African's data, join us.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90 }}
            viewport={{ amount: 'some', margin: '10%' }}
            className="mt-8 flex items-center space-x-6"
          >
            {[
              { code: 'NG', name: 'Nigeria' },
              { code: 'EG', name: 'Egypt' },
              { code: 'ZA', name: 'South Africa' },
            ].map((country) => {
              return (
                <div
                  key={country.code}
                  className="dark:bg-default-50 dark:hover:bg-default-100 flex items-center space-x-3 rounded-full bg-slate-200 px-3 py-2 pr-6 transition-all duration-300 hover:bg-slate-300"
                >
                  <CountryFlag code={country.code} className="h-12 w-12" />
                  <p>{country.name}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PredictSection;
