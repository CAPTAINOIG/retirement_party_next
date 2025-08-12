import { addToast, Button, Input } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { useAddLaunchSubscriber } from '@/api/other';
import { trackLead, trackCompleteRegistration } from '@/utils/facebook-pixel';
import { trackLead as trackTwitterLead, trackSignup as trackTwitterSignup } from '@/utils/twitter-pixel';

const WaitlistEmailRegistrationForm = ({ onRegistrationSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync: addLaunchSubscriber, isPending } = useAddLaunchSubscriber();

  const handleEmailRegistration = async (formData) => {
    try {
      const response = await addLaunchSubscriber({
        name: formData.name,
        email: formData.email,
        product: 'immortal-ai',
      });
      // Track successful waitlist signup as a Lead event
      trackLead();
      trackCompleteRegistration();
      // Track Twitter conversion events
      trackTwitterLead();
      trackTwitterSignup(formData.email);
      // Extract the correct ID from the response
      const subscriberId = response.data?.record?.id || response.data?.record?._id;
      onRegistrationSuccess({
        subscriberId,
        email: formData.email,
        name: formData.name,
      });
    } catch (error) {
      addToast({
        title: 'Error joining the waitlist!',
        description: error?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleEmailRegistration)}>
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
        </div>
        <Button
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-slate-700 to-slate-800 font-semibold text-white hover:from-slate-800 hover:to-slate-900"
          size="lg"
          radius="full"
          color="primary"
          isLoading={isPending}
        >
          Join waitlist
        </Button>
      </form>
    </div>
  );
};

export default WaitlistEmailRegistrationForm;