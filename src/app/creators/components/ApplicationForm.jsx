'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem, Textarea, addToast } from '@heroui/react';
import { useCreateEventAttendee } from '@/api/other';
import {
  TbSend,
  TbUser,
  TbMail,
  TbPhone,
  TbMapPin,
  TbWorld,
  TbCheck,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandYoutube,
  TbBrandTiktok,
  TbBrandLinkedin,
} from 'react-icons/tb';

const ApplicationForm = () => {
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

  const platforms = [
    { key: 'instagram', label: 'Instagram', icon: TbBrandInstagram },
    { key: 'twitter', label: 'Twitter/X', icon: TbBrandTwitter },
    { key: 'youtube', label: 'YouTube', icon: TbBrandYoutube },
    { key: 'tiktok', label: 'TikTok', icon: TbBrandTiktok },
    { key: 'linkedin', label: 'LinkedIn', icon: TbBrandLinkedin },
    { key: 'other', label: 'Other', icon: TbUser },
  ];

  const onSubmit = (data) => {
    createAttendee(
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        event: 'creators-program',
        meta: {
          location: data.location,
          instagram: data.instagram,
          twitter: data.twitter,
          youtube: data.youtube,
          tiktok: data.tiktok,
          linkedin: data.linkedin,
          website: data.website,
          topPlatform: data.topPlatform,
          niche: data.niche,
        },
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          reset();
        },
        onError: () => {
          addToast({
            title: 'Failed to submit application',
            description: 'Please try again.',
            color: 'danger',
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
        Application Submitted Successfully! 🎉
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-default-400 mb-8 text-lg leading-relaxed md:text-xl"
      >
        Thank you for applying to our Creators Program! We've received your application and our team will review it
        carefully.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-4"
      >
        <p className="text-default-300 text-base">
          <strong>What happens next?</strong>
        </p>
        <ul className="text-default-400 mx-auto max-w-md space-y-2 text-left text-sm">
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            We'll review your application within 3-5 business days
          </li>
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            You'll receive an email with next steps if selected
          </li>
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            Keep creating amazing content in the meantime!
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
          Submit Another Application
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
              Ready to{' '}
              <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
                Get Started?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-default-500 mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl"
            >
              Fill out the form below and join the next generation of data storytellers.
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

                {/* Social Media Handles */}
                <div className="space-y-6">
                  <h3 className="mb-4 text-2xl font-semibold text-white">Social Media Presence</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input
                      {...register('instagram')}
                      label="Instagram Handle (Optional)"
                      labelPlacement="outside-top"
                      placeholder="@yourusername"
                      variant="bordered"
                      size="lg"
                      startContent={<TbBrandInstagram className="text-pink-500" size={20} />}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                    <Input
                      {...register('twitter')}
                      label="Twitter/X Handle (Optional)"
                      labelPlacement="outside-top"
                      placeholder="@yourusername"
                      variant="bordered"
                      size="lg"
                      startContent={<TbBrandTwitter className="text-blue-500" size={20} />}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                    <Input
                      {...register('youtube')}
                      label="YouTube Channel (Optional)"
                      labelPlacement="outside-top"
                      placeholder="Channel name or URL"
                      variant="bordered"
                      size="lg"
                      startContent={<TbBrandYoutube className="text-red-500" size={20} />}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                    <Input
                      {...register('tiktok')}
                      label="TikTok Handle (Optional)"
                      labelPlacement="outside-top"
                      placeholder="@yourusername"
                      variant="bordered"
                      size="lg"
                      startContent={<TbBrandTiktok className="text-purple-500" size={20} />}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                    <Input
                      {...register('linkedin')}
                      label="LinkedIn Profile (Optional)"
                      labelPlacement="outside-top"
                      placeholder="LinkedIn profile URL or username"
                      variant="bordered"
                      size="lg"
                      startContent={<TbBrandLinkedin className="text-blue-600" size={20} />}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                    <Input
                      {...register('website')}
                      label="Website/Portfolio (Optional)"
                      labelPlacement="outside-top"
                      placeholder="https://yourwebsite.com"
                      variant="bordered"
                      size="lg"
                      startContent={<TbWorld className="text-default-400" size={20} />}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                  </div>
                </div>

                {/* Platform Selection */}
                <div className="space-y-4">
                  <div className="flex">
                    <Select
                      {...register('topPlatform', { required: 'Please select your top platform' })}
                      label="Primary Content Platform"
                      labelPlacement="outside"
                      placeholder="Select your main platform"
                      variant="bordered"
                      size="lg"
                      disallowEmptySelection
                      isInvalid={!!errors.topPlatform}
                      errorMessage={errors.topPlatform?.message}
                      classNames={{
                        trigger:
                          'border-default-300/30 bg-default-100/10 hover:border-default-400/50 data-[focus=true]:border-primary-500',
                        value: 'text-white',
                        label: 'text-default-300',
                      }}
                    >
                      {platforms.map((platform) => (
                        <SelectItem key={platform.key} value={platform.key}>
                          {platform.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>

                {/* Content Niche */}
                <div className="space-y-4">
                  <Textarea
                    {...register('niche', { required: 'Please describe your content niche' })}
                    label="Content Niche & Expertise"
                    labelPlacement="outside-top"
                    placeholder="Tell us about your content focus, expertise areas, and what makes your perspective unique..."
                    variant="bordered"
                    size="lg"
                    minRows={3}
                    isInvalid={!!errors.niche}
                    errorMessage={errors.niche?.message}
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
                    {isPending ? 'Submitting...' : 'Submit Application'}
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

export default ApplicationForm;
