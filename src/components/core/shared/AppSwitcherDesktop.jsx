import React, { createElement, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { IconChevronRight, IconGridDots, IconHome2 } from "@tabler/icons-react";
import products from "@/lib/products";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ServiceSwitcher = () => {
  const router = useRouter();

  return (
    <>
      <Popover className="relative">
        { ({ open }) => (
          <>
            <Popover.Button
              as="div"
              className={ classNames(
                'flex items-center rounded-3xl hover:bg-slate-100 cursor-pointer pl-6 pr-4 py-3',
                { 'bg-slate-100': open }
              ) }
            >
              <IconGridDots size="23"/>
              <p className="px-5 flex-1">Apps</p>
              <div>
                <IconChevronRight size="18"/>
              </div>
            </Popover.Button>
            <Transition
              as={ Fragment }
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute bottom-0 left-full z-10 mt-3 w-screen max-w-xs px-4 sm:px-0 lg:max-w-[280px]">
                <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black ring-opacity-5 bg-white">
                  <div
                    onClick={ () => router.push('/dashboard') } tabIndex="0"
                    className="border-b py-2 text-center flex items-center justify-center hover:bg-slate-100 cursor-pointer"
                  >
                    <IconHome2 size="18" className="mr-3"/>
                    <h4 className="font-semibold">Apps</h4>
                  </div>
                  <div className="relative grid gap-2 px-4 py-4 grid-cols-2">
                    {
                      products.slice(0, 6).map((product) => (
                        <Link
                          key={ product.name } href={ product.dashboardLink }
                          className="flex flex-col items-center rounded-2xl text-center px-2 py-4 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div
                            className={ classNames('w-10 h-10 rounded-full flex items-center justify-center text-white', product.backgroundColor) }
                          >
                            { createElement(product.icon) }
                          </div>
                          <div className="mt-2">
                            <p className="text-sm text-gray-900">
                              { product.name }
                            </p>
                          </div>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        ) }
      </Popover>
    </>
  );
};

export default ServiceSwitcher;
