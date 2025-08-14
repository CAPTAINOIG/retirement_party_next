'use client';

import { motion } from 'motion/react';
import CountryFlag from '@/components/global/CountryFlag';
import { Card } from '@heroui/react';
import JoinWaitlistForm from '@/components/core/shared/JoinWaitlistForm';
import Logo from '@/components/core/shared/Logo';
import TextLoop from '@/components/global/TextLoop';
import { useTheme } from 'next-themes';
import { useReferralSource } from '@/hooks/useReferralSource';

const AdLandingContent = () => {
  const { resolvedTheme: theme } = useTheme();
  const referralSource = useReferralSource();

  return (
    <>
      <div className="relative z-3 container grid items-center gap-20 pt-10 pb-24 md:gap-32 lg:grid-cols-[1fr_1fr] lg:pt-32 lg:pb-32">
        <div>
          <Logo light={theme === 'dark'} width={160} className="mb-10 lg:mb-16" />
          <h1 className="text-[3rem] !leading-none font-bold tracking-tight lg:text-[6.5rem]">
            <TextLoop interval={5} className="inline break-words whitespace-normal">
              <span>
                Be the first to{' '}
                <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">know</span>
              </span>
              {referralSource === 'fb' && (
                <span>
                  Get free $50{' '}
                  <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Immortal
                  </span>{' '}
                  token
                </span>
              )}
              {referralSource === 'linkedin' && (
                <span>
                  Get free 6months{' '}
                  <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    premium
                  </span>{' '}
                  access
                </span>
              )}
            </TextLoop>
          </h1>
          <Card className="mt-8 mb-6 rounded-2xl px-8 py-8 lg:hidden lg:px-12 lg:py-10">
            <JoinWaitlistForm />
          </Card>
          <p className="mt-4 text-lg leading-snug opacity-70 md:mt-10 lg:max-w-[70%] lg:text-xl">
            Unlock Africa's market potential with real-time data intelligence. Get early access to insights that drive
            smarter decisions.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90 }}
            viewport={{ amount: 'some', margin: '10%' }}
            className="mt-8 flex flex-wrap items-center gap-8 md:mt-12"
          >
            {[
              { code: 'NG', name: 'Nigeria' },
              { code: 'EG', name: 'Egypt' },
              { code: 'ZA', name: 'South Africa' },
            ].map((country) => {
              return (
                <div key={country.code} className="flex items-center space-x-2">
                  <CountryFlag code={country.code} className="h-5 w-5" />
                  <p>{country.name}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
        <Card className="hidden rounded-2xl px-10 py-8 lg:block lg:px-12 lg:py-10">
          <JoinWaitlistForm />
        </Card>
      </div>
    </>
  );
};

export default AdLandingContent;
