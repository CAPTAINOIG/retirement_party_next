import React, { useState } from 'react';
import { formatDistance } from 'date-fns';
import Button from '@/components/global/Button';
import { IconMessageCircle, IconThumbUp } from '@tabler/icons-react';
import InfographicCommentReplies from '@/components/core/infographics/InfographicCommentReplies';

const InfographicComment = () => {
  const [isRepliesOpen, setIsRepliesOpen] = useState(false);

  return (
    <div className="px-6 py-6 flex flex-col gap-1 border-b">
      <div className="flex space-x-3">
        <div>
          <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
        </div>
        <div>
          <div className="flex items-center w-full">
            <p className="font-medium leading-none">John Doe</p>
            <p className="opacity-70 leading-none ml-2">@jdoe</p>
            <p className="ml-auto text-sm opacity-80">{formatDistance(new Date(), new Date())}</p>
          </div>
          <p className="mt-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis quam assumenda soluta voluptas
            vitae nisi dicta impedit quidem! Aliquid soluta incidunt modi aperiam a officia suscipit ab accusamus.
            Sapiente eius, animi quam nulla quos magnam aliquam nemo distinctio ad!
          </p>
          <div className="flex items-center space-x-3 mt-3">
            <Button variant="outlined" color="black" leftIcon={<IconThumbUp size="18" />} size="sm">
              20k
            </Button>
            <Button
              onClick={() => setIsRepliesOpen(!isRepliesOpen)}
              variant="outlined"
              color="black"
              leftIcon={<IconMessageCircle size="18" />}
              size="sm"
            >
              20k
            </Button>
          </div>
          {isRepliesOpen && (
            <div className="mt-8">
              <InfographicCommentReplies />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfographicComment;
