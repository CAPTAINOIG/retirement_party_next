import React from 'react';
import { useGetTrendingInfographics } from "@/api/infographics.js";
import InfographicCard from "@/components/core/infographics/InfographicCard.jsx";
import InfographicLoadingCard from "@/components/core/infographics/InfographicLoadingCard";

const TrendingInfographics = () => {
  const { data = {}, isLoading: isInfographicsLoading } = useGetTrendingInfographics();

  const { infographics = [] } = data;

  return (
    <div>
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">
            Trending
          </h2>
        </div>
        {
          isInfographicsLoading ? (
            <div className="grid md:grid-cols-3 gap-10">
              <InfographicLoadingCard/>
              <InfographicLoadingCard/>
              <InfographicLoadingCard/>
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
