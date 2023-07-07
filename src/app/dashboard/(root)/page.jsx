"use client"
import React, { createElement } from 'react';
import requireAuth from "@/guards/require-auth";
import classNames from "classnames";
import {
  IconAssembly,
  IconBooks,
  IconBriefcase,
  IconBuildingHospital,
  IconChartDots3,
  IconChartHistogram,
  IconChartPie4,
  IconClipboardText,
  IconCreditCard,
  IconEditCircle,
  IconFileChart,
  IconFileText,
  IconGasStation,
  IconGavel,
  IconMessageChatbot,
  IconPaperBag,
  IconReportMoney,
  IconUserCircle,
  IconUsersGroup
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Card from "@/components/global/Card";

const items = [
  {
    name: 'Bank statement',
    slug: 'bank-statement',
    description: `Analyze any bank statement in seconds`,
    backgroundColor: 'bg-teal-500',
    textColor: 'text-teal-500',
    icon: IconFileText,
    homeLink: '/statement',
    dashboardLink: '/dashboard/statement',
    status: 'active',
    categories: ['featured', 'general', 'financial']
  },
  {
    name: 'Financial report',
    slug: 'financial-report',
    description: `Analyze financial reports in seconds`,
    backgroundColor: 'bg-indigo-500',
    textColor: 'text-indigo-500',
    icon: IconBooks,
    homeLink: '/financial-report',
    dashboardLink: '/dashboard/financial-report',
    status: 'active',
    categories: ['featured', 'investment']
  },
  {
    name: 'Chat assistant',
    slug: 'sensii',
    description: `An advanced embedded AI assistant`,
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    icon: IconMessageChatbot,
    homeLink: '/sensii',
    dashboardLink: '/dashboard/sensii',
    status: 'active',
    categories: ['general']
  },
  {
    name: 'Custom report',
    slug: 'custom-report',
    description: `Analyze customs reports in seconds`,
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: IconEditCircle,
    homeLink: '/custom-report',
    dashboardLink: '/dashboard/custom-reports',
    status: 'coming-soon',
    categories: ['featured', 'general']
  },
  {
    name: 'Invoices',
    slug: 'invoices',
    description: `Get insights on your invoices`,
    backgroundColor: 'bg-indigo-500',
    textColor: 'text-indigo-500',
    icon: IconClipboardText,
    homeLink: '/invoices',
    dashboardLink: '/dashboard/invoices',
    status: 'coming-soon',
    categories: ['general']
  },
  {
    name: 'Expenses',
    slug: 'expenses',
    description: `Get insights on your expenses`,
    backgroundColor: 'bg-teal-500',
    textColor: 'text-teal-500',
    icon: IconReportMoney,
    homeLink: '/expenses',
    dashboardLink: '/dashboard/expenses',
    status: 'coming-soon',
    categories: ['general']
  },
  {
    name: 'Customer profile',
    slug: 'customer-profile',
    description: `Understand your customers`,
    backgroundColor: 'bg-yellow-500',
    textColor: 'text-yellow-500',
    icon: IconUserCircle,
    homeLink: '/customer-profile',
    dashboardLink: '/dashboard/customer-profile',
    status: 'coming-soon',
    categories: ['financial', 'insurance']
  },
  {
    name: 'Credit Portfolio',
    slug: 'credit-portfolio',
    description: `Maintain your credit portfolio`,
    backgroundColor: 'bg-red-500',
    textColor: 'text-red-500',
    icon: IconCreditCard,
    homeLink: '/credit-portfolio',
    dashboardLink: '/dashboard/credit-portfolio',
    status: 'coming-soon',
    categories: ['financial']
  },
  {
    name: 'Investment Portfolio',
    slug: 'investment-portfolio',
    description: `Track your investments`,
    backgroundColor: 'bg-purple-500',
    textColor: 'text-purple-500',
    icon: IconBriefcase,
    homeLink: '/investment-portfolio',
    dashboardLink: '/dashboard/investment-portfolio',
    status: 'coming-soon',
    categories: ['financial']
  },
  {
    name: 'Saving portfolio',
    slug: 'saving-portfolio',
    description: `Monitor your savings`,
    backgroundColor: 'bg-indigo-500',
    textColor: 'text-indigo-500',
    icon: IconPaperBag,
    homeLink: '/saving-portfolio',
    dashboardLink: '/dashboard/saving-portfolio',
    status: 'coming-soon',
    categories: ['financial']
  },
  {
    name: 'Credit Modelling',
    slug: 'credit-modelling',
    description: `Model your credit score`,
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: IconChartHistogram,
    homeLink: '/credit-modelling',
    dashboardLink: '/dashboard/credit-modelling',
    status: 'coming-soon',
    categories: ['financial']
  },
  {
    name: 'Trading insight',
    slug: 'trading-insight',
    description: `Get insights on your trades`,
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    icon: IconFileChart,
    homeLink: '/trading-insight',
    dashboardLink: '/dashboard/trading-insight',
    status: 'coming-soon',
    categories: ['investment']
  },
  {
    name: 'Hospital distribution',
    slug: 'hospital-distribution',
    description: `Manage hospital distributions`,
    backgroundColor: 'bg-purple-500',
    textColor: 'text-purple-500',
    icon: IconBuildingHospital,
    homeLink: '/hospital-distribution',
    dashboardLink: '/dashboard/hospital-distribution',
    status: 'coming-soon',
    categories: ['insurance']
  },
  {
    name: 'Risk assessment',
    slug: 'risk-assessment',
    description: `Perform risk assessments`,
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: IconAssembly,
    homeLink: '/risk-assessment',
    dashboardLink: '/dashboard/risk-assessment',
    status: 'coming-soon',
    categories: ['insurance']
  },
  {
    name: 'Legal',
    slug: 'legal',
    description: `Manage your legal matters`,
    backgroundColor: 'bg-yellow-500',
    textColor: 'text-yellow-500',
    icon: IconGavel,
    homeLink: '/legal',
    dashboardLink: '/dashboard/legal',
    status: 'coming-soon',
    categories: ['cooking']
  },
  {
    name: 'Oil and gas',
    slug: 'oil-and-gas',
    description: `Manage your oil and gas operations`,
    backgroundColor: 'bg-indigo-500',
    textColor: 'text-indigo-500',
    icon: IconGasStation,
    homeLink: '/oil-and-gas',
    dashboardLink: '/dashboard/oil-and-gas',
    status: 'coming-soon',
    categories: ['cooking']
  },
  {
    name: 'Government',
    slug: 'government',
    description: `Interact with government operations`,
    backgroundColor: 'bg-teal-500',
    textColor: 'text-teal-500',
    icon: IconUsersGroup,
    homeLink: '/government',
    dashboardLink: '/dashboard/government',
    status: 'coming-soon',
    categories: ['cooking']
  },
  {
    name: 'Financial Model',
    slug: 'financial-model',
    description: `Create and manage financial models`,
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    icon: IconChartPie4,
    homeLink: '/financial-model',
    dashboardLink: '/dashboard/financial-model',
    status: 'coming-soon',
    categories: ['advisory']
  },
  {
    name: 'Investment analysis',
    slug: 'investment-analysis',
    description: `Analyze your investments`,
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: IconChartDots3,
    homeLink: '/investment-analysis',
    dashboardLink: '/dashboard/investment-analysis',
    status: 'coming-soon',
    categories: ['advisory']
  }
];

let categories = [
  { id: 'featured', name: "Featured" },
  { id: 'general', name: "General" },
  { id: 'financial', name: "Financial services" },
  { id: 'investment', name: "Investment advisory" },
  { id: 'insurance', name: "Insurance & HMO" },
  { id: 'cooking', name: "Currently cooking" },
  { id: 'advisory', name: "Advisory" }
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#11161b] text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="container !max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-semibold max-w-lg flex items-center">
            All the tools you need to run your business
          </h1>
          <p className="mt-2 md:mt-4 md:text-[1.05rem] opacity-75">
            Select a product below to continue
          </p>
        </div>
      </div>
      <div className="container py-10 !max-w-5xl min-h-screen flex flex-col space-y-10">
        {
          categories.map(c => (
            <div key={ c.id }>
              <h3 className="text-xl font-medium mb-8 px-1">{ c.name }</h3>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {
                  items.filter(i => i.categories.includes(c.id)).map(item => (
                    <Card
                      key={ item.name }
                      onClick={ () => router.push(item.dashboardLink) }
                      className={ classNames(
                        'rounded-2xl px-10 py-8 transition-all h-full',
                        { 'disabled': item.status === 'coming-soon' },
                        { 'hover:-translate-y-1 hover:shadow-md cursor-pointer': item.status === 'active' }
                      ) }
                    >
                      <div>
                        <div
                          className={ classNames('rounded-2xl justify-center', item.textColor) }
                        >
                          { createElement(item.icon, { size: 44 }) }
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center">
                          <h4 className="font-medium text-[1.06rem]">{ item.name }</h4>
                          {
                            item.status === 'coming-soon' && (
                              <div
                                className="px-2 py-1 ml-2 leading-none bg-slate-200 text-black rounded-full text-xs inline-flex"
                              >
                                Alpha
                              </div>
                            )
                          }
                        </div>
                        <p className="leading-tight mt-1">
                          { item.description }
                        </p>
                      </div>
                    </Card>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default requireAuth(DashboardPage);
