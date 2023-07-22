"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import { useGetCategoryQuery, useGetInfographicsQuery } from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import InfographicCard from "@/components/core/infographics/InfographicCard";

const CategoryInfographicsPage = ({ params: { category: slug } }) => {
  const router = useRouter();
  const { data: { category = null } = {}, isLoading: isCategoryLoading } = useGetCategoryQuery(slug);
  const { data = {}, isLoading: isInfographicsLoading } = useGetInfographicsQuery({
    category: category?._id, enabled: !!category?._id
  });

  const { infographics = [] } = data;

  return (
    <>
      <PageHeader
        title={ `Insights on ${ category?.name }` }
        onBack={ () => router.push('/infographics') }
        backText="Categories"
        isLoading={ isCategoryLoading }
      />
      <div className="py-24 md:py-32">
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
                          <InfographicCard key={ infographic._id } infographic={ infographic }/>
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

export default CategoryInfographicsPage;
