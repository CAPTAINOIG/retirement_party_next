import React, { useState } from 'react';
import Button from '@/components/global/Button';
import { useForm } from 'react-hook-form';
import { useAddInfographicComment } from '@/api/infographics';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import LoginRequiredAlert from './LoginRequiredModal';
import { useAuth } from '@/hooks/use-auth';

const AddInfographicComment = ({ infographicId }) => {
  const toast = useToast();
  const { user } = useAuth();
  const qc = useQueryClient();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { mutateAsync: addComment, isPending } = useAddInfographicComment(infographicId);

  let query = qc.getQueryState(['infographics', infographicId, 'comments']);
  const isFetching = query.isInvalidated && query.fetchStatus === 'fetching';

  const submit = async (values) => {
    try {
      if (!user) return setIsLoginModalOpen(true);
      await addComment(values);
      await qc.invalidateQueries({
        queryKey: ['infographics', infographicId, 'comments'],
      });
      reset();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="py-6 px-6">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col md:flex-row gap-3 md:items-end">
          <textarea
            className="bg-white border py-2 px-3 text-base rounded-xl w-full"
            placeholder="Add a comment"
            rows="1"
            {...register('content', { required: 'Comment is required' })}
            disabled={isPending || isFetching}
          />
          <Button type="submit" color="black" variant="subtle" loading={isPending || isFetching}>
            Add comment
          </Button>
        </div>
      </form>

      <LoginRequiredAlert isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default AddInfographicComment;
