'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem, Textarea } from '@heroui/react';
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
  TbCode,
  TbBrandLinkedin,
} from 'react-icons/tb';

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

                {/* Professional Information */}
                <div className="space-y-6">
                  <h3 className="mb-4 text-2xl font-semibold text-white">Professional Background</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input
                      {...register('company', { required: 'Company is required' })}
                      label="Company/Organization"
                      labelPlacement="outside-top"
                      placeholder="Enter your company name"
                      variant="bordered"
                      size="lg"
                      startContent={<TbBriefcase className="text-default-400" size={20} />}
                      isInvalid={!!errors.company}
                      errorMessage={errors.company?.message}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                    <Input
                      {...register('jobTitle', { required: 'Job title is required' })}
                      label="Job Title"
                      labelPlacement="outside-top"
                      placeholder="e.g., Data Analyst, Business Analyst"
                      variant="bordered"
                      size="lg"
                      startContent={<TbSchool className="text-default-400" size={20} />}
                      isInvalid={!!errors.jobTitle}
                      errorMessage={errors.jobTitle?.message}
                      classNames={{
                        input: 'text-base',
                      }}
                    />
                  </div>
                </div>

                {/* Experience & Industry */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <Select
                        {...register('experienceLevel', { required: 'Please select your experience level' })}
                        label="Experience Level"
                        labelPlacement="outside"
                        placeholder="Select your experience level"
                        variant="bordered"
                        size="lg"
                        isInvalid={!!errors.experienceLevel}
                        errorMessage={errors.experienceLevel?.message}
                        disallowEmptySelection
                        classNames={{
                          trigger:
                            'border-default-300/30 bg-default-100/10 hover:border-default-400/50 data-[focus=true]:border-primary-500',
                          value: 'text-white',
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
                    <div className="space-y-4">
                      <Select
                        {...register('industry', { required: 'Please select your industry' })}
                        label="Industry"
                        labelPlacement="outside"
                        placeholder="Select your industry"
                        variant="bordered"
                        size="lg"
                        disallowEmptySelection
                        isInvalid={!!errors.industry}
                        errorMessage={errors.industry?.message}
                        classNames={{
                          trigger:
                            'border-default-300/30 bg-default-100/10 hover:border-default-400/50 data-[focus=true]:border-primary-500',
                          value: 'text-white',
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
                </div>

                {/* Primary Tool */}
                <div className="flex space-y-4">
                  <Select
                    {...register('primaryTool', { required: 'Please select your primary tool' })}
                    label="Primary Analytics Tool"
                    labelPlacement="outside"
                    placeholder="Select your main analytics tool"
                    variant="bordered"
                    size="lg"
                    disallowEmptySelection
                    isInvalid={!!errors.primaryTool}
                    errorMessage={errors.primaryTool?.message}
                    classNames={{
                      trigger:
                        'border-default-300/30 bg-default-100/10 hover:border-default-400/50 data-[focus=true]:border-primary-500',
                      value: 'text-white',
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
                <div className="space-y-6">
                  <h3 className="mb-4 text-2xl font-semibold text-white">Professional Links</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input
                      {...register('linkedin')}
                      label="LinkedIn Profile"
                      labelPlacement="outside-top"
                      placeholder="LinkedIn profile URL"
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
                    className="px-12 py-6 text-lg font-semibold transition-transform hover:scale-105"
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

