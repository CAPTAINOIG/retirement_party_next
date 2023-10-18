import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import Button from "@/components/global/Button";
import Link from "next/link";

SwiperCore.use([Autoplay]);

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const items = [
  {
    image: "/images/insurance.jpg",
    name: "Insurance",
    description: `Personalized insurance strategies through data insights.`
  },
  {
    image: "/images/market.jpg",
    name: "Markets",
    description: `Strategic data insights for market dynamics.`
  },
  {
    image: "/images/accounting.jpg",
    name: "Accounting",
    description: `Streamlining financial management through data.`
  },
  {
    image: "/images/banking.jpg",
    name: "Banking",
    description: `Data-driven insights for agile financial services.`
  },
  {
    image: "/images/identity.jpg",
    name: "Identity",
    description: `Strengthening identity verification with advanced data.`
  },
  {
    image: "/images/payments.jpg",
    name: "Payments",
    description: `Enhancing payment systems with data-driven solutions.`
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
              Supporting sectors with Insights
            </h2>
            <p className="mt-6 text-base md:text-lg">
              Generate Industry grade data insights in seconds.
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
                          <div className="px-10 md:px-12 pt-12 md:pt-14">
                            <h2 className="text-2xl md:text-3xl font-medium">
                              { item.name }
                            </h2>
                          </div>
                          <div
                            className="mt-6 px-10 md:px-12 opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                          >
                            <p className="md:text-lg opacity-70">
                              { item.description }
                            </p>
                            <Link href={ APP_URL }>
                              <Button
                                variant="outlined" color="white"
                                className="mt-10 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500"
                              >
                                Get started
                              </Button>
                            </Link>
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
