import { Suspense } from 'react';
import AmbassadorAssessmentContent from './content';

export const metadata = {
  title: 'Ambassador Assessment | Statisense',
  description: 'Complete the Statisense ambassador assessment.',
};

const AmbassadorAssessmentPage = () => {
  return (
    <Suspense fallback={null}>
      <AmbassadorAssessmentContent />
    </Suspense>
  );
};

export default AmbassadorAssessmentPage;
