import PageHeader from "@/components/core/shared/PageHeader";
import React from "react";
import DefaultLayout from "@/components/core/DefaultLayout";
import OpenPositions from "@/components/core/careers/OpenPositions";
import JoinOurTeam from "@/components/core/careers/JoinOurTeam";
import Head from "next/head";
import DefaultHeadTags from "@/components/DefaultHeadTags";

const Careers = () => {
  return (
    <>
      <Head>
        <title>Careers • Statisense</title>
        <DefaultHeadTags/>
      </Head>
      <div className="bg-slate-50">
        <PageHeader
          title="Careers at Statisense"
          append={ <div className="h-4"></div> }
        />
        <div className="py-20 md:py-28 space-y-28 md:space-y-36">
          <JoinOurTeam/>
          <OpenPositions/>
        </div>
      </div>
    </>
  );
};

Careers.Layout = DefaultLayout;

export default Careers;
