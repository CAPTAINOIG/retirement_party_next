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
