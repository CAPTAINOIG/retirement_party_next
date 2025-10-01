'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useForm } from 'react-hook-form';
import { addToast, Button, Input, Textarea } from '@heroui/react';
import { useCreateEventAttendee } from '@/api/other';
import { TbSend, TbUser, TbMail, TbPhone, TbMapPin, TbCheck } from 'react-icons/tb';

const AnalystsApplicationForm = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: '-100px' });
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutate: createAttendee, isPending } = useCreateEventAttendee();

  const onSubmit = (data) => {
    createAttendee(
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        event: 'analysts-program',
        meta: {
          location: data.location,
          interests: data.interests,
        },
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          reset();
        },
        onError: (e) => {
          addToast({
            title: 'An error occurred',
            description: e?.response?.data?.message ?? 'Something went wrong, please try again',
          });
        },
      }
    );
  };

  // Success View Component
  const SuccessView = () => (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20"
      >
        <TbCheck className="h-12 w-12 text-green-500" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-3xl font-bold text-white md:text-4xl"
      >
        Registration Successful! 🎉
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-default-400 mb-8 text-lg leading-relaxed md:text-xl"
      >
        Thank you for registering for our Analysts Event! We're excited to have you join our community of data
        professionals.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-4"
      >
        <p className="text-default-300 text-base">
          <strong>What's next?</strong>
        </p>
        <ul className="text-default-400 mx-auto max-w-md space-y-2 text-left text-sm">
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            You'll receive a confirmation email with event details
          </li>
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            Event materials and agenda will be shared closer to the date
          </li>
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            Connect with fellow analysts in our community
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8"
      >
        <Button
          size="lg"
          color="primary"
          radius="full"
          className="px-8 py-3 text-base font-semibold"
          onPress={() => setIsSuccess(false)}
        >
          Register Another Person
        </Button>
      </motion.div>
    </div>
  );

  return (
    <div id="apply" ref={formRef} className="dark relative w-full bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              🎟️ Register <span>Now</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-default-500 mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl"
            >
              Join our community of data professionals and reserve your spot at this exclusive event.
            </motion.p>
          </div>

          {/* Form or Success View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="bg-default-50/50 relative rounded-3xl p-8 backdrop-blur-sm md:p-12"
          >
            {isSuccess ? (
              <SuccessView />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      {...register('name', { required: 'Name is required' })}
                      label="Full Name"
                      labelPlacement="outside-top"
                      placeholder="Enter your full name"
                      variant="bordered"
                      size="lg"
                      startContent={<TbUser className="text-default-400" size={20} />}
                      isInvalid={!!errors.name}
                      errorMessage={errors.name?.message}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      label="Email Address"
                      labelPlacement="outside-top"
                      placeholder="Enter your email"
                      type="email"
                      variant="bordered"
                      size="lg"
                      startContent={<TbMail className="text-default-400" size={20} />}
                      isInvalid={!!errors.email}
                      errorMessage={errors.email?.message}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      {...register('phone', { required: 'Phone number is required' })}
                      label="Phone Number"
                      labelPlacement="outside-top"
                      placeholder="Enter your phone number"
                      type="tel"
                      variant="bordered"
                      size="lg"
                      startContent={<TbPhone className="text-default-400" size={20} />}
                      isInvalid={!!errors.phone}
                      errorMessage={errors.phone?.message}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      {...register('location', { required: 'Location is required' })}
                      label="Location (City)"
                      labelPlacement="outside-top"
                      placeholder="Enter your city"
                      variant="bordered"
                      size="lg"
                      startContent={<TbMapPin className="text-default-400" size={20} />}
                      isInvalid={!!errors.location}
                      errorMessage={errors.location?.message}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-4">
                  <Textarea
                    {...register('interests', { required: 'Please describe your interests' })}
                    label="Areas of Interest & Goals"
                    labelPlacement="outside-top"
                    placeholder="Tell us about your specific interests in data analytics, what you hope to learn, and your professional goals..."
                    variant="bordered"
                    size="lg"
                    minRows={3}
                    isInvalid={!!errors.interests}
                    errorMessage={errors.interests?.message}
                    classNames={{
                      input: 'text-base px-2 py-3',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    color="primary"
                    radius="full"
                    isLoading={isPending}
                    className="px-12 py-6 text-lg font-semibold"
                    endContent={!isPending && <TbSend size={20} />}
                  >
                    {isPending ? 'Registering...' : 'Register Now'}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnalystsApplicationForm;

