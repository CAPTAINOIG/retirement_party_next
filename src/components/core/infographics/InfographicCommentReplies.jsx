import React from 'react';
import Button from '@/components/global/Button';
import InfographicCommentLoading from '@/components/core/infographics/InfographicCommentLoading';
import InfographicCommentReply from '@/components/core/infographics/InfographicCommentReply';
import AddInfographicCommentReply from '@/components/core/infographics/AddInfographicCommentReply';
import { useGetInfographicCommentReplies } from '@/api/infographics';
import { IconMessageOff } from '@tabler/icons-react';

const InfographicCommentReplies = ({ commentId }) => {
  const {
    data: { pages = [] } = {},
    isFetching,
    isLoading: isRepliesLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetInfographicCommentReplies(commentId);
  const replies = pages.map((p) => p.replies).flat();

  return (
    <>
      <div className="space-y-8">
        {replies?.map((reply, i) => (
          <InfographicCommentReply reply={reply} key={i} />
        ))}
      </div>
      {isRepliesLoading && (
        <div className="space-y-8 mt-6">
          <InfographicCommentLoading />
        </div>
      )}
      {!isRepliesLoading && !replies?.length && (
        <div className="flex items-center space-x-4 w-full opacity-75">
          <IconMessageOff size="20" />
          <p>No replies yet</p>
        </div>
      )}
      {hasNextPage && !isRepliesLoading && (
        <div className="flex justify-center mt-8">
          <Button
            oading={isFetching}
            onClick={fetchNextPage}
            color="black"
            size="sm"
            variant="outlined"
            className="mx-auto flex items-center justify-center"
          >
            View more replies
          </Button>
        </div>
      )}
      <div className="mt-8">
        <AddInfographicCommentReply commentId={commentId} />
      </div>
    </>
  );
};

export default InfographicCommentReplies;
