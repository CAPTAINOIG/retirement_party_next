import React from 'react';
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
      <TermsPageContent />
    </>
  );
};

export default TermsPage;
