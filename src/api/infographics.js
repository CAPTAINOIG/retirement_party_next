import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import http from '../lib/http.js';

export const useGetTrendingInfographics = () => {
  return useQuery({
    queryKey: ['infographics', 'trending'],
    queryFn: async () => {
      const res = await http.get('/infographic/trending');
      return res.data;
    },
  });
};

export const useGetInfographics = ({ category, search, enabled = true } = {}) => {
  return useQuery({
    queryKey: ['infographics', category, search],
    queryFn: async () => {
      const res = await http.get('/infographic', {
        params: { category, search },
      });
      return res.data;
    },
    enabled,
  });
};

export const useGetCategoryInfographics = (category) => {
  return useInfiniteQuery({
    queryKey: ['infographics', 'category', category],
    queryFn: async ({ pageParam: page }) => {
      const res = await http.get('/infographic', {
        params: { category, page, limit: 20 },
      });
      return res.data;
    },
    enabled: !!category,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export const useSearchInfographics = (search) => {
  return useInfiniteQuery({
    queryKey: ['infographics', 'search', search],
    queryFn: async ({ pageParam: page }) => {
      const res = await http.get('/infographic', {
        params: { search, page, limit: 20 },
      });
      return res.data;
    },
    enabled: !!search,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export const useGetCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await http.get('/category');
      return res.data;
    },
  });
};

export const useAddViewMutation = () => {
  return useMutation({
    mutationFn: ({ id }) => {
      return http.patch(`/infographic/${id}/view`);
    },
  });
};

export const useGetInfographicComments = (infographicId) => {
  return useInfiniteQuery({
    queryKey: ['infographics', infographicId, 'comments'],
    queryFn: async ({ pageParam }) => {
      const res = await http.get(`/infographic/${infographicId}/comments`, {
        params: { page: pageParam },
      });
      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export const useGetInfographicCommentReplies = (commentId) => {
  return useInfiniteQuery({
    queryKey: ['comments', commentId, 'replies'],
    queryFn: async ({ pageParam }) => {
      const res = await http.get(`/infographic/comments/${commentId}/replies`, {
        params: { page: pageParam },
      });
      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export const useGetInfographicsReactions = (infographicId) => {
  return useQuery({
    queryKey: ['infographics', infographicId, 'reactions'],
    queryFn: async () => {
      const res = await http.get(`/infographic/${infographicId}/reactions`);
      return res.data;
    },
  });
};

export const useGetCommentReactions = (commentId) => {
  return useQuery({
    queryKey: ['comments', commentId, 'reactions'],
    queryFn: async () => {
      const res = await http.get(`/infographic/comments/${commentId}/reactions`);
      return res.data;
    },
  });
};

export const useGetCommentReplyReactions = (commentReplyId) => {
  return useQuery({
    queryKey: ['commentReplyReactions', commentReplyId, 'reactions'],
    queryFn: async () => {
      const res = await http.get(`/infographic/replies/${commentReplyId}/reactions`);
      return res.data;
    },
  });
};

export const useAddInfographicComment = (infographicId) => {
  return useMutation({
    mutationFn: ({ content }) => {
      return http.post(`/infographic/${infographicId}/comments`, { content });
    },
  });
};

export const useAddInfographicCommentReply = (commentId) => {
  return useMutation({
    mutationFn: ({ content }) => {
      return http.post(`/infographic/comments/${commentId}/replies`, { content });
    },
  });
};

export const useReactToInfographic = (infographicId, userId) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ reaction }) => {
      return http.post(`/infographic/${infographicId}/reactions`, { reaction });
    },
    onMutate: async () => {
      await qc.cancelQueries({ queryKey: ['infographics', infographicId, 'reactions'] });
      const previousReactions = qc.getQueryData(['infographics', infographicId, 'reactions']);
      qc.setQueryData(['infographics', infographicId, 'reactions'], (oldReactions) => {
        const hasReacted = !!oldReactions.reactions.find((reaction) => reaction.user._id === userId);
        if (hasReacted) {
          return {
            success: true,
            count: oldReactions.reactions.length - 1,
            reactions: oldReactions.reactions.filter((reaction) => reaction.user._id !== userId),
          };
        }
        return {
          success: true,
          count: oldReactions.reactions.length + 1,
          reactions: [
            {
              comment: infographicId,
              reaction: 'like',
              user: {
                _id: userId,
              },
            },
            ...oldReactions.reactions,
          ],
        };
      });
      return { previousReactions };
    },
    onError: (error, newReactions, { previousReactions }) => {
      qc.setQueryData(['infographics', infographicId, 'reactions'], previousReactions);
    },
    onSuccess() {
      qc.invalidateQueries({ queryKey: ['infographics', infographicId, 'reactions'] });
    },
  });
};

export const useReactToInfographicComment = (commentId, userId) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ reaction }) => {
      return http.post(`/infographic/comments/${commentId}/reactions`, { reaction });
    },
    onMutate: async () => {
      await qc.cancelQueries({ queryKey: ['comments', commentId, 'reactions'] });
      const previousReactions = qc.getQueryData(['comments', commentId, 'reactions']);
      qc.setQueryData(['comments', commentId, 'reactions'], (oldReactions) => {
        const hasReacted = !!oldReactions.reactions.find((reaction) => reaction.user._id === userId);
        if (hasReacted) {
          return {
            success: true,
            count: oldReactions.reactions.length - 1,
            reactions: oldReactions.reactions.filter((reaction) => reaction.user._id !== userId),
          };
        }
        return {
          success: true,
          count: oldReactions.reactions.length + 1,
          reactions: [
            {
              comment: commentId,
              reaction: 'like',
              user: {
                _id: userId,
              },
            },
            ...oldReactions.reactions,
          ],
        };
      });
      return { previousReactions };
    },
    onError: (error, newReactions, { previousReactions }) => {
      qc.setQueryData(['comments', commentId, 'reactions'], previousReactions);
    },
    onSuccess() {
      qc.invalidateQueries({ queryKey: ['comments', commentId, 'reactions'] });
    },
  });
};

export const useReactToInfographicCommentReply = (commentReplyId, userId) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ reaction }) => {
      return http.post(`/infographic/replies/${commentReplyId}/reactions`, { reaction });
    },
    onMutate: async () => {
      await qc.cancelQueries({ queryKey: ['commentReplyReactions', commentReplyId, 'reactions'] });
      const previousReactions = qc.getQueryData(['commentReplyReactions', commentReplyId, 'reactions']);
      qc.setQueryData(['commentReplyReactions', commentReplyId, 'reactions'], (oldReactions) => {
        const hasReacted = !!oldReactions.reactions.find((reaction) => reaction.user._id === userId);
        if (hasReacted) {
          return {
            success: true,
            count: oldReactions.reactions.length - 1,
            reactions: oldReactions.reactions.filter((reaction) => reaction.user._id !== userId),
          };
        }
        return {
          success: true,
          count: oldReactions.reactions.length + 1,
          reactions: [
            {
              comment: commentReplyId,
              reaction: 'like',
              user: {
                _id: userId,
              },
            },
            ...oldReactions.reactions,
          ],
        };
      });
      return { previousReactions };
    },
    onError: (error, newReactions, { previousReactions }) => {
      qc.setQueryData(['commentReplyReactions', commentReplyId, 'reactions'], previousReactions);
    },
    onSuccess() {
      qc.invalidateQueries({ queryKey: ['commentReplyReactions', commentReplyId, 'reactions'] });
    },
  });
};
