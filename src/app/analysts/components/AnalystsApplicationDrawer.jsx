'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea, Drawer, DrawerBody, DrawerContent, addToast } from '@heroui/react';
import { useCreateEventAttendee } from '@/api/other';
import { TbSend, TbUser, TbMail, TbPhone, TbMapPin, TbCheck, TbX, TbBrandLinkedin } from 'react-icons/tb';
import { Select, SelectItem } from "@heroui/react";
import {
  FaLinkedin,
  FaEnvelope,
  FaUsers,
  FaGlobe,
  FaInstagram,
  FaQuestionCircle,
} from "react-icons/fa";

const socialPlatforms = [
  {
    key: "linkedin_dm",
    label: "LinkedIn / DM",
    icon: <FaLinkedin className="text-blue-600" />,
  },
  {
    key: "email_invitation",
    label: "Email invitation",
    icon: <FaEnvelope className="text-green-500" />,
  },
  {
    key: "friend_colleague",
    label: "A friend or colleague",
    icon: <FaUsers className="text-purple-500" />,
  },
  {
    key: "techcabal_techpoint",
    label: "TechCabal / Techpoint",
    icon: <FaGlobe className="text-orange-500" />,
  },
  {
    key: "instagram_twitter",
    label: "Instagram / Twitter",
    icon: <FaInstagram className="text-pink-500" />,
  },
  {
    key: "other",
    label: "Other",
    icon: <FaQuestionCircle className="text-gray-500" />,
  },
];

const AnalystsApplicationDrawer = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutateAsync: createAttendee, isPending } = useCreateEventAttendee();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      await createAttendee({
        name: data.name,
        email: data.email,
        phone: data.phone,
        event: 'data-on-the-road-tour',
        meta: {
          company: data.company,
          title: data.title,
          location: data.location,
          // location: data.location,
          // linkedin: data.linkedin,
          // interests: data.interests,
        },
      });
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.log(error)
      addToast({
        title: 'Error registering for tour',
        description: error?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger',
      });
    }
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
              <h3 className="text-2xl font-bold">Reserve your seat.</h3>
              <p className="mt-1 text-base opacity-80">
                Every guest is reviewed personally. RSVPs receive venue details, Event Invite and a small package before the event.
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
                  {...register('company', {
                    required: 'Company is required',
                  })}
                  label="Company"
                  labelPlacement="outside"
                  placeholder="Enter your company name"
                  variant="bordered"
                  size="md"
                  startContent={<TbMail className="text-default-400" size={18} />}
                  isInvalid={!!errors.company}
                  errorMessage={errors.company?.message}
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
                <Input
                  {...register('title', {
                    required: 'Title/Role is required',
                  })}
                  label="Title/Role"
                  labelPlacement="outside"
                  placeholder="Enter your title or role"
                  variant="bordered"
                  size="md"
                  startContent={<TbMail className="text-default-400" size={18} />}
                  isInvalid={!!errors.title}
                  errorMessage={errors.title?.message}
                  classNames={{
                    input: 'text-sm px-2',
                  }}
                />
              </div>
              {/* Additional Information */}
              <div className="space-y-4">
                <div className='w-full'>                
                  <Select
                    label="Select Social Platform"
                    placeholder="Choose a platform"
                    className="max-w-xs"
                    startContent={
                      <span className="text-default-400">
                        <FaLinkedin />
                      </span>
                    }
                  >
                    {socialPlatforms.map((platform) => (
                      <SelectItem
                        key={platform.key}
                        startContent={platform.icon}
                      >
                        {platform.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
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
                  {isPending ? 'Loading...' : 'Reserve My Seat'}
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
