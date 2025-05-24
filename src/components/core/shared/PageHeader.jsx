import React from 'react';
import { IconChevronLeft } from '@tabler/icons-react';
import Button from '@/components/global/Button.jsx';

const PageHeader = ({ title, subtitle, onBack, backText, isLoading = false, append }) => {
  return (
    <div className="to-primary-950 from-primary-50/50 relative overflow-hidden bg-zinc-950 bg-linear-to-br pt-36 pb-6 text-center md:pt-44 md:pb-10">
      <div className="relative z-20 container flex flex-col items-center">
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
            <h1 className="max-w-xl text-3xl leading-[1.2]! font-medium text-zinc-200 md:text-[2.8rem]">{title}</h1>
            {!!subtitle && <p className="mt-3 max-w-2xl leading-[1.2] text-zinc-400 md:text-lg">{subtitle}</p>}
          </>
        )}
        {!!append && append}
      </div>
    </div>
  );
};

export default PageHeader;
