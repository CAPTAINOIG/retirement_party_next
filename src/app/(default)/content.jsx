'use client';
import React, {useEffect, useRef} from 'react';
import BigIdeas from '@/components/core/home/BigIdeas';
import SupportingSectors from '@/components/core/home/SupportingSectors';
import Categories from '@/components/core/home/Categories';
import InsightsOnTheGo from '@/components/core/home/InsightsOnTheGo';
import Newsletter from '@/components/core/home/Newsletter';
import Testimonials from '@/components/core/home/Testimonials';
import BeautifulStory from '@/components/core/home/BeautifulStory';
import HowImmortalityWorks from '@/components/core/home/HowImmortalityWorks';
import {gsap} from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {FaVolleyballBall} from "react-icons/fa";
import Parrots from "@/components/core/home/Parrots";
import Immortal from "@/components/core/home/Immortal";

const HomePageContent = () => {
  gsap.registerPlugin(MotionPathPlugin);
  const ballRef = useRef(null);

  useEffect(() => {
    gsap.to(ballRef.current, {
      motionPath: {
        path: "#wavePath",
        align: "#wavePath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      duration: 10,
      repeat: -1,
      yoyo: false,
      ease: "linear"
    });
  }, []);

  return (
    <>
      <div className="bg-slate-100 text-black">
        <BeautifulStory/>
        {/* <Hero /> */}
        <div className="relative overflow-hidden py-28 md:py-44 md:pb-48">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1004.85 307.16"
              className="absolute md:bottom-[-2rem] bottom-[-1px] w-full md:block"
            >
              <path
                id="wavePath"
                fill="#fff"
                d="M3,89.68c37.73-12,79.5,4.37,110,29.65,42.93,35.58,74.85,82.36,117.51,118.21,49.21,41.36,100.59,47.74,162.07,33.7a482.66,482.66,0,0,0,147.35-60.68c45.7-28.47,79.81-71,113.44-112.22,27.11-33.26,58.85-66.83,99.61-82.93,33-13,72-14.5,106.91-15.25a706.19,706.19,0,0,1,145,12q-2.49,147.5-5,295c0-.15-464.42-.93-506.65-1Q246.6,305.54,0,305.07,1.19,197.48,2.38,89.86Z"
              />
            </svg>
          </div>
          <div className="space-y-28 md:space-y-56">
            <BigIdeas/>
            {/* <ConvertYourData /> */}
          </div>

          <div
            ref={ballRef}
            className="absolute md:block hidden"
          >
            <FaVolleyballBall size="30px" />
          </div>
        </div>
        <div className="bg-white pt-20 md:pt-24 relative z-10">
          <div className="absolute w-full bottom-0 left-0 h-[10%] bg-black"/>
          <Parrots/>
        </div>
        {/* <HowItWorks /> */}
        <Immortal/>
        <div className="space-y-32 bg-gradient-to-r from-[#F0FDF4] to-[#EFF6FF] py-28 md:space-y-48 md:pb-48 md:pt-24">
          <SupportingSectors/>
        </div>
        <HowImmortalityWorks/>
        <div className="space-y-24 overflow-hidden bg-white py-28 md:space-y-36 md:py-32">
          <Categories/>
          <InsightsOnTheGo/>
        </div>
        <div className="relative overflow-hidden">
          <Newsletter/>
          <div className="absolute -bottom-10 left-0 z-20 hidden w-full xl:block">
            <img alt="curve" src="/images/curve-3.svg"/>
          </div>
        </div>
        <div className="relative bg-white py-28 md:py-40">
          <Testimonials/>
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
