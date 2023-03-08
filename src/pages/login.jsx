import React from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import PageHeader from "@/components/core/shared/PageHeader.jsx";

const Login = () => {
  return (
    <div>
      <PageHeader
        title="Login to your account"
        append={ <div className="h-32"></div> }
      />
      <div className="container -mt-56 md:-mt-44">
        <div
          className="mt-16 w-full max-w-xl bg-slate-100 mx-auto px-20 py-44 rounded-3xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, praesentium!
        </div>
      </div>
    </div>
  );
};

Login.Layout = DefaultLayout;

export default Login;
