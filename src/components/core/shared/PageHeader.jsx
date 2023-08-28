import React from 'react';
import { IconChevronLeft } from "@tabler/icons-react";
import Button from "@/components/global/Button.jsx";

const PageHeader = ({ title, subtitle, onBack, backText, isLoading = false, append }) => {
  return (
    <div className="pt-36 pb-6 md:pb-10 md:pt-44 text-center bg-[#11100f] relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-tw-dark min-h-screen opacity-80 scale-125"></div>
      <div className="container flex flex-col items-center relative z-20">
        {
          !!onBack && (
            <Button
              onClick={ onBack }
              variant="subtle" color="white" size="sm" leftIcon={ <IconChevronLeft size="18"/> } className="mb-6"
            >
              { backText }
            </Button>
          )
        }
        {
          isLoading ? (
            <>
              <div className="bg-zinc-200/10 h-8 w-72 rounded-full mt-2"/>
              <div className="bg-zinc-200/10 h-8 w-56 rounded-full mt-4"/>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-[2.8rem] max-w-xl text-zinc-200 !leading-[1.2] font-medium">{ title }</h1>
              { !!subtitle && <p className="md:text-lg mt-3 leading-[1.2] text-zinc-400">{ subtitle }</p> }
            </>
          )
        }
        { !!append && append }
      </div>
    </div>
  );
};

export default PageHeader;
