import React from 'react';
import { IconChevronLeft } from "@tabler/icons-react";
import Button from "@/components/global/Button.jsx";

const PageHeader = ({ title, subtitle, onBack, backText, append }) => {
  return (
    <div className="pt-44 pb-32 md:pb-16 md:pt-44 text-center bg-zinc-900 pattern-2 rounded-[0_0_1000px_1000px/10%]">
      <div className="container flex flex-col items-center">
        {
          !!onBack && (
            <Button
              onClick={ onBack }
              variant="outlined" color="white" size="sm" leftIcon={ <IconChevronLeft size="18"/> } className="mb-6"
            >
              { backText }
            </Button>
          )
        }
        <h1 className="text-[2.6rem] max-w-xl text-zinc-200 leading-tight font-medium">{ title }</h1>
        {
          !!subtitle && (
            <p className="text-lg mt-2 text-zinc-400">{ subtitle }</p>
          )
        }
        { !!append && append }
      </div>
    </div>
  );
};

export default PageHeader;
