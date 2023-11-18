import React from 'react';
import Button from '@/components/global/Button';
import InfographicCommentLoading from '@/components/core/infographics/InfographicCommentLoading';
import InfographicCommentReply from '@/components/core/infographics/InfographicCommentReply';
import AddInfographicCommentReply from '@/components/core/infographics/AddInfographicCommentReply';

const InfographicCommentReplies = () => {
  const replies = Array.from(Array(2).keys());
  const isRepliesLoading = false;
  const hasMoreReplies = true;

  return (
    <>
      <div className="space-y-8">
        {replies?.map((_, i) => (
          <InfographicCommentReply key={i} />
        ))}
      </div>
      {isRepliesLoading && (
        <div className="space-y-8 mt-6">
          <InfographicCommentLoading />
        </div>
      )}
      {hasMoreReplies && !isRepliesLoading && (
        <div className="flex justify-center mt-8">
          <Button color="black" size="sm" variant="outlined" className="mx-auto flex items-center justify-center">
            View more replies
          </Button>
        </div>
      )}
      <div className="mt-8">
        <AddInfographicCommentReply />
      </div>
    </>
  );
};

export default InfographicCommentReplies;
