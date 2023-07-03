"use client"
import React, { createElement } from 'react';
import requireAuth from "@/guards/require-auth";
import { useAuth } from "@/hooks/use-auth";
import classNames from "classnames";
import {
  IconBooks,
  IconBriefcase,
  IconChartArcs3,
  IconChartArrows,
  IconChartBar,
  IconFileText,
  IconHeadphones,
  IconMessageChatbot,
  IconReportMoney,
  IconUsers,
  IconUsersGroup
} from "@tabler/icons-react";
import UserDropdown from "@/components/core/shared/UserDropdown";
import { useRouter } from "next/navigation";
import Card from "@/components/global/Card";

const products = [
  {
    name: 'Bank statement',
    slug: 'bank-statement',
    description: `Analyze any bank statement in seconds`,
    backgroundColor: 'bg-teal-500',
    textColor: 'text-teal-500',
    icon: IconFileText,
    homeLink: '/statement',
    dashboardLink: '/dashboard/statement',
    status: 'active'
  },
  {
    name: 'Sensiii',
    slug: 'sensii',
    description: `An advanced embedded AI assistant`,
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    icon: IconMessageChatbot,
    homeLink: '/sensii',
    dashboardLink: '/dashboard/sensii',
    status: 'active'
  },
  {
    name: 'Customer report',
    slug: 'customer-report',
    description: `Analyze customers reports in seconds`,
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: IconUsers,
    homeLink: '/customer-report',
    dashboardLink: '/dashboard/customer-reports',
    status: 'coming-soon'
  },
  {
    name: 'Financial report',
    slug: 'financial-report',
    description: `Analyze financial reports in seconds`,
    backgroundColor: 'bg-indigo-500',
    textColor: 'text-indigo-500',
    icon: IconBooks,
    homeLink: '/financial-report',
    dashboardLink: '/dashboard/financial-reports',
    status: 'coming-soon'
  },
  {
    name: 'Staff hiring',
    slug: 'staff-hiring',
    description: `Make better hiring decisions`,
    backgroundColor: 'bg-red-500',
    textColor: 'text-red-500',
    icon: IconUsersGroup,
    homeLink: '/staff-hiring',
    dashboardLink: '/dashboard/staff-hiring',
    status: 'coming-soon'
  },
  {
    name: 'Portfolio report',
    slug: 'portfolio-report',
    description: `Analyze your portfolio in just a few steps`,
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: IconBriefcase,
    homeLink: '/mineme',
    dashboardLink: '/dashboard/mineme',
    status: 'coming-soon'
  },
  {
    name: 'Investment analysis',
    slug: 'investment-analysis',
    description: `Get investment analysis in just a few steps`,
    backgroundColor: 'bg-cyan-500',
    textColor: 'text-cyan-500',
    icon: IconChartArcs3,
    homeLink: '/investment-analysis',
    dashboardLink: '/dashboard/investment-analysis',
    status: 'coming-soon'
  },
  {
    name: 'Customer support',
    slug: 'customer-support',
    description: `Get insights on your customer support`,
    backgroundColor: 'bg-rose-500',
    textColor: 'text-rose-500',
    icon: IconHeadphones,
    homeLink: '/customer-support',
    dashboardLink: '/dashboard/customer-support',
    status: 'coming-soon'
  },
  {
    name: 'Procurement analysis',
    slug: 'procurement-analysis',
    description: `Get your procurement analysis in a few steps`,
    backgroundColor: 'bg-teal-500',
    textColor: 'text-teal-500',
    icon: IconChartBar,
    homeLink: '/procurement-analysis',
    dashboardLink: '/dashboard/procurement-analysis',
    status: 'coming-soon'
  },
  {
    name: 'Sales report',
    slug: 'sales-report',
    description: `Get sales reports in a few steps`,
    backgroundColor: 'bg-fuchsia-500',
    textColor: 'text-fuchsia-500',
    icon: IconChartArrows,
    homeLink: '/sales-report',
    dashboardLink: '/dashboard/sales-report',
    status: 'coming-soon'
  },
  {
    name: 'Financial model',
    slug: 'financial-model',
    description: `Analyze your financial model to make better decisions`,
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    icon: IconReportMoney,
    homeLink: '/financial-model',
    dashboardLink: '/dashboard/financial-model',
    status: 'coming-soon'
  },
];


const DashboardPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div className="bg-slate-100/70">
      <div className="container py-16 min-h-screen flex flex-col">
        <div className="my-auto">
          <div className="mb-16 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold">
                Welcome { user.firstName } 👋🏽
              </h1>
              <p className="text-[1.05rem] mt-2">Select a product below to continue</p>
            </div>
            <UserDropdown/>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {
              products.map(product => (
                <Card
                  key={ product.name }
                  onClick={ () => router.push(product.dashboardLink) }
                  className={ classNames(
                    'rounded-3xl px-10 py-6 transition-all h-full flex items-center',
                    { 'disabled': product.status === 'coming-soon' },
                    { 'hover:-translate-y-1 cursor-pointer': product.status === 'active' }
                  ) }
                >
                  <div>
                    <div
                      className={ classNames('w-12 h-12 rounded-2xl flex items-center justify-center', product.textColor) }
                    >
                      { createElement(product.icon, { size: 44 }) }
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-medium text-[1.06rem]">{ product.name }</h4>
                    <p className="leading-tight mt-1">
                      { product.description }
                    </p>
                    {
                      product.status === 'coming-soon' && (
                        <div
                          className="px-2 py-1 mt-2 leading-none bg-slate-200 text-black rounded-full text-xs inline-flex"
                        >
                          Coming soon
                        </div>
                      )
                    }
                  </div>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default requireAuth(DashboardPage);
