import React from 'react';
import PageHeader from '@/components/core/shared/PageHeader';
import DefaultLayout from '@/components/core/DefaultLayout';
import InfographicsLayout from '@/components/core/InfographicsLayout';
import Head from 'next/head';
import { IconSearch } from '@tabler/icons-react';
import { useGetCategoriesQuery } from '@/api/infographics';
import CategoryCard from '@/components/core/infographics/CategoryCard';

const InfographicsPage = () => {
  const isSearching = false;
  const { data: { categories = [] } = {}, isLoading: isCategoriesLoading } = useGetCategoriesQuery();

  return (
    <>
      <Head>
        <title>Search for insights</title>
        <meta name="description" content="Discover a diverse range of valuable insights covering various topics." />
        <meta property="og:title" content="Browse insights on various topics." />
        <meta
          property="og:description"
          content="Discover a diverse range of valuable insights covering various topics."
        />
        <meta property="og:image" content="/images/logo-icon-inverted.png" />
        <meta property="og:url" content={`https://www.statisense.co/insights`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Browse insights on various topics." />
        <meta
          name="twitter:description"
          content="Discover a diverse range of valuable insights covering various topics."
        />
        <meta name="twitter:image" content="/images/logo-icon-inverted.png" />
      </Head>
      <PageHeader title="Search Insights" />
      <InfographicsLayout>
        <div className="relative">
          <IconSearch className="absolute top-1/2 left-6 -translate-y-1/2 opacity-30" />
          <input
            className="w-full border rounded-full pl-16 pr-8 py-4 peer bg-white shadow-sm"
            placeholder="Search insights.."
          />
        </div>
        {isSearching ? (
          <div className="space-y-4">
            <div className="bg-slate-200 w-full h-[450px] rounded-3xl" />
            <div className="bg-slate-200 w-full h-[450px] rounded-3xl" />
          </div>
        ) : (
          <>
            {isCategoriesLoading ? (
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-200 w-full h-24 rounded-3xl" />
                <div className="bg-slate-200 w-full h-24 rounded-3xl" />
                <div className="bg-slate-200 w-full h-24 rounded-3xl" />
                <div className="bg-slate-200 w-full h-24 rounded-3xl" />
                <div className="bg-slate-200 w-full h-24 rounded-3xl" />
                <div className="bg-slate-200 w-full h-24 rounded-3xl" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {categories
                  .filter((c) => c.totalInfographics > 0)
                  .map((category) => (
                    <CategoryCard category={category} key={category.name} sm />
                  ))}
              </div>
            )}
          </>
        )}
      </InfographicsLayout>
    </>
  );
};

InfographicsPage.Layout = DefaultLayout;

export default InfographicsPage;
