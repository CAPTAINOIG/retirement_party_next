import React, { useState } from 'react';
import Button from '@/components/global/Button.jsx';
import { IconArrowRight, IconMailQuestion } from '@tabler/icons-react';
import { useNewsletterSubscribe } from '@/api/other';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { addToast } from '@heroui/react';

const Newsletter = ({ sm = false }) => {
  const [view, setView] = useState('form');
  const { register, handleSubmit } = useForm();
  const { mutateAsync: subscribe, isLoading } = useNewsletterSubscribe();

  const submit = async (values) => {
    try {
      await subscribe(values);
      setView('success');
    } catch (e) {
      addToast({
        title: 'Error joining the waitlist!',
        description: error?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  return (
    <div
      className={cn(
        'to-primary-950 from-primary-50/50 relative bg-black bg-linear-to-br px-10 text-zinc-100 md:px-20',
        sm ? 'overflow-hidden py-24' : 'py-40'
      )}
    >
      <div className="relative z-20">
        {view === 'form' && (
          <div className="container flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-[2.5rem] leading-tight! font-medium tracking-tight md:text-6xl">
              Get weekly statisense directly into your inbox
            </h2>
            <form
              onSubmit={handleSubmit(submit)}
              className="mt-10 flex w-full max-w-2xl flex-col items-center space-y-4 sm:mt-16 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <input
                type="text"
                name="query"
                id="query"
                placeholder="Full name"
                className="w-full rounded-full bg-zinc-700/50 px-8 py-4 ring-zinc-500/10 transition-all outline-none! focus:ring-4 disabled:pointer-events-none disabled:opacity-75 sm:w-[200%]"
                {...register('name', { required: 'Name is required' })}
                disabled={isLoading}
              />
              <input
                type="email"
                name="query"
                id="query"
                placeholder="Email address"
                className="w-full rounded-full bg-zinc-700/50 px-8 py-4 ring-zinc-500/10 transition-all outline-none! focus:ring-4 disabled:pointer-events-none disabled:opacity-75 sm:w-[300%]"
                {...register('email', { required: 'Email is required' })}
                disabled={isLoading}
              />
              <Button type="submit" size="lg" color="white" block rightIcon={<IconArrowRight />} loading={isLoading}>
                Subscribe
              </Button>
            </form>
          </div>
        )}
        {view === 'success' && (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-10 grid h-20 w-20 place-items-center rounded-full bg-orange-600 text-white">
              <IconMailQuestion size="44" />
            </div>
            <h2 className="text-4xl font-semibold">Almost done</h2>
            <p className="mt-6 max-w-md">
              We need to verify your email address. To complete the subscription process, please click the link in the
              email we just sent you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
