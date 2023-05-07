import React, { useState } from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import PageHeader from "@/components/core/shared/PageHeader.jsx";
import Input from "@/components/global/Input.jsx";
import Button from "@/components/global/Button.jsx";
import PasswordInput from "@/components/global/PasswordInput.jsx";
import Checkbox from "@/components/global/Checkbox.jsx";
import Select from "@/components/global/Select.jsx";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast.jsx";
import { useSendEmailVerificationOtp, useSignupMutation } from "@/api/auth.js";
import { useAuth } from "@/hooks/use-auth.js";
import requireNoAuth from "@/guards/require-no-auth.js";

const Register = () => {
  const toast = useToast();
  const { authenticate } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [agreed, setAgreed] = useState(false);
  const { mutateAsync: signup, isLoading: isSignupLoading } = useSignupMutation();
  const { mutateAsync: send } = useSendEmailVerificationOtp();

  const submit = async (values) => {
    try {
      if (!agreed) return toast.error('Please accept the terms and conditions before proceeding');
      const res = await signup(values);
      const { user, token } = res.data;
      authenticate({ user, token });
      await send(null);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      <PageHeader
        title="Create your account"
        subtitle="Kindly fill in all fields below correctly"
      />
      <div className="container">
        <div className="mt-16 w-full max-w-md mx-auto rounded-xl">
          <form onSubmit={ handleSubmit(submit) }>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="First name" bordered
                  { ...register('firstName', { required: 'First name is required' }) }
                  error={ errors?.firstName?.message } disabled={ isSignupLoading }
                />
                <Input
                  label="Last name" bordered
                  { ...register('lastName', { required: 'Last name is required' }) }
                  error={ errors?.lastName?.message } disabled={ isSignupLoading }
                />
              </div>
              <Input
                label="Email address" bordered
                { ...register('email', { required: 'Email address is required' }) }
                error={ errors?.email?.message } disabled={ isSignupLoading }
              />
              <Input
                label="Phone number" bordered
                { ...register('phone', { required: 'Phone number is required' }) }
                error={ errors?.phone?.message } disabled={ isSignupLoading }
              />
              <Select
                label="Country" bordered options={ [{ text: 'Nigeria', value: 'NG' }] }
                { ...register('country', { required: 'This field is required' }) }
                error={ errors?.country?.message }
              />
              <PasswordInput
                label="Password" bordered
                { ...register('password', { required: 'Password is required' }) }
                error={ errors?.password?.message } disabled={ isSignupLoading }
              />
            </div>
            <Checkbox
              value={ agreed } onChange={ e => setAgreed(e.target.checked) } className="mt-6"
              disabled={ isSignupLoading }
            >
              I agree to Statisense&apos;s
              <Link href="/" className="text-primary-600"> terms and conditions</Link> and
              <Link href="/" className="text-primary-600"> privacy policy</Link>
            </Checkbox>
            <Button type="submit" className="mt-10" size="lg" loading={ isSignupLoading }>
              Register
            </Button>
            <p className="mt-4">
              Already have an account?
              <Link href="/register" className="ml-2 text-primary-600 italic">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

Register.Layout = DefaultLayout;

export default requireNoAuth(Register);
