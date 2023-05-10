import React, { useEffect, useRef } from "react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);

const items = [
  {
    image: "/images/banking.webp",
    name: "Banking",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
  {
    image: "/images/lending.webp",
    name: "Lending",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
  {
    image: "/images/recruitment.webp",
    name: "Recruitment",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
  {
    image: "/images/identity.webp",
    name: "Identity",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum doloremque et fugiat hic odit possimus quia sed sequi tempora?`
  },
];

const SwiperSection = () => {
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
        0: { slidesPerView: 1.1 },
        640: { slidesPerView: 1.2 },
        1024: { slidesPerView: 1.3 }
      }
    };
    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
                Profile your customers for credibility in 5mins.
              </h2>
              <p className="mt-6 text-base md:text-lg">
                Over 300 configurable nodes on Cashflow insights, psycometry, identity credibility, social scoring etc
              </p>
            </div>
            <div className="relative -order-1 md:order-1 overflow-hidden">
              <swiper-container ref={ swiperElRef } init={ false }>
                {
                  items.map((item, i) => (
                    <swiper-slide key={ i }>
                      <div className="p-2 group relative">
                        <div className="item rounded-2xl overflow-hidden">
                          <div
                            style={ { backgroundImage: `url(${ item.image })` } }
                            className="min-h-[400px] md:min-h-[450px] relative layer-bg bg-cover rounded-lg"
                          >
                            <div
                              className="absolute inset-0 bg-black/10 group-hover:bg-black/50 z-[1] px-12 py-14 text-white transition-all duration-300"
                            >
                              <h2 className="text-3xl font-medium">
                                { item.name }
                              </h2>
                              <p className="text-lg mt-5 transition-all duration-300">{ item.description }</p>
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
        </div>
      </div>
    </>
  );
};

export default SwiperSection;
