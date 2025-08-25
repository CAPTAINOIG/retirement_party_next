import React, { Suspense } from 'react';
import TermsPageContent from '@/app/(default)/terms/content';

export const metadata = {
  title: 'Privacy & Terms',
};

const TermsPage = () => {
  return (
    <>
      <Suspense>
        <TermsPageContent />
      </Suspense>
    </>
  );
};

export default TermsPage;
