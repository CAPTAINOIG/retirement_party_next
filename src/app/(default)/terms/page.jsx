import React, { Suspense } from 'react';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';
import Head from 'next/head';
import TermsPageContent from '@/app/(default)/terms/content';

const TermsPage = () => {
  return (
    <>
      <Head>
        <title>Privacy & Terms • Statisense</title>
        <DefaultHeadTags />
      </Head>
      <Suspense>
        <TermsPageContent />
      </Suspense>
    </>
  );
};

export default TermsPage;
