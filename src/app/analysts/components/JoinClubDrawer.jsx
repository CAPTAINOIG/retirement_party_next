'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Input,
  Textarea,
  Drawer,
  DrawerBody,
  DrawerContent,
  Select,
  SelectItem,
  addToast,
} from '@heroui/react';
import { useCreateEventAttendee } from '@/api/other';
import {
  TbUser,
  TbMail,
  TbPhone,
  TbAward,
  TbBuildingStore,
  TbCheck,
  TbX,
  TbSend,
  TbMapPin,
  TbBrain,
} from 'react-icons/tb';

const JoinClubDrawer = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const { mutateAsync: createAttendee, isPending: isCreatingAttendee } = useCreateEventAttendee();

  const onSubmit = async (data) => {
    try {
      await createAttendee({
        name: data.name,
        email: data.email,
        phone: data.phone,
        event: '500x-club',
        meta: {
          location: data.location,
          bio: data.bio,
          experience: data.experience,
          industries: data.industries,
          otherIndustry: data.otherIndustry,
          areasOfExpertise: data.areasOfExpertise,
        },
      });
      setIsSuccess(true);
      reset();
    } catch (error) {
      addToast({
        title: 'Error submitting application',
        description: error?.response?.data?.message ?? 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const experienceLevels = ['<1 year', '1–3 years', '3–5 years', '5+ years'];
  const industries = ['FMCG', 'Finance', 'Education', 'Healthcare', 'Marketing', 'Retail', 'Other'];
  const areasOfExpertiseOptions = [
    'Data collection',
    'Data cleaning',
    'Data analysis & interpretation',
    'Reporting & Visualization',
    'Database management',
  ];

  const selectedIndustries = watch('industries');
  const showOtherIndustry = selectedIndustries && selectedIndustries.includes('Other');

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
        Application Submitted! 🎉
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 text-base leading-relaxed opacity-80"
      >
        Thank you for your interest in the 500x Club. We've received your application and will be in touch shortly.
      </motion.p>

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
              <h3 className="text-2xl font-bold">Join the 500x Club</h3>
              <p className="mt-1 text-base opacity-80">Apply to become a part of our exclusive analyst network.</p>
            </div>
            <Button isIconOnly variant="bordered" color="danger" radius="full" onPress={handleClose}>
              <TbX size="20" />
            </Button>
          </div>
          {isSuccess ? (
            <SuccessView />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                />
                <Input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
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
                />
              </div>
              <h4 className="text-lg font-semibold">Background and Experience</h4>
              <Textarea
                {...register('bio', { required: 'Short bio is required', maxLength: 200 })}
                label="Short Bio"
                labelPlacement="outside"
                placeholder="One-line description of your background or approach to data"
                variant="bordered"
                size="md"
                minRows={2}
                isInvalid={!!errors.bio}
                errorMessage={errors.bio?.message}
                maxLength={200}
              />
              <Controller
                name="experience"
                control={control}
                rules={{ required: 'Years of experience is required' }}
                render={({ field }) => (
                  <div className="flex">
                    <Select
                      disallowEmptySelection
                      {...field}
                      label="Years of Experience"
                      labelPlacement="outside"
                      placeholder="Select your experience level"
                      variant="bordered"
                      size="md"
                      startContent={<TbAward className="text-default-400" size={18} />}
                      isInvalid={!!errors.experience}
                      errorMessage={errors.experience?.message}
                    >
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}
              />
              <Controller
                name="industries"
                control={control}
                rules={{ required: 'Please select at least one industry' }}
                render={({ field }) => (
                  <div className="flex">
                    <Select
                      {...field}
                      label="Industries Worked In"
                      labelPlacement="outside"
                      placeholder="Select industries"
                      variant="bordered"
                      size="md"
                      selectionMode="multiple"
                      startContent={<TbBuildingStore className="text-default-400" size={18} />}
                      isInvalid={!!errors.industries}
                      errorMessage={errors.industries?.message}
                    >
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}
              />
              {showOtherIndustry && (
                <div className="flex">
                  <Input
                    {...register('otherIndustry', { required: 'Please specify your industry' })}
                    label="Other Industry"
                    labelPlacement="outside"
                    placeholder="Please specify your industry"
                    variant="bordered"
                    size="md"
                    isInvalid={!!errors.otherIndustry}
                    errorMessage={errors.otherIndustry?.message}
                  />
                </div>
              )}
              <Controller
                name="areasOfExpertise"
                control={control}
                rules={{ required: 'Please select at least one area of expertise' }}
                render={({ field }) => (
                  <div className="flex">
                    <Select
                      {...field}
                      label="Areas of Expertise"
                      labelPlacement="outside"
                      placeholder="Select areas of expertise"
                      variant="bordered"
                      size="md"
                      selectionMode="multiple"
                      startContent={<TbBrain className="text-default-400" size={18} />}
                      isInvalid={!!errors.areasOfExpertise}
                      errorMessage={errors.areasOfExpertise?.message}
                    >
                      {areasOfExpertiseOptions.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}
              />
              {/* Submit Button */}
              <div className="flex pt-4">
                <Button
                  type="submit"
                  size="lg"
                  color="primary"
                  radius="full"
                  isLoading={isCreatingAttendee}
                  className="px-8 py-3 text-base font-semibold"
                  endContent={<TbSend size={18} />}
                >
                  Submit Application
                </Button>
              </div>
            </form>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default JoinClubDrawer;
