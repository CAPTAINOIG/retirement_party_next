import React, { useEffect, useRef } from "react";
import Button from "@/components/global/Button.jsx";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const links = [
  'https://statisense.s3.amazonaws.com/production/infographics/6457f84de448741abd72d5d3',
  'https://statisense.s3.amazonaws.com/production/infographics/6457f853e448741abd72d5d6',
  'https://statisense.s3.amazonaws.com/production/infographics/6457f85de448741abd72d5d9',
  'https://statisense.s3.amazonaws.com/production/infographics/6457f866e448741abd72d5f1',
  'https://statisense.s3.amazonaws.com/production/infographics/6457f862e448741abd72d5e2'
];

const InsightsOnTheGo = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      spaceBetween: 10,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    };
    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
  }, []);

  return (
    <div className="overflow-hidden md:overflow-visible">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1] max-w-lg">
              Get insights on various topics on the go.
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-sm">
              Chat with Lens for insights on topics like economy, business, education, election etc
            </p>
            <Link href={ '/infographics' }>
              <Button color="black" className="mt-12" size="lg" rightIcon={ <IconArrowRight/> }>
                Let's go
              </Button>
            </Link>
          </div>
          <div
            className="relative -order-1 md:order-1 flex md:justify-center w-full overflow-hidden md:overflow-visible py-4"
          >
            <div className="relative mx-auto w-full sm:w-[420px]">
              <div className="relative z-[3]">
                <swiper-container ref={ swiperElRef } init={ false } effect="cards" grab-cursor="true">
                  {
                    links.map((link, i) => (
                      <swiper-slide key={ i }>
                        <img
                          src={ link } alt="infographic"
                          className="w-full h-[360px] sm:h-[500px] object-cover object-left-top rounded-lg shadow-md"
                        />
                      </swiper-slide>
                    ))
                  }
                </swiper-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsOnTheGo;
