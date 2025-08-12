import { addToast, Button, Input } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { useUpdateLaunchSubscriber } from '@/api/other';
import { TbCheck, TbBrandWhatsapp } from 'react-icons/tb';

const WaitlistWhatsAppOptInForm = ({ subscriberId, onPhoneNumberAdded, onSkipWhatsApp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync: updateLaunchSubscriber, isPending: isUpdatingPhoneNumber } = useUpdateLaunchSubscriber();

  const handlePhoneNumberSubmission = async (formData) => {
    try {
      await updateLaunchSubscriber({
        id: subscriberId,
        phone: formData.phone.trim(),
      });
      addToast({
        title: 'Phone number added!',
        description: "You'll receive WhatsApp notifications when we launch.",
        color: 'success',
      });
      onPhoneNumberAdded();
    } catch (error) {
      addToast({
        title: 'Error adding phone number!',
        description: error?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col items-center justify-center text-center">
        <TbCheck size="60" className="mx-auto mb-4 text-green-500" />
        <h3 className="text-xl font-semibold">You're on the waitlist!</h3>
        <p className="mt-2 max-w-[240px] leading-snug opacity-75">Get notified instantly on WhatsApp when we launch</p>
      </div>
      <form onSubmit={handleSubmit(handlePhoneNumberSubmission)} className="border-default-100 mt-6 border-t pt-6">
        <div className="space-y-4">
          <div className="flex">
            <Input
              label="Phone Number"
              labelPlacement="outside"
              type="tel"
              placeholder="ex. +234 801 234 5678"
              classNames={{ input: 'px-2' }}
              size="lg"
              startContent={<TbBrandWhatsapp className="text-green-500" size={20} />}
              {...register('phone', {
                required: 'Phone number is required to enable WhatsApp notifications',
                pattern: {
                  value: /^\+?[\d\s\-\(\)]{7,20}$/,
                  message: 'Please enter a valid phone number',
                },
                validate: {
                  notEmpty: (value) => {
                    const trimmed = value?.trim();
                    return (trimmed && trimmed.length > 0) || 'Phone number cannot be empty';
                  },
                  hasEnoughDigits: (value) => {
                    const digitsOnly = value?.replace(/\D/g, '');
                    return (digitsOnly && digitsOnly.length >= 7) || 'Phone number must contain at least 7 digits';
                  },
                },
              })}
              errorMessage={errors?.phone?.message}
              isInvalid={!!errors?.phone?.message}
              isDisabled={isUpdatingPhoneNumber}
            />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Button
            type="button"
            size="lg"
            radius="full"
            variant="bordered"
            onPress={onSkipWhatsApp}
            isDisabled={isUpdatingPhoneNumber}
          >
            Skip
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-green-700 font-semibold text-white hover:from-green-700 hover:to-green-800"
            size="lg"
            radius="full"
            color="primary"
            isLoading={isUpdatingPhoneNumber}
            startContent={!isUpdatingPhoneNumber && <TbBrandWhatsapp size={20} />}
          >
            Enable WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WaitlistWhatsAppOptInForm;
