import React, { useState } from 'react';
import Link from 'next/link';
import Image from '@/components/core/shared/Image.jsx';
import { formatDistance } from 'date-fns';
import { IconMessageCircle, IconThumbUp, IconThumbUpFilled } from '@tabler/icons-react';
import Button from '@/components/global/Button';
import InfographicComments from './InfographicComments';
import classNames from 'classnames';
import Card from '@/components/global/Card';
import { useAuth } from '@/hooks/use-auth';
import { useGetInfographicsReactions, useReactToInfographic } from '@/api/infographics';
import { useToast } from '@/hooks/use-toast';
import LoginRequiredAlert from './LoginRequiredModal';

const InfographicCard = ({ infographic }) => {
  const toast = useToast();
  const { user } = useAuth();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(true);
  const { data: { reactions } = {} } = useGetInfographicsReactions(infographic.id);
  const { mutateAsync: react } = useReactToInfographic(infographic.id, user?._id);

  const totalReactions = reactions ? reactions.length : infographic.totalReactions;
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
    <>
      <Card className="overflow-hidden">
        <div className="px-8 py-6">
          <div className="flex items-center space-x-2">
            <img src="/images/logo-icon-inverted.png" alt="Statisense logo" className="w-8 h-8 rounded-full" />
            <div>
              <p className="font-medium leading-none">Statisense</p>
              <p className="opacity-70 text-sm leading-none mt-1">
                @statisense • {formatDistance(new Date(), new Date(infographic.createdAt))} ago
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="font-medium text-lg">{infographic.title}</h5>
            <p
              className={classNames('text-base text-primary mt-1 leading-snug', {
                'line-clamp-2 ': showFullDescription,
              })}
            >
              {infographic.description}
            </p>
            <p onClick={() => setShowFullDescription((v) => !v)} className="text-slate-700 cursor-pointer mt-1">
              {!showFullDescription ? 'See less' : 'See more'}
            </p>
          </div>
        </div>
        <Link href={`/insights/${infographic.category.slug}/${infographic.slug}`} className="flex w-full">
          <Image src={infographic.image} alt={infographic.title} className="w-full object-contain border-b-0" />
        </Link>
        <div className="flex flex-row space-x-2 px-6 py-4">
          <Button
            onClick={handleReact}
            variant="outlined"
            color="black"
            size="sm"
            leftIcon={
              !isLiked ? <IconThumbUp size="18" /> : <IconThumbUpFilled className="text-primary-500" size="18" />
            }
          >
            {totalReactions}
          </Button>
          <Button
            onClick={() => setIsCommentsOpen((v) => !v)}
            variant="outlined"
            color="black"
            leftIcon={<IconMessageCircle size="18" />}
            size="sm"
          >
            {infographic.totalComments}
          </Button>
        </div>
        <hr />
        {isCommentsOpen && <InfographicComments infographicId={infographic.id} />}
      </Card>

      <LoginRequiredAlert isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default InfographicCard;
