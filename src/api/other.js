import { useMutation, useQuery } from '@tanstack/react-query';
import http from '@/lib/http';

export const useNewsletterSubscribe = () => {
  return useMutation({
    mutationFn: ({ firstName, lastName, email, category }) => {
      return http.post('/newsletter/subscribe', { firstName, lastName, email, category });
    },
  });
};

export const useCreateEventAttendee = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/misc/event-attendees', body);
    },
  });
};

export const useVerifySubscriberEmail = () => {
  return useMutation({
    mutationFn: ({ token }) => {
      return http.patch('/newsletter/subscriber/verify', { token });
    },
    retry: 0,
  });
};

export const useAddLaunchSubscriber = () => {
  return useMutation({
    mutationFn: ({ name, email, product, phone, from }) => {
      return http.post('/product/launch/subscribe', { name, email, product, phone, from });
    },
  });
};

export const useUpdateLaunchSubscriber = () => {
  return useMutation({
    mutationFn: ({ id, phone }) => {
      return http.patch(`/product/launch/subscribers/${id}`, { phone });
    },
  });
};

export const useAddContactUs = () => {
  return useMutation({
    mutationFn: ({ name, email, message, category, phone }) => {
      return http.post('/misc/email/contact-us', { name, email, message, category, phone });
    },
  });
};

export const useAmbassadorRegistration = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/ambassadors', body);
    },
  });
};

export const useGetAssessmentQuestions = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: async () => {
      const res = await http.get('/ambassadors/assessment/questions/random');
      return res.data;
    },
    staleTime: Infinity,
  });
};

export const useVerifyAmbassador = (hash, enabled = true) => {
  return useQuery({
    queryKey: ['ambassador-verify', hash],
    queryFn: async () => {
      const res = await http.get(`/ambassadors/${hash}/verify`);
      return res.data;
    },
    enabled: enabled && Boolean(hash),
    retry: false,
  });
};

export const useSubmitAssessment = () => {
  return useMutation({
    mutationFn: ({ result, hash }) => {
      return http.post('/ambassadors/assessment/mark', { result, hash });
    },
  });
};

export const useGetCampuses = () => {
  return useQuery({
    queryKey: ['campuses'],
    queryFn: async () => {
      const res = await fetch('https://api.predict.statisense.co/market-entity?limit=100&type=campus');
      if (!res.ok) return [];
      const json = await res.json();
      return (json?.entities ?? []).map((e) => e.name).filter(Boolean);
    },
    staleTime: 1000 * 60 * 60,
  });
};
