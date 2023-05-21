import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full md:h-screen grid grid-cols-12 md:overflow-hidden">
      <div className="col-span-4 bg-black">
      </div>
      <div className="col-span-8 flex flex-col py-20 overflow-y-auto">
        <div className="my-auto">
          { children }
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
