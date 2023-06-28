"use client"
import React, { useState } from 'react';
import Button from "@/components/global/Button";
import { IconChevronRight, IconExclamationCircle, IconPlus } from "@tabler/icons-react";
import NewAnalysis from "@/components/core/dashboard/statement/NewAnalysis";
import { useGetStatements } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import { format } from "date-fns";
import Link from "next/link";
import classNames from "classnames";
import { formatCurrency } from "@/lib/utils";

const StatementAnalysisPage = () => {
  const [isAnalyzeOpen, setIsAnalyzeOpen] = useState(false);
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { data: { statements = [] } = {}, isLoading: isStatementsLoading } = useGetStatements(business._id);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Analysis history
        </h1>
        <Button
          onClick={ () => setIsAnalyzeOpen(true) } leftIcon={ <IconPlus size="20"/> } variant="outlined" color="black"
        >
          Analyze statement
        </Button>
      </div>
      <div className="mt-10">
        {
          (isBusinessLoading || isStatementsLoading) ? (
            <div className="h-[200px] bg-gray-100 rounded-2xl"></div>
          ) : (
            <>
              {
                !!statements.length ? (
                  <div className="relative overflow-x-auto rounded-xl border">
                    <table className="w-full text-[.95rem] text-left">
                      <thead className="text-gray-500 border-b">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Bank
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Total credit
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Total debit
                        </th>
                        <th scope="col" className="px-6 py-4">
                          From
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Date analyzed
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                        statements.map(statement => (
                          <tr className="bg-white border-b hover:bg-gray-50" key={ statement._id }>
                            <td scope="row" className="px-6 py-4 whitespace-nowrap">
                              { statement.name }
                            </td>
                            <td className="px-6 py-4">
                              { statement.bank || 'N/A' }
                            </td>
                            <td className="px-6 py-4">
                              { statement.totalCredit ? formatCurrency(statement.totalCredit) : 'N/A' }
                            </td>
                            <td className="px-6 py-4">
                              { statement.totalDebit ? formatCurrency(statement.totalDebit) : 'N/A' }
                            </td>
                            <td className="px-6 py-4">
                              <div className={ classNames(
                                'px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600',
                                { '!border-red-500 !text-red-500': statement.from === 'pdf' },
                                { '!border-blue-500 !text-blue-500': statement.from === 'mono' },
                              ) }>
                                { statement.from }
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              { format(new Date(statement.createdAt), 'do MMM, yyyy') }
                            </td>
                            <td>
                              <Link href={ `/dashboard/statement/analysis/${ statement._id }` }>
                                <Button
                                  variant="outlined" color="black" size="xs" rightIcon={ <IconChevronRight size="16"/> }
                                >
                                  View
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))
                      }
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <>
                    <div
                      className="col-span-2 border-2 border-dashed border-gray-300 rounded-2xl relative p-5 flex justify-center items-center py-20 text-gray-600"
                    >
                      <IconExclamationCircle size="20" className="mr-4"/>
                      <p>No statement analyzed yet</p>
                    </div>
                  </>
                )
              }
            </>
          )
        }
      </div>

      <NewAnalysis
        isOpen={ isAnalyzeOpen }
        onClose={ () => setIsAnalyzeOpen(false) }
      />
    </div>
  );
};

export default StatementAnalysisPage;
