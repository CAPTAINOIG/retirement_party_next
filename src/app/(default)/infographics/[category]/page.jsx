"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import { useGetCategoryInfographics, useGetCategoryQuery } from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import InfographicCard from "@/components/core/infographics/InfographicCard";
import Button from "@/components/global/Button";
import InfographicLoadingCard from "@/components/core/infographics/InfographicLoadingCard";

const CategoryInfographicsPage = ({ params: { category: slug } }) => {
  const router = useRouter();
  const { data: { category = null } = {}, isLoading: isCategoryLoading } = useGetCategoryQuery(slug);
  const {
    data,
    isLoading: isInfographicsLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useGetCategoryInfographics(category?._id);

  const infographics = data?.pages.map(p => p.infographics).flat()

  return (
    <>
      <PageHeader
        title={ category?.name }
        onBack={ () => router.push('/infographics') }
        backText="Categories"
        isLoading={ isCategoryLoading }
      />
      <div className="py-24 md:py-32">
        <div className="container">
          {
            isInfographicsLoading ? (
              <div className="grid md:grid-cols-3 gap-8">
                <InfographicLoadingCard/>
                <InfographicLoadingCard/>
                <InfographicLoadingCard/>
              </div>
            ) : (
              <>
                {
                  !!infographics.length ? (
                    <>
                      <div className="grid md:grid-cols-3 gap-8">
                        {
                          infographics?.map?.((infographic) => (
                            <InfographicCard key={ infographic._id } infographic={ infographic }/>
                          ))
                        }
                      </div>
                      {
                        hasNextPage && (
                          <div className="mt-20 flex items-center justify-center">
                            <Button
                              onClick={ fetchNextPage } loading={ isFetchingNextPage } variant="outlined" size="lg"
                            >
                              Load more
                            </Button>
                          </div>
                        )
                      }
                    </>
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
