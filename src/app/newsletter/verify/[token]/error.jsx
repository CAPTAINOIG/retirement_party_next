'use client';
import React from 'react';
import { Button, Card } from '@nextui-org/react';
import { IconArrowLeft, IconLinkOff } from '@tabler/icons-react';
import Link from 'next/link';
import { RiArrowLeftLine, RiRefreshLine } from 'react-icons/ri';

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Card shadow="sm" className="mx-auto my-auto flex min-h-[300px] w-full max-w-lg flex-col p-16 shadow-md">
        <div className="my-auto flex flex-col items-center justify-center text-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-red-600 text-white">
            <IconLinkOff size="44" />
          </div>
          <p className="mt-8 max-w-xs text-2xl font-semibold">{error.message || 'Invalid url'}</p>

          <div className="mt-10 flex flex-col items-center justify-center space-y-4">
            <Button
              variant="bordered"
              leftIcon={<IconArrowLeft />}
              className="text-base"
              startContent={<RiRefreshLine />}
              onClick={reset}
            >
              Retry
            </Button>
            <Link href={'/'}>
              <Button
                variant="bordered"
                leftIcon={<IconArrowLeft />}
                className="text-base"
                startContent={<RiArrowLeftLine />}
              >
                Return to website
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
