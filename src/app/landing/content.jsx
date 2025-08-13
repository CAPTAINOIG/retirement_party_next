'use client';

import { motion } from 'motion/react';
import CountryFlag from '@/components/global/CountryFlag';
import { Card } from '@heroui/react';
import JoinWaitlistForm from '@/components/core/shared/JoinWaitlistForm';
import Logo from '@/components/core/shared/Logo';
import TextLoop from '@/components/global/TextLoop';
import { useTheme } from 'next-themes';
import { TbCircleCheckFilled, TbCurrencyDollar, TbStarFilled } from 'react-icons/tb';

const AdLandingContent = () => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <>
      <div className="relative z-3 container grid items-center gap-20 pt-10 pb-24 md:gap-32 lg:grid-cols-[1fr_1fr] lg:pt-32 lg:pb-32">
        <div>
          <Logo light={theme === 'dark'} width={160} className="mb-10 lg:mb-16" />
          <h1 className="text-[3.4rem] !leading-none font-bold tracking-tight lg:text-[6.5rem]">
            Be the first to{' '}
            <TextLoop interval={3}>
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">know</span>
              <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                analyze
              </span>
              <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">predict</span>
              <span className="bg-linear-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">trade</span>
            </TextLoop>
          </h1>
          <Card className="mt-8 mb-6 rounded-2xl px-8 py-8 lg:hidden lg:px-12 lg:py-10">
            <JoinWaitlistForm />
          </Card>
          <p className="mt-4 text-lg leading-snug opacity-70 md:mt-10 lg:max-w-[70%] lg:text-xl">
            Unlock Africa's market potential with real-time data intelligence. Get early access to insights that drive
            smarter decisions.
          </p>

          {/* Early Bird Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            viewport={{ amount: 'some', margin: '10%' }}
            className="mt-8 md:mt-12"
          >
            <div className="border-default-200 from-default-50/50 to-default-100/30 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm">
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-lg"></div>

              <div className="relative">
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500">
                    <TbStarFilled size="16" />
                  </div>
                  <h3 className="text-foreground text-lg font-bold">Early Bird Exclusive</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg">
                      <TbCurrencyDollar size="20" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-foreground font-medium">Free $50 Immortal Token</h4>
                      <p className="text-foreground/70 text-sm leading-tight">
                        Kickstart your trading journey with bonus tokens
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg">
                      <TbCircleCheckFilled size="20" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-foreground font-medium">6 Months Premium Access</h4>
                      <p className="text-foreground/70 text-sm leading-tight">
                        Full access to advanced analytics and insights
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-foreground/60 mt-4 flex items-center gap-2 text-xs">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Limited time offer for early adopters</span>
                </div>
              </div>
            </div>
          </motion.div>

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
