import { useGetCategoryInfographics } from '@/api/infographics';
import PageHeader from '@/components/core/shared/PageHeader';
import InfographicCard from '@/components/core/infographics/InfographicCard';
import InsightsLayout from '@/components/core/InsightsLayout';
import Button from '@/components/global/Button';
import DefaultLayout from '@/components/core/DefaultLayout';
import React from 'react';
import { getImageLink } from '@/lib/utils';
import Head from 'next/head';
import NoData from '@/components/global/NoData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getServerSideProps({ res, params }) {
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
  const { category } = await (await fetch(`${BASE_URL}/category/${params.category}`)).json();
  return { props: { category } };
}

const CategoryInfographicsPage = ({ category }) => {
  const {
    data,
    isLoading: isInfographicsLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetCategoryInfographics(category?._id);

  const infographics = data?.pages.map((p) => p.infographics).flat();

  return (
    <>
      <Head>
        <title>{`Insights on ${category.name} • Statisense`}</title>
        <meta name="description" content={`Explore a wide array of insights and information on ${category.name}`} />
        <meta property="og:title" content={`Insights on ${category.name} • Statisense`} />
        <meta
          property="og:description"
          content={`Explore a wide array of insights and information on ${category.name}`}
        />
        <meta property="og:image" content={getImageLink(category.image)} />
        <meta property="og:url" content={`https://www.statisense.co/insights/${category.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Insights on ${category.name} • Statisense`} />
        <meta
          name="twitter:description"
          content={`Explore a wide array of insights and information on ${category.name}`}
        />
        <meta name="twitter:image" content={getImageLink(category.image)} />
      </Head>
      <PageHeader title={`Insights on ${category.name}`} />
      <InsightsLayout>
        {isInfographicsLoading ? (
          <div className="space-y-4">
            <div className="bg-slate-200 w-full h-[450px] rounded-3xl" />
            <div className="bg-slate-200 w-full h-[450px] rounded-3xl" />
          </div>
        ) : (
          <>
            {!!infographics.length ? (
              <>
                <div className="space-y-4">
                  {infographics.map((infographic) => (
                    <InfographicCard key={infographic._id} infographic={infographic} />
                  ))}
                  {hasNextPage && (
                    <div className="mt-20 flex items-center justify-center">
                      <Button onClick={fetchNextPage} loading={isFetchingNextPage} variant="outlined" size="lg">
                        Load more
                      </Button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="sticky top-32">
                <NoData text="No infographic added yet" />
              </div>
            )}
          </>
        )}
      </InsightsLayout>
    </>
  );
};

CategoryInfographicsPage.Layout = DefaultLayout;

export default CategoryInfographicsPage;
