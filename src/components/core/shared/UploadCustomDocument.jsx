import React, { useState } from 'react';
import IconButton from "@/components/global/IconButton";
import { IconChevronLeft } from "@tabler/icons-react";
import CircleUploadFileInput from "@/components/core/shared/CircleUploadFileInput";
import { delay } from "@/lib/utils";
import { GridLoader } from "react-spinners";

const UploadCustomDocument = ({ onBack }) => {
  const [loading, setLoading] = useState('');

  const handleChange = async (file) => {
    console.log({ file });
    setLoading('Analyzing your document..');
    await delay(5000);
    setLoading('Preparing bot..');
    await delay(5000);
    setLoading('');
  };

  return (
    <>
      {
        loading ? (
          <div className="h-full flex flex-col items-center justify-center">
            <GridLoader color={ "#2563eb" }/>
            <p className="mt-6">{ loading || 'Analyzing your document..' }</p>
          </div>
        ) : (
          <div className="h-full">
            <div className="max-w-xl mx-auto flex items-center">
              <IconButton
                icon={ <IconChevronLeft size="20"/> }
                onClick={ onBack }
                size="sm" variant="outlined" color="black" className="mr-3" rounded
              />
              <h5 className="font-medium text-lg">Upload a custom document</h5>
            </div>
            <div className="h-full flex flex-col justify-center items-center text-center py-16">
              <CircleUploadFileInput
                onChange={ handleChange }
                label="Drag and drop a document or click to select"
                accept={ { 'application/pdf': ['.pdf'] } }
              />
            </div>
          </div>
        )
      }
    </>
  );
};

export default UploadCustomDocument;
