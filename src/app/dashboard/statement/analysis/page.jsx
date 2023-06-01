"use client"
import React, { useState } from 'react';
import Button from "@/components/global/Button";
import { IconChevronRight, IconExclamationCircle, IconPlus } from "@tabler/icons-react";
import NewAnalysis from "@/components/core/dashboard/statement/NewAnalysis";
import { useGetStatements } from "@/api/statement";
import AnalysisDetails from "@/components/core/dashboard/statement/AnalysisDetails";
import { useGetUserBusiness } from "@/api/business";
import { format } from "date-fns";

const StatementAnalysisPage = () => {
  const [isAnalyzeOpen, setIsAnalyzeOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { data: { statements = [] } = {}, isLoading: isStatementsLoading } = useGetStatements(business._id);
  const [transactionId, setTransactionId] = useState(null);

  const handleClick = (statement) => {
    setTransactionId(statement.transactionId);
    setIsDetailsOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Analysis history
        </h1>
        <Button
          onClick={ () => setIsAnalyzeOpen(true) } leftIcon={ <IconPlus size="20"/> } variant="outlined"
        >
          Analyze
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
                          Transaction id
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
                              { statement.transactionId }
                            </td>
                            <td className="px-6 py-4">
                              { format(new Date(statement.createdAt), 'do MMM, yyyy') }
                            </td>
                            <td>
                              <Button
                                onClick={ () => handleClick(statement) }
                                variant="outlined" color="black" size="xs" rightIcon={ <IconChevronRight size="16"/> }
                              >
                                View
                              </Button>
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
        onView={ handleClick }
        onClose={ () => setIsAnalyzeOpen(false) }
      />
      <AnalysisDetails
        isOpen={ isDetailsOpen }
        transactionId={ transactionId }
        onClose={ () => {
          setTransactionId(null);
          setIsDetailsOpen(false);
        } }
      />
    </div>
  );
};

export default StatementAnalysisPage;
