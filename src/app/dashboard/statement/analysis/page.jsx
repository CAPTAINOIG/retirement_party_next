"use client"
import React from 'react';
import Button from "@/components/global/Button";
import { IconFilePlus } from "@tabler/icons-react";

const StatementAnalysisPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Analysis history
        </h1>
        <Button leftIcon={ <IconFilePlus size="20"/> }>Analyze</Button>
      </div>
      <div className="mt-10">
        <div className="relative overflow-x-auto rounded-xl border">
          <table className="w-full text-[.95rem] text-left">
            <thead className="text-gray-500 border-b">
            <tr>
              <th scope="col" className="px-6 py-5 font-medium">
                Tag
              </th>
              <th scope="col" className="px-6 py-5 font-medium">
                Score
              </th>
              <th scope="col" className="px-6 py-5 font-medium">
                Date analyzed
              </th>
              <th scope="col" className="px-6 py-5 font-medium">
                Price
              </th>
            </tr>
            </thead>
            <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap">
                Untitled #1
              </th>
              <td className="px-6 py-5">
                50.55
              </td>
              <td className="px-6 py-5">
                10/10/2023
              </td>
              <td className="px-6 py-5">
                $2
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap">
                Untitled #1
              </th>
              <td className="px-6 py-5">
                50.55
              </td>
              <td className="px-6 py-5">
                10/10/2023
              </td>
              <td className="px-6 py-5">
                $2
              </td>
            </tr>
            <tr className="bg-white hover:bg-gray-50">
              <th scope="row" className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap">
                Untitled #1
              </th>
              <td className="px-6 py-5">
                50.55
              </td>
              <td className="px-6 py-5">
                10/10/2023
              </td>
              <td className="px-6 py-5">
                $2
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatementAnalysisPage;
