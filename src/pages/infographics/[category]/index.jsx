import React from 'react';
import PageHeader from "@/components/core/shared/PageHeader.jsx";
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import { useRouter } from "next/router";
import { useGetCategoryQuery, useGetInfographicsQuery } from "@/lib/api/infographics.js";
import InfographicCard from "@/components/core/shared/InfographicCard.jsx";

const Category = () => {
  const router = useRouter();
  const { category: id } = router.query;
  const { data: { category = null, total_infographics } = {}, isLoading: isCategoryLoading } = useGetCategoryQuery(id);
  const { data = {}, isLoading: isInfographicsLoading } = useGetInfographicsQuery({ category: id });

  const { infographics = [] } = data;

  return (
    <>
      <PageHeader
        title={ `${ category?.name }` }
        subtitle={ `${ total_infographics } infographic(s)` }
        onBack={ () => router.push('/infographics') }
        backText="Categories"
        isLoading={ isCategoryLoading }
      />

      <div className="mt-20">
        <div className="container">
          {
            isInfographicsLoading ? (
              <div className="grid md:grid-cols-3 gap-8">
                {
                  Array(3).fill(null).map((_, i) =>
                    <div key={ i }>
                      <div className="bg-zinc-200 w-full h-44 rounded-xl"/>
                      <div className="bg-zinc-200 w-3/12 h-6 rounded-full mt-4"/>
                      <div className="bg-zinc-200 w-5/12 h-6 rounded-full mt-3"/>
                    </div>
                  )
                }
              </div>
            ) : (
              <>
                {
                  !!infographics.length ? (
                    <div className="grid md:grid-cols-3 gap-8">
                      {
                        infographics?.map?.((infographic) => (
                          <InfographicCard key={ infographic.id } infographic={ infographic }/>
                        ))
                      }
                    </div>
                  ) : (
                    <div className="p-20 text-center opacity-50">
                      <p>No infographics added yet</p>
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

Category.Layout = DefaultLayout;

export default Category;
