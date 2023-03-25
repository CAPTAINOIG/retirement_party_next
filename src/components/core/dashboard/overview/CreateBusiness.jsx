import React from 'react';
import Input from "@/components/global/Input.jsx";
import { useForm } from "react-hook-form";
import Button from "@/components/global/Button.jsx";
import TextArea from "@/components/global/TextArea.jsx";
import Select from "@/components/global/Select.jsx";

const CreateBusiness = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submit = (values) => {
    console.log({ values })
  };

  return (
    <>
      <h2 className="text-lg font-medium leading-none">Setup your business</h2>
      <p className="text-gray-600 text-md mt-1">Kindly fill in all field correctly</p>

      <div className="mt-8">
        <form onSubmit={ handleSubmit(submit) }>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Business name" bordered
                { ...register('name', { required: 'This field is required' }) }
                error={ errors?.name?.message }
              />
              <Input
                label="Business email" bordered
                { ...register('email', { required: 'This field is required' }) }
                error={ errors?.email?.message }
              />
            </div>
            <Select
              label="Industry" bordered options={ [{ text: '1', value: 'x' }] }
              { ...register('industry', { required: 'This field is required' }) }
              error={ errors?.industry?.message }
            />
            <TextArea
              label="Business address" bordered
              { ...register('address', { required: 'This field is required' }) }
              error={ errors?.address?.message }
            />
            <div className="grid md:grid-cols-3 gap-4">
              <Select
                label="Country" bordered options={ [{ text: 'Nigeria', value: 'NG' }] }
                { ...register('country', { required: 'This field is required' }) }
                error={ errors?.country?.message }
              />
              <Select
                label="State" bordered options={ [{ text: 'Lagos', value: 'lagos' }] }
                { ...register('state', { required: 'This field is required' }) }
                error={ errors?.state?.message }
              />
              <Select
                label="City" bordered options={ [{ text: 'Surulere', value: 'surulere' }] }
                { ...register('city', { required: 'This field is required' }) }
                error={ errors?.city?.message }
              />
            </div>
            <Input
              label="Website" bordered
              { ...register('website', { required: 'This field is required' }) }
              error={ errors?.website?.message }
            />
            <Input
              label="RC number" bordered
              { ...register('rc_number', { required: 'This field is required' }) }
              error={ errors?.rc_number?.message }
            />
          </div>
          <Button type="submit" className="mt-10">Create business</Button>
        </form>
      </div>
    </>
  );
};

export default CreateBusiness;
