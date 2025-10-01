import React, { useEffect, useRef } from 'react';
import { IconClock } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SiBitcoin, SiEthereum, SiTether, SiXrp } from 'react-icons/si';
import { TbCurrencySolana } from 'react-icons/tb';
import { RiAmazonLine, RiAppleLine, RiExchangeLine, RiGoogleLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import Typed from 'typed.js';
import { register } from 'swiper/element/bundle';
import ClientOnly from '@/components/global/ClientOnly';

register();

const MarketIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto hidden w-min pr-10 pl-0 md:block"
    >
      <div className="relative flex w-min justify-center">
        <motion.div
          className="relative w-[320px] rotate-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive && isParentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <img alt="img-4" className="w-full" src="/images/4.png" />
        </motion.div>
        <ClientOnly>
          <TopCards isActive={isActive} isParentInView={isParentInView} />
        </ClientOnly>
        <ClientOnly>
          <BottomCard isActive={isActive} isParentInView={isParentInView} />
        </ClientOnly>
      </div>
    </motion.div>
  );
};

export default MarketIllustration;

const TopCards = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      className="absolute top-16 -left-16 w-[400px] -rotate-1 justify-center"
      initial={{ opacity: 0, x: -30 }}
      animate={isActive && isParentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
    >
      <swiper-container
        effect="cards"
        grab-cursor="true"
        loop="true"
        autoplay-delay="2000"
        autoplay-disable-on-interaction="false"
        slides-per-view="1.3"
        speed="1000"
        centered-slides="true"
      >
        <swiper-slide
          style={{
            overflow: 'hidden',
            borderRadius: '1rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          }}
        >
          <div className="dark:bg-default-100 min-h-[240px] w-full overflow-hidden rounded-2xl bg-white px-8 py-6 shadow-none">
            <h6 className="mb-7 flex items-center text-lg font-bold">Popular Coins</h6>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center text-center">
                <SiBitcoin size="32" />
                <p className="mt-2">Bitcoin</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <SiEthereum size="32" />
                <p className="mt-2">Ethereum</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <TbCurrencySolana size="32" />
                <p className="mt-2">Solana</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <SiTether size="32" />
                <p className="mt-2">Tether</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <SiXrp size="32" />
                <p className="mt-2">XRP</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <RiMoneyDollarCircleLine size="32" />
                <p className="mt-2">USDC</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          style={{
            overflow: 'hidden',
            borderRadius: '1rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          }}
        >
          <div className="dark:bg-default-100 min-h-[240px] w-full overflow-hidden rounded-2xl bg-white px-8 py-6 shadow-none">
            <h6 className="mb-6 text-lg font-bold">Relevant News</h6>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img alt="news" className="h-[70px] w-[40%] rounded-xl object-cover" src="/images/news.jpeg" />
                <div>
                  <p className="text-sm">Chase Bans Crypto-Linked Payments for U.K.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img alt="news" className="h-[70px] w-[40%] rounded-xl object-cover" src="/images/news.jpeg" />
                <div>
                  <p className="text-sm">Chase Bans Crypto-Linked Payments for U.K.</p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          style={{
            overflow: 'hidden',
            borderRadius: '1rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          }}
        >
          <div className="dark:bg-default-100 min-h-[240px] w-full overflow-hidden rounded-2xl bg-white px-8 py-6 shadow-none">
            <h6 className="mb-6 text-lg font-bold">Popular Stocks</h6>
            <div className="space-y-4">
              {[
                {
                  icon: <RiAppleLine size="28" />,
                  name: 'Apple',
                  price: '170.58 USD',
                  change: '-0.77%',
                },
                {
                  icon: <RiAmazonLine size="28" />,
                  name: 'Amazon',
                  price: '124.48 USD',
                  change: '+1.22%',
                },
                {
                  icon: <RiGoogleLine size="28" />,
                  name: 'Google',
                  price: '104.48 USD',
                  change: '+2.22%',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <div className="w-full">
                    <p className="font-semibold">{item.name}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm">{item.price}</p>
                      <p className="text-sm text-red-500">{item.change}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          style={{
            overflow: 'hidden',
            borderRadius: '1rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          }}
        >
          <div className="dark:bg-default-100 min-h-[240px] w-full overflow-hidden rounded-2xl bg-white px-8 py-6 shadow-none">
            <h6 className="mb-6 text-lg font-bold">Popular Exchanges</h6>
            <div className="space-y-4">
              {[
                {
                  icon: <RiExchangeLine size="28" />,
                  name: 'Nasdaq',
                  price: '170.58 USD',
                  change: '-0.77%',
                },
                {
                  icon: <RiExchangeLine size="28" />,
                  name: 'S&P 500',
                  price: '124.48 USD',
                  change: '+1.22%',
                },
                {
                  icon: <RiExchangeLine size="28" />,
                  name: 'NGX',
                  price: '104.48 USD',
                  change: '+2.22%',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <div className="w-full">
                    <p className="font-semibold">{item.name}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm">{item.price}</p>
                      <p className="text-sm text-red-500">{item.change}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </motion.div>
  );
};

const BottomCard = ({ isActive, isParentInView }) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'An infographics showing the countries with the most population in Africa. Nigeria is the most populated African country and it shows that for every 100 Africans, 16 of them are Nigerians.',
        'A chart depicting the top 10 Foreign Direct Investment (FDI) that came into Africa in 2021. South Africa attracted the most investment, followed by Egypt and Mozambique.',
        'The top 10 easiest places to enforce contracts in 2018 were Kaduna, Bauchi, Jigawa, Borno, Katsina, Kebbi, Yobe, Edo, Ondo, and Kano. These states had the most favorable contract enforcement systems.',
      ],
      typeSpeed: 1,
      backSpeed: 1,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <motion.div
      className="bg-primary-700 dark:bg-primary-100 absolute bottom-7 left-10 hidden min-h-[220px] w-[320px] rotate-1 rounded-2xl px-8 py-4 text-white md:block"
      initial={{ opacity: 0, y: 30 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
    >
      <div className="my-3 flex items-center gap-2">
        <IconClock size="20" />
        <p className="max-w-sm">Date posted: Aug 16, 2023</p>
      </div>
      <p ref={el} className="mt-6 max-w-sm">
        An infographics showing the countries with the most population in Africa. Nigeria is the most populated African
        country and it shows that for every 100 Africans, 16 of them are Nigerians.
      </p>
    </motion.div>
  );
};
