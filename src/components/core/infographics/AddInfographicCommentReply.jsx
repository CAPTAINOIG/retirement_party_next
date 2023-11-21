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
  const { register, handleSubmit, reset } = useForm();
  const { mutateAsync: addCommentReply, isPending } = useAddInfographicCommentReply(commentId);

  const query = qc.getQueryState(['comments', commentId, 'replies']);
  const isFetching = query.isInvalidated && query.fetchStatus === 'fetching';

  const submit = async (values) => {
    try {
      if (!user) return setIsLoginModalOpen(true);
      await addCommentReply(values);
      await qc.invalidateQueries({
        queryKey: ['comments', commentId, 'replies'],
      });
      reset();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <textarea
            className="bg-white border py-2 px-5 text-base rounded-2xl w-full"
            placeholder="Add a reply"
            rows="1"
            {...register('content', { required: 'Comment is required' })}
            disabled={isPending || isFetching}
          />
          <Button type="submit" color="black" variant="subtle" loading={isPending || isFetching}>
            Reply
          </Button>
        </div>
      </form>

      <LoginRequiredAlert isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default AddInfographicCommentReply;
