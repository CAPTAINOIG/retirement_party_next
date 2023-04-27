import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconBookmark } from "@tabler/icons-react";

const SwiperSection = () => {
  const infographics = [
    {
      id: 1,
      imgSrc:
        "https://i.ibb.co/d6KHNZ3/serene-black-man-resting-park-listening-music.jpg",
      category: "Social",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/QD7vLLM/budget.jpg",
      category: "Budget",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/sH50HRh/stock-market.png",
      category: "Stocks",
    },
    { id: 4, imgSrc: "https://i.ibb.co/6mRxrjs/igr.jpg", category: "IGR" },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight md:leading-[1.2]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="mt-6 text-base md:text-lg opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti eveniet harum omnis possimus sit tempora unde!
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
                                className="min-h-[400px] relative layer-bg bg-cover rounded-lg"
                              >
                                <div className="layer-one">
                                  <IconBookmark
                                    size="24"
                                    className="text-[#1f2937] top-4 left-4 absolute"
                                  />
                                </div>
                                <div className="layer-two">
                                  <h2 className="absolute bottom-8 text-black right-8 blocked-text text-2xl">
                                    {i.category}
                                  </h2>
                                </div>
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
      <style jsx>{`
        .layer-one {
          position: absolute;
          height: 100%;
          background: #fff;
          transition: 1s ease;
          width: 70px;
          clip-path: polygon(0 0, 100% 0, 25% 100%, 0 100%);
          opacity: 0;
          transform: translateX(-40px);
          background-color: #ebeff4;
          opacity: 0;
          border-radius: 0px 0px 8px 8px;
        }
        .layer-two {
          position: absolute;
          height: 100%;
          background: #fff;
          transition: 1s ease;
          top: 0;
          right: 0;
          width: 200px;
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
          transform: translateX(200px);
          background-color: #ebeff4;
          opacity: 0;
          border-radius: 8px 8px 0px 0px;
        }
        .layer-bg:hover .layer-one {
          transform: translateX(-5px);
          opacity: 1;
        }
        .layer-bg:hover .layer-two {
          transform: translateX(5px);
          opacity: 1;
        }
        .blocked-text {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #1f2937;
          -webkit-background-clip: text;
          font-family: Khand, sans-serif;
          font-weight: 700;
          line-height: 1;
          margin: auto;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default SwiperSection;
