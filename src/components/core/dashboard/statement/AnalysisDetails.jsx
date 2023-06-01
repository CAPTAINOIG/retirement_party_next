import React from 'react';
import Drawer from "@/components/global/Drawer";
import { useGetTransactionDetails } from "@/api/statement";
import IconButton from "@/components/global/IconButton";
import { IconDotsVertical, IconFileText, IconListDetails, IconTrash } from "@tabler/icons-react";
import SimpleDropdown from "@/components/global/SimpleDropdown";
import { formatCurrency } from "@/lib/utils";
import Loader from "@/components/global/Loader";
import Button from "@/components/global/Button";

const AnalysisDetails = ({ transactionId, isOpen, onClose }) => {
  const { data, isLoading } = useGetTransactionDetails(transactionId);

  return (
    <Drawer isOpen={ isOpen } onClose={ onClose }>
      {
        isLoading ? (
          <div className="m-auto">
            <Loader/>
          </div>
        ) : (
          <>
            {
              !!data && (
                <>
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-xl font-medium">Analysis details</h3>
                    <SimpleDropdown
                      trigger={
                        <IconButton
                          variant="outlined" icon={ <IconDotsVertical size="20"/> } color="black" rounded size="sm"
                        />
                      }
                      items={ [
                        {
                          text: <div className="text-red-600">Delete statement</div>,
                          icon: <IconTrash size="18" className="text-red-600"/>,
                          onClick: () => null
                        },
                      ] }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <a className="flex" href={ data.analytics_data.highlight.link } target="_blank">
                      <Button variant="outlined" color="black" leftIcon={ <IconListDetails/> } block>
                        View result
                      </Button>
                    </a>
                    <a className="flex" href={ data.analytics_data.highlight.transactions_link } target="_blank">
                      <Button variant="outlined" color="black" leftIcon={ <IconFileText/> } block>
                        View transactions
                      </Button>
                    </a>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-300 rounded-xl">
                      <h5 className="text-sm font-semibold px-6 pt-4 pb-4">Cashflow highlights</h5>
                      <div className="divide-y divide-gray-300">
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Account name</div>
                          <div>
                            { data.analytics_data.highlight.name_check.account_name }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Total deposit</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.total_deposit) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Total withdrawal</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.total_withdrawal) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Monthly average deposit</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_monthly_deposit) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Monthly average withdrawal</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_monthly_withdraw) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Weekly average deposit</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_weekly_deposit) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Weekly average withdrawal</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_weekly_withdraw) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Daily average deposit</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_daily_deposit) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Daily average withdrawal</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_daily_withdrawal) }
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded-xl mb-4">
                      <h5 className="text-sm font-semibold px-6 pt-4 pb-4">Salary highlights</h5>
                      <div className="divide-y divide-gray-300">
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Constant salary</div>
                          <div>
                            { data.analytics_data.highlight.constant_salary }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Most frequent salary</div>
                          <div>
                            { data.analytics_data.highlight.most_frequent_salary_amount.map(a => formatCurrency(a)).join(', ') }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Average salary</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_salary) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Suspected salary</div>
                          <div>
                            { data.analytics_data.highlight.suspected_salary.map(a => formatCurrency(a)).join(', ') }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Average suspected salary</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_suspected_salary) }
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded-xl mb-4">
                      <h5 className="text-sm font-semibold px-6 pt-4 pb-4">Transaction patterns</h5>
                      <div className="divide-y divide-gray-300">
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Last deposit date</div>
                          <div>
                            { data.analytics_data.highlight.last_deposit_date }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Last withdrawal date</div>
                          <div>
                            { data.analytics_data.highlight.last_withdrawal_date }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Highest deposit week</div>
                          <div>
                            Week { data.analytics_data.highlight.highest_deposit_week }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Highest balance week</div>
                          <div>
                            Week { data.analytics_data.highlight.highest_balance_week }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Average daily balance</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.average_daily_balance) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Week with lowest balance</div>
                          <div>
                            Week { data.analytics_data.highlight.lowest_balance_week || 'N/A' }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Week with zero balance usually</div>
                          <div>
                            Week { data.analytics_data.highlight.zero_balance_week || 'N/A' }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Highest bank</div>
                          <div>
                            { data.analytics_data.highlight.highest_band || 'N/A' }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>30 days spike</div>
                          <div>
                            { data.analytics_data.highlight.thirty_days_spike.toString() }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>% of days with low balance</div>
                          <div>
                            { data.analytics_data.highlight.low_balance_percent_days }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Credit turnover</div>
                          <div>
                            { formatCurrency(data.analytics_data.highlight.credit_turnover) }
                          </div>
                        </div>
                        <div className="px-6 py-2 flex items-center justify-between">
                          <div>Transaction days</div>
                          <div>
                            { data.analytics_data.highlight.transaction_days }/{ data.analytics_data.highlight.no_of_days } days
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </>
        )
      }
    </Drawer>
  );
};

export default AnalysisDetails;
