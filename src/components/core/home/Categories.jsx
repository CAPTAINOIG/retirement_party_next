import React, { useEffect, useRef } from 'react';
import { register } from "swiper/element/bundle";
import CategoryCard from "@/components/core/shared/CategoryCard.jsx";
import categories from "@/lib/categories.js";

register();

const Categories = () => {
  const swiperElRef = useRef(null);
  const swiperElRef2 = useRef(null);

  useEffect(() => {
    const swiperParams = {
      speed: 10000,
      spaceBetween: 0,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
      breakpoints: {
        0: { slidesPerView: 1.2 },
        640: { slidesPerView: 2.8 },
        1024: { slidesPerView: 3.8 }
      }
    };
    Object.assign(swiperElRef.current, swiperParams);
    Object.assign(swiperElRef2.current, { ...swiperParams, speed: 8000 });
    swiperElRef.current.initialize();
    swiperElRef2.current.initialize();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-4xl sm:text-center mb-16">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
            Discover the future of your market
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Browse through exclusive reporting that makes you smarter
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <swiper-container ref={ swiperElRef } init={ false }>
          {
            categories.slice(0, categories.length / 2).map((category) => (
              <swiper-slide key={ category.name }>
                <div className="px-4">
                  <CategoryCard category={ category }/>
                </div>
              </swiper-slide>
            ))
          }
        </swiper-container>
        <swiper-container ref={ swiperElRef2 } init={ false }>
          {
            categories.slice(categories.length / 2, categories.length).map((category) => (
              <swiper-slide key={ category.name }>
                <div className="px-4">
                  <CategoryCard category={ category }/>
                </div>
              </swiper-slide>
            ))
          }
        </swiper-container>
      </div>
    </div>
  );
};

export default Categories;
