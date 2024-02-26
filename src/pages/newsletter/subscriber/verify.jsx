import React, { useState } from 'react';
import { useVerifySubscriberEmail } from '@/api/other';
import { useMount } from 'react-use';
import Loader from '@/components/global/Loader';
import { IconArrowLeft, IconLinkOff, IconMailCheck } from '@tabler/icons-react';
import Link from 'next/link';
import Button from '@/components/global/Button';
import { useRouter } from 'next/router';
import Head from 'next/head';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';

const Verify = () => {
  const {
    query: { token },
  } = useRouter();
  const [view, setView] = useState('');
  const [error, setError] = useState('');
  const { mutateAsync: verify, isLoading } = useVerifySubscriberEmail();

  const handleVerify = async () => {
    try {
      await verify({ token });
      setView('success');
    } catch (e) {
      setView('error');
      setError(e?.response?.data?.message ?? 'Something went wrong');
    }
  };

  useMount(() => {
    if (!token) {
      setView('error');
      return setError('Invalid link');
    }
    handleVerify();
  });

  return (
    <>
      <Head>
        <title>Verify Newsletter Email • Statisense</title>
        <DefaultHeadTags />
      </Head>
      <div className="flex min-h-screen w-full flex-col bg-slate-100">
        <div className="mx-auto my-auto flex min-h-[300px] w-full max-w-lg flex-col rounded-2xl bg-white p-16 shadow-md">
          {isLoading ? (
            <div className="my-auto flex flex-col items-center justify-center">
              <Loader />
              <p className="mt-5">Verifying..</p>
            </div>
          ) : (
            <>
              {view === 'error' && (
                <div className="my-auto flex flex-col items-center justify-center text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-red-600 text-white">
                    <IconLinkOff size="44" />
                  </div>
                  <p className="mt-8 max-w-xs text-2xl font-semibold">{error || 'Invalid url'}</p>
                  <Link href={'/'}>
                    <Button variant="outlined" leftIcon={<IconArrowLeft />} className="mt-10">
                      Return to website
                    </Button>
                  </Link>
                </div>
              )}
              {view === 'success' && (
                <div className="my-auto flex flex-col items-center justify-center text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-green-600 text-white">
                    <IconMailCheck size="44" />
                  </div>
                  <h2 className="mt-8 max-w-xs text-3xl font-semibold">You are now subscribed 🥳</h2>
                  <p className="mt-4 max-w-md text-lg">
                    Your email address has been confirmed. You are now subscribed to Statisense weekly insights
                  </p>
                  <Link href={'/'}>
                    <Button variant="outlined" leftIcon={<IconArrowLeft />} className="mt-10">
                      Return to website
                    </Button>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Verify;
