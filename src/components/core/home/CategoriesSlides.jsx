import React, { useEffect, useRef } from 'react';
import CategoryCard from "@/components/core/infographics/CategoryCard.jsx";

const CategoriesSlides = ({ categories }) => {
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
  );
};

export default CategoriesSlides;
