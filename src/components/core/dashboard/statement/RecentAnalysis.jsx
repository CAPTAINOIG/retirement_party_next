import React from 'react';
import Link from "next/link";
import Button from "@/components/global/Button";
import { IconArrowRight, IconFileText } from "@tabler/icons-react";
import { useGetStatements } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";

const RecentAnalysis = () => {
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { data: { statements = [] } = {}, isLoading: isStatementsLoading } = useGetStatements(business._id);

  return (
    <>
      {
        (isStatementsLoading || isBusinessLoading) ? (
          <div className="min-h-[300px] bg-gray-100 rounded-2xl">
          </div>
        ) : (
          <div className="border border-gray-300 rounded-2xl overflow-hidden">
            <div className="px-8 py-6">
              <div className="flex items-center mb-8">
                <h3 className="font-semibold mr-4">Recent analysis</h3>
              </div>
              <div className="space-y-8">
                {
                  [...statements].slice(0, 4).map((statement, i) => (
                    <div key={ i } className="flex items-center">
                      <div>
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-50 text-primary-600"
                        >
                          <IconFileText size="18"/>
                        </div>
                      </div>
                      <div className="px-4 overflow-hidden">
                        <p className="font-medium leading-none">{ statement.name }</p>
                        <p className="leading-none text-[.95rem] mt-1.5 text-ellipsis whitespace-nowrap overflow-hidden">
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
              href="/dashboard/statement/analysis"
              className="w-full hover:bg-gray-50 flex items-center justify-center px-8 py-2.5 font-medium"
            >
              View all <IconArrowRight size="16" className="ml-4"/>
            </Link>
          </div>
        )
      }
    </>
  );
};

export default RecentAnalysis;
