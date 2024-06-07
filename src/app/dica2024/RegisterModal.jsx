import React from 'react';
import { Button, Checkbox, CheckboxGroup, Input, Select, SelectItem } from '@nextui-org/react';
import Drawer from '@/components/global/Drawer';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useRegisterForDica } from '@/api/other';

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
  const { register, handleSubmit } = useForm();
  const { mutateAsync: registerForDica, isLoading } = useRegisterForDica();
  const [interests, setInterests] = React.useState(['data-science']);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const submit = async (values) => {
    if (isInvalid) return;
    console.log({ ...values, interests });
    try {
      await registerForDica(values);
      toast.success("Registeration for DICA 24 Successful!")
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
        We are excited to have you register for our upcoming conference 👍. Please provide the requested information for
        a smooth registration process. Contact us if you need assistance.
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
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select
            label="Country of residence"
            classNames={{ value: 'text-base px-2', listbox: 'px-2' }}
            labelPlacement="outside"
            placeholder="Select one"
            variant="bordered"
            size="lg"
            {...register('country', { required: 'Country is required' })}
          >
            {countries.map((item) => (
              <SelectItem key={item.key} classNames={{ title: 'text-base' }}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Age group"
            classNames={{ value: 'text-base px-2', listbox: 'px-2' }}
            labelPlacement="outside"
            placeholder="Select one"
            variant="bordered"
            size="lg"
            {...register('ageGroup', { required: 'Age Group is required' })}
          >
            {[
              { key: '<=18', label: 'Under 18' },
              { key: '19-30', label: '19-30' },
              { key: '31-40', label: '31-40' },
              { key: '41-50', label: '41-50' },
              { key: '>50', label: 'Over 50' },
            ].map((item) => (
              <SelectItem key={item.key} classNames={{ title: 'text-base' }}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <CheckboxGroup
          name="interests"
          label="What topics are you interested in?"
          defaultValue={['data-science']}
          value={interests}
          onValueChange={setInterests}
          size="lg"
          classNames={{ label: 'text-base mb-2' }}
          isInvalid={isInvalid}
          onChange={(value) => {
            if (value.length >= 1) {
              setIsInvalid(false);
            } else {
              setIsInvalid(true);
            }
            console.log(value);
          }}
        >
          <Checkbox value="data-science">Data Science</Checkbox>
          <Checkbox value="ai">AI</Checkbox>
          <Checkbox value="cybersecurity">Cybersecurity</Checkbox>
          <Checkbox value="data-analytics">Data Analytics</Checkbox>
          <Checkbox value="cloud-computing">Cloud Computing</Checkbox>
          <Checkbox value="big-data">Big Data</Checkbox>
          <Checkbox value="artificial-intelligence">Artificial Intelligence</Checkbox>
          <Checkbox value="machine-learning">Machine Learning</Checkbox>
          <Checkbox value="deep-learning">Deep Learning</Checkbox>
          <Checkbox value="natural-language-processing">Natural Language Processing</Checkbox>
        </CheckboxGroup>
        {isInvalid && <p className="text-lg text-red-400">*Select at least one interest</p>}
        <div className="mt-4 flex">
          <Button
            isLoading={isLoading}
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

