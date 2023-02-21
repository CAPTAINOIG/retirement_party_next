import React, { useEffect, useRef } from 'react';
import { register } from "swiper/element/bundle";
import CategoryCard from "@/components/core/shared/CategoryCard.jsx";

register();

const categories = [
  { name: 'Budgets', image: 'https://picsum.photos/600/701' },
  { name: 'Consumption', image: 'https://picsum.photos/600/702' },
  { name: 'Education', image: 'https://picsum.photos/600/703' },
  { name: 'Entertainment', image: 'https://picsum.photos/600/704' },
  { name: 'GDP', image: 'https://picsum.photos/600/705' },
  { name: 'Oil and Gas', image: 'https://picsum.photos/600/706' },
];

const Categories = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      speed: 10000,
      spaceBetween: 0,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1.2 },
        640: { slidesPerView: 2.8 },
        1024: { slidesPerView: 3.8 }
      }
    };
    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
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
      <swiper-container ref={ swiperElRef } init={ false }>
        {
          categories.map((category) => (
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

export default Categories;
