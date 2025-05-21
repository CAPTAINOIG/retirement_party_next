
import React, { useEffect, useState } from 'react';
// import Ratings from "@/components/global/Ratings";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import Business from '@/components/core/shared/showcase/Business';
import Tax from '@/components/core/shared/showcase/Tax';
import Credit from '@/components/core/shared/showcase/Credit';
import Report from '@/components/core/shared/showcase/Report';
import Technology from '@/components/core/shared/showcase/Technology';
import Analytics from '@/components/core/shared/showcase/Analytics';
import Politics from '@/components/core/shared/showcase/Politics';
import Marketing from '@/components/core/shared/showcase/Marketing';

const targetAudience = [
  {
    name: 'Business',
  },
  {
    name: 'Tax',
  },
  {
    name: 'Credit',
  },
  {
    name: 'Report',
  },
  {
    name: 'Technology',
  },
  {
    name: 'Analytics',
  },
  {
    name: 'Politics',
  },
  {
    name: 'Marketing',
  },
].map((item, i) => ({ ...item, id: i }));

const Templates = () => {
  SwiperCore.use([Autoplay]);
  const [swiper, setSwiper] = useState(null);
  const [realIndex, setRealIndex] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setRealIndex(swiper?.realIndex ?? 0); // Use optional chaining
      });
    }
  }, [swiper]);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="container relative mx-auto py-[70px] md:block md:py-[160px]">
        <div className="grid grid-cols-12">
          <div className="relative col-span-12">
            <h2 className="md:max-w-4xl text-[3rem] font-bold leading-[1.1] text-slate-800 md:text-[5rem]">
              Templates for absolutely anything
            </h2>
            <p className="py-8 text-[18px] text-slate-500">
              We got you cover with different  infographic  <br /> to represent your business data.
              {/* Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Assumenda, nobis? */}
            </p>
            <div className="my-8 text-center">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                speed={1000}
                spaceBetween={20}
                modules={[Pagination]}
                breakpoints={{
                  0: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  470: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                className="mySwiper"
                onSwiper={(swiper) => setSwiper(swiper)}
                onSlideChange={() => setRealIndex(swiper?.realIndex)}
              >
                {targetAudience.map((target) => (
                  <SwiperSlide key={target.id}>
                    <div
                      className={`${realIndex === target.id ? 'bg-[#282A30] text-white' : 'bg-slate-200 text-black'} rounded p-4 shadow md:p-4`}
                    >
                      <p className="text-center">{target.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {realIndex === 0 && <Business />}
            {realIndex === 1 && <Tax />}
            {realIndex === 2 && <Credit />}
            {realIndex === 3 && <Report />}
            {realIndex === 4 && <Technology />}
            {realIndex === 5 && <Analytics />}
            {realIndex === 6 && <Politics />}
            {realIndex === 7 && <Marketing />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
