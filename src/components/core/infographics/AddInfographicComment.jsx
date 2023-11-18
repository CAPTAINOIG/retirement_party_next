import React from 'react';
import Button from '@/components/global/Button';

const AddInfographicComment = () => {
  return (
    <div className="py-6 px-6">
      <div className="flex flex-col md:flex-row gap-3 md:items-end">
        <textarea
          className="bg-white border py-2 px-3 text-base rounded-xl w-full"
          placeholder="Add a comment"
          rows="1"
        />
        <Button color="black" variant="subtle">
          Add comment
        </Button>
      </div>
    </div>
  );
};

export default AddInfographicComment;
