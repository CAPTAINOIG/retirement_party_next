"use client"
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

const items = [
  {
    image: "/images/financial-services.jpg",
    name: "Financial Services",
    description: `Through deep dives into market data, consumer behavior, and regulatory changes, we equip financial service providers with the information needed to develop innovative products, comply with regulations, and meet customer expectations.`
  },
  {
    image: "/images/investment-advisory.jpg",
    name: "Investment Advisory",
    description: `By evaluating market indicators, asset performance, and risk factors, we support investment advisors in offering tailored recommendations, optimizing portfolios, and helping clients achieve their financial goals.`
  },
  {
    image: "/images/lending.jpg",
    name: "Lending",
    description: `We analyze borrowing patterns, credit scores, and economic trends to help lenders assess risk and make informed lending decisions, enabling them to tailor loan offerings and optimize repayment strategies.`
  },
  {
    image: "/images/education.jpg",
    name: "Education",
    description: `By examining student performance, curriculum effectiveness, and educational trends, we offer institutions actionable insights to enhance teaching methods, identify areas for improvement, and personalize learning experiences.`
  },
  {
    image: "/images/procurement.webp",
    name: "Procurement",
    description: `Our data-driven analysis of supply chain, vendor performance, and market trends empowers businesses to streamline procurement processes, reduce costs, and ensure efficient inventory management.`
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
        <div className="relative -order-1 md:order-1 overflow-hidden mt-10 md:mt-20">
          <swiper-container ref={ swiperElRef } init={ false }>
            {
              items.map((item, i) => (
                <swiper-slide key={ i }>
                  <div className="p-2 group relative">
                    <div className="rounded-3xl overflow-hidden">
                      <div
                        style={ { backgroundImage: `url(${ item.image })` } }
                        className="min-h-[360px] bg-center md:min-h-[420px] relative layer-bg bg-cover rounded-lg group"
                      >
                        <div className="absolute inset-0 bg-black/50 z-[1] text-white flex flex-col">
                          <div className="px-10 md:px-12 py-12 md:py-14">
                            <h2 className="text-2xl md:text-3xl font-medium">
                              { item.name }
                            </h2>
                          </div>
                          <div
                            className="px-10 md:px-12 py-12 md:py-14 opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                          >
                            <p className="md:text-lg mt-auto opacity-70">
                              { item.description }
                            </p>
                          </div>
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
