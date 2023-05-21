"use client"
import React, { useState } from 'react';
import Button from "@/components/global/Button.jsx";
import { IconArrowRight, IconMailQuestion } from "@tabler/icons-react";
import classNames from "classnames";
import { useNewsletterSubscribe } from "@/api/other";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

const Newsletter = ({ sm = false }) => {
  const toast = useToast()
  const [view, setView] = useState('form');
  const { register, handleSubmit } = useForm();
  const { mutateAsync: subscribe, isLoading } = useNewsletterSubscribe();

  const submit = async (values) => {
    try {
      await subscribe(values);
      setView('success');
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="mx-auto">
      <div
        className={ classNames('bg-[#11100f] text-zinc-100 px-10 md:px-20 pattern-1', sm ? 'py-24' : 'py-40') }
      >
        {
          view === 'form' && (
            <div className="container flex flex-col items-center text-center">
              <h2 className="text-[2.5rem] md:text-6xl max-w-2xl font-medium tracking-tight !leading-tight">
                Get weekly statistics directly into your inbox
              </h2>
              <form
                onSubmit={ handleSubmit(submit) }
                className="mt-10 sm:mt-16 w-full max-w-2xl flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0"
              >
                <input
                  type="text" name="query" id="query" placeholder="Full name"
                  className="rounded-full w-full py-4 px-8 !outline-none bg-zinc-700/50 transition-all ring-zinc-500/10 disabled:opacity-75 disabled:pointer-events-none focus:ring-4 sm:w-[200%]"
                  { ...register('name', { required: 'Name is required' }) }
                  disabled={ isLoading }
                />
                <input
                  type="email" name="query" id="query" placeholder="Email address"
                  className="rounded-full w-full py-4 px-8 !outline-none bg-zinc-700/50 transition-all ring-zinc-500/10 disabled:opacity-75 disabled:pointer-events-none focus:ring-4 sm:w-[300%]"
                  { ...register('email', { required: 'Email is required' }) }
                  disabled={ isLoading }
                />
                <Button
                  type="submit" size="lg" color="white" block rightIcon={ <IconArrowRight/> }
                  loading={ isLoading }
                >
                  Subscribe
                </Button>
              </form>
            </div>
          )
        }
        {
          view === 'success' && (
            <div className="text-center flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full grid place-items-center bg-orange-600 text-white mb-10">
                <IconMailQuestion size="44"/>
              </div>
              <h2 className="text-4xl font-semibold">Almost done</h2>
              <p className="mt-6 max-w-md">
                We need to verify your email address. To complete the subscription process, please click the link in the
                email we just sent you.
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Newsletter;
