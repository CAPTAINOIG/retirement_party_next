import React from 'react';
import Head from 'next/head';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';
import CareersPageContent from '@/app/(default)/careers/content';

const CareersPage = () => {
  return (
    <>
      <Head>
        <title>Careers • Statisense</title>
        <DefaultHeadTags />
      </Head>
      <CareersPageContent />
    </>
  );
};

export default CareersPage;
