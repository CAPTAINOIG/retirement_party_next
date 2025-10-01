'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem, Textarea, Drawer, DrawerBody, DrawerContent } from '@heroui/react';
import { useCreateEventAttendee } from '@/api/other';
import {
  TbSend,
  TbUser,
  TbMail,
  TbPhone,
  TbMapPin,
  TbWorld,
  TbCheck,
  TbBriefcase,
  TbSchool,
  TbBrandLinkedin,
  TbX,
} from 'react-icons/tb';

const AnalystsApplicationDrawer = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutate: createAttendee, isPending } = useCreateEventAttendee();

  const experienceLevels = [
    { key: 'entry', label: 'Entry Level (0-2 years)' },
    { key: 'mid', label: 'Mid Level (3-5 years)' },
    { key: 'senior', label: 'Senior Level (6-10 years)' },
    { key: 'expert', label: 'Expert Level (10+ years)' },
    { key: 'student', label: 'Student/Recent Graduate' },
  ];

  const industries = [
    { key: 'finance', label: 'Finance & Banking' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'technology', label: 'Technology' },
    { key: 'retail', label: 'Retail & E-commerce' },
    { key: 'consulting', label: 'Consulting' },
    { key: 'education', label: 'Education' },
    { key: 'government', label: 'Government' },
    { key: 'startup', label: 'Startup' },
    { key: 'other', label: 'Other' },
  ];

  const tools = [
    { key: 'python', label: 'Python' },
    { key: 'r', label: 'R' },
    { key: 'sql', label: 'SQL' },
    { key: 'excel', label: 'Excel' },
    { key: 'tableau', label: 'Tableau' },
    { key: 'powerbi', label: 'Power BI' },
    { key: 'sas', label: 'SAS' },
    { key: 'spss', label: 'SPSS' },
    { key: 'other', label: 'Other' },
  ];

  const onSubmit = (data) => {
    createAttendee(
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        event: 'analysts-program',
        meta: {
          location: data.location,
          company: data.company,
          jobTitle: data.jobTitle,
          experienceLevel: data.experienceLevel,
          industry: data.industry,
          primaryTool: data.primaryTool,
          linkedin: data.linkedin,
          website: data.website,
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
        Thank you for registering for our Analysts Program! We're excited to have you join our community of data
        professionals.
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
            You'll receive a confirmation email with program details
          </li>
          <li className="flex items-start">
            <span className="bg-primary-500 mt-1 mr-2 h-1.5 w-1.5 rounded-full"></span>
            Program materials will be shared closer to the start date
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
              <h3 className="text-2xl font-bold">Join Analysts Program</h3>
              <p className="opacity-80 mt-1 text-base">Fill the form below to register for our program</p>
            </div>
            <Button isIconOnly variant="bordered" color="danger" radius="full" onPress={handleClose}>
              <TbX size="20" />
            </Button>
          </div>
          {isSuccess ? (
            <SuccessView />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
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
                  placeholder="Enter your city"
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
              {/* Professional Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Professional Background</h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Input
                    {...register('company', { required: 'Company is required' })}
                    label="Company/Organization"
                    labelPlacement="outside"
                    placeholder="Enter your company name"
                    variant="bordered"
                    size="md"
                    startContent={<TbBriefcase className="text-default-400" size={18} />}
                    isInvalid={!!errors.company}
                    errorMessage={errors.company?.message}
                    classNames={{
                      input: 'text-sm px-2',
                    }}
                  />
                  <Input
                    {...register('jobTitle', { required: 'Job title is required' })}
                    label="Job Title"
                    labelPlacement="outside"
                    placeholder="e.g., Data Analyst, Business Analyst"
                    variant="bordered"
                    size="md"
                    startContent={<TbSchool className="text-default-400" size={18} />}
                    isInvalid={!!errors.jobTitle}
                    errorMessage={errors.jobTitle?.message}
                    classNames={{
                      input: 'text-sm px-2',
                    }}
                  />
                </div>
              </div>
              {/* Experience & Industry */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex">
                  <Select
                    {...register('experienceLevel', { required: 'Please select your experience level' })}
                    label="Experience Level"
                    labelPlacement="outside"
                    placeholder="Select your experience level"
                    variant="bordered"
                    size="md"
                    isInvalid={!!errors.experienceLevel}
                    errorMessage={errors.experienceLevel?.message}
                    disallowEmptySelection
                    classNames={{
                      trigger:
                        'border-default-300/30 bg-default-100/10 hover:border-default-400/50 data-[focus=true]:border-primary-500',
                      value: 'text-white text-sm',
                      label: 'text-default-300',
                    }}
                  >
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.key} value={level.key}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="flex">
                  <Select
                    {...register('industry', { required: 'Please select your industry' })}
                    label="Industry"
                    labelPlacement="outside"
                    placeholder="Select your industry"
                    variant="bordered"
                    size="md"
                    disallowEmptySelection
                    isInvalid={!!errors.industry}
                    errorMessage={errors.industry?.message}
                    classNames={{
                      trigger:
                        'border-default-300/30 bg-default-100/10 hover:border-default-400/50 data-[focus=true]:border-primary-500',
                      value: 'text-white text-sm',
                      label: 'text-default-300',
                    }}
                  >
                    {industries.map((industry) => (
                      <SelectItem key={industry.key} value={industry.key}>
                        {industry.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              {/* Primary Tool */}
              <div className="flex">
                <Select
                  {...register('primaryTool', { required: 'Please select your primary tool' })}
                  label="Primary Analytics Tool"
                  labelPlacement="outside"
                  placeholder="Select your main analytics tool"
                  variant="bordered"
                  size="md"
                  disallowEmptySelection
                  isInvalid={!!errors.primaryTool}
                  errorMessage={errors.primaryTool?.message}
                  classNames={{
                    trigger:
                      'border-default-300/30 bg-default-100/10 hover:border-default-400/50 data-[focus=true]:border-primary-500',
                    value: 'text-white text-sm',
                    label: 'text-default-300',
                  }}
                >
                  {tools.map((tool) => (
                    <SelectItem key={tool.key} value={tool.key}>
                      {tool.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              {/* Professional Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Professional Links</h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                  <Input
                    {...register('website')}
                    label="Website/Portfolio (Optional)"
                    labelPlacement="outside"
                    placeholder="https://yourwebsite.com"
                    variant="bordered"
                    size="md"
                    startContent={<TbWorld className="text-default-400" size={18} />}
                    classNames={{
                      input: 'text-sm px-2',
                    }}
                  />
                </div>
              </div>
              {/* Interests */}
              <Textarea
                {...register('interests', { required: 'Please describe your interests' })}
                label="Areas of Interest & Goals"
                labelPlacement="outside"
                placeholder="Tell us about your specific interests in data analytics, what you hope to learn, and your professional goals..."
                variant="bordered"
                size="md"
                minRows={3}
                isInvalid={!!errors.interests}
                errorMessage={errors.interests?.message}
                classNames={{
                  input: 'text-sm px-2 py-2',
                }}
              />
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
                  {isPending ? 'Registering...' : 'Register Now'}
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
