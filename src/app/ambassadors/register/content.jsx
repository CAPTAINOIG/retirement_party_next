'use client';

import { Button, Card, Input, Select, SelectItem, addToast } from '@heroui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useAmbassadorRegistration } from '@/api/other';
import Logo from '@/components/core/shared/Logo';
import { TbAt, TbBook2, TbPhone, TbSchool, TbUser } from 'react-icons/tb';
import { useTheme } from 'next-themes';
import { HiCheckCircle } from 'react-icons/hi2';

const genderOptions = [
  { key: 'male', label: 'Male' },
  { key: 'female', label: 'Female' },
  { key: 'other', label: 'Other' },
];

const levelOptions = [
  { key: '100', label: '100 Level' },
  { key: '200', label: '200 Level' },
  { key: '300', label: '300 Level' },
  { key: '400', label: '400 Level' },
  { key: '500', label: '500 Level' },
  { key: 'postgraduate', label: 'Postgraduate' },
];

const AmbassadorRegisterContent = () => {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const { resolvedTheme: theme } = useTheme();
  const { mutateAsync: ambassadorRegistration } = useAmbassadorRegistration();
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      gender: '',
      school: '',
      level: '',
      course: '',
    },
  });
  const onSubmit = async (values) => {
    const payload = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      gender: values.gender,
      school: values.school,
      level: values.level,
      course: values.course,
      source: source ?? 'unknown',
    };
    try {
      await ambassadorRegistration(payload);
      addToast({
        title: 'Submitted',
        description: 'Your application has been received.',
        color: 'success',
      });
      reset();
      setIsSuccess(true);
    } catch (error) {
      addToast({
        title: 'Submission failed',
        description: error?.response?.data?.message || 'Something went wrong. Please try again.',
        color: 'danger',
      });
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen">
        <section className="container py-16 md:py-24">
          <div className="mb-10 flex justify-center md:mb-14">
            <Logo light={theme === 'dark'} width={180} />
          </div>
          <Card className="bg-default-50 border-default-200 mx-auto w-full max-w-3xl rounded-3xl border p-8 text-center md:p-12">
            <HiCheckCircle size={100} className="text-success-500 mx-auto mb-6" />
            <p className="text-sm uppercase opacity-70">You're in</p>
            <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Application received successfully</h1>
            <p className="mx-auto mt-4 max-w-lg text-base opacity-80 md:text-lg">
              Thanks for applying to become a Statisense Ambassador. Check your inbox now for an email with your next
              steps.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="bordered"
                color="primary"
                radius="full"
                onPress={() => window.location.reload()}
                className="px-5 text-base"
              >
                Submit another response
              </Button>
            </div>
          </Card>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="container py-16 md:py-24">
        <div className="mb-10 flex justify-center md:mb-14">
          <Logo light={theme === 'dark'} width={180} />
        </div>
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
          <h1 className="text-4xl leading-none font-bold md:text-5xl">Apply to Become a Statisense Ambassador</h1>
          <p className="mt-3 max-w-3xl text-base md:text-lg">
            Tell us a bit about yourself and submit your application in a few minutes.
          </p>
        </div>
        <Card className="bg-default-50 border-default-200 mx-auto mt-12 w-full max-w-3xl rounded-2xl border px-10 py-8 shadow">
          <p className="w-10/12 text-base">
            Complete the form below to apply. Our team will review your submission and follow up within 24 hours.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="ambassador-register-form mt-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                type="text"
                label="Name"
                labelPlacement="outside"
                size="lg"
                placeholder="Enter your full name"
                startContent={<TbUser size={18} />}
                variant="bordered"
                classNames={{ input: 'px-2' }}
                {...register('name', { required: 'Name is required' })}
                errorMessage={errors?.name?.message}
                isInvalid={!!errors?.name?.message}
                isDisabled={isSubmitting}
              />
              <Input
                type="tel"
                label="Phone Number"
                labelPlacement="outside"
                size="lg"
                placeholder="Enter your phone number"
                startContent={<TbPhone size={18} />}
                variant="bordered"
                classNames={{ input: 'px-2' }}
                {...register('phone', { required: 'Phone Number is required' })}
                errorMessage={errors?.phone?.message}
                isInvalid={!!errors?.phone?.message}
                isDisabled={isSubmitting}
              />
              <Input
                type="email"
                label="Email Address"
                labelPlacement="outside"
                size="lg"
                placeholder="Enter your email address"
                startContent={<TbAt size={18} />}
                variant="bordered"
                classNames={{ input: 'px-2' }}
                {...register('email', {
                  required: 'Email Address is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                errorMessage={errors?.email?.message}
                isInvalid={!!errors?.email?.message}
                isDisabled={isSubmitting}
              />
              <Controller
                name="gender"
                control={control}
                rules={{ required: 'Gender is required' }}
                render={({ field }) => (
                  <Select
                    disallowEmptySelection
                    selectionMode="single"
                    label="Gender"
                    labelPlacement="outside"
                    placeholder="Select gender"
                    variant="bordered"
                    size="lg"
                    classNames={{ value: 'px-2' }}
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e.target.value)}
                    isInvalid={!!errors?.gender?.message}
                    errorMessage={errors?.gender?.message}
                    isDisabled={isSubmitting}
                  >
                    {genderOptions.map((item) => (
                      <SelectItem key={item.key}>{item.label}</SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Input
                type="text"
                label="School"
                labelPlacement="outside"
                size="lg"
                placeholder="Enter your school name"
                startContent={<TbSchool size={18} />}
                variant="bordered"
                classNames={{ input: 'px-2' }}
                {...register('school', { required: 'School is required' })}
                errorMessage={errors?.school?.message}
                isInvalid={!!errors?.school?.message}
                isDisabled={isSubmitting}
              />
              <Controller
                name="level"
                control={control}
                rules={{ required: 'Level is required' }}
                render={({ field }) => (
                  <Select
                    disallowEmptySelection
                    selectionMode="single"
                    label="Level"
                    labelPlacement="outside"
                    placeholder="Select your level"
                    variant="bordered"
                    size="lg"
                    classNames={{ value: 'px-2' }}
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e.target.value)}
                    isInvalid={!!errors?.level?.message}
                    errorMessage={errors?.level?.message}
                    isDisabled={isSubmitting}
                  >
                    {levelOptions.map((item) => (
                      <SelectItem key={item.key}>{item.label}</SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Input
                type="text"
                label="Course of Study"
                labelPlacement="outside"
                size="lg"
                placeholder="Enter your course of study"
                startContent={<TbBook2 size={18} />}
                variant="bordered"
                classNames={{ input: 'px-2' }}
                {...register('course', { required: 'Course of Study is required' })}
                errorMessage={errors?.course?.message}
                isInvalid={!!errors?.course?.message}
                isDisabled={isSubmitting}
                className="md:col-span-2"
              />
            </div>
            <Button type="submit" color="primary" size="lg" className="mt-10" isLoading={isSubmitting} radius="full">
              Submit your application
            </Button>
          </form>
        </Card>
        <div className="mt-12 text-center">
          <p className="text-base">
            Questions? Reach us at <a href="mailto:info@statisense.co">info@statisense.co</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default AmbassadorRegisterContent;
