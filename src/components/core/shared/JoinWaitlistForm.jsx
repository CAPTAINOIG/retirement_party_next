import { addToast, Button, Input } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { useAddLaunchSubscriber } from '@/api/other';
import { trackLead, trackCompleteRegistration } from '@/utils/facebook-pixel';
import { trackLead as trackTwitterLead, trackSignup as trackTwitterSignup } from '@/utils/twitter-pixel';
import { TbCheck } from 'react-icons/tb';
import { useState } from 'react';

const JoinWaitlistForm = ({ onDone }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [view, setView] = useState('form');
  const { mutateAsync: addLaunchSubscriber, isPending } = useAddLaunchSubscriber();

  const submit = async (values) => {
    try {
      await addLaunchSubscriber({
        ...values,
        product: 'immortal-ai',
      });

      // Track successful waitlist signup as a Lead event
      trackLead();
      trackCompleteRegistration();
      // Track Twitter conversion events
      trackTwitterLead();
      trackTwitterSignup(values.email);

      setView('success');
    } catch (e) {
      addToast({
        title: 'Error joining the waitlist!',
        description: e?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  return (
    <div>
      {view === 'form' && (
        <div>
          <h1 className="text-2xl font-semibold">Join the waitlist</h1>
          <form onSubmit={handleSubmit(submit)} className="mt-10">
            <div className="space-y-4">
              <div className="flex">
                <Input
                  label="Name"
                  labelPlacement="outside"
                  type="text"
                  placeholder="ex. John Doe"
                  classNames={{ input: 'px-2' }}
                  size="lg"
                  {...register('name', { required: 'Name is required' })}
                  errorMessage={errors?.name?.message}
                  isInvalid={!!errors?.name?.message}
                  isDisabled={isPending}
                />
              </div>
              <div className="flex">
                <Input
                  label="Email"
                  labelPlacement="outside"
                  type="email"
                  placeholder="ex. john@acme.com"
                  classNames={{ input: 'px-2' }}
                  size="lg"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  errorMessage={errors?.email?.message}
                  isInvalid={!!errors?.email?.message}
                  isDisabled={isPending}
                />
              </div>
              <div className="flex">
                <Input
                  label="Phone Number"
                  labelPlacement="outside"
                  type="tel"
                  placeholder="ex. +234 801 234 5678"
                  classNames={{ input: 'px-2' }}
                  size="lg"
                  {...register('phone', { required: 'Phone number is required' })}
                  errorMessage={errors?.phone?.message}
                  isInvalid={!!errors?.phone?.message}
                  isDisabled={isPending}
                />
              </div>
            </div>
            <Button type="submit" className="mt-8" size="lg" radius="full" color="primary" isLoading={isPending}>
              Join waitlist
            </Button>
          </form>
        </div>
      )}
      {view === 'success' && (
        <div className="flex flex-col items-center gap-4 py-10">
          <TbCheck size="100" className="text-green-500" />
          <p className="text-center text-lg">
            You have been successfully added to the Immortal AI waitlist. We'll notify you when we launch!
          </p>
          {!!onDone && (
            <Button
              type="button"
              size="lg"
              className="mt-8 px-6"
              radius="full"
              variant="solid"
              color="primary"
              onPress={onDone}
            >
              Close
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default JoinWaitlistForm;
