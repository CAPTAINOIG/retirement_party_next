import React from 'react';
import Input from "@/components/global/Input.jsx";
import { useForm } from "react-hook-form";
import Button from "@/components/global/Button.jsx";
import TextArea from "@/components/global/TextArea.jsx";
import Select from "@/components/global/Select.jsx";
import { useCreateBusinessMutation } from "@/api/business.js";
import { useToast } from "@/hooks/use-toast.jsx";
import { useQueryClient } from "@tanstack/react-query";

const CreateBusiness = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutateAsync: create, isLoading: isCreateLoading } = useCreateBusinessMutation();

  const submit = async (values) => {
    try {
      await create(values);
      await qc.invalidateQueries(['business']);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      <h2 className="text-lg font-medium leading-none">Setup your business</h2>
      <p className="text-gray-600 text-md mt-1.5">Kindly fill in all field correctly</p>

      <div className="mt-8">
        <form onSubmit={ handleSubmit(submit) }>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Legal business name" bordered
                { ...register('name', { required: 'This field is required' }) }
                error={ errors?.name?.message } disabled={ isCreateLoading }
              />
              <Input
                label="Business email" bordered type="email"
                { ...register('email', { required: 'This field is required' }) }
                error={ errors?.email?.message } disabled={ isCreateLoading }
              />
            </div>
            <Select
              label="Industry" bordered options={ [{ text: 'Finance', value: 'finance' }] }
              { ...register('industry', { required: 'This field is required' }) }
              error={ errors?.industry?.message } disabled={ isCreateLoading }
            />
            <Input
              label="Website" bordered type="url"
              { ...register('website', { required: 'This field is required' }) }
              error={ errors?.website?.message } disabled={ isCreateLoading }
            />
            <TextArea
              label="Business address" bordered
              { ...register('address', { required: 'This field is required' }) }
              error={ errors?.address?.message } disabled={ isCreateLoading }
            />
            <Select
              label="What country is your business based?" bordered options={ [{ text: 'Nigeria', value: 'NG' }] }
              { ...register('country', { required: 'This field is required' }) }
              error={ errors?.country?.message } disabled={ isCreateLoading }
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="State" bordered options={ [{ text: 'Lagos', value: 'lagos' }] }
                { ...register('state', { required: 'This field is required' }) }
                error={ errors?.state?.message } disabled={ isCreateLoading }
              />
              <Select
                label="City" bordered options={ [{ text: 'Surulere', value: 'surulere' }] }
                { ...register('city', { required: 'This field is required' }) }
                error={ errors?.city?.message } disabled={ isCreateLoading }
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="Registration type" bordered
                options={
                  [
                    { value: "NG-RC-PRI", text: 'Private Incorporated Company' },
                    { value: "NG-RC-PUB", text: 'Public Incorporated Company' },
                    { value: "NG-NEPZA", text: 'Free Zone Entity' },
                    { value: "NG-BN", text: 'Business Name Registration' },
                    { value: "NG-CACIT", text: 'Incorporated Trustees' },
                    { value: "NG-GOV", text: 'Government Entity' },
                    { value: "NG-GOV-APPR", text: 'Private entity created by Government Approval' },
                    { value: "NG-COOP", text: 'Cooperative Society' },
                  ]
                }
                { ...register('registrationType', { required: 'This field is required' }) }
                error={ errors?.registrationType?.message } disabled={ isCreateLoading }
              />
              <Select
                label="Registration year" bordered
                options={
                  [
                    { value: "2000", text: '2000' },
                  ]
                }
                { ...register('registrationYear', { required: 'This field is required' }) }
                error={ errors?.registrationYear?.message } disabled={ isCreateLoading }
              />
            </div>
            <Input
              label="RC number" bordered
              { ...register('rcNumber', { required: 'This field is required' }) }
              error={ errors?.rcNumber?.message } disabled={ isCreateLoading }
            />
          </div>
          <Button type="submit" className="mt-10" loading={ isCreateLoading }>Create business</Button>
        </form>
      </div>
    </>
  );
};

export default CreateBusiness;
