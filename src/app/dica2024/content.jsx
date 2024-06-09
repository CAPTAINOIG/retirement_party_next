'use client';
import React, { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { cn } from '@/lib/utils';
import Logo from '@/components/core/shared/Logo';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLaptop, FaUsers } from 'react-icons/fa6';
import { BorderBeam } from '@/components/global/BorderBeam';
import Footer from '@/components/global/Footer';
import { Button, Card, useDisclosure } from '@nextui-org/react';
import CountdownTimer from '@/app/dica2024/CountdownTimer';
import ClientOnly from '@/components/global/ClientOnly';
import RegisterModal from '@/app/dica2024/RegisterModal';
import { useTheme } from 'next-themes';

const speakers = [
  {
    name: 'Speaker 1',
    image: 'https://mighty.tools/mockmind-api/content/abstract/32.jpg',
    description: 'Business',
  },
  {
    name: 'Speaker 2',
    image: 'https://mighty.tools/mockmind-api/content/abstract/46.jpg',
    description: 'Technology',
  },
  {
    name: 'Speaker 3',
    image: 'https://mighty.tools/mockmind-api/content/abstract/51.jpg',
    description: 'Government',
  },
  {
    name: 'Speaker 4',
    image: 'https://mighty.tools/mockmind-api/content/abstract/22.jpg',
    description: 'Banking',
  },
  {
    name: 'Speaker 5',
    image: 'https://mighty.tools/mockmind-api/content/abstract/9.jpg',
    description: 'Consulting',
  },
  {
    name: 'Speaker 6',
    image: 'https://mighty.tools/mockmind-api/content/abstract/10.jpg',
    description: 'Entertainment',
  },
];

