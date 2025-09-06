import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FlagIcon = ({ countryCode, className = '' }) => {
  // Country colors for visual distinction
  const countryColors = {
    NG: 'bg-green-600 text-white',
    ZA: 'bg-blue-600 text-white',
    EG: 'bg-red-600 text-white',
    US: 'bg-blue-700 text-white',
    GB: 'bg-red-700 text-white',
    JP: 'bg-red-500 text-white',
  };

  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${countryColors[countryCode] || 'bg-gray-500 text-white'} ${className}`}
    >
      {countryCode}
    </div>
  );
};

const indices = [
  {
    name: 'NGX All-Share',
    country: 'Nigeria',
    countryCode: 'NG',
    value: '104,562.45',
    change: '+2.34%',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'JSE All Share',
    country: 'South Africa',
    countryCode: 'ZA',
    value: '78,234.12',
    change: '+1.87%',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'EGX 30',
    country: 'Egypt',
    countryCode: 'EG',
    value: '24,567.89',
    change: '-0.45%',
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'S&P 500',
    country: 'United States',
    countryCode: 'US',
    value: '5,234.67',
    change: '+0.92%',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'FTSE 100',
    country: 'United Kingdom',
    countryCode: 'GB',
    value: '7,845.23',
    change: '+1.23%',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    name: 'Nikkei 225',
    country: 'Japan',
    countryCode: 'JP',
    value: '39,567.12',
    change: '-0.78%',
    color: 'from-red-500 to-red-600',
  },
];

const MarketIndicesIllustration = ({ isActive, isParentInView }) => {
  const IndexCard = ({ index, i }) => (
    <motion.div
      key={index.name}
      initial={{ opacity: 0, y: 20 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: i * 0.05 + 0.1, ease: 'easeOut' }}
      className="p-4"
    >
      <div className="mb-4">
        <FlagIcon countryCode={index.countryCode} />
      </div>
      <h4 className="mb-1 text-xl font-bold">{index.name}</h4>
      <p className="text-default-600 mb-2 text-sm">{index.country}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">{index.value}</span>
        <span
          className={`text-sm font-medium ${index.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}
        >
          {index.change}
        </span>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-default-100 dark:bg-default-50 rounded-3xl p-8 overflow-hidden"
    >
      {/* Desktop Grid Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {indices.map((index, i) => (
            <IndexCard key={index.name} index={index} i={i} />
          ))}
        </div>
      </div>

      {/* Mobile Carousel Layout */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          className="!pb-12"
        >
          {indices.map((index, i) => (
            <SwiperSlide key={index.name}>
              <IndexCard index={index} i={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default MarketIndicesIllustration;
