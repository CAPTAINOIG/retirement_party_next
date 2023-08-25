import React, { createElement } from 'react';
import { IconArrowRight, IconFileInvoice, IconFileTypeDocx } from "@tabler/icons-react";
import Button from "@/components/global/Button";
import products from "@/lib/products";
import classNames from "classnames";
import Link from "next/link";

const OmniChannel = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center order-1 md:order-none">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1] max-w-xl">
              The AI Omni <br className="hidden md:block"/>channel for Africa's data insight.
            </h2>
            <p className="mt-6 text-base md:text-lg">
              We use AI models to simplify any data set <br className="hidden md:block"/>
              into chats, reports and infographics.
            </p>
            <Link href="https://app.statisense.co">
              <Button color="black" className="mt-12" rightIcon={ <IconArrowRight/> } size="lg">
                Get started
              </Button>
            </Link>
          </div>
          <div>
            <div className="relative">
              <div
                className="hidden md:block absolute animate-bounce rounded-[1.2rem] bg-white shadow -bottom-20 -left-20"
              >
                <div className="px-8 py-6">
                  <div className="flex items-center mb-8"><h3 className="font-semibold text-base mr-4">
                    Recent analysis
                  </h3>
                  </div>
                  <div className="text-md w-64">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div>
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-700">
                            <IconFileInvoice size="20"/>
                          </div>
                        </div>
                        <div className="px-4 overflow-hidden"><p className="font-medium">John Doe</p><p
                          className="text-[.92rem] overflow-hidden text-ellipsis whitespace-nowrap opacity-80">Opay</p>
                        </div>
                        <a className="ml-auto" href="#">
                          <button
                            type="button"
                            className="px-4 py-1 text-[.94rem] border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full transition duration-100 inline-flex items-center whitespace-nowrap"
                          >
                            <span className="flex-1">View</span>
                          </button>
                        </a></div>
                      <div className="flex items-center">
                        <div>
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-700">
                            <IconFileInvoice size="20"/>
                          </div>
                        </div>
                        <div className="px-4 overflow-hidden">
                          <p className="font-medium">Jane Doe</p>
                          <p className="text-[.92rem] overflow-hidden text-ellipsis whitespace-nowrap opacity-80">
                            Kuda Bank
                          </p>
                        </div>
                        <a className="ml-auto" href="#">
                          <button
                            type="button"
                            className="px-4 py-1 text-[.94rem] border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full transition duration-100 inline-flex items-center whitespace-nowrap"
                          >
                            <span className="flex-1">View</span>
                          </button>
                        </a>
                      </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="w-full flex items-center justify-center px-8 font-medium text-md">
                      View all <IconArrowRight size="16" className="ml-3"/>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden md:flex items-start px-8 py-6 animate-bounce delay-four absolute -left-16 -top-8 bg-white shadow border rounded-[1.2rem] transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 cursor-pointer custom-cursor-on-hover"
              >
                <div className="mt-1">
                  <IconFileTypeDocx className="text-blue-600"/>
                </div>
                <div className="ml-3">
                  <p>Q1 2023 progress report for our company</p>
                  <p className="opacity-80 text-sm mt-1">1st Jan, 2023</p>
                </div>
              </div>
              <div
                className="hidden md:grid gap-2 px-4 py-4 grid-cols-2 absolute top-16 -right-8 animate-bounce delay-six bg-white rounded-[1.2rem] shadow pointer-events-none"
              >
                {
                  products.slice(0, 4).map(p => (
                    <div
                      key={ p.slug }
                      className="flex flex-col items-center rounded-2xl text-center px-2 py-4 transition duration-150 ease-in-out"
                    >
                      <div
                        className={ classNames("w-10 h-10 rounded-full flex items-center justify-center text-white", p.backgroundColor) }
                      >
                        { createElement(p.icon, { size: 20 }) }
                      </div>
                      <p className="text-sm mt-2 text-gray-900">{ p.name }</p>
                    </div>
                  ))
                }
              </div>
              <img className="w-full" src="/images/4.png" alt="4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmniChannel;