const DICA2024PageContent = () => {
  const { resolvedTheme: theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: isRegisterModalOpen, onClose: onRegisterModalClose, onOpen: onRegisterModalOpen } = useDisclosure();

  useIsomorphicLayoutEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.scrollingElement.scrollTop;
      setScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn('fixed left-0 top-0 z-10 w-full border-b border-transparent py-10 transition-all duration-300', {
          'border-default-100 bg-white py-5 shadow dark:bg-black': scrolled,
        })}
      >
        <div className="container flex items-center justify-between">
          <Logo light={!scrolled || theme === 'dark'} />
          <Button
            size="xl"
            variant="solid"
            color="primary"
            className="h-auto px-6 py-2 text-base md:px-8 md:py-3 md:text-lg"
            radius="full"
            onClick={onRegisterModalOpen}
          >
            Book your seat
          </Button>
        </div>
      </div>
      <div className="space-y-32 md:space-y-48">
        <div className="relative overflow-hidden bg-[#11100f] pb-28 pt-52 md:pb-32 md:pt-60">
          <div className="bg-tw-dark absolute inset-0 min-h-screen scale-125 bg-cover opacity-80"></div>
          <div className="container relative">
            <div className="text-white md:max-w-[90%]">
              <h1 className="text-[3.4rem] font-bold leading-none tracking-tight md:text-[5.8rem]">
                <span className="flex text-[3rem] uppercase text-sky-500 md:text-[5rem]">#DICA2024</span>
                Data Driven Africa: <br /> Are we still pretending?
              </h1>
              <p className="mt-8 text-lg opacity-70 md:max-w-[70%] md:text-xl">
                Join us as we discuss advancing Africa through data intelligence powered consumers, businesses and
                governments
              </p>
              <ClientOnly>
                <CountdownTimer />
              </ClientOnly>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container">
            <h2 className="mb-16 max-w-4xl text-4xl font-bold md:text-6xl">
              Mark Your Calendar: Upcoming Event Series
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              <Card className="relative flex flex-col px-8 py-12" shadow="sm">
                <h1 className="text-2xl font-semibold">Prelude I</h1>
                <div className="mt-6 flex items-center space-x-3">
                  <div className="flex items-center space-x-2 rounded-2xl bg-default-200/50 px-4 py-2">
                    <FaCalendarAlt size="14" /> <span>July 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-2xl bg-default-200/50 px-4 py-2">
                    <FaLaptop size="14" /> <span>Virtual</span>
                  </div>
                </div>
                <p className="mt-4 text-lg">
                  Discover foundational topics through webinars and interactive sessions, setting the stage for the main
                  conference.
                </p>
              </Card>
              <Card className="relative flex flex-col px-8 py-12" shadow="sm">
                <h1 className="text-2xl font-semibold">Prelude II</h1>
                <div className="mt-6 flex items-center space-x-3">
                  <div className="flex items-center space-x-2 rounded-2xl bg-default-200/50 px-4 py-2">
                    <FaCalendarAlt size="14" /> <span>August 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-2xl bg-default-200/50 px-4 py-2">
                    <FaLaptop size="14" /> <span>Virtual</span>
                  </div>
                </div>
                <p className="mt-4 text-lg">
                  Dive into advanced topics with expert panels, case studies, and Q&A sessions to prepare for the main
                  event.
                </p>
              </Card>
              <Card className="relative flex flex-col px-8 py-12" shadow="sm">
                <BorderBeam />
                <h1 className="text-2xl font-semibold">Main Conference</h1>
                <div className="mt-6 flex items-center space-x-3">
                  <div className="flex items-center space-x-2 rounded-2xl bg-default-200/50 px-4 py-2">
                    <FaCalendarAlt size="14" /> <span>September 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-2xl bg-default-200/50 px-4 py-2">
                    <FaUsers size="14" /> <span>Physical</span>
                  </div>
                </div>
                <p className="mt-4 text-lg">
                  Join us in person for keynote speeches, breakout sessions, and networking to explore new developments
                  and gain insights.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container">
            <h2 className="mb-16 max-w-4xl text-4xl font-bold md:text-6xl">Keynote Speakers</h2>
            <div className="grid gap-10 md:grid-cols-3">
              {speakers.map((s) => (
                <div key={s.name}>
                  <div className="relative">
                    <img src={s.image} alt="Speaker 1" className="rounded-3xl" />
                  </div>
                  <div className="mt-4">
                    <h1 className="text-xl font-semibold">{s.name}</h1>
                    <p className="mt-1 leading-tight">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container">
            <h2 className="mb-16 max-w-4xl text-4xl font-bold md:text-6xl">Event Info & Schedule</h2>
            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <Card key={n} className="flex p-8 md:flex-row md:items-center">
                  <div className="hidden flex-col items-start justify-center md:flex">
                    <span className="text-2xl">31st</span>
                    <span className="text-lg">June</span>
                  </div>
                  <div className="hidden px-20 text-center text-xl md:flex">8:00am - 9:00am</div>
                  <div className="flex flex-1 flex-col items-start space-y-6 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                    <img src={speakers[0].image} alt="Speaker 1" className="w-16 rounded-3xl" />
                    <div className="div">
                      <h1 className="text-xl font-medium leading-none">John Emeka Doe</h1>
                      <p className="mt-2 leading-tight opacity-90">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda atque fugit ipsum, magni
                        maxime recusandae sit? Minus quos, repellendus.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex border-t border-default-100 pt-4 text-center text-base md:hidden">
                    31st June, 8:00am - 9:00am
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container">
            <div className="pattern-1 relative overflow-hidden rounded-3xl bg-primary-50 p-12 md:p-16">
              <div className="relative z-[2]">
                <h2 className="mb-10 max-w-4xl text-4xl font-bold md:mb-16 md:text-6xl">About us</h2>
                <p className="text-xl">
                  STATISENSE is building Africa's most powerful AI for Data platform, revolutionizing how businesses,
                  consumers, and governments use data to drive growth and scale. Statisense is achieving this by
                  breaking down complex and overwhelming datasets into AI powered portable insights, simple enough for
                  every African.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>

      <RegisterModal isOpen={isRegisterModalOpen} onOpenChange={onRegisterModalOpen} onClose={onRegisterModalClose} />
    </>
  );
};

export default DICA2024PageContent;
