import React from 'react';
import { useGetTrendingInfographics } from '@/api/infographics';
import PageHeader from '@/components/core/shared/PageHeader';
import DefaultLayout from '@/components/core/DefaultLayout';
import InfographicsLayout from '@/components/core/InfographicsLayout';
import InfographicCard from '@/components/core/infographics/InfographicCard';
import AddPost from '@/components/core/infographics/AddPost';
import Head from 'next/head';

const InfographicsPage = () => {
  const { data: { infographics = [] } = {}, isLoading: isInfographicsLoading } = useGetTrendingInfographics();

  return (
    <>
      <Head>
        <title>Browse insights on various topics.</title>
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
      <PageHeader title="Trending Insights" />
      <InfographicsLayout>
        <div className="space-y-4">
          <AddPost />
          {isInfographicsLoading ? (
            <div className="space-y-4">
              <div className="bg-slate-200 w-full h-[450px] rounded-3xl" />
              <div className="bg-slate-200 w-full h-[450px] rounded-3xl" />
            </div>
          ) : (
            <>
              {!!infographics.length ? (
                <div className="space-y-4">
                  {infographics.slice(0, 3).map((infographic) => (
                    <InfographicCard key={infographic._id} infographic={infographic} />
                  ))}
                </div>
              ) : (
                <div className="px-10 py-10 text-center opacity-50">
                  <p className="text-lg italic">Nothing to see here</p>
                </div>
              )}
            </>
          )}
        </div>
      </InfographicsLayout>
    </>
  );
};

InfographicsPage.Layout = DefaultLayout;

export default InfographicsPage;
