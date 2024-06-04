import React from 'react';
import axios from 'axios';
import NewsletterVerificationPageContent from '@/app/newsletter/verify/[token]/content';

const verify = async (token) => {
  try {
    const res = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/newsletter/subscriber/verify`, { token });
    return res.data;
  } catch (e) {
    throw new Error(e?.response?.data?.message ?? 'Something went wrong, please try again');
  }
};

const NewsletterVerificationPage = async ({ params }) => {
  await verify(params.token);

  return <NewsletterVerificationPageContent />;
};

export default NewsletterVerificationPage;
