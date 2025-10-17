'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea, Drawer, DrawerBody, DrawerContent } from '@heroui/react';
import { useCreateEventAttendee } from '@/api/other';
import { TbSend, TbUser, TbMail, TbPhone, TbMapPin, TbCheck, TbX, TbBrandLinkedin } from 'react-icons/tb';

const AnalystsApplicationDrawer = ({ isOpen, onClose }) => {
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
        event: 'data-on-the-road-tour',
        meta: {
          location: data.location,
          linkedin: data.linkedin,
          interests: data.interests,
        },
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          reset();
        },
        onError: () => {
          // Handle error if needed
        },
      }
    );
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  // Success View Component
  const SuccessView = () => (
    <div className="py-12 text-center">
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
        className="mb-4 text-2xl font-bold"
      >
        Registration Successful! 🎉
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 text-base leading-relaxed opacity-80"
      >
        Thank you for registering for the Data on the Road tour! We're excited to meet you and connect with fellow data
        enthusiasts.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-default-100 mx-auto max-w-md space-y-4 rounded-2xl px-8 py-6 text-start"
      >
        <p className="opacity-70">
          <strong>What's next?</strong>
        </p>
        <ul className="space-y-2 text-sm opacity-80">
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            You'll receive a confirmation email with event details
          </li>
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            We'll contact you with event details for your city
          </li>
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            Connect with fellow data professionals at the event
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
          onPress={handleClose}
        >
          Close
        </Button>
      </motion.div>
    </div>
  );

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} size="2xl" hideCloseButton>
      <DrawerContent>
        <DrawerBody className="p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Join Statisense on the Road</h3>
              <p className="mt-1 text-base opacity-80">
                We're coming to a city near you! Register for our exclusive upcoming events
              </p>
            </div>
            <Button isIconOnly variant="bordered" color="danger" radius="full" onPress={handleClose}>
              <TbX size="20" />
            </Button>
          </div>
          {isSuccess ? (
            <SuccessView />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Registration Information */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  {...register('name', { required: 'Name is required' })}
                  label="Full Name"
                  labelPlacement="outside"
                  placeholder="Enter your full name"
                  variant="bordered"
                  size="md"
                  startContent={<TbUser className="text-default-400" size={18} />}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                  classNames={{
                    input: 'text-sm px-2',
                  }}
                />
                <Input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  label="Email Address"
                  labelPlacement="outside"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                  size="md"
                  startContent={<TbMail className="text-default-400" size={18} />}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  classNames={{
                    input: 'text-sm px-2',
                  }}
                />
                <Input
                  {...register('phone', { required: 'Phone number is required' })}
                  label="Phone Number"
                  labelPlacement="outside"
                  placeholder="Enter your phone number"
                  type="tel"
                  variant="bordered"
                  size="md"
                  startContent={<TbPhone className="text-default-400" size={18} />}
                  isInvalid={!!errors.phone}
                  errorMessage={errors.phone?.message}
                  classNames={{
                    input: 'text-sm px-2',
                  }}
                />
                <Input
                  {...register('location', { required: 'Location is required' })}
                  label="Location (City)"
                  labelPlacement="outside"
                  placeholder="eg Ibadan, Gwarinpa, Shomolu, PH etc"
                  variant="bordered"
                  size="md"
                  startContent={<TbMapPin className="text-default-400" size={18} />}
                  isInvalid={!!errors.location}
                  errorMessage={errors.location?.message}
                  classNames={{
                    input: 'text-sm px-2',
                  }}
                />
              </div>
              {/* Additional Information */}
              <div className="space-y-4">
                <div className="flex">
                  <Input
                    {...register('linkedin')}
                    label="LinkedIn Profile (Optional)"
                    labelPlacement="outside"
                    placeholder="LinkedIn profile URL"
                    variant="bordered"
                    size="md"
                    startContent={<TbBrandLinkedin className="text-blue-600" size={18} />}
                    classNames={{
                      input: 'text-sm px-2',
                    }}
                  />
                </div>
                <Textarea
                  {...register('interests', { required: 'Please describe your areas of interest' })}
                  label="Areas of Interest"
                  labelPlacement="outside"
                  placeholder="Tell us about your interests in data analytics, what you hope to learn from the tour, and what topics excite you most..."
                  variant="bordered"
                  size="md"
                  minRows={3}
                  isInvalid={!!errors.interests}
                  errorMessage={errors.interests?.message}
                  classNames={{
                    input: 'text-sm px-2 py-2',
                  }}
                />
              </div>
              {/* Submit Button */}
              <div className="flex pt-4">
                <Button
                  type="submit"
                  size="lg"
                  color="primary"
                  radius="full"
                  isLoading={isPending}
                  className="px-8 py-3 text-base font-semibold"
                  endContent={!isPending && <TbSend size={18} />}
                >
                  {isPending ? 'Registering...' : 'Register for Tour'}
                </Button>
              </div>
            </form>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AnalystsApplicationDrawer;
