import React, { createElement } from 'react';
import { IconArrowRight, IconFileInvoice, IconFileTypeDocx } from "@tabler/icons-react";
import Button from "@/components/global/Button";
import products from "@/lib/products";
import classNames from "classnames";
import Link from "next/link";

const OmniChannel = () => {
  return (
    <div className="container">
      <div className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
            The AI Omni channel for Africa's data insight.
          </h2>
          <p className="mt-6 text-base md:text-lg">
            We use AI models to simplify any data set <br className="hidden md:block"/>
            into chats, reports and
            infographics.
          </p>
          <Link href="https://app.statisense.co">
            <Button color="black" className="mt-12" rightIcon={ <IconArrowRight/> } size="lg">
              Get started
            </Button>
          </Link>
        </div>
        <div>
          <img className="block md:hidden pt-10 w-full" src="/images/2.png" alt="2"/>
          <div className="md:block hidden relative">
            <div className="absolute animate-bounce rounded-[1.2rem] bg-white shadow top-[18rem] left-[-7rem]">
              <div className="px-8 py-6">
                <div className="flex items-center mb-8"><h3 className="font-semibold text-base mr-4">
                  Recent analysis
                </h3>
                </div>
                <div className="space-y-6 text-md w-full">
                  <div className="flex items-center">
                    <div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-700">
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
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-700">
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
                    </a></div>
                  <hr/>
                  <a
                    className="w-full flex items-center justify-center px-8 font-medium text-md"
                    href="#"
                  >
                    View all <IconArrowRight size="16" className="ml-3"/>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="animate-bounce delay-four absolute left-[-3rem] top-[-3rem] bg-white shadow border rounded-[1.2rem] transition-all duration-300 flex items-start px-8 py-6 hover:scale-[1.01] hover:-translate-y-1 cursor-pointer custom-cursor-on-hover"
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
              className="absolute animate-bounce delay-six bg-white rounded-[1.2rem] shadow bottom-[7rem] right-[-5rem] grid gap-2 px-4 py-4 grid-cols-2 pointer-events-none"
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
  );
};

export default OmniChannel;
