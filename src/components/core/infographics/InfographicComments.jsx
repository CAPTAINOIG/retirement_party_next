import React from 'react';
import InfographicComment from '@/components/core/infographics/InfographicComment';
import InfographicCommentLoading from '@/components/core/infographics/InfographicCommentLoading';
import Button from '@/components/global/Button';
import { IconMessageOff } from '@tabler/icons-react';
import AddInfographicComment from '@/components/core/infographics/AddInfographicComment';
import { useGetInfographicComments } from '@/api/infographics';

const InfographicComments = ({ infographicId }) => {
  
  const {
    data: { pages = [] } = {},
    isFetching,
    isLoading: isCommentsLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetInfographicComments(infographicId);
  const comments = pages.map((p) => p.comments).flat();

  return (
    <>
      <AddInfographicComment infographicId={infographicId} />
      <hr />
      {comments?.map((comment, i) => (
        <InfographicComment comment={comment} key={i} />
      ))}
      {isCommentsLoading && (
        <div className="space-y-6 py-6">
          <InfographicCommentLoading />
        </div>
      )}
      {hasNextPage && !isCommentsLoading && (
        <div className="flex items-center w-full py-3">
          <Button loading={isFetching} onClick={fetchNextPage} color="black" size="sm" variant="text" className="mx-auto flex items-center justify-center">
            View More Comments
          </Button>
        </div>
      )}
      {!isCommentsLoading && !comments.length && (
        <div className="flex justify-center space-x-4 w-full py-6 opacity-75">
          <IconMessageOff size="20" />
          <p>No comments yet</p>
        </div>
      )}
    </>
  );
};

export default InfographicComments;

