import React, { createElement, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { IconGridDots } from "@tabler/icons-react";
import IconButton from "@/components/global/IconButton";
import products from "@/lib/products";
import classNames from "classnames";
import Link from "next/link";

const ServiceSwitcher = () => (
  <>
    <Popover className="relative">
      { ({ open }) => (
        <>
          <Popover.Button
            as={ IconButton } className={ `${ open ? '' : 'text-opacity-90' }` }
            variant="text" color="black" size="md" rounded icon={ <IconGridDots size="23"/> }
          >
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
            <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-xs px-4 sm:px-0 lg:max-w-[280px]">
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-2 bg-white p-4 lg:grid-cols-2">
                  {
                    products.map((product) => (
                      <Link
                        key={ product.name } href={ product.dashboardLink }
                        className="flex flex-col items-center rounded-xl text-center px-2 py-4 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div
                          className={ classNames('w-10 h-10 rounded-full flex items-center justify-center text-white', product.backgroundColor) }
                        >
                          { createElement(product.icon) }
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-900">
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

export default ServiceSwitcher;
