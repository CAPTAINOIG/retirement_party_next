import React, { useState } from 'react';
import { IconPlus } from "@tabler/icons-react";
import { useGetStatementOverview } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import NewAnalysis from "@/components/core/dashboard/statement/NewAnalysis";
import Card from "@/components/global/Card";
import { formatCurrency } from "@/lib/utils";

const StatementStats = () => {
  const [isAnalyzeOpen, setIsAnalyzeOpen] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data = {} } = useGetStatementOverview(business._id)

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        <Card className="px-6 py-4">
          <div className="text-3xl font-semibold text-gray-800">
            { data.totalStatements }
          </div>
          <div className="flex items-center mt-1">
            <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed</p>
          </div>
        </Card>
        <Card className="px-6 py-4">
          <div className="text-3xl font-semibold text-gray-800">
            Basic
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Subscription</p>
          </div>
        </Card>
        <Card className="px-6 py-4">
          <div className="text-3xl font-semibold text-gray-800">
            { formatCurrency(0) }
          </div>
          <div className="flex items-center mb-1">
            <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Wallet balance</p>
          </div>
        </Card>
        <Card
          onClick={ () => setIsAnalyzeOpen(true) }
          className="px-6 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
        >
          <div className="text-3xl font-semibold text-gray-800">
            <IconPlus/>
          </div>
          <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">New analysis</p>
        </Card>
      </div>

      <NewAnalysis
        isOpen={ isAnalyzeOpen }
        onClose={ () => setIsAnalyzeOpen(false) }
      />
    </>
  );
};

export default StatementStats;
