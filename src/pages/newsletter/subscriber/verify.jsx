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
      <div className="min-h-screen w-full bg-slate-100 flex flex-col">
        <div className="bg-white shadow-md rounded-2xl p-16 my-auto w-full min-h-[300px] max-w-lg mx-auto flex flex-col">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center my-auto">
              <Loader />
              <p className="mt-5">Verifying..</p>
            </div>
          ) : (
            <>
              {view === 'error' && (
                <div className="text-center flex flex-col items-center justify-center my-auto">
                  <div className="w-20 h-20 rounded-full grid place-items-center bg-red-600 text-white">
                    <IconLinkOff size="44" />
                  </div>
                  <p className="text-2xl font-semibold max-w-xs mt-8">{error || 'Invalid url'}</p>
                  <Link href={'/'}>
                    <Button variant="outlined" leftIcon={<IconArrowLeft />} className="mt-10">
                      Return to website
                    </Button>
                  </Link>
                </div>
              )}
              {view === 'success' && (
                <div className="text-center flex flex-col items-center justify-center my-auto">
                  <div className="w-20 h-20 rounded-full grid place-items-center bg-green-600 text-white">
                    <IconMailCheck size="44" />
                  </div>
                  <h2 className="text-3xl font-semibold max-w-xs mt-8">You are now subscribed 🥳</h2>
                  <p className="text-lg mt-4 max-w-md">
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
