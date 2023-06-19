import React from 'react';
import { IconCircleFilled, IconFolderExclamation } from "@tabler/icons-react";
import { formatCurrency } from "@/lib/utils";
import classNames from "classnames";

const InvestmentDistribution = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {}

  const hasRecord = ((Math.max(...highlight.investments.map(i => i.placement || 0)) > 0) || (Math.max(...highlight.investments.map(i => i.taken || 0)) > 0));

  const items = highlight.investments.reduce((acc, current) => {
    if (!current.month) return acc;
    if (Object.hasOwn(acc, current.month)) acc[current.month].push(current);
    else acc[current.month] = [current];
    return acc;
  }, {});

  return (
    <>
      <div className="relative overflow-x-auto rounded-xl border border-gray-300">
        <div className="flex items-center px-6 py-6">
          <h3 className="font-medium">Investment Distribution</h3>
          {
            hasRecord && (
              <div className="flex items-center ml-auto space-x-6">
                <div className="flex items-center space-x-2">
                  <IconCircleFilled size="14" className="text-green-500"/>
                  <p>Maximum</p>
                </div>
                <div className="flex items-center space-x-2">
                  <IconCircleFilled size="14" className="text-red-500"/>
                  <p>Minimum</p>
                </div>
              </div>
            )
          }
        </div>
        {
          hasRecord ? (
            <table className="w-full text-sm text-left">
              <thead className="border-b border-gray-300">
              <tr>
                <th scope="col" className="font-medium border pl-6 pr-2 py-3"></th>
                <th scope="col" colSpan="2" className="font-medium border px-2 py-3">Week 1</th>
                <th scope="col" colSpan="2" className="font-medium border px-2 py-3">Week 2</th>
                <th scope="col" colSpan="2" className="font-medium border px-2 py-3">Week 3</th>
                <th scope="col" colSpan="2" className="font-medium border pl-2 pr-6 py-3">Week 4/5</th>
              </tr>
              <tr>
                <th scope="col" className="font-medium border pl-6 pr-2 py-3"></th>
                <th scope="col" className="font-medium border px-2 py-3">Placement</th>
                <th scope="col" className="font-medium border px-2 py-3">Taken</th>
                <th scope="col" className="font-medium border px-2 py-3">Placement</th>
                <th scope="col" className="font-medium border px-2 py-3">Taken</th>
                <th scope="col" className="font-medium border px-2 py-3">Placement</th>
                <th scope="col" className="font-medium border px-2 py-3">Taken</th>
                <th scope="col" className="font-medium border px-2 py-3">Placement</th>
                <th scope="col" className="font-medium border pl-2 pr-6 py-3">Taken</th>
              </tr>
              </thead>
              <tbody>
              {
                Object.keys(items).filter(key => {
                  return Math.max(...items[key].map(j => j.taken || 0)) > 0 || Math.max(...items[key].map(j => j.placement || 0)) > 0;
                }).map((key) => {
                  const maxPlacement = Math.max(...items[key].map(i => i.placement || 0))
                  const minPlacement = Math.min(...items[key].map(i => i.placement || 0))
                  const maxTaken = Math.max(...items[key].map(i => i.taken || 0))
                  const minTaken = Math.min(...items[key].map(i => i.taken || 0))

                  return (
                    <tr className="bg-white border-b border-gray-300 hover:bg-gray-50" key={ key }>
                      <td className="pl-6 pr-2 py-3 border border-l-0">{ key }</td>
                      {
                        [1, 2, 3, 4].map(n => {
                          const item = items[key].find(i => i.week === n);
                          return ([
                            <td
                              key={ `investment-distribution-${ n }1` }
                              className={ classNames('px-2 py-3 border',
                                {
                                  'bg-green-100': item?.placement && (maxPlacement === item?.placement),
                                  'bg-red-100': item?.placement && (minPlacement === item?.placement)
                                })
                              }>
                              { formatCurrency(item?.placement || 0) }
                            </td>,
                            <td
                              key={ `investment-distribution-${ n }2` }
                              className={ classNames('px-2 py-3 border',
                                {
                                  'bg-green-100': item?.taken && (maxTaken === item?.taken),
                                  'bg-red-100': item?.taken && (minTaken === item?.taken)
                                })
                              }>
                              { formatCurrency(item?.taken || 0) }
                            </td>
                          ])
                        })
                      }
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
          ) : (
            <p className="px-6 pb-6 flex items-center">
              <IconFolderExclamation size="20" className="mr-2"/> No salary record
            </p>
          )
        }
      </div>
      <div className="grid grid-cols-2 gap-8 items-start">
        <div className="border border-gray-300 rounded-2xl">
          <h3 className="font-medium px-8 py-6">Investment companies</h3>
          {
            highlight.investor_list?.length ? (
              <div className="divide-y divide-gray-300">
                {
                  highlight.investor_list.map((company, i) => (
                    <div className="grid grid-cols-2 gap-4 px-8 py-2 mb-2" key={ i }>
                      <p>{ company.name }</p>
                      <p>{ formatCurrency(company.amount) }</p>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p className="flex items-center px-8 mb-6">
                <IconFolderExclamation size="20" className="mr-2"/> No investment company found
              </p>
            )
          }
        </div>
        <div className="border border-gray-300 rounded-2xl">
          <h3 className="font-medium px-8 py-6">Suspected repayments</h3>
          {
            highlight.suspected_investment?.length ? (
              <div className="divide-y divide-gray-300">
                {
                  highlight.suspected_investment.map((loan, i) => (
                    <div className="grid grid-cols-2 gap-4 px-8 py-2 mb-2" key={ i }>
                      <p>{ formatCurrency(loan.amount) }</p>
                      <p>{ loan.date }</p>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p className="flex items-center px-8 mb-6">
                <IconFolderExclamation size="20" className="mr-2"/> No suspected repayment
              </p>
            )
          }
        </div>
      </div>
    </>
  );
};

export default InvestmentDistribution;
