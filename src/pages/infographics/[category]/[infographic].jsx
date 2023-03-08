import React from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import PageHeader from "@/components/core/shared/PageHeader.jsx";
import { useRouter } from "next/router";
import { IconClock } from "@tabler/icons-react";
import { useGetInfographicQuery } from "@/lib/api/infographics.js";
import { format } from "date-fns";
import Image from "@/components/core/shared/Image.jsx";

const InfographicDetails = () => {
  const router = useRouter();
  const { infographic: id } = router.query;
  const { data: { infographic = null } = {}, isLoading: isInfographicLoading } = useGetInfographicQuery(id);

  return (
    <>
      <PageHeader
        title={ infographic?.title }
        onBack={ () => router.push(`/infographics/${ infographic.category.id }`) }
        backText={ infographic?.category?.name || 'Back' }
        append={ <div className="h-40"></div> }
        isLoading={ isInfographicLoading }
      />
      <div className="container -mt-56 md:-mt-44">
        {
          isInfographicLoading ? (
            <div className="max-w-xl mx-auto">
              <div className="aspect-square w-full bg-zinc-500/20 rounded-xl"/>
              <div className="bg-zinc-900/10 h-8 w-4/12 rounded-full mt-6"/>
              <div className="bg-zinc-900/10 h-8 w-9/12 rounded-full mt-6"/>
              <div className="bg-zinc-900/10 h-8 w-3/12 rounded-full mt-4"/>
            </div>
          ) : (
            <>
              <div className="max-w-xl mx-auto">
                <Image src={ infographic.image } alt="" className="rounded-xl"/>
                <div className="mt-10">
                  <div className="flex items-center opacity-70 mb-6">
                    <IconClock className="mr-2" size="18"/>
                    <p>Date posted: { format(new Date(infographic.created_at), 'MMM dd, yyyy') }</p>
                  </div>
                  <p>
                    { infographic.description }
                  </p>
                  <div className="mt-10 flex flex-row flex-wrap">
                    {
                      infographic.tags.split(',').map((tag, i) => (
                        <div key={ i } className="bg-zinc-200 px-3 py-[2px] rounded-xl mr-3 mb-4">{ tag }</div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  );
};

InfographicDetails.Layout = DefaultLayout;

export default InfographicDetails;
