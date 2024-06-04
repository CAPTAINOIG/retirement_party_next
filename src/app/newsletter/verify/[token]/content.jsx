'use client';
import React from 'react';
import { IconArrowLeft, IconMailCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { Button, Card } from '@nextui-org/react';

const NewsletterVerificationPageContent = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Card shadow="sm" className="mx-auto my-auto flex min-h-[300px] w-full max-w-lg flex-col p-16 shadow-md">
        <div className="my-auto flex flex-col items-center justify-center text-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-green-600 text-white">
            <IconMailCheck size="44" />
          </div>
          <h2 className="mt-8 max-w-xs text-3xl font-semibold">You are now subscribed 🥳</h2>
          <p className="mt-4 max-w-md text-lg">
            Your email address has been confirmed. You are now subscribed to Statisense weekly insights
          </p>
          <Link href={'/'}>
            <Button variant="bordered" startContent={<IconArrowLeft />} className="mt-10 px-6 text-base" radius="full">
              Return to website
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NewsletterVerificationPageContent;
