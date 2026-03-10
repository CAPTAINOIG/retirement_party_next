import { Suspense } from 'react';
import AmbassadorRegisterContent from './content';

export const metadata = {
  title: 'Ambassador Registration | Statisense',
  description: 'Join the Statisense ambassador program and register your interest.',
};

const AmbassadorRegisterPage = () => {
  return (
    <Suspense fallback={null}>
      <AmbassadorRegisterContent />
    </Suspense>
  );
};

export default AmbassadorRegisterPage;
