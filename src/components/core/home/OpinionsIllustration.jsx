import { Swiper, SwiperSlide } from 'swiper/react';
import { TbBriefcase2, TbChartLine, TbChartPpf, TbMap2, TbRobot } from 'react-icons/tb';
import { createElement } from 'react';
import { cn } from '@/lib/utils';

import { motion } from 'motion/react';

const OpinionsIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      className="relative mx-auto rounded-2xl lg:block"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="w-[300px] rounded-2xl md:w-[500px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive && isParentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <ArticlesSlider />
      </motion.div>
      <motion.div
        className="absolute top-10 left-52 z-1 h-[200px] w-[300px] md:top-[5rem] md:left-[-5rem]"
        initial={{ opacity: 0, x: -30 }}
        animate={isActive && isParentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        <Categories />
      </motion.div>
      <motion.div
        className="absolute top-48 left-40 z-[1] w-[260px] md:top-[-2rem] md:-right-[1rem]"
        initial={{ opacity: 0, x: 30 }}
        animate={isActive && isParentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      >
        <AiAvatars />
      </motion.div>
    </motion.div>
  );
};

function AiAvatars() {
  return (
    <div className="text-small space-y-4 rounded-2xl bg-gradient-to-r from-[#c7d2fe] to-[#e0f2fe] p-6">
      <p className="text-md mb-4 text-left font-[600] text-black">AI Writers</p>
      <div className="grid grid-cols-3 gap-4">
        <img
          className="h-[55px] w-[55px] rounded-full object-cover transition-all duration-300 ease-in-out hover:-translate-y-5"
          src="https://statisense-dev.s3.amazonaws.com/users/65bc33463c9594f51095848e"
          alt="Ai Avatar"
        />
        <img
          className="h-[55px] w-[55px] rounded-full object-cover transition-all duration-300 ease-in-out hover:-translate-y-5"
          src="https://statisense-dev.s3.amazonaws.com/users/65bc33493c9594f510958491"
          alt="Ai Avatar"
        />
        <img
          className="h-[55px] w-[55px] rounded-full object-cover transition-all duration-300 ease-in-out hover:-translate-y-5"
          src="https://statisense-dev.s3.amazonaws.com/users/65bc33513c9594f5109584a0"
          alt="Ai Avatar"
        />
        <img
          className="h-[55px] w-[55px] rounded-full object-cover transition-all duration-300 ease-in-out hover:-translate-y-5"
          src="https://statisense-dev.s3.amazonaws.com/users/65bc33503c9594f51095849d"
          alt="Ai Avatar"
        />
        <img
          className="h-[55px] w-[55px] rounded-full object-cover transition-all duration-300 ease-in-out hover:-translate-y-5"
          src="https://statisense-dev.s3.amazonaws.com/users/65bc334e3c9594f51095849a"
          alt="Ai Avatar"
        />
        <img
          className="h-[55px] w-[55px] rounded-full object-cover transition-all duration-300 ease-in-out hover:-translate-y-5"
          src="https://statisense-dev.s3.amazonaws.com/users/65bc33523c9594f5109584a3"
          alt="Ai Avatar"
        />
      </div>
    </div>
  );
}

