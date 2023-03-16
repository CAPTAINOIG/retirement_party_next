import React, { useRef } from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import PageHeader from "@/components/core/shared/PageHeader.jsx";
import OtpPinInput from "@/components/global/OtpPinInput.jsx";
import Button from "@/components/global/Button.jsx";
import { IconLogout, IconReload } from "@tabler/icons-react";
import { useToast } from "@/hooks/use-toast.jsx";
import { useConfirmEmailVerificationOtp, useSendEmailVerificationOtp } from "@/api/auth.js";
import { requireAuthUnverified } from "@/guards/require-auth-unverified.js";
import { useAuth } from "@/hooks/use-auth.js";

const Verification = () => {
  const toast = useToast();
  const { user, reloadUser, logout } = useAuth();
  const input = useRef(null);
  const { mutateAsync: send, isLoading: isSendLoading } = useSendEmailVerificationOtp();
  const { mutateAsync: confirm, isLoading: isConfirmLoading } = useConfirmEmailVerificationOtp();

  const handlePinDone = async otp => {
    try {
      await confirm(otp);
      await reloadUser();
      toast.success('Email address verified');
    } catch (e) {
      input.current.reset();
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleResend = async () => {
    try {
      await send(null);
      toast.success('Otp sent');
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <PageHeader title="Verify your email address"/>
      <div className="container">
        <div className="mt-16 w-full max-w-md mx-auto rounded-xl">
          <p className="mb-8">
            A verification code has been sent to <b>{ user.email }</b>, enter otp code below to verify your email
            address
          </p>
          <OtpPinInput
            length={ 6 } onDone={ handlePinDone } ref={ input } disabled={ isSendLoading || isConfirmLoading }
          />
          <div className="mt-10 flex items-center justify-between">
            <Button
              onClick={ handleResend } variant="outlined" color="black" leftIcon={ <IconReload/> } size="sm"
              loading={ isSendLoading } disabled={ isConfirmLoading }
            >
              Resend code
            </Button>
            <Button
              onClick={ handleLogout } variant="outlined" color="red" leftIcon={ <IconLogout/> } size="sm"
              disabled={ isSendLoading || isConfirmLoading }
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Verification.Layout = DefaultLayout;

export default requireAuthUnverified(Verification);
