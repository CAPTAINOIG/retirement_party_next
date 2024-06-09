import React from 'react';
import { Button, Checkbox, CheckboxGroup, Input, Select, SelectItem } from '@nextui-org/react';
import Drawer from '@/components/global/Drawer';
import { useToast } from '@/hooks/use-toast';
import { Controller, useForm } from 'react-hook-form';
import { useCreateEventAttendee } from '@/api/other';

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

const RegisterModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { mutateAsync: createEventAttendee, isPending: isCreateEventAttendeeLoading } = useCreateEventAttendee();

  const submit = async (values) => {
    try {
      const { firstName, lastName, interests, ...rest } = values;
      await createEventAttendee({
        event: 'dica2024',
        name: `${firstName} ${lastName}`,
        interests: interests.split(','),
        ...rest,
      });
      toast.success('Registration for DICA 24 Successful!');
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      title="DICA 24 Event Registration"
      width={650}
      className="md:p-12"
    >
      <p className="text-lg">
        We are excited to have you register for our upcoming conference. Please provide the requested information for a
        smooth registration process. Contact us if you need assistance.
      </p>
      <form onSubmit={handleSubmit(submit)} className="mt-10 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
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
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
            name="ageGroup"
            rules={{ required: 'Age Group is required' }}
            control={control}
            disabled={isCreateEventAttendeeLoading}
            render={({ field }) => (
              <Select
                disallowEmptySelection
                selectionMode="single"
                label="Age group"
                classNames={{ value: 'text-base px-2', listbox: 'px-2' }}
                labelPlacement="outside"
                placeholder="Select one"
                variant="bordered"
                size="lg"
                selectedKeys={field.value ? [field.value] : []}
                onChange={(e) => field.onChange(e)}
                isDisabled={field.disabled}
                errorMessage={errors?.ageGroup?.message}
                isInvalid={!!errors?.ageGroup?.message}
              >
                {[
                  { key: '<18', label: 'Under 18' },
                  { key: '18-30', label: '18-30' },
                  { key: '31-40', label: '31-40' },
                  { key: '41-50', label: '41-50' },
                  { key: '>50', label: 'Over 50' },
                ].map((item) => (
                  <SelectItem key={item.key} classNames={{ title: 'text-base' }}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
        <Controller
          name="interests"
          control={control}
          rules={{ required: 'Select at least one interest' }}
          disabled={isCreateEventAttendeeLoading}
          render={({ field: { onChange, value, ...field }, fieldState: { error } }) => {
            return (
              <CheckboxGroup
                {...field}
                value={value?.split(',') ?? []}
                onValueChange={(v) => {
                  onChange({ target: { value: v.join(',') } });
                }}
                size="lg"
                label="What topics are you interested in?"
                classNames={{ label: 'text-base mb-2' }}
                errorMessage={error?.message}
                isDisabled={field.disabled}
              >
                <Checkbox isInvalid={!!error?.message} value="data-science">
                  Data Science
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="ai">
                  AI
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="cybersecurity">
                  Cybersecurity
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="data-analytics">
                  Data Analytics
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="cloud-computing">
                  Cloud Computing
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="big-data">
                  Big Data
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="artificial-intelligence">
                  Artificial Intelligence
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="machine-learning">
                  Machine Learning
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="deep-learning">
                  Deep Learning
                </Checkbox>
                <Checkbox isInvalid={!!error?.message} value="natural-language-processing">
                  Natural Language Processing
                </Checkbox>
              </CheckboxGroup>
            );
          }}
        />
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
    </Drawer>
  );
};

export default RegisterModal;
