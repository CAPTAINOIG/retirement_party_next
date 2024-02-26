import React from 'react';
import { register } from 'swiper/element/bundle';
import { useGetCategoriesQuery } from '@/api/insights.js';
import CategoriesSlides from '@/components/core/home/CategoriesSlides.jsx';

register();

const Categories = () => {
  const { data: { categories = [] } = {}, isLoading: isCategoriesLoading } = useGetCategoriesQuery();

  return (
    <div>
      <div className="container mb-12 flex flex-col items-center justify-center md:mb-16">
        <h2 className="text-4xl font-medium tracking-tight text-gray-900 md:text-6xl">Popular public data insights.</h2>
        <p className="mt-4 text-base md:text-lg">
          Review some work on public data from the past, as we prepare you for the future.
        </p>
      </div>
      {isCategoriesLoading ? (
        <div className="space-y-4 md:space-y-6">
          {Array(2)
            .fill(null)
            .map((_, i) => (
              <div key={i}>
                <div className="hidden grid-cols-4 gap-8 px-4 md:grid">
                  <div className="h-32 w-full rounded-3xl bg-slate-200" />
                  <div className="h-32 w-full rounded-3xl bg-slate-200" />
                  <div className="h-32 w-full rounded-3xl bg-slate-200" />
                  <div className="h-32 w-full rounded-3xl bg-slate-200" />
                </div>
                <div className="grid grid-cols-5 gap-5 px-4 md:hidden">
                  <div className="col-span-3 h-32 w-full rounded-3xl bg-slate-200" />
                  <div className="col-span-2 h-32 w-full rounded-3xl bg-slate-200" />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <>
          {!!categories.length ? (
            <CategoriesSlides categories={categories} />
          ) : (
            <div className="px-10 py-10 text-center opacity-50">
              <p className="text-lg italic">No categories added yet</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Categories;
