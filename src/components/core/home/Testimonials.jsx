'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';

const items = [
  {
    content: 'Thank you for the insight, update and statistics you are giving us we love you.',
    name: 'Segun Ayanwale',
    position: '',
    platform: 'twitter',
  },
  {
    content: '@StatiSense Kudos to you guys,so many vital information from this timeline.',
    name: 'SirDee',
    position: '',
    platform: 'twitter',
  },
  {
    content: '@StatiSense We appreciate the good work you and your team are doing, sir.',
    name: 'Khaleel Abba',
    position: '',
    platform: 'twitter',
  },
  {
    content: `
Kudos @StatiSense for creating healthy rivalry between States of Nigeria as regards comparism of developmental data.
It would surely spur the States govt to deliver good governance & Nigerians would be able to probe governors who are lagging behind.
At the end Nigeria wins👌
`,
    name: 'Dayo Jagun💞🇳🇬🔝',
    position: '',
    platform: 'twitter',
  },
  {
    content: '@StatiSense Kudos to you. Data tells the hidden story.',
    name: 'Mystery',
    position: '',
    platform: 'twitter',
  },
  {
    content: `There's a lot of sense in your Statisense... Kudos!!!`,
    name: 'Aknoyi',
    position: '',
    platform: 'instagram',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* Heading in a centered container */}
      <div className="container sm:px-6 lg:px-8">
        <div className="!xl:mt-0 mx-auto flex max-w-4xl flex-col md:items-center md:text-center">
          <h2 className="text-4xl font-semibold tracking-tighter md:text-8xl">
            With over 3 billion <br className="block md:hidden" /> data impressions
          </h2>
          <p className="mt-6 text-lg tracking-tight">
            We are loved by businesses, consumers and governments across Africa
          </p>
        </div>
      </div>

      {/* Full-bleed carousel */}
      <div className="relative mt-16 w-full">
        <div className="relative pb-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: '.testimonials-prev', nextEl: '.testimonials-next' }}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 16 },
              640: { slidesPerView: 1.6, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 22 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="!px-4 sm:!px-6 lg:!px-8"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <TestimonialItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pointer-events-auto z-10 mt-10 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonials"
              className="testimonials-prev bg-default-100 text-default-500 hover:bg-default-200 focus:ring-default-300 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-colors focus:ring-2 focus:outline-none"
            >
              <IconChevronLeft size="22" />
            </button>
            <button
              aria-label="Next testimonials"
              className="testimonials-next bg-default-100 text-default-500 hover:bg-default-200 focus:ring-default-300 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-colors focus:ring-2 focus:outline-none"
            >
              <IconChevronRight size="22" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialItem = ({ item }) => {
  return (
    <figure className="bg-default-100 dark:bg-default-50/60 relative flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-3xl px-8 py-10 md:px-9 md:py-8">
      {item.platform === 'facebook' && (
        <IconBrandFacebook size="60" className="absolute right-6 bottom-6 text-slate-300/20" />
      )}
      {item.platform === 'twitter' && <IconBrandX size="60" className="absolute right-6 bottom-6 text-slate-300/20" />}
      {item.platform === 'instagram' && (
        <IconBrandInstagram size="60" className="absolute right-6 bottom-6 text-slate-300/20" />
      )}
      <blockquote className="relative flex-1 overflow-hidden">
        <p className="line-clamp-6 text-lg" title={item.content}>
          {item.content}
        </p>
      </blockquote>
      <figcaption className="border-default-100 relative mt-6 flex items-center justify-between border-t pt-6">
        <div>
          <div className="font-display text-base">{item.name}</div>
        </div>
      </figcaption>
    </figure>
  );
};
