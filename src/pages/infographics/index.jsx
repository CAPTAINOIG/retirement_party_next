import React, { useEffect, useState } from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import CategoryCard from "@/components/core/shared/CategoryCard.jsx";
import PageHeader from "@/components/core/shared/PageHeader.jsx";
import { useGetCategoriesQuery } from "@/lib/api/infographics.js";
import HeroSearch from "@/components/core/home/HeroSearch.jsx";
import { useRouter } from "next/router";
import SearchResults from "@/components/core/infographics/SearchResults.jsx";

const Infographics = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const { data: { categories = [] } = {}, isLoading: isCategoriesLoading } = useGetCategoriesQuery();

  useEffect(() => {
    if (!router.isReady) return;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const q = urlParams.get('q');
    setQuery(q || '');
  }, [router.query, router.isReady]);

  return (
    <>
      <PageHeader
        title="Search for infographics"
        append={ <HeroSearch className="mt-12 mb-4 w-full"/> }
      />

      <div className="mt-24">
        <div className="container">
          {
            isCategoriesLoading ? (
              <>
                <div className="grid grid-cols-3 gap-8">
                  <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                  <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                  <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                  <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                  <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                  <div className="bg-zinc-200 w-full h-32 rounded-xl"/>
                </div>
              </>
            ) : (
              <>
                {
                  !!categories.length ? (
                    <>
                      {
                        !query ? (
                          <div className="grid md:grid-cols-3 gap-8">
                            {
                              categories.map((category) => (
                                <CategoryCard category={ category } key={ category.name }/>
                              ))
                            }
                          </div>
                        ) : (
                          <SearchResults query={ query }/>
                        )
                      }
                    </>
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
      </div>
    </>
  );
};

Infographics.Layout = DefaultLayout;

export default Infographics;
