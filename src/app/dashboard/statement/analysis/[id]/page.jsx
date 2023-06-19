"use client"
import React from 'react';
import SimpleDropdown from "@/components/global/SimpleDropdown";
import IconButton from "@/components/global/IconButton";
import { IconChevronLeft, IconDotsVertical, IconFileText, IconListDetails, IconTrash } from "@tabler/icons-react";
import { useGetTransactionDetails } from "@/api/statement";
import AccountActivityChart from "@/components/core/dashboard/statement/details/AccountActivityChart";
import Link from "next/link";
import CashFlowHighlights from "@/components/core/dashboard/statement/details/CashFlowHighlights";
import SalaryHighlights from "@/components/core/dashboard/statement/details/SalaryHighlights";
import TransactionPatterns from "@/components/core/dashboard/statement/details/TransactionPatterns";
import SweepingSummary from "@/components/core/dashboard/statement/details/SweepingSummary";
import BorrowingHighlights from "@/components/core/dashboard/statement/details/BorrowingHighlights";
import OtherHighlights from "@/components/core/dashboard/statement/details/OtherHighlights";
import AnalyticsScoreChart from "@/components/core/dashboard/statement/details/AnalyticsScoreChart";
import MonthlySummary from "@/components/core/dashboard/statement/details/MonthlySummary";
import BehaviorAnalysis from "@/components/core/dashboard/statement/details/BehaviorAnalysis";
import SixMonthsLoanHistory from "@/components/core/dashboard/statement/details/SixMonthsLoanHistory";
import SalaryDistribution from "@/components/core/dashboard/statement/details/SalaryDistribution";
import InvestmentDistribution from "@/components/core/dashboard/statement/details/InvestmentDistribution";
import AccountOwnership from "@/components/core/dashboard/statement/details/AccountOwnership";
import WeeklyTransactions from "@/components/core/dashboard/statement/details/WeeklyTransactions";
import CashFlowDistribution from "@/components/core/dashboard/statement/details/CashFlowDistribution";
import MonthlyDepositWithdrawal from "@/components/core/dashboard/statement/details/MonthlyDepositWithdrawal";
import DerivedData from "@/components/core/dashboard/statement/details/DerivedData";
import SweepingDetails from "@/components/core/dashboard/statement/details/SweepingDetails";
import NetMonthlyEarnings from "@/components/core/dashboard/statement/details/NetMonthlyEarnings";
import StatementOwnership from "@/components/core/dashboard/statement/details/StatementOwnership";

const StatementDetails = ({ params: { id } }) => {
  const { data, isLoading } = useGetTransactionDetails(id);

  const { highlight } = data?.analytics_data ?? {};

  return (
    <>
      {
        isLoading ? (
          <>
            <div className="bg-gray-100 rounded-2xl w-[200px] py-4"></div>
            <div className="bg-gray-100 rounded-2xl w-[400px] py-4 mt-4"></div>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-100 rounded-2xl w-full h-[300px]"></div>
              <div className="bg-gray-100 rounded-2xl w-full h-[300px]"></div>
            </div>
          </>
        ) : (
          <>
            {
              !!data && (
                <>
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center space-x-3">
                      <Link href="/dashboard/statement/analysis">
                        <IconButton
                          variant="text" color="black" size="sm" rounded icon={ <IconChevronLeft size="20"/> }
                        />
                      </Link>
                      <h3 className="text-xl font-medium">Analysis details</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                      <SimpleDropdown
                        trigger={
                          <IconButton
                            variant="text" size="sm" icon={ <IconDotsVertical size="20"/> } color="black" rounded
                          />
                        }
                        items={ [
                          {
                            text: 'View transactions',
                            icon: <IconFileText size="18"/>,
                            onClick: () => window.open(highlight.transactions_link)
                          }, {
                            text: 'View result',
                            icon: <IconListDetails size="18"/>,
                            onClick: () => window.open(highlight.link)
                          },
                          {
                            text: <div className="text-red-600">Delete statement</div>,
                            icon: <IconTrash size="20" className="text-red-600"/>,
                            onClick: () => null
                          },
                        ] }
                      />
                    </div>
                  </div>
                  <div className="space-y-10">
                    <div className="grid grid-cols-9 gap-10 items-center">
                      <div className="col-span-5 space-y-6">
                        <div className="border border-gray-300 rounded-2xl">
                          <h3 className="font-medium px-6 py-6">Details</h3>
                          <div className="divide-y divide-gray-300">
                            <div className="px-6 py-2 flex items-center justify-between">
                              <div>Account name</div>
                              <div>
                                { highlight.name_check.account_name }
                              </div>
                            </div>
                            <div className="px-6 py-2 flex items-center justify-between">
                              <div>From</div>
                              <div>
                                { highlight.from_statement }
                              </div>
                            </div>
                            <div className="px-6 py-2 flex items-center justify-between">
                              <div>To</div>
                              <div>
                                { highlight.to_statement }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <AccountActivityChart data={ data }/>
                      </div>
                      <div className="col-span-2">
                        <AnalyticsScoreChart data={ data }/>
                      </div>
                    </div>
                    <div className="grid grid-cols-10 gap-6">
                      <div className="col-span-7">
                        <CashFlowHighlights data={ data }/>
                      </div>
                      <div className="col-span-3">
                        <NetMonthlyEarnings data={ data }/>
                      </div>
                    </div>
                    <div className="grid grid-cols-10 gap-6">
                      <div className="col-span-7">
                        <SalaryHighlights data={ data }/>
                      </div>
                      <div className="col-span-3">
                        <StatementOwnership data={ data }/>
                      </div>
                    </div>
                    <div className="grid grid-cols-9 gap-6">
                      <div className="col-span-6">
                        <TransactionPatterns data={ data }/>
                      </div>
                      <div className="col-span-3 space-y-6">
                        <DerivedData data={ data }/>
                        <SweepingDetails data={ data }/>
                      </div>
                    </div>
                    <SweepingSummary data={ data }/>
                    <BorrowingHighlights data={ data }/>
                    <OtherHighlights data={ data }/>
                    <MonthlySummary data={ data }/>
                    <BehaviorAnalysis data={ data }/>
                    <SixMonthsLoanHistory data={ data }/>
                    <SalaryDistribution data={ data }/>
                    <InvestmentDistribution data={ data }/>
                    <AccountOwnership data={ data }/>
                    <MonthlyDepositWithdrawal data={ data }/>
                    <CashFlowDistribution data={ data }/>
                    <WeeklyTransactions data={ data }/>
                  </div>
                </>
              )
            }
          </>
        )
      }
    </>
  );
};

export default StatementDetails;
