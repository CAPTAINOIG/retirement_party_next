import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/core/shared/PageHeader";
import InfographicsSearchInput from "@/components/core/infographics/InfographicsSearchInput";
import classNames from "classnames";
import SearchResults from "@/components/core/infographics/SearchResults";
import CategoryCard from "@/components/core/infographics/CategoryCard";
import DefaultLayout from "@/components/core/DefaultLayout";
import Head from "next/head";
import InfographicCard from "@/components/core/infographics/InfographicCard";
import { getImageLink } from "@/lib/utils";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getServerSideProps({ res }) {
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
  const [_categories, _trending] = await Promise.all([
    fetch(`${ BASE_URL }/category`),
    fetch(`${ BASE_URL }/infographic/trending`)
  ]);
  const [{ categories }, { infographics: trending }] = await Promise.all([
    _categories.json(), _trending.json()
  ]);
  return { props: { categories, trending } };
}

const InfographicsPage = ({ categories, trending }) => {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');

  useEffect(() => {
    setQuery(params.get('q') || '');
  }, [params]);

  return (
    <>
      <Head>
        <title>Browse insights on various topics.</title>
        <meta
          name="description"
          content="Discover a diverse range of valuable insights covering various topics."
        />
        <meta property="og:title" content="Browse insights on various topics."/>
        <meta
          property="og:description"
          content="Discover a diverse range of valuable insights covering various topics."
        />
        <meta property="og:image" content={ getImageLink(trending[0].image) }/>
        <meta property="og:url" content={ `https://www.statisense.co/infographics` }/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Browse insights on various topics."/>
        <meta
          name="twitter:description"
          content="Discover a diverse range of valuable insights covering various topics."
        />
        <meta name="twitter:image" content={ getImageLink(trending[0].image) }/>
      </Head>
      <div className="bg-slate-50">
        <PageHeader
          title="Search for insights"
          append={ <InfographicsSearchInput className="mt-6 md:mt-10 mb-4 w-full"/> }
        />
        <div className="py-20 md:py-32">
          {
            !query && (
              <div className="container">
                <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">
                    Trending
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {
                    trending.slice(0, 3).map((infographic) => (
                      <InfographicCard key={ infographic._id } infographic={ infographic }/>
                    ))
                  }
                </div>
              </div>
            )
          }
          <div className={ classNames('container', { 'mt-20 md:mt-28': !query }) }>
            {
              query ? (
                <>
                  <SearchResults query={ query }/>
                </>
              ) : (
                <>
                  {
                    !!categories.length ? <>
                      <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">
                          Browse by category
                        </h2>
                      </div>
                      <div className="grid md:grid-cols-3 gap-8">
                        {
                          categories.filter(c => c.totalInfographics > 0).map((category) => (
                            <CategoryCard category={ category } key={ category.name }/>
                          ))
                        }
                      </div>
                    </> : <div className="px-10 py-10 text-center opacity-50">
                      <p className="text-lg italic">No categories added yet</p>
                    </div>
                  }
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

InfographicsPage.Layout = DefaultLayout;

export default InfographicsPage;
