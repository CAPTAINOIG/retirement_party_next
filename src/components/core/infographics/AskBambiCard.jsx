import React, { useState } from 'react';
import { IconSparkles } from '@tabler/icons-react';
import Button from '@/components/global/Button';
import Card from '@/components/global/Card';
import AskBambi from '@/components/core/shared/AskBambi';

const AskBambiCard = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <Card className="relative shadow-none border-0 bg-gradient-to-br from-teal-800 to-primary-800 text-white overflow-hidden px-8 py-8 md:px-10 md:py-10">
        <div className="absolute inset-0 bg-cover bg-right -scale-0 bg-tw-dark animate-wide min-h-screen opacity-60"></div>
        <div className="relative z-[2] flex flex-row md:flex-col md:items-center md:justify-center">
          <IconSparkles size="60" className="text-white" />
          <div className="ml-6 md:ml-0 md:mt-10 md:text-center">
            <h5 className="font-semibold text-lg md:text-xl">Got a question?</h5>
            <p className="mt-2 max-w-[300px] opacity-75 leading-snug text-md md:text-base">
              Our AI data assistant Bambi is readily available to provide you with any macro economic data.
            </p>
            <Button onClick={() => setIsChatbotOpen(true)} color="white" className="mt-8 hidden md:block mx-auto">
              Ask Bambi
            </Button>
            <Button onClick={() => setIsChatbotOpen(true)} color="white" className="mt-5 md:hidden">
              Ask Bambi
            </Button>
          </div>
        </div>
      </Card>

      <AskBambi isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  );
};

export default AskBambiCard;
