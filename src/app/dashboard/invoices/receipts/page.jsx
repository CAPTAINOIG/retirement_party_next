"use client"
import React from 'react';
import DashboardTitle from "@/components/core/dashboard/shared/DashboardTitle";
import Button from "@/components/global/Button";
import { IconPlus } from "@tabler/icons-react";
import Card from "@/components/global/Card";
import classNames from "classnames";

const ReceiptPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <DashboardTitle text="Receipts" className="!m-0"/>
        <Button variant="outlined" color="primary" leftIcon={ <IconPlus size="20"/> }>
          New receipt
        </Button>
      </div>
      <Card className="relative overflow-x-auto">
        <table className="w-full text-[.95rem] text-left">
          <thead className="text-gray-500 border-b border-slate-200">
          <tr>
            <th scope="col" className="px-6 py-4">
              Vendor name
            </th>
            <th scope="col" className="px-6 py-4">
              Send by
            </th>
            <th scope="col" className="px-6 py-4">
              Expense date
            </th>
            <th scope="col" className="px-6 py-4">
              Submitted date
            </th>
            <th scope="col" className="px-6 py-4">
              Status
            </th>
            <th scope="col" className="px-6 py-4">
              Total amount
            </th>
          </tr>
          </thead>
          <tbody>
          <tr className="hover:bg-gray-50 cursor-pointer select-none">
            <td scope="row" className="px-6 py-4 whitespace-nowrap">
              Apple direct
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              John doe
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              2023/01/01
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              2023/02/02
            </td>
            <td className="px-6 py-4">
              <div className={ classNames(
                'px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600',
                { '!border-red-500 !text-red-500': true },
                { '!border-blue-500 !text-blue-500': false },
                { '!border-teal-500 !text-teal-500': false },
              ) }>
                Pending
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              2000
            </td>
          </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ReceiptPage;
