import { useMutation } from '@tanstack/react-query';
import http from '@/lib/http';

export const useNewsletterSubscribe = () => {
  return useMutation({
    mutationFn: ({ name, email }) => {
      return http.post('/newsletter/subscribe', { name, email });
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
