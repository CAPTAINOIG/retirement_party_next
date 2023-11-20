import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import Button from '@/components/global/Button';
import { IconMessageCircle, IconThumbUp, IconThumbUpFilled } from '@tabler/icons-react';
import InfographicCommentReplies from '@/components/core/infographics/InfographicCommentReplies';
import { useGetCommentReactions, useReactToInfographicComment } from '@/api/infographics';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import LoginRequiredAlert from './LoginRequiredModal';

const InfographicComment = ({ comment }) => {
  const toast = useToast();
  const { user } = useAuth();
  const [isRepliesOpen, setIsRepliesOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { data: { reactions = [] } = {}, isLoading: isReactionLoading } = useGetCommentReactions(comment.id);
  const [reactionCount, setReactionCount] = useState(reactions.length);
  const [isLiked, setIsLiked] = useState(false);
  const { mutateAsync: react } = useReactToInfographicComment(comment.id, user?._id);
  useEffect(() => {
    setIsLiked(!!reactions.find((reaction) => reaction.user._id === user?._id));
  }, [reactions, user]);

  useEffect(() => {
    setReactionCount(reactions.length);
  }, [reactions]);

  const likeComment = async () => {
    try {
      if (user) {
        await react({ reaction: 'like' });
      } else {
        setIsLoginModalOpen(true);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };
  return (
    <div className="px-6 py-6 flex flex-col gap-1 border-b">
      <div className="flex space-x-3">
        <div>
          <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="lg:flex">
              <p className="font-medium leading-none">
                {comment.user.firstName} {comment.user.lastName}
              </p>
              <p className="opacity-70 leading-none mt-1 lg:mt-0 lg:ml-2">@{comment.user.username} </p>
            </div>
            <p className="ml-auto text-sm opacity-80">{formatDistance(new Date(), new Date(comment.createdAt))} ago</p>
          </div>
          <p className="mt-1.5">{comment.content}</p>
          <div className="flex items-center space-x-3 mt-3">
            <Button
              type="button"
              onClick={likeComment}
              variant="outlined"
              color="black"
              leftIcon={
                !isLiked ? <IconThumbUp size="18" /> : <IconThumbUpFilled className="text-primary-500" size="18" />
              }
              size="sm"
            >
              {reactionCount}
            </Button>
            <Button
              type="button"
              onClick={() => setIsRepliesOpen(!isRepliesOpen)}
              variant="outlined"
              color="black"
              leftIcon={<IconMessageCircle size="18" />}
              size="sm"
            >
              {comment.totalReplies}
            </Button>
          </div>
          {isRepliesOpen && (
            <div className="mt-8">
              <InfographicCommentReplies commentId={comment.id} />
            </div>
          )}
        </div>
      </div>
      <LoginRequiredAlert isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default InfographicComment;

