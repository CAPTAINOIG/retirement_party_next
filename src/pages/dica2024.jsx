import React, { useState } from 'react';
import Button from '@/components/global/Button';
import Logo from '@/components/core/shared/Logo';
import { cn } from '@/lib/utils';
import { useIsomorphicLayoutEffect } from 'react-use';
import useCountdown from '@/hooks/use-countdown';
import Card from '@/components/global/Card';
import Footer from '@/components/global/Footer';
import Tabs from '@/components/global/Tabs';
import ClientOnly from '@/components/global/ClientOnly';

const Dica2024 = () => {
  const [scrolled, setScrolled] = useState(false);
  const { weeks, days, hours, minutes, seconds } = useCountdown('5/30/2024');

  useIsomorphicLayoutEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.scrollingElement.scrollTop;
      setScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const speakers = [
    {
      name: 'John Emeka Doe',
      image: 'https://mighty.tools/mockmind-api/content/abstract/32.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.',
    },
    {
      name: 'John Emeka Doe',
      image: 'https://mighty.tools/mockmind-api/content/abstract/46.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.',
    },
    {
      name: 'John Emeka Doe',
      image: 'https://mighty.tools/mockmind-api/content/abstract/51.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.',
    },
    {
      name: 'John Emeka Doe',
      image: 'https://mighty.tools/mockmind-api/content/abstract/22.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.',
    },
    {
      name: 'John Emeka Doe',
      image: 'https://mighty.tools/mockmind-api/content/abstract/9.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.',
    },
    {
      name: 'John Emeka Doe',
      image: 'https://mighty.tools/mockmind-api/content/abstract/10.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.',
    },
  ];

  return (
    <>
      <div
        className={cn('fixed left-0 top-0 z-10 w-full py-10 transition-all duration-300', {
          'bg-white py-5 shadow': scrolled,
        })}
      >
        <div className="container flex items-center justify-between">
          <Logo light={!scrolled} />
          <Button size="xl" color={scrolled ? 'primary' : 'white'}>
            Book your seat
          </Button>
        </div>
      </div>
      <div className="space-y-48">
        <div className="relative overflow-hidden bg-[#11100f] pb-6 pt-36 md:pb-32 md:pt-60">
          <div className="bg-tw-dark absolute inset-0 min-h-screen scale-125 bg-cover opacity-80"></div>
          <div className="container relative">
            <div className="text-white">
              <h1 className="text-[6rem] font-bold leading-none tracking-tight">
                Join us as we Reimagine the Future of Data and AI
              </h1>
              <p className=" mt-8 max-w-[70%] text-xl opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam architecto, aut debitis
                delectus dolorem eaque enim fugiat.
              </p>
              <div className="mt-10 flex w-max items-center space-x-4 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/10 px-4">
                <div className="flex flex-col px-4 py-8 text-center">
                  <span className="text-[5rem] font-medium leading-none tracking-tight">{weeks}</span>
                  <span>Weeks</span>
                </div>
                <div className="flex flex-col px-4 py-8 text-center">
                  <span className="text-[5rem] font-medium leading-none tracking-tight">{days}</span>
                  <span>days</span>
                </div>
                <div className="flex flex-col px-4 py-8 text-center">
                  <span className="text-[5rem] font-medium leading-none tracking-tight">{hours}</span>
                  <span>hours</span>
                </div>
                <div className="flex flex-col px-4 py-8 text-center">
                  <span className="text-[5rem] font-medium leading-none tracking-tight">{minutes}</span>
                  <span>minutes</span>
                </div>
                <div className="flex flex-col px-4 py-8 text-center">
                  <span className="text-[5rem] font-medium leading-none tracking-tight">{seconds}</span>
                  <span>seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container">
            <h2 className="mb-16 max-w-4xl text-7xl font-bold">Things you'll get to know from this event</h2>
            <div className="grid grid-cols-3 gap-10">
              <Card className="p-8">
                <h1 className="mb-3 text-xl font-semibold">Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.</p>
              </Card>
              <Card className="p-8">
                <h1 className="mb-3 text-xl font-semibold">Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.</p>
              </Card>
              <Card className="p-8">
                <h1 className="mb-3 text-xl font-semibold">Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quae.</p>
              </Card>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container">
            <h2 className="mb-16 max-w-4xl text-7xl font-bold">Keynote Speakers</h2>
            <div className="grid grid-cols-3 gap-10">
              {speakers.map((s) => (
                <div key="s.name">
                  <img src={s.image} alt="Speaker 1" className="rounded-3xl" />
                  <div className="mt-4">
                    <h1 className="text-xl font-semibold">{s.name}</h1>
                    <p className="mt-2 leading-tight">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container">
            <h2 className="mb-16 max-w-4xl text-7xl font-bold">Event Info & Schedule</h2>
            <ClientOnly>
              <Tabs
                tabs={[
                  { key: 'day1', name: 'Day 1' },
                  { key: 'day2', name: 'Day 2' },
                  { key: 'day3', name: 'Day 3' },
                ]}
              ></Tabs>
            </ClientOnly>
            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <Card key={n} className="flex items-center bg-white p-8">
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-2xl">31st</span>
                    <span className="text-lg">June</span>
                  </div>
                  <div className="px-20 text-center text-xl">8:00am - 9:00am</div>
                  <div className="flex flex-1 items-center space-x-4">
                    <img src={speakers[0].image} alt="Speaker 1" className="w-16 rounded-3xl" />
                    <div className="div">
                      <h1 className="text-xl font-medium leading-none">John Emeka Doe</h1>
                      <p className="mt-2 leading-tight opacity-90">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda atque fugit ipsum, magni
                        maxime recusandae sit? Minus quos, repellendus.
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Dica2024;
