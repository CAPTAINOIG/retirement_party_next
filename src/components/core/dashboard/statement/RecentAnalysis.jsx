import React from 'react';
import Link from "next/link";
import Button from "@/components/global/Button";
import { IconArrowRight, IconFileText } from "@tabler/icons-react";
import { useGetStatements } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import Card from "@/components/global/Card";

const RecentAnalysis = () => {
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { data: { statements = [] } = {}, isLoading: isStatementsLoading } = useGetStatements(business._id);

  return (
    <>
      {
        (isStatementsLoading || isBusinessLoading) ? (
          <div className="min-h-[300px] bg-slate-200 rounded-2xl">
          </div>
        ) : (
          <Card className="overflow-hidden">
            <div className="px-8 py-6">
              <div className="flex items-center mb-8">
                <h3 className="font-semibold text-base mr-4">Recent analysis</h3>
              </div>
              <div className="space-y-8 text-md w-full">
                {
                  [...statements].slice(0, 4).map((statement, i) => (
                    <div key={ i } className="flex items-center">
                      <div>
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-700"
                        >
                          <IconFileText size="20"/>
                        </div>
                      </div>
                      <div className="px-4 overflow-hidden">
                        <p className="font-medium leading-none">{ statement.name }</p>
                        <p
                          className="leading-none text-[.95rem] mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap opacity-80"
                        >
                          { statement.bank } - { statement.from }
                        </p>
                      </div>
                      <Link href={ `/dashboard/statement/analysis/${ statement._id }` } className="ml-auto">
                        <Button variant="outlined" size="sm">View</Button>
                      </Link>
                    </div>
                  ))
                }
                { !statements.length && <p className="opacity-50">No analysis done yet</p> }
              </div>
            </div>
            <hr/>
            <Link
              href={ "/dashboard/statement/analysis" }
              className="w-full hover:bg-gray-50 flex items-center justify-center px-8 py-2.5 font-medium text-md"
            >
              View all <IconArrowRight size="16" className="ml-4"/>
            </Link>
          </Card>
        )
      }
    </>
  );
};

export default RecentAnalysis;
