import React from 'react';
import { IconChevronLeft } from "@tabler/icons-react";
import Button from "@/components/global/Button.jsx";

const PageHeader = ({ title, subtitle, onBack, backText, isLoading = false, append }) => {
  return (
    <div className="pt-36 pb-12 md:pb-12 md:pt-44 text-center bg-[#11100f] pattern-2 rounded-[0_0_1000px_1000px/10%]">
      <div className="container flex flex-col items-center">
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
              <h1 className="text-[2.3rem] max-w-xl text-zinc-200 leading-tight font-medium">{ title }</h1>
              { !!subtitle && <p className="text-lg mt-3 text-zinc-400">{ subtitle }</p> }
            </>
          )
        }
        { !!append && append }
      </div>
    </div>
  );
};

export default PageHeader;
