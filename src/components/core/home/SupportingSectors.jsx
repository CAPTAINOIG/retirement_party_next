import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '@/components/global/Button';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;

const items = [
  {
    image: '/images/insurance.jpg',
    name: 'Insurance',
    description: `Personalized insurance strategies through data insights.`,
  },
  {
    image: '/images/market.jpg',
    name: 'Markets',
    description: `Strategic data insights for market dynamics.`,
  },
  {
    image: '/images/accounting.jpg',
    name: 'Accounting',
    description: `Streamlining financial management through data.`,
  },
  {
    image: '/images/banking.jpg',
    name: 'Banking',
    description: `Data-driven insights for agile financial services.`,
  },
  {
    image: '/images/identity.jpg',
    name: 'Identity',
    description: `Strengthening identity verification with advanced data.`,
  },
  {
    image: '/images/payments.jpg',
    name: 'Payments',
    description: `Enhancing payment systems with data-driven solutions.`,
  },
];

const SupportingSectors = () => {
  return (
    <>
      <div className="relative">
        <div className="container flex flex-col md:items-center md:text-center">
          <div className="relative max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-7xl">Supporting sectors with Insights</h2>
            <p className="mt-6 text-base md:text-lg">Generate Industry grade data insights in seconds.</p>
          </div>
        </div>
        <div className="relative -order-1 mt-10 overflow-hidden md:order-1 md:mt-20">
          <Swiper
            speed={10000}
            spaceBetween={10}
            autoplay={{ delay: 0, disableOnInteraction: true }}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3.9 },
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="group relative p-2">
                  <div className="overflow-hidden rounded-3xl">
                    <div
                      style={{ backgroundImage: `url(${item.image})` }}
                      className="layer-bg group relative min-h-[360px] rounded-lg bg-cover bg-center md:min-h-[420px]"
                    >
                      <div className="absolute inset-0 z-1 flex flex-col bg-black/50 text-white">
                        <div className="px-10 pt-12 md:px-12 md:pt-14">
                          <h2 className="text-2xl font-medium md:text-3xl">{item.name}</h2>
                        </div>
                        <div className="mt-6 translate-y-20 px-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:px-12">
                          <p className="opacity-70 md:text-lg">{item.description}</p>
                          <Link href={ACCOUNT_URL}>
                            <Button
                              variant="outlined"
                              color="white"
                              className="mt-10 translate-y-6 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                            >
                              Get started
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SupportingSectors;
