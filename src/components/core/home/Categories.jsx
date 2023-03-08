import React from 'react';
import { register } from "swiper/element/bundle";
import { useGetCategoriesQuery } from "@/lib/api/infographics.js";
import CategoriesSlides from "@/components/core/home/CategoriesSlides.jsx";

register();

const Categories = () => {
  const { data: { categories = [] } = {}, isLoading: isCategoriesLoading } = useGetCategoriesQuery();

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
      {
        isCategoriesLoading ? (
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-8 px-10">
              <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
              <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
              <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
              <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
            </div>
            <div className="grid grid-cols-4 gap-10 px-10">
              <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
              <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
              <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
              <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
            </div>
          </div>
        ) : (
          <>
            {
              !!categories.length ? (
                <CategoriesSlides categories={ categories }/>
              ) : (
                <div className="px-10 py-10 text-center opacity-50">
                  <p className="text-lg italic">No categories added yet</p>
                </div>
              )
            }
          </>
        )
      }
    </div>
  );
};

export default Categories;
