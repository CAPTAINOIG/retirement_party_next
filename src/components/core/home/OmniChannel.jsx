import React, { createElement, useEffect, useRef } from 'react';
import { IconArrowRight, IconFileInvoice, IconFileTypeDocx } from '@tabler/icons-react';
import Button from '@/components/global/Button';
import products from '@/lib/products';
import Typed from 'typed.js';
import { cn } from '@/lib/utils';

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;

const OmniChannel = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['datasets', 'documents'],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      loop: true,
      smartBackspace: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="order-1 flex flex-col justify-center md:order-none">
            <h2 className="max-w-xl text-4xl font-medium leading-tight md:text-6xl md:leading-[1.1]">
              Simplify your <br /> <span ref={el}>datasets</span> <br /> into decisions
            </h2>
            <p className="mt-6 max-w-md text-base md:text-lg">
              Our models help generate industry grade reports from your data in seconds, regardless of format
            </p>
            <a href={ACCOUNT_URL}>
              <Button className="mt-12" rightIcon={<IconArrowRight />} size="lg">
                Get started
              </Button>
            </a>
          </div>
          <div>
            <div className="pointer-events-none relative !text-sm">
              <div className="absolute -bottom-20 -left-20 hidden animate-[updown_1s_ease-in-out_infinite_alternate] rounded-3xl bg-white shadow md:block">
                <div className="px-8 py-6">
                  <div className="mb-8 flex items-center">
                    <h3 className="mr-4 font-semibold">Recent analysis</h3>
                  </div>
                  <div className="w-64">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-700">
                            <IconFileInvoice size="20" />
                          </div>
                        </div>
                        <div className="overflow-hidden px-4">
                          <p className="font-medium">John Doe</p>
                          <p className="overflow-hidden text-ellipsis whitespace-nowrap opacity-80">Opay</p>
                        </div>
                        <a className="ml-auto" href="#">
                          <button
                            type="button"
                            className="inline-flex items-center whitespace-nowrap rounded-full border border-gray-300 px-4 py-1 text-gray-800 transition duration-100 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          >
                            <span className="flex-1">View</span>
                          </button>
                        </a>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-700">
                            <IconFileInvoice size="20" />
                          </div>
                        </div>
                        <div className="overflow-hidden px-4">
                          <p className="font-medium">Jane Doe</p>
                          <p className="overflow-hidden text-ellipsis whitespace-nowrap opacity-80">Kuda Bank</p>
                        </div>
                        <a className="ml-auto" href="#">
                          <button
                            type="button"
                            className="inline-flex items-center whitespace-nowrap rounded-full border border-gray-300 px-4 py-1 text-gray-800 transition duration-100 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          >
                            <span className="flex-1">View</span>
                          </button>
                        </a>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="flex w-full items-center justify-center px-8 font-medium">
                      View all <IconArrowRight size="16" className="ml-3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-16 -top-8 hidden animate-[updown_2s_ease-in-out_infinite_alternate] items-start rounded-3xl border bg-white px-8 py-6 shadow md:flex">
                <div className="mt-1">
                  <IconFileTypeDocx className="text-teal-600" />
                </div>
                <div className="ml-3">
                  <p>Q1 2023 progress report for our company</p>
                  <p className="mt-1 opacity-80">1st Jan, 2023</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-8 top-16 hidden w-[270px] animate-[updown_3s_ease-in-out_infinite_alternate] grid-cols-2 gap-2 rounded-3xl bg-white px-4 py-4 shadow md:grid">
                {products
                  .filter((p) => p.categories.includes('featured'))
                  .slice(0, 4)
                  .map((p) => (
                    <div
                      key={p.slug}
                      className="flex flex-col items-center rounded-2xl px-2 py-4 text-center transition duration-150 ease-in-out"
                    >
                      <div
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded-full text-white',
                          p.backgroundColor
                        )}
                      >
                        {createElement(p.icon, { size: 20 })}
                      </div>
                      <p className="mt-2 text-gray-900">{p.name}</p>
                    </div>
                  ))}
              </div>
              <img className="w-full" src="/images/4.png" alt="4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmniChannel;
