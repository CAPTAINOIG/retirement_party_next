import React, { useState } from 'react';
import { formatDistance } from 'date-fns';
import Button from '@/components/global/Button';
import { IconThumbUp, IconThumbUpFilled } from '@tabler/icons-react';
import { useToast } from '@/hooks/use-toast';
import { useGetCommentReplyReactions, useReactToInfographicCommentReply } from '@/api/infographics';
import { useAuth } from '@/hooks/use-auth';
import LoginRequiredAlert from './LoginRequiredModal';

const InfographicCommentReply = ({ reply }) => {
  const toast = useToast();
  const { user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { data: { reactions } = {} } = useGetCommentReplyReactions(reply.id);
  const { mutateAsync: react } = useReactToInfographicCommentReply(reply.id, user?._id);

  const totalReactions = reactions ? reactions.length : reply.totalReactions;
  const isLiked = !!reactions?.find((reaction) => reaction.user._id === user?._id);

  const handleReact = async () => {
    try {
      if (!user) return setIsLoginModalOpen(true);
      await react({ reaction: 'like' });
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
            onClick={handleReact}
            variant="outlined"
            color="black"
            leftIcon={
              !isLiked ? <IconThumbUp size="18" /> : <IconThumbUpFilled className="text-primary-500" size="18" />
            }
            size="sm"
          >
            {totalReactions}
          </Button>
        </div>
      </div>
      <LoginRequiredAlert isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default InfographicCommentReply;

