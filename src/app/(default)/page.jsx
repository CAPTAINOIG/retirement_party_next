import React from 'react';
import Head from 'next/head';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';
import HomePageContent from '@/app/(default)/content';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Statisense - Pioneering AI Data Company for Informed Business Decisions</title>
        <DefaultHeadTags />
      </Head>
      <HomePageContent />
    </>
  );
};

export default HomePage;
