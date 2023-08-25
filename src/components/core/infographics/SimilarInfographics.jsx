import React from 'react';
import { useGetInfographics } from "@/api/infographics";
import InfographicCard from "@/components/core/infographics/InfographicCard";
import { IconInfoTriangle } from "@tabler/icons-react";
import InfographicLoadingCard from "@/components/core/infographics/InfographicLoadingCard";

const SimilarInfographics = ({ infographic }) => {
  const { data = {}, isLoading: isInfographicsLoading } = useGetInfographics({
    category: infographic.category._id
  });

  const infographics = data?.infographics?.filter?.(i => i._id !== infographic._id)

  return (
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
            <h3 className="text-[1.7rem] font-semibold mb-12">Similar infographics</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {
                !!infographics.length ? (
                  <>
                    {
                      infographics?.map?.((infographic) => (
                        <InfographicCard key={ infographic._id } infographic={ infographic }/>
                      ))
                    }
                  </>
                ) : (
                  <>
                    <div
                      className="bg-slate-50 border border-gray-200 rounded-xl min-h-[350px] flex justify-center items-center"
                    >
                      <IconInfoTriangle size="72" className="opacity-5"/>
                    </div>
                    <div
                      className="bg-slate-50 border border-gray-200 rounded-xl min-h-[350px] flex justify-center items-center"
                    >
                      <IconInfoTriangle size="72" className="opacity-5"/>
                    </div>
                    <div
                      className="bg-slate-50 border border-gray-200 rounded-xl min-h-[350px] flex justify-center items-center"
                    >
                      <IconInfoTriangle size="72" className="opacity-5"/>
                    </div>
                  </>
                )
              }
            </div>
          </>
        )
      }
    </div>
  );
};

export default SimilarInfographics;
