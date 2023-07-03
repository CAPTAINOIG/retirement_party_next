"use client"
import React from 'react';
import { register } from "swiper/element/bundle";
import { useGetCategoriesQuery } from "@/api/infographics.js";
import CategoriesSlides from "@/components/core/home/CategoriesSlides.jsx";

register();

const Categories = () => {
  const { data: { categories = [] } = {}, isLoading: isCategoriesLoading } = useGetCategoriesQuery();

  return (
    <div>
      <div className="container mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
          Popular categories
        </h2>
        <p className="mt-4 text-base md:text-lg">
          See trending categories across our channels
        </p>
      </div>
      {
        isCategoriesLoading ? (
          <div className="space-y-4 md:space-y-6">
            {
              Array(2).fill(null).map((_, i) => (
                <div key={ i }>
                  <div className="hidden md:grid grid-cols-4 gap-8 px-4">
                    <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                    <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                    <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                    <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                  </div>
                  <div className="grid md:hidden grid-cols-5 gap-5 px-4">
                    <div className="bg-zinc-200 w-full h-32 col-span-3 rounded-xl"/>
                    <div className="bg-zinc-200 w-full h-32 col-span-2 rounded-xl"/>
                  </div>
                </div>
              ))
            }
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
