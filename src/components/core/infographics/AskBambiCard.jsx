import React, { useState } from 'react';
import { IconSparkles } from '@tabler/icons-react';
import Button from '@/components/global/Button';
import Card from '@/components/global/Card';
import AskBambi from '@/components/core/shared/AskBambi';

const AskBambiCard = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <Card className="relative shadow-none border-0 bg-gradient-to-br from-teal-800 to-primary-800 text-white overflow-hidden px-10 py-10 text-center">
        <div className="absolute inset-0 bg-cover bg-right -scale-0 bg-tw-dark animate-wide min-h-screen opacity-60"></div>
        <div className="relative z-[2] flex flex-col items-center justify-center">
          <IconSparkles size="60" className="text-white" />
          <div className="flex-1 flex flex-col items-center mt-10">
            <h5 className="font-semibold text-xl">Got a question?</h5>
            <p className="mt-2 max-w-[300px] opacity-75">
              Our AI data assistant Bambi is readily available to provide you with any macro economic data.
            </p>
            <Button onClick={() => setIsChatbotOpen(true)} color="white" className="mt-8">
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
