'use client';

import { addToast, Button, Drawer, DrawerBody, DrawerContent, Input, useDisclosure } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { TbCheck, TbX } from 'react-icons/tb';
import Logo from '@/components/core/shared/Logo';
import { IconBulb, IconUsersGroup, IconChartHistogram, IconCalendar, IconMapPin, IconClock } from '@tabler/icons-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { useCreateEventAttendee } from '@/api/other';

const CreatorsEventPageContent = () => {
  const { resolvedTheme: theme } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <main className="relative min-h-screen">
        <section className="container mx-auto max-w-5xl px-4 py-28 md:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Logo light={theme === 'dark'} className="mb-12" />
            <h1 className="text-4xl !leading-[1.1] font-bold sm:text-5xl md:text-7xl">
              Are you ready to shape the future of data with creativity and storytelling?
            </h1>
            <p className="text-default-800 mx-auto mt-6 max-w-xl text-lg">
              Join other bold creators for an exclusive hangout designed to spark collaboration, share insights, and
              build powerful stories that matter.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                radius="full"
                color="primary"
                className="px-8"
                onPress={() => {
                  onOpen();
                }}
              >
                Register Now
              </Button>
            </div>
          </div>

          <div className="bg-default-50 mx-auto mt-20 max-w-5xl rounded-3xl px-8 py-12 md:px-16 md:py-16">
            <h2 className="mb-10 text-center text-3xl font-bold">What to Expect</h2>
            <div className="space-y-6">
              <ul className="mt-6 grid gap-6 md:grid-cols-3">
                <li className="bg-default-100 rounded-2xl px-10 py-12">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="inline-flex rounded-full bg-blue-50 p-4 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      <IconChartHistogram size={28} />
                    </span>
                    <span className="mt-1 text-lg leading-tight">Inspiring conversations on storytelling & data</span>
                  </div>
                </li>
                <li className="bg-default-100 rounded-2xl px-10 py-12">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="inline-flex rounded-full bg-purple-50 p-4 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                      <IconUsersGroup size={28} />
                    </span>
                    <span className="mt-1 text-lg leading-tight">Networking with like-minded creators</span>
                  </div>
                </li>
                <li className="bg-default-100 rounded-2xl px-10 py-12">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="inline-flex rounded-full bg-amber-50 p-4 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                      <IconBulb size={28} />
                    </span>
                    <span className="mt-1 text-lg leading-tight">Fresh ideas and creative collabs</span>
                  </div>
                </li>
              </ul>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-default-100 rounded-2xl px-10 py-12">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="inline-flex rounded-full bg-slate-100 p-4 text-slate-700 dark:bg-slate-700/40 dark:text-slate-200">
                      <IconCalendar size={28} />
                    </span>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Date</p>
                      <p className="mt-1 text-lg leading-tight">11th September 2025</p>
                    </div>
                  </div>
                </div>
                <div className="bg-default-100 rounded-2xl px-10 py-12">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="inline-flex rounded-full bg-slate-100 p-4 text-slate-700 dark:bg-slate-700/40 dark:text-slate-200">
                      <IconMapPin size={28} />
                    </span>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Venue</p>
                      <p className="mt-1 text-lg leading-tight">Will be communicated to shortlisted participants</p>
                    </div>
                  </div>
                </div>
                <div className="bg-default-100 rounded-2xl px-10 py-12">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="inline-flex rounded-full bg-slate-100 p-4 text-slate-700 dark:bg-slate-700/40 dark:text-slate-200">
                      <IconClock size={28} />
                    </span>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Time</p>
                      <p className="mt-1 text-lg leading-tight">10am</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-lg italic opacity-70">Seats are limited—secure your spot today!</p>
            </div>
          </div>
        </section>
      </main>

      <CreatorsEventFormModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CreatorsEventPageContent;

const CreatorsEventFormModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('form');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      country: 'Nigeria',
    },
  });
  const { mutateAsync: createEventAttendee, isPending: isCreateEventAttendeeLoading } = useCreateEventAttendee();

  const onSubmit = async (values) => {
    try {
      const payload = {
        event: 'creators-hangout',
        name: values.name,
        email: values.email,
        phone: values.phone,
        country: values.country,
        meta: {
          instagram: values.instagram,
          facebook: values.facebook,
          tiktok: values.tiktok,
          x: values.x,
        },
      };
      await createEventAttendee(payload);
      setView('success');
      reset();
    } catch (error) {
      addToast({
        title: 'Error joining the waitlist!',
        description: error?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  const handleClose = () => {
    setView('form');
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} size="2xl" title="Register" width={650} hideCloseButton>
      <DrawerContent>
        <DrawerBody className="md:p-12">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Register for Creators Hangout</h3>
              <p className="mt-1 text-lg">Fill the form below to indicate your interest</p>
            </div>
            <Button isIconOnly variant="bordered" color="danger" radius="full" onPress={handleClose}>
              <TbX size="20" />
            </Button>
          </div>

          {view === 'form' && (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-6">
              <Input
                type="text"
                label="Name"
                placeholder=" "
                variant="bordered"
                classNames={{ input: 'text-lg px-2' }}
                labelPlacement="outside"
                size="lg"
                {...register('name', { required: 'Name is required' })}
                isDisabled={isCreateEventAttendeeLoading}
                errorMessage={errors?.name?.message}
                isInvalid={!!errors?.name?.message}
              />
              <Input
                type="tel"
                label="Phone number"
                placeholder=" "
                variant="bordered"
                classNames={{ input: 'text-lg px-2' }}
                labelPlacement="outside"
                size="lg"
                {...register('phone', { required: 'Phone number is required' })}
                isDisabled={isCreateEventAttendeeLoading}
                errorMessage={errors?.phone?.message}
                isInvalid={!!errors?.phone?.message}
              />
              <Input
                type="email"
                label="Email address"
                placeholder=" "
                variant="bordered"
                classNames={{ input: 'text-lg px-2' }}
                labelPlacement="outside"
                size="lg"
                {...register('email', { required: 'Email is required' })}
                isDisabled={isCreateEventAttendeeLoading}
                errorMessage={errors?.email?.message}
                isInvalid={!!errors?.email?.message}
              />
              <Input
                type="text"
                label="Country"
                placeholder=" "
                variant="bordered"
                classNames={{ input: 'text-lg px-2' }}
                labelPlacement="outside"
                size="lg"
                {...register('country', { required: 'Country is required' })}
                isDisabled={isCreateEventAttendeeLoading}
                errorMessage={errors?.country?.message}
                isInvalid={!!errors?.country?.message}
              />
              <div className="mt-2">
                <p className="mb-2 text-base font-medium">State your social media handle:</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    type="text"
                    label="Instagram"
                    placeholder="@yourhandle"
                    variant="bordered"
                    classNames={{ input: 'text-lg px-2' }}
                    labelPlacement="outside"
                    size="lg"
                    {...register('instagram')}
                    isDisabled={isCreateEventAttendeeLoading}
                  />
                  <Input
                    type="text"
                    label="Facebook"
                    placeholder="@yourhandle"
                    variant="bordered"
                    classNames={{ input: 'text-lg px-2' }}
                    labelPlacement="outside"
                    size="lg"
                    {...register('facebook')}
                    isDisabled={isCreateEventAttendeeLoading}
                  />
                  <Input
                    type="text"
                    label="Tiktok"
                    placeholder="@yourhandle"
                    variant="bordered"
                    classNames={{ input: 'text-lg px-2' }}
                    labelPlacement="outside"
                    size="lg"
                    {...register('tiktok')}
                    isDisabled={isCreateEventAttendeeLoading}
                  />
                  <Input
                    type="text"
                    label="X"
                    placeholder="@yourhandle"
                    variant="bordered"
                    classNames={{ input: 'text-lg px-2' }}
                    labelPlacement="outside"
                    size="lg"
                    {...register('x')}
                    isDisabled={isCreateEventAttendeeLoading}
                  />
                </div>
              </div>

              <div className="mt-4 flex">
                <Button
                  type="submit"
                  size="lg"
                  className="px-6"
                  radius="full"
                  variant="solid"
                  color="primary"
                  isLoading={isCreateEventAttendeeLoading}
                >
                  {isCreateEventAttendeeLoading ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </div>
            </form>
          )}

          {view === 'success' && (
            <div className="flex flex-col items-center gap-4 py-20">
              <TbCheck size="100" className="text-green-500" />
              <p className="text-center text-lg">
                Thanks for registering!
                <br /> We will reach out with details if you are shortlisted.
              </p>
              <Button
                type="button"
                size="lg"
                className="mt-8 px-6"
                radius="lg"
                variant="solid"
                color="primary"
                onPress={() => handleClose()}
              >
                Close
              </Button>
            </div>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
