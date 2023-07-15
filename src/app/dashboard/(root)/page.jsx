"use client"
import React, { createElement } from 'react';
import requireAuth from "@/guards/require-auth";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import Card from "@/components/global/Card";
import products, { categories } from "@/lib/products";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#11161b] text-white pt-12 md:pt-16 pb-12 md:pb-14">
        <div className="container !max-w-5xl">
          <h1
            className="text-[2rem] md:text-4xl leading-[1.3] font-semibold max-w-[300px] md:max-w-lg flex items-center"
          >
            All the tools you need to run your business
          </h1>
          <p className="mt-3 md:mt-4 opacity-75">
            Select a product below to continue
          </p>
        </div>
      </div>
      <div className="container py-12 md:py-16 !max-w-5xl min-h-screen flex flex-col space-y-10">
        {
          categories.map(c => (
            <div key={ c.id }>
              <h3 className="text-xl font-medium mb-8 px-1">{ c.name }</h3>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {
                  products.filter(p => p.categories.includes(c.id)).map(product => (
                    <Card
                      key={ product.name }
                      onClick={ () => router.push(product.dashboardLink) }
                      className={ classNames(
                        'rounded-2xl px-10 py-8 transition-all h-full',
                        { 'disabled': product.status === 'coming-soon' },
                        { 'hover:-translate-y-1 hover:shadow-md cursor-pointer': product.status === 'active' }
                      ) }
                    >
                      <div>
                        <div
                          className={ classNames('rounded-2xl justify-center', product.textColor) }
                        >
                          { createElement(product.icon, { size: 44 }) }
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center">
                          <h4 className="font-medium text-[1.06rem]">{ product.name }</h4>
                          {
                            product.status === 'coming-soon' && (
                              <div
                                className="px-2 py-1 ml-2 leading-none bg-slate-200 text-black rounded-full text-xs inline-flex"
                              >
                                Alpha
                              </div>
                            )
                          }
                        </div>
                        <p className="leading-tight mt-1">
                          { product.description }
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
