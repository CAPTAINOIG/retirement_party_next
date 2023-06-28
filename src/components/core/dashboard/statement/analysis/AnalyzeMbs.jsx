import React, { useState } from 'react';
import IconButton from "@/components/global/IconButton";
import { IconArrowLeft, IconUserCheck } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import Input from "@/components/global/Input";
import Select from "@/components/global/Select";
import mbsBanks from "@/lib/mbs-banks";
import Button from "@/components/global/Button";
import { useGetStatementSettings } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import Link from "next/link";
import classNames from "classnames";
import { useGetAccountName } from "@/api/misc";
import { useToast } from "@/hooks/use-toast";
import { BeatLoader } from "react-spinners";

const AnalyzeMbs = ({ onBack }) => {
  const toast = useToast();
  const [view, setView] = useState('account');
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { data: business } = useGetUserBusiness();
  const { data: { settings } = {} } = useGetStatementSettings(business._id);
  const {
    data: { account_name: accountName } = {}, isInitialLoading: isGetAccountNameLoading, error: resolveError
  } = useGetAccountName({
    accountNumber: watch().account, bankCode: watch().bank
  });

  const onSubmit = async (values) => {
    if (!accountName) return toast.error('Account not validated');
    console.log({ values, accountName });
  };

  const hasCredentials = settings.mbsUsername || settings.mbsClientId || settings.mbsClientSecret;

  return (
    <>
      {
        view === 'account' && (
          <>
            <div className="flex items-center mb-8">
              <IconButton
                onClick={ onBack } size="sm"
                icon={ <IconArrowLeft size="20"/> } variant="outlined" rounded color="black"
              />
              <h2 className="font-medium ml-4">Provide account details</h2>
            </div>
            <div className="my-auto">
              {
                !hasCredentials && (
                  <div className="bg-red-500 text-white rounded-2xl px-8 py-4 mb-6 flex items-start space-x-4">
                    <p>
                      Your MBS credentials has not been configured, please setup your credentials to proceed
                    </p>
                    <Link href="/dashboard/statement/settings">
                      <Button color="white" variant="outlined" size="sm" className="mt-1.5">Setup</Button>
                    </Link>
                  </div>
                )
              }
              <form
                onSubmit={ handleSubmit(onSubmit) }
                className={ classNames({ 'disabled': !hasCredentials }) }
              >
                <div className="space-y-3">
                  <Input
                    label="Name" bordered
                    { ...register('name', { required: 'Name is required' }) }
                    error={ errors?.name?.message }
                  />
                  <Input
                    label="Account number" bordered
                    { ...register('account', {
                      required: 'Account number is required',
                      minLength: {
                        value: 10,
                        message: 'Account number cannot be less than 10 characters'
                      },
                      maxLength: {
                        value: 10,
                        message: 'Account number cannot be more than 10 characters'
                      },
                    }) }
                    error={ errors?.account?.message }
                  />
                  <Select
                    label="Bank" bordered placeholder="Select bank"
                    options={ mbsBanks.map(b => ({ text: b.name, value: b.sortCode })) }
                    { ...register('bank', { required: 'Bank is required' }) }
                    error={ errors?.bank?.message }
                  />
                </div>
                <div className="mt-4">
                  { isGetAccountNameLoading && <BeatLoader size="6px"/> }
                  { (!isGetAccountNameLoading && accountName) && (
                    <div className="text-teal-700 flex items-center">
                      <IconUserCheck size="18" className="mr-2"/> { accountName }
                    </div>
                  ) }
                  { resolveError ? (
                    <div className="text-red-600 text-md">
                      { (resolveError?.response?.data?.message || 'Failed to get account name') }
                    </div>
                  ) : '' }
                </div>
                <Button type="submit" className="mt-10" disabled={ !accountName }>Continue</Button>
              </form>
            </div>
          </>
        )
      }
    </>
  );
};

export default AnalyzeMbs;
