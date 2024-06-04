import React from 'react';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';
import Head from 'next/head';
import ContactPageContent from '@/app/(default)/contact/content';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Get in touch • Statisense</title>
        <DefaultHeadTags />
      </Head>
      <ContactPageContent />
    </>
  );
};

export default ContactPage;
