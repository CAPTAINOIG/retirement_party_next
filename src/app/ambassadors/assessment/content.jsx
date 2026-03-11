'use client';

import { useVerifyAmbassador } from '@/api/other';
import { Button, Spinner } from '@heroui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { HiExclamationCircle, HiOutlineArrowPath } from 'react-icons/hi2';
import { RiAlertLine } from 'react-icons/ri';
import AssessmentSession from './AssessmentSession';

const AmbassadorAssessmentContent = () => {
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash') || '';
  const {
    data: { ambassador = null } = {},
    isLoading: isVerifyLoading,
    error: verifyError,
    refetch: refetchVerify,
  } = useVerifyAmbassador(hash);

  if (!hash) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <HiExclamationCircle className="mb-6 text-6xl text-red-500" />
        <p className="text-xl font-bold">Invalid link</p>
        <p className="mt-2 max-w-sm opacity-80">Please check the link you used to access this page.</p>
        <Button as={Link} href="/" color="primary" className="mt-8 text-base" radius="full" variant="bordered">
          Go to home
        </Button>
      </div>
    );
  }

  if (isVerifyLoading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <Spinner size="lg" />
        <p className="mt-6">Verifying..</p>
      </div>
    );
  }

  if (!isVerifyLoading && !ambassador) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <RiAlertLine className="mb-6 text-6xl text-red-500" />
        <p className="text-xl font-bold">{verifyError?.response?.data?.message || 'Unable to load assessment'}</p>
        <p className="mt-2 max-w-sm opacity-80">Please check the link you used to access this page and try again</p>
        {!verifyError && (
          <Button
            color="primary"
            className="mt-8 text-base"
            radius="full"
            variant="bordered"
            onPress={refetchVerify}
            startContent={<HiOutlineArrowPath size="20" />}
          >
            Retry
          </Button>
        )}
      </div>
    );
  }

  return <AssessmentSession hash={hash} />;
};

export default AmbassadorAssessmentContent;
