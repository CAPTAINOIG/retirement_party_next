import React, { useState } from 'react';
import Button from '@/components/global/Button';
import { useForm } from 'react-hook-form';
import { useAddInfographicCommentReply } from '@/api/infographics';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks/use-auth';
import LoginRequiredAlert from './LoginRequiredModal';

const AddInfographicCommentReply = ({ commentId }) => {
  const toast = useToast();
  const { user } = useAuth();
  const qc = useQueryClient();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { mutateAsync: addCommentReply, isPending } = useAddInfographicCommentReply(commentId);
  const submit = async (values, e) => {
    try {
      if (user) {
        await addCommentReply(values);
        await qc.invalidateQueries({
          queryKey: ['replies', commentId],
        });
        e.target.reset();
      } else {
        setIsLoginModalOpen(true);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <textarea
            className="bg-white border py-2 px-5 text-base rounded-2xl w-full"
            placeholder="Add a reply"
            rows="1"
            {...register('content', { required: 'Comment is required' })}
            disabled={isPending}
          />
          <Button type="submit" color="black" variant="subtle" loading={isPending}>
            Reply
          </Button>
        </div>
      </form>
      <LoginRequiredAlert isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default AddInfographicCommentReply;

