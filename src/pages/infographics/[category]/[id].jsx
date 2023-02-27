import React from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import PageHeader from "@/components/core/shared/PageHeader.jsx";
import { useRouter } from "next/router";
import { IconClock } from "@tabler/icons-react";

const InfographicDetails = () => {
  const router = useRouter();

  return (
    <>
      <PageHeader
        title="Can India become a Lithium Superpower?"
        onBack={ () => router.push('/infographics/1') }
        backText="Oil and gas"
        append={ <div className="h-40"></div> }
      />
      <div className="container -mt-56 md:-mt-44">
        <div className="max-w-xl mx-auto">
          <img src="https://picsum.photos/1000/1000" alt="" className="rounded-xl"/>
          <div className="mt-10">
            <div className="flex items-center opacity-70 mb-6">
              <IconClock className="mr-2" size="18"/>
              <p>Date posted: Feb 19, 2023</p>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto excepturi id magni neque nulla
            reiciendis unde! A accusantium ea harum hic, inventore, ipsam, officiis quidem repellendus reprehenderit
            sint tempora?
          </div>
        </div>
      </div>
    </>
  );
};

InfographicDetails.Layout = DefaultLayout;

export default InfographicDetails;