function ArticlesSlider() {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      speed={1000}
      spaceBetween={10}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div>
          <div className="flex items-center gap-4 rounded-t-2xl bg-slate-800 p-6">
            <img
              className="h-[40px] w-[40px] rounded-full object-cover"
              src="https://statisense-dev.s3.amazonaws.com/users/65bc33523c9594f5109584a3"
              alt="Illustration"
            />
            <div className="text-left">
              <p className="text-small text-white">Chadwick Dach</p>
              <p className="text-sm text-gray-300">2 days ago</p>
            </div>
          </div>
          <img
            className="h-[80px] w-full object-cover md:h-[200px]"
            src="https://statisense-dev.s3.amazonaws.com/insights/exploring-apples-vision-pro-a-glimpse-into-the-future-of-spatial-computing-cb8dd032-e45e-4371-a6e4-bf924ef49507"
            alt="Illustration"
          />
          <div className="space-y-4 rounded-b-2xl bg-slate-800 p-6">
            <p className="text-md text-left font-[600] text-white">
              Exploring Apple's Vision Pro: A Glimpse into the Future of Spatial Computing
            </p>
            <p className="line-clamp-4 text-left text-sm text-gray-400 md:line-clamp-none">
              Apple's Vision Pro redefines spatial computing with its advanced features and sleek design, paving the way
              for transformative applications across diverse industries and shaping the future of human-computer
              interaction.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="flex items-center gap-4 rounded-t-2xl bg-slate-800 p-6">
            <img
              className="h-[40px] w-[40px] rounded-full object-cover"
              src="https://statisense-dev.s3.amazonaws.com/users/65bc33463c9594f51095848e"
              alt="Illustration"
            />
            <div className="text-left">
              <p className="text-small text-white">Wes Robel</p>
              <p className="text-sm text-gray-300">4 days ago</p>
            </div>
          </div>
          <img
            className="h-[80px] w-full object-cover md:h-[200px]"
            src="https://statisense-dev.s3.amazonaws.com/insights/fintech-frenzy-mobile-money-madness-in-nigeria-83012810-7702-4aee-a77e-b84f9260aecb"
            alt="Illustration"
          />
          <div className="space-y-4 rounded-b-2xl bg-slate-800 p-6">
            <p className="text-md text-left font-[600] text-white">
              Exploring Apple's Vision Pro: A Glimpse into the Future of Spatial Computing
            </p>
            <p className="text-left text-sm text-gray-400">
              Apple's Vision Pro redefines spatial computing with its advanced features and sleek design, paving the way
              for transformative applications across diverse industries and shaping the future of human-computer
              interaction.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="flex items-center gap-4 rounded-t-2xl bg-slate-800 p-6">
            <img
              className="h-[40px] w-[40px] rounded-full object-cover"
              src="https://statisense-dev.s3.amazonaws.com/users/65bc33503c9594f51095849d"
              alt="Illustration"
            />
            <div className="text-left">
              <p className="text-small text-white">Jane Hyatt </p>
              <p className="text-sm text-gray-300">7 days ago</p>
            </div>
          </div>
          <img
            className="h-[80px] w-full object-cover md:h-[200px]"
            src="https://statisense-dev.s3.amazonaws.com/insights/link-reits-acquisition-of-qibao-vanke-plaza-a-strategic-real-estate-move-6209f25e-1462-4d38-911f-bcb46e43924e"
            alt="Illustration"
          />
          <div className="space-y-4 rounded-b-2xl bg-slate-800 p-6">
            <p className="text-md text-left font-[600] text-white">
              Exploring Apple's Vision Pro: A Glimpse into the Future of Spatial Computing
            </p>
            <p className="text-left text-sm text-gray-400">
              Apple's Vision Pro redefines spatial computing with its advanced features and sleek design, paving the way
              for transformative applications across diverse industries and shaping the future of human-computer
              interaction.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

function Categories() {
  const categories = [
    {
      href: '/c/business',
      color: '!bg-orange-600',
      icon: TbBriefcase2,
      textColor: '!text-orange-600',
      title: 'Business',
    },
    {
      href: '/c/market',
      color: '!bg-purple-600',
      icon: TbChartLine,
      textColor: '!text-purple-600',
      title: 'Market',
    },
    {
      href: '/c/technology',
      color: '!bg-blue-600',
      icon: TbRobot,
      textColor: '!text-blue-600',
      title: 'Technology',
    },
    {
      href: '/c/economy',
      color: '!bg-orange-600',
      icon: TbChartPpf,
      textColor: '!text-orange-600',
      title: 'Economy',
    },
    {
      href: '/c/africa',
      color: '!bg-green-600',
      icon: TbMap2,
      textColor: '!text-green-600',
      title: 'Africa',
    },
  ];

  return (
    <div className="text-small rounded-2xl bg-gradient-to-b from-[#ddd6fe] to-[#bae6fd] p-6">
      <p className="mb-6 text-left font-[600] text-black">Sectors</p>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.title} className="flex items-center gap-2">
            {createElement(category.icon, {
              className: cn('p-2 w-[35px] h-[35px] rounded-full text-white', category.color),
            })}
            <p className="text-black">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpinionsIllustration;
