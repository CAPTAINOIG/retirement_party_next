import React from 'react';
import { useGetInfographicsQuery } from "@/api/infographics.js";
import InfographicCard from "@/components/core/shared/InfographicCard.jsx";

const SearchResults = ({ query }) => {
  const { data = {}, isLoading: isInfographicsLoading } = useGetInfographicsQuery({
    search: query, enabled: !!query
  });

  const { infographics = [] } = data;

  return (
    <>
      <div className="mt-20">
        <div className="container">
          {
            isInfographicsLoading ? (
              <div className="grid md:grid-cols-3 gap-8">
                {
                  Array(3).fill(null).map((_, i) =>
                    <div key={ i }>
                      <div className="bg-zinc-200 w-full h-44 rounded-xl"/>
                      <div className="bg-zinc-200 w-3/12 h-5 rounded-full mt-4"/>
                      <div className="bg-zinc-200 w-5/12 h-5 rounded-full mt-3"/>
                    </div>
                  )
                }
              </div>
            ) : (
              <>
                <h5 className="text-center text-2xl mb-10">
                  { infographics.length ? 'Results for ' : 'No results for ' }
                  <span className="font-semibold italic">{ query }</span>
                </h5>
                {
                  !!infographics.length && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {
                        infographics?.map?.((infographic) => (
                          <InfographicCard key={ infographic.id } infographic={ infographic }/>
                        ))
                      }
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

export default SearchResults;
