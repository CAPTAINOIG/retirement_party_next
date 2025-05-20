import React, { useState } from 'react';
import { Button, Checkbox, CheckboxGroup, Input, Select, SelectItem } from '@heroui/react';
import Drawer from '@/components/global/Drawer';
import { useToast } from '@/hooks/use-toast';
import { Controller, useForm } from 'react-hook-form';
import { useCreateEventAttendee } from '@/api/other';
import { TbCheck } from 'react-icons/tb';

const countries = [
  { key: 'NG', label: 'Nigeria' },
  { key: 'ZA', label: 'South Africa' },
  { key: 'TZ', label: 'Tanzania' },
  { key: 'KE', label: 'Kenya' },
  { key: 'UG', label: 'Uganda' },
  { key: 'US', label: 'United States' },
  { key: 'UK', label: 'United Kingdom' },
  { key: 'CA', label: 'Canada' },
  { key: 'AU', label: 'Australia' },
];

const industries = [
  { key: 'business', label: 'Business' },
  { key: 'technology', label: 'Technology' },
  { key: 'government', label: 'Government' },
  { key: 'banking', label: 'Banking' },
  { key: 'consulting', label: 'Consulting' },
  { key: 'entertainment', label: 'Entertainment' },
  { key: 'education', label: 'Education' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'finance', label: 'Finance' },
  { key: 'legal', label: 'Legal' },
  { key: 'media', label: 'Media' },
  { key: 'nonprofit', label: 'Non-Profit' },
  { key: 'other', label: 'Other' },
];

const RegisterModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('form');
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const { mutateAsync: createEventAttendee, isPending: isCreateEventAttendeeLoading } = useCreateEventAttendee();

  const submit = async (values) => {
    try {
      const { firstName, lastName, interests, ...rest } = values;
      await createEventAttendee({
        event: 'main-2025',
        name: `${firstName} ${lastName}`,
        ...rest,
      });
      setView('success');
      reset();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="2xl" title="Book your seat" width={650} className="md:p-12">
      {view === 'form' && (
        <>
          <p className="text-lg">We are excited to register you for our private unveiling</p>
          <form onSubmit={handleSubmit(submit)} className="mt-10 flex flex-col gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                type="text"
                label="First Name"
                placeholder=" "
                variant="bordered"
                classNames={{ input: 'text-lg px-2' }}
                labelPlacement="outside"
                size="lg"
                {...register('firstName', { required: 'First Name is required' })}
                errorMessage={errors?.firstName?.message}
                isInvalid={!!errors?.firstName?.message}
                isDisabled={isCreateEventAttendeeLoading}
              />
              <Input
                type="text"
                label="Last Name"
                placeholder=" "
                variant="bordered"
                classNames={{ input: 'text-lg px-2' }}
                labelPlacement="outside"
                size="lg"
                {...register('lastName', { required: 'Last Name is required' })}
                errorMessage={errors?.lastName?.message}
                isInvalid={!!errors?.lastName?.message}
                isDisabled={isCreateEventAttendeeLoading}
              />
            </div>
            <Input
              type="email"
              label="Email"
              placeholder=" "
              variant="bordered"
              classNames={{ input: 'text-lg px-2' }}
              labelPlacement="outside"
              size="lg"
              {...register('email', { required: 'Email is required' })}
              errorMessage={errors?.email?.message}
              isInvalid={!!errors?.email?.message}
              isDisabled={isCreateEventAttendeeLoading}
            />
            <Input
              type="phone"
              label="Phone Number"
              placeholder=" "
              variant="bordered"
              classNames={{ input: 'text-lg px-2' }}
              labelPlacement="outside"
              size="lg"
              {...register('phone', { required: 'Phone Number is required' })}
              errorMessage={errors?.phone?.message}
              isInvalid={!!errors?.phone?.message}
              isDisabled={isCreateEventAttendeeLoading}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Controller
                name="country"
                rules={{ required: 'Country is required' }}
                control={control}
                disabled={isCreateEventAttendeeLoading}
                render={({ field }) => (
                  <Select
                    disallowEmptySelection
                    selectionMode="single"
                    label="Country of residence"
                    classNames={{ value: 'text-base px-2', listbox: 'px-2' }}
                    labelPlacement="outside"
                    placeholder="Select one"
                    variant="bordered"
                    size="lg"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    isDisabled={field.disabled}
                    errorMessage={errors?.country?.message}
                    isInvalid={!!errors?.country?.message}
                  >
                    {countries.map((item) => (
                      <SelectItem key={item.key} classNames={{ title: 'text-base' }}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Controller
                name="industry"
                rules={{ required: 'Industry is required' }}
                control={control}
                disabled={isCreateEventAttendeeLoading}
                render={({ field }) => (
                  <Select
                    disallowEmptySelection
                    selectionMode="single"
                    label="Industry"
                    classNames={{ value: 'text-base px-2', listbox: 'px-2' }}
                    labelPlacement="outside"
                    placeholder="Select one"
                    variant="bordered"
                    size="lg"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    isDisabled={field.disabled}
                    errorMessage={errors?.industry?.message}
                    isInvalid={!!errors?.industry?.message}
                  >
                    {industries.map((item) => (
                      <SelectItem key={item.key} classNames={{ title: 'text-base' }}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
            </div>
            <div className="mt-4 flex">
              <Button
                isLoading={isCreateEventAttendeeLoading}
                type="submit"
                size="lg"
                className="px-6"
                radius="full"
                variant="solid"
                color="primary"
              >
                Register
              </Button>
            </div>
          </form>
        </>
      )}
      {view === 'success' && (
        <div className="flex flex-col items-center gap-4 py-20">
          <TbCheck size="100" className="text-green-500" />
          <p className="text-center text-lg">
            You have successfully registered for DICA 24.
            <br /> See you soon!
          </p>
          <Button
            type="button"
            size="lg"
            className="mt-8 px-6"
            radius="lg"
            variant="solid"
            color="primary"
            onPress={() => {
              onClose();
              setView('form');
            }}
          >
            Close
          </Button>
        </div>
      )}
    </Drawer>
  );
};

export default RegisterModal;
