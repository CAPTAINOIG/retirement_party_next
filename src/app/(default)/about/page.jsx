import React from 'react';
import Head from 'next/head';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';
import AboutPageContent from '@/app/(default)/about/content';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About us • Statisense</title>
        <DefaultHeadTags />
      </Head>
      <AboutPageContent />
    </>
  );
};

export default AboutPage;
