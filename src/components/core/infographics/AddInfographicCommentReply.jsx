import React from 'react';
import Button from '@/components/global/Button';

const AddInfographicCommentReply = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <textarea
          className="bg-white border py-2 px-5 text-base rounded-2xl w-full"
          placeholder="Add a reply"
          rows="1"
        />
        <Button color="black" variant="subtle">
          Reply
        </Button>
      </div>
    </div>
  );
};

export default AddInfographicCommentReply;
