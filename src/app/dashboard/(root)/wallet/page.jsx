import React from 'react';
import Card from "@/components/global/Card";
import { formatCurrency } from "@/lib/utils";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const WalletPage = () => {
  return (
    <>
      <div className="bg-[#11161b] text-white pt-10 pb-12">
        <div className="container !max-w-5xl">
          <h1 className="text-2xl md:text-3xl font-semibold max-w-lg flex items-center">
            Wallet account
          </h1>
          <p className="mt-2 opacity-75">
            View your wallet balance and transactions
          </p>
        </div>
      </div>
      <div className="container py-10 !max-w-5xl min-h-screen flex flex-col">
        <div className="grid md:grid-cols-11 gap-6">
          <div className="md:col-span-4">
            <Card className="p-8">
              <div className="text-4xl font-medium">
                { formatCurrency(0) }
              </div>
              <p className="opacity-75">Available balance</p>
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div
                  className="bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-2xl flex flex-col items-center justify-center text-center px-4 py-10"
                  tabIndex="1"
                >
                  <IconPlus/>
                  <p className="mt-2">Fund wallet</p>
                </div>
                <div
                  className="bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-2xl flex flex-col items-center justify-center text-center px-4 py-10"
                  tabIndex="1"
                >
                  <IconMinus/>
                  <p className="mt-2">Withdraw</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="md:col-span-7">
            <Card className="p-8">
              No transactions yet
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPage;
