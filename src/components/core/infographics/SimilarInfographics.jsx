import React from 'react';
import { useGetInfographicsQuery } from "@/api/infographics";
import InfographicCard from "@/components/core/shared/InfographicCard";
import { IconInfoTriangle } from "@tabler/icons-react";

const SimilarInfographics = ({ infographic }) => {
  const { data = {}, isLoading: isInfographicsLoading } = useGetInfographicsQuery({
    category: infographic.category._id
  });

  const infographics = data?.infographics?.filter?.(i => i._id !== infographic._id)

  return (
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
