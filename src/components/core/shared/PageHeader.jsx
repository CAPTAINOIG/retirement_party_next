import React from 'react';
import { IconChevronLeft } from '@tabler/icons-react';
import Button from '@/components/global/Button.jsx';

const PageHeader = ({ title, subtitle, onBack, backText, isLoading = false, append }) => {
  return (
    <div className="relative overflow-hidden bg-[#11100f] pb-6 pt-36 text-center md:pb-10 md:pt-44">
      <div className="bg-tw-dark absolute inset-0 min-h-screen scale-125 bg-cover opacity-80"></div>
      <div className="container relative z-20 flex flex-col items-center">
        {!!onBack && (
          <Button
            onClick={onBack}
            variant="subtle"
            color="white"
            size="sm"
            leftIcon={<IconChevronLeft size="18" />}
            className="mb-6"
          >
            {backText}
          </Button>
        )}
        {isLoading ? (
          <>
            <div className="mt-2 h-8 w-72 rounded-full bg-zinc-200/10" />
            <div className="mt-4 h-8 w-56 rounded-full bg-zinc-200/10" />
          </>
        ) : (
          <>
            <h1 className="max-w-xl text-3xl font-medium !leading-[1.2] text-zinc-200 md:text-[2.8rem]">{title}</h1>
            {!!subtitle && <p className="mt-3 max-w-2xl leading-[1.2] text-zinc-400 md:text-lg">{subtitle}</p>}
          </>
        )}
        {!!append && append}
      </div>
    </div>
  );
};

export default PageHeader;
