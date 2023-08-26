"use client"
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/global/Button";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

const items = [
  {
    image: "/images/financial-services.jpg",
    name: "Financial Services",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
  {
    image: "/images/investment-advisory.jpg",
    name: "Investment Advisory",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
  {
    image: "/images/lending.jpg",
    name: "Lending",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
  {
    image: "/images/education.jpg",
    name: "Education",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
  {
    image: "/images/procurement.webp",
    name: "Procurement",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
];

const SupportingSectors = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      speed: 10000,
      spaceBetween: 10,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        640: { slidesPerView: 1.5 },
        1024: { slidesPerView: 3.9 }
      }
    };
    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="container flex flex-col md:items-center md:text-center">
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
              Supporting sectors with AI insights
            </h2>
            <p className="mt-6 text-base md:text-lg">
              Insights for every team and business
            </p>
          </div>
        </div>
        <div className="relative -order-1 md:order-1 overflow-hidden mt-20">
          <swiper-container ref={ swiperElRef } init={ false }>
            {
              items.map((item, i) => (
                <swiper-slide key={ i }>
                  <div className="p-2 group relative">
                    <div className="rounded-3xl overflow-hidden">
                      <div
                        style={ { backgroundImage: `url(${ item.image })` } }
                        className="min-h-[360px] bg-cover bg-center md:min-h-[420px] relative layer-bg bg-cover rounded-lg group"
                      >
                        <div
                          className="absolute inset-0 bg-black/50 z-[1] px-10 md:px-12 py-12 md:py-14 text-white"
                        >
                          <h2 className="text-2xl md:text-3xl font-medium">
                            { item.name }
                          </h2>
                          <p className="md:text-lg mt-2 opacity-80">
                            Lorem ipsum dolor sit.
                          </p>
                          <Button
                            variant="outlined" color="white"
                            className="mt-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500"
                          >
                            Get started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              ))
            }
          </swiper-container>
        </div>
      </div>
    </>
  );
};

export default SupportingSectors;
