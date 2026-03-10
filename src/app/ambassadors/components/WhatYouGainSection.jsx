'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const svgImages = [
  'Access to network-07.svg',
  'Community building skills-05.svg',
  'Opportunity to earn-04.svg',
  'Real leadership-02.svg',
  'Real world tech-03.svg',
  'Resume boosting achievements-06.svg',
];

const WhatYouGainSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="bg-background text-foreground relative w-full overflow-hidden py-24">
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container mx-auto px-6 md:px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            What You'll Gain
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto mt-8 max-w-3xl text-center text-xl leading-relaxed tracking-tight md:text-2xl"
        >
          Being an Immortal Student Partner is more than a campus role.
        </motion.p>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-12"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={16}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            navigation={{
              prevEl: '.swiper-btn-prev',
              nextEl: '.swiper-btn-next',
            }}
            pagination={{
              el: '.swiper-custom-pagination',
              clickable: true,
              renderBullet: (_index, className) => `<span class="${className} custom-bullet"></span>`,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            speed={500}
            className="wyg-swiper"
          >
            {svgImages.map((image, index) => (
              <SwiperSlide key={index} className="wyg-slide">
                <div className="wyg-card">
                  <img
                    src={`/images/svg/${image}`}
                    alt={image.replace(/[-_]/g, ' ').replace('.svg', '')}
                    className="wyg-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev Arrow */}
          <button
            className="swiper-btn-prev"
            aria-label="Previous"
            style={{
              position: 'absolute',
              left: '-28px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(255,255,255,0.12)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            className="swiper-btn-next"
            aria-label="Next"
            style={{
              position: 'absolute',
              right: '-28px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(255,255,255,0.12)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>

        {/* Custom Dot Navigation */}
        <div className="swiper-custom-pagination mt-10 flex justify-center gap-2" />
      </div>

      <style>{`
        /* Non-active slides: dimmed + scaled down */
        .wyg-swiper .wyg-slide {
          opacity: 0.45;
          transform: scale(0.93);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        /* Active (center) slide: full brightness + slightly larger */
        .wyg-swiper .swiper-slide-active.wyg-slide {
          opacity: 1;
          transform: scale(1.04);
        }

        /* Card styling */
        .wyg-card {
          border-radius: 20px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: background 0.5s ease, border-color 0.5s ease;
          width: 100%;
        }

        .wyg-swiper .swiper-slide-active .wyg-card {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.18);
        }

        /* Image */
        .wyg-img {
          height: clamp(300px, 32vw, 480px);
          width: 100%;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 767px) {
          .wyg-img {
            height: clamp(300px, 65vw, 460px);
          }
        }

        /* Nav buttons */
        .swiper-btn-prev:hover,
        .swiper-btn-next:hover {
          background: rgba(255, 255, 255, 0.22) !important;
        }

        /* Pagination dots */
        .swiper-custom-pagination {
          display: flex !important;
          justify-content: center;
          gap: 8px;
          align-items: center;
        }

        .custom-bullet {
          display: inline-block;
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.3);
          width: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-bullet.swiper-pagination-bullet-active {
          background: #ffffff;
          width: 28px;
        }
      `}</style>
    </div>
  );
};

export default WhatYouGainSection;
