'use client';

import React from 'react';
import Head from 'next/head';
import CreatorsEventPageContent from './content';

const CreatorsEventPage = () => {
  return (
    <>
      <Head>
        <title>Creators Hangout • Statisense</title>
      </Head>
      <CreatorsEventPageContent />
    </>
  );
};

export default CreatorsEventPage;
