'use client';

import { Button, Card, Input, Select, SelectItem, addToast } from '@heroui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useAmbassadorRegistration } from '@/api/other';
import Logo from '@/components/core/shared/Logo';
import { TbAt, TbBook2, TbPhone, TbSchool, TbUser } from 'react-icons/tb';
import { useTheme } from 'next-themes';

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
        description: 'Application received successfully.',
        color: 'success',
      });
      reset();
      setIsSuccess(true);
    } catch (error) {
      addToast({
        title: 'Submission failed',
        description: error?.response?.data?.message || 'Something went wrong, please try again.',
        color: 'danger',
      });
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen">
        <section className="container py-16 md:py-24">
          <div className="mb-10 flex justify-center md:mb-14">
            <Logo light={!theme === 'dark'} width={140} />
          </div>
          <Card className="border-default-200 mx-auto w-full max-w-3xl rounded-3xl border p-8 text-center md:p-12">
            <p className="text-sm tracking-[0.3em] uppercase">Registration complete</p>
            <h1 className="mt-4 text-3xl font-semibold md:text-5xl">You are all set.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              Thanks for applying to be a Statisense Ambassador. We have received your application. Please check your
              email for more updates.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button color="primary" size="lg" onPress={() => setIsSuccess(false)}>
                Go back
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
          <Logo light={!theme === 'dark'} width={220} />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl !leading-tight font-bold md:text-7xl">
            Ready to{' '}
            <span className="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Get Started?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl">
            Fill out the form below and complete your ambassador registration.
          </p>
        </div>
        <Card className="border-default-200 mx-auto mt-20 w-full max-w-3xl rounded-2xl border px-10 py-8 shadow">
          <h2 className="text-2xl leading-tight font-semibold md:text-3xl">Registration Form</h2>
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
            <Button type="submit" color="primary" size="lg" className="mt-6" isLoading={isSubmitting} radius="full">
              Submit Application
            </Button>
          </form>
        </Card>
      </section>
    </main>
  );
};

export default AmbassadorRegisterContent;
