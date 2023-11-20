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
    queryKey: ['comments', infographicId],
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
    queryKey: ['replies', commentId],
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

export const useGetCommentReactions = (commentId) => {
  return useQuery({
    queryKey: ['commentReactions', commentId],
    queryFn: async () => {
      const res = await http.get(`/infographic/comments/${commentId}/reactions`);
      return res.data;
    },
  });
};

export const useGetCommentReplyReactions = (commentReplyId) => {
  return useQuery({
    queryKey: ['commentReplyReactions', commentReplyId],
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

export const useReactToInfographic = () => {
  return useMutation({
    mutationFn: ({ infographicId, reaction }) => {
      return http.post(`/infographic/${infographicId}/reactions`, { reaction });
    },
  });
};

export const useReactToInfographicComment = (commentId, userId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ reaction }) => {
      return http.post(`/infographic/comments/${commentId}/reactions`, { reaction });
    },
    //Optimistic update
    onMutate: async () => {
      // Stop the queries that may affect this operation
      await queryClient.cancelQueries(['commentReactions', commentId]);

      // Get a snapshot of current data
      const snapshotOfPreviousTodos = queryClient.getQueryData(['commentReactions', commentId]);

      // Modify cache to reflect this optimistic update
      queryClient.setQueryData(['commentReactions', commentId], (oldReactions) => {
        const userHasReacted = !!oldReactions.reactions.find((reaction) => reaction.user._id === userId);
        if (userHasReacted) {
          //removing the reaction from array and reducing count by one
          return {
            success: true,
            count: oldReactions.reactions.length - 1,
            reactions: oldReactions.reactions.filter((reaction) => reaction.user._id === userId),
          };
        }
        //adding the reaction to array and increasing count by one
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
      // Return a snapshot so we can rollback in case of failure
      return {
        snapshotOfPreviousTodos,
      };
    },
    onError: (error, newReactions, { snapshotOfPreviousTodos }) => {
      // Rollback the changes using the snapshot if there's an error
      queryClient.setQueryData(['commentReactions', commentId], snapshotOfPreviousTodos);
    },

    onSuccess() {
      // Refetch or invalidate related queries
      queryClient.invalidateQueries(['commentReactions', commentId]);
    },
  });
};

export const useReactToInfographicCommentReply = () => {
  return useMutation({
    mutationFn: ({ replyId, reaction }) => {
      return http.post(`/infographic/replies/${replyId}/reactions`, { reaction });
    },
  });
};

