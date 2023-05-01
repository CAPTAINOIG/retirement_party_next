import React from 'react';
import { useGetInfographicsQuery } from "@/api/infographics.js";
import InfographicCard from "@/components/core/shared/InfographicCard.jsx";

const TrendingInfographics = () => {
  const { data = {}, isLoading: isInfographicsLoading } = useGetInfographicsQuery();

  const { infographics = [] } = data;

  return (
    <div>
      <div className="container">
        <div className="mx-auto max-w-4xl sm:text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
            Trending statistics
          </h2>
          <p className="mt-4 text-base md:text-lg opacity-80">
            Get facts and insights on topics that matter
          </p>
        </div>
        {
          isInfographicsLoading ? (
            <div className="grid md:grid-cols-3 gap-10">
              {
                Array(3).fill(null).map((_, i) =>
                  <div key={ i }>
                    <div className="bg-zinc-200 w-full h-44 rounded-xl"/>
                    <div className="bg-zinc-200 w-6/12 h-5 rounded-full mt-4"/>
                    <div className="bg-zinc-200 w-4/12 h-5 rounded-full mt-3"/>
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
                      infographics.slice(0, 3).map((infographic) => (
                        <InfographicCard key={ infographic._id } infographic={ infographic }/>
                      ))
                    }
                  </div>
                ) : (
                  <div className="px-10 py-10 text-center opacity-50">
                    <p className="text-lg italic">Nothing to see here</p>
                  </div>
                )
              }
            </>
          )
        }
      </div>
    </div>
  );
};

export default TrendingInfographics;
