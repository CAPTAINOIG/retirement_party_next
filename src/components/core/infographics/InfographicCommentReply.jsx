import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import Button from '@/components/global/Button';
import { IconThumbUp, IconThumbUpFilled } from '@tabler/icons-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useGetCommentReplyReactions, useReactToInfographicCommentReply } from '@/api/infographics';
import { useAuth } from '@/hooks/use-auth';
import LoginRequiredAlert from './LoginRequiredModal';

const InfographicCommentReply = ({ reply }) => {
  const toast = useToast();
  const router = useRouter();
  const { user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [reactionCount, setReactionCount] = useState(reply.totalReactions);
  const { data: { reactions = [] } = {}, isLoading: isInfographicsLoading } = useGetCommentReplyReactions(reply.id);
  const [isLiked, setIsLiked] = useState(false);
  const { mutateAsync: react } = useReactToInfographicCommentReply();

  useEffect(() => {
    setIsLiked(!!reactions.find((reaction) => reaction.user === user?._id));
  }, [reactions, user]);

  const likeCommentReply = async () => {
    try {
      if (user) {
        if (isLiked) {
          setReactionCount((reactionCount) => reactionCount - 1);
        } else {
          setReactionCount((reactionCount) => reactionCount + 1);
        }
        setIsLiked((isLiked) => !isLiked);
        await react({ replyId: reply.id, reaction: 'like' });
      } else {
        setIsLoginModalOpen(true);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };
  return (
    <div className="flex space-x-3">
      <div>
        <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
      </div>
      <div className="w-full">
        <div className="flex items-center w-full">
          <div className="lg:flex">
            <p className="font-medium leading-none">
            {reply.user.firstName} {reply.user.lastName}
            </p>
            <p className="opacity-70 leading-none mt-1 lg:mt-0 lg:ml-2">@{reply.user.username} </p>
          </div>
          <p className="ml-auto text-sm opacity-80">{formatDistance(new Date(), new Date(reply.createdAt))} ago</p>
        </div>
        <p className="mt-1.5">{reply.content}</p>
        <div className="flex items-center space-x-2 mt-3">
          <Button
            onClick={likeCommentReply}
            variant="outlined"
            color="black"
            leftIcon={
              !isLiked ? <IconThumbUp size="18" /> : <IconThumbUpFilled className="text-primary-500" size="18" />
            }
            size="sm"
          >
            {reactionCount}
          </Button>
        </div>
      </div>
      <LoginRequiredAlert isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default InfographicCommentReply;

