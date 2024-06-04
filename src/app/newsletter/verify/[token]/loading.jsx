'use client';
import React from 'react';
import { Card, Spinner } from '@nextui-org/react';

const Loading = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Card shadow="sm" className="mx-auto my-auto flex min-h-[300px] w-full max-w-lg flex-col p-16 shadow-md">
        <div className="my-auto flex flex-col items-center justify-center">
          <Spinner size="lg" />
          <p className="mt-10">Verifying..</p>
        </div>
      </Card>
    </div>
  );
};

export default Loading;
