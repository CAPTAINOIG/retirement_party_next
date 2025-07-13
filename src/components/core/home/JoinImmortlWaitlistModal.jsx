import CustomModal from '@/components/global/CustomModal';
import { Button, Card, Input, Select, SelectItem } from '@heroui/react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { useAddLaunchSubscriber } from '@/api/other';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { TbCheck } from 'react-icons/tb';
import { motion } from 'motion/react';
import CountryFlag from '@/components/global/CountryFlag';

const industries = [
  { key: 'technology', label: 'Technology' },
  { key: 'banking', label: 'Banking' },
  { key: 'finance', label: 'Finance' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'education', label: 'Education' },
  { key: 'retail', label: 'Retail' },
  { key: 'manufacturing', label: 'Manufacturing' },
  { key: 'consulting', label: 'Consulting' },
  { key: 'media', label: 'Media & Entertainment' },
  { key: 'real-estate', label: 'Real Estate' },
  { key: 'government', label: 'Government' },
  { key: 'nonprofit', label: 'Non-profit' },
  { key: 'other', label: 'Other' },
];

const JoinImmortlWaitlistModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('form');
  const toast = useToast();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const { mutateAsync: addLaunchSubscriber, isPending } = useAddLaunchSubscriber();

  const submit = async (values) => {
    try {
      await addLaunchSubscriber({
        ...values,
        product: 'immortal-ai',
      });
      setView('success');
      reset();
      toast.success('Successfully joined the waitlist!');
    } catch (e) {
      toast.error(e?.response?.data?.message || 'Something went wrong, please try again');
    }
  };

  const handleClose = () => {
    setView('form');
    reset();
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose} width={1200}>
      <Card className="grid items-center gap-10 rounded-3xl px-10 py-12 lg:grid-cols-[2fr_1.2fr] lg:px-28 lg:py-20">
        <div className="text-white">
          <h1 className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text text-[3.4rem] !leading-none font-bold tracking-tight text-transparent md:text-[6rem]">
            Predicting Africa with AI
          </h1>
          <p className="mt-4 text-lg opacity-70 md:max-w-[70%] md:text-xl">
            We will be fully accessible by pre-registered users on July 24, 2025.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90 }}
            viewport={{ amount: 'some', margin: '10%' }}
            className="mt-8 flex items-center space-x-6"
          >
            {[
              { code: 'NG', name: 'Nigeria' },
              { code: 'EG', name: 'Egypt' },
              { code: 'ZA', name: 'South Africa' },
            ].map((country) => {
              return (
                <div
                  key={country.code}
                  className="dark:bg-default-100 dark:hover:bg-default-200 flex items-center space-x-3 rounded-full bg-slate-200 px-3 py-2 pr-6 transition-all duration-300 hover:bg-slate-300"
                >
                  <CountryFlag code={country.code} className="h-12 w-12" />
                  <p>{country.name}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="py-6">
          {view === 'form' && (
            <>
              <h1 className="text-2xl font-semibold">Join the waitlist</h1>
              <form onSubmit={handleSubmit(submit)} className="mt-10">
                <div className="space-y-4">
                  <div className="flex">
                    <Input
                      label="Name"
                      labelPlacement="outside"
                      type="text"
                      placeholder="ex. John Doe"
                      classNames={{ input: 'px-2' }}
                      size="lg"
                      {...register('name', { required: 'Name is required' })}
                      errorMessage={errors?.name?.message}
                      isInvalid={!!errors?.name?.message}
                      isDisabled={isPending}
                    />
                  </div>
                  <div className="flex">
                    <Input
                      label="Email"
                      labelPlacement="outside"
                      type="email"
                      placeholder="ex. john@acme.com"
                      classNames={{ input: 'px-2' }}
                      size="lg"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      errorMessage={errors?.email?.message}
                      isInvalid={!!errors?.email?.message}
                      isDisabled={isPending}
                    />
                  </div>
                  <div className="flex">
                    <Input
                      label="Company Name"
                      labelPlacement="outside"
                      type="text"
                      placeholder="ex. Acme Corp"
                      classNames={{ input: 'px-2' }}
                      size="lg"
                      {...register('company', { required: 'Company name is required' })}
                      errorMessage={errors?.company?.message}
                      isInvalid={!!errors?.company?.message}
                      isDisabled={isPending}
                    />
                  </div>
                  <div className="flex">
                    <Controller
                      name="industry"
                      control={control}
                      rules={{ required: 'Industry is required' }}
                      render={({ field }) => (
                        <Select
                          label="Industry"
                          labelPlacement="outside"
                          placeholder="Select your industry"
                          classNames={{ trigger: 'px-4', popoverContent: 'bg-default-100' }}
                          size="lg"
                          selectedKeys={field.value ? [field.value] : []}
                          onSelectionChange={(keys) => field.onChange(Array.from(keys)[0])}
                          errorMessage={errors?.industry?.message}
                          isInvalid={!!errors?.industry?.message}
                          isDisabled={isPending}
                        >
                          {industries.map((industry) => (
                            <SelectItem key={industry.key} value={industry.key} classNames={{ title: 'px-4' }}>
                              {industry.label}
                            </SelectItem>
                          ))}
                        </Select>
                      )}
                    />
                  </div>
                </div>
                <Button type="submit" className="mt-8" size="lg" radius="full" color="primary" isLoading={isPending}>
                  Join waitlist
                </Button>
              </form>
            </>
          )}
          {view === 'success' && (
            <div className="flex flex-col items-center gap-4 py-10">
              <TbCheck size="100" className="text-green-500" />
              <p className="text-center text-lg">
                You have been successfully added to the Immortal AI waitlist. We'll notify you when we launch!
              </p>
              <Button
                type="button"
                size="lg"
                className="mt-8 px-6"
                radius="full"
                variant="solid"
                color="primary"
                onPress={handleClose}
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </Card>
    </CustomModal>
  );
};

JoinImmortlWaitlistModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default JoinImmortlWaitlistModal;
