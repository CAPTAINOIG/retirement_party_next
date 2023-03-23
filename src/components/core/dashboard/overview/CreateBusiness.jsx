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
      <p>Kindly fill in all field correctly</p>

      <div className="mt-8">
        <form onSubmit={ handleSubmit(submit) }>
          <div className="space-y-4">
            <Input
              label="Business name" bordered error={ errors?.name?.message }
              { ...register('name', { required: 'This field is required' }) }
            />
            <Input
              label="Business email" bordered error={ errors?.email?.message }
              { ...register('email', { required: 'This field is required' }) }
            />
            <Select
              label="Industry" bordered options={ [{ text: '1', value: 'x' }] }
              { ...register('industry', { required: 'This field is required' }) }
            />
            <Input
              label="Website" bordered error={ errors?.website?.message }
              { ...register('website', { required: 'This field is required' }) }
            />
            <TextArea
              label="Business address" bordered error={ errors?.address?.message }
              { ...register('address', { required: 'This field is required' }) }
            />
          </div>
          <Button type="submit" className="mt-10">Create business</Button>
        </form>
      </div>
    </>
  );
};

export default CreateBusiness;
