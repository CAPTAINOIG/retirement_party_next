"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import { useGetCategoriesQuery } from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import InfographicsSearchInput from "@/components/core/infographics/InfographicsSearchInput";
import TrendingInfographics from "@/components/core/home/TrendingInfographics";
import classNames from "classnames";
import CategoryCard from "@/components/core/infographics/CategoryCard";
import SearchResults from "@/components/core/infographics/SearchResults";
import { IconSparkles } from "@tabler/icons-react";
import IconButton from "@/components/global/IconButton";
import Chat from "@/components/core/shared/Chat";

const InfographicsPage = () => {
  const params = useSearchParams();
  const [query, setQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { data: { categories = [] } = {}, isLoading: isCategoriesLoading } = useGetCategoriesQuery();

  useEffect(() => {
    setQuery(params.get('q') || '');
  }, [params]);

  return (
    <>
      <PageHeader
        title="Search for insights"
        append={ <InfographicsSearchInput className="mt-6 md:mt-10 mb-4 w-full"/> }
      />
      <IconButton
        onClick={ () => setIsChatOpen(true) } className="fixed bottom-8 md:bottom-12 right-8 md:right-12 z-50"
        rounded variant="filled" color="primary" size="xl" icon={ <IconSparkles size="32"/> }
      />
      <div className="py-20 md:py-32">
        {
          !query && (
            <TrendingInfographics/>
          )
        }
        <div className={ classNames('container', { 'mt-20 md:mt-28': !query }) }>
          {
            isCategoriesLoading ? (
              <>
                <div className="grid md:grid-cols-3 gap-8">
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
                          <>
                            <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16">
                              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">
                                Browse by category
                              </h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                              {
                                categories.map((category) => (
                                  <CategoryCard category={ category } key={ category.name }/>
                                ))
                              }
                            </div>
                          </>
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

      <Chat
        isOpen={ isChatOpen }
        onClose={ () => setIsChatOpen(false) }
      />
    </>
  );
};

export default InfographicsPage;
