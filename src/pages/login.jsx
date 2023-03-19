import React from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import PageHeader from "@/components/core/shared/PageHeader.jsx";
import Input from "@/components/global/Input.jsx";
import Button from "@/components/global/Button.jsx";
import PasswordInput from "@/components/global/PasswordInput.jsx";
import Checkbox from "@/components/global/Checkbox.jsx";
import { useToast } from "@/hooks/use-toast.jsx";
import { useForm } from "react-hook-form";
import requireNoAuth from "@/guards/require-no-auth.js";
import { useLoginMutation } from "@/api/auth.js";
import { useAuth } from "@/hooks/use-auth.js";

const Login = () => {
  const toast = useToast();
  const { authenticate } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutateAsync: login, isLoading: isLoginLoading } = useLoginMutation();

  const submit = async (values) => {
    try {
      const res = await login(values);
      const { user, token } = res.data;
      authenticate({ user, token });
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div>
      <PageHeader
        title="Login to your account"
        subtitle="Enter your credentials below to sign in to your account"
      />
      <div className="container">
        <div className="mt-16 w-full max-w-md mx-auto rounded-xl">
          <form onSubmit={ handleSubmit(submit) }>
            <div className="space-y-4">
              <Input
                label="Email address" bordered type="email"
                { ...register('email', { required: 'Email address is required' }) }
                error={ errors?.email?.message } disabled={ isLoginLoading }
              />
              <PasswordInput
                label="Password" bordered
                { ...register('password', { required: 'Password is required' }) }
                error={ errors?.password?.message } disabled={ isLoginLoading }
              />
            </div>
            <Checkbox
              className="mt-6" disabled={ isLoginLoading }
              { ...register('remember') }
            >
              Remember me
            </Checkbox>
            <Button type="submit" className="mt-10" size="lg" loading={ isLoginLoading }>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.Layout = DefaultLayout;

export default requireNoAuth(Login);
