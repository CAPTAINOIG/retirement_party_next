import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { id } from "date-fns/locale";

const SwiperSection = () => {
    const infographics = [
        {id:1, imgSrc: "https://i.ibb.co/Pw97NvJ/WIFE-BEATING-HUSBAND-WHY-Women-Justifying.png"},
        {id:2, imgSrc: "https://i.ibb.co/sjBwg4f/VEHICLES-INVOLVED-IN-ROAD-ACCIDENTS-2021.png"},
        {id:3, imgSrc: "https://i.ibb.co/j3TJWdh/NIGERIAN-WOMEN-WITH-ONE-OR-MORE-100.jpg"},
        {id:4, imgSrc: "https://i.ibb.co/2MzHxYH/NIGERIAN-CONSUMPTION-EXPENDITURE-PATTERN-2019-100.jpg"},
    ]
  SwiperCore.use([Autoplay]);
  return (
    <div className="relative">
      <div className="container max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight md:leading-[1.2]">
              Analyse your bank statements
            </h2>
            <p className="mt-6 text-base md:text-lg opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              eveniet harum omnis possimus sit tempora unde!
            </p>
          </div>
          <div className="relative -order-1 md:order-1">
            <Swiper
              loop
              slidesPerView={1.5}
              spaceBetween={40}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                470: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                760: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
              className="showcase"
            >
              <div className="swiper-pagination"></div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {infographics.map((i) => {
                    return (
                      <SwiperSlide key={i.id}>
                        <div className="p-2 swiper-slide">
                          <div className="item">
                            <div
                              style={{
                                backgroundImage: `url(${i.imgSrc})`,
                              }}
                              className="min-h-[400px] bg-cover rounded-lg"
                            >
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSection;
