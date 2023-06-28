"use client"
import React from 'react';
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import MbsCredentials from "@/components/core/dashboard/statement/settings/MbsCredentials";
import MonoCredentials from "@/components/core/dashboard/statement/settings/MonoCredentials";
import WidgetCustomization from "@/components/core/dashboard/statement/settings/WidgetCustomization";

const tabs = [
  { key: 'preferences', name: 'Preferences' },
  { key: 'keys', name: 'API Keys' },
];

const StatementSettings = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-10 px-2">
        Settings
      </h1>
      <div>
        <Tab.Group>
          <Tab.List className="inline-flex p-1.5 space-x-1 bg-blue-900/5 rounded-full">
            {
              tabs.map(tab => (
                <Tab
                  key={ tab.key }
                  className={ ({ selected }) =>
                    classNames(
                      'py-1.5 px-6 text-[.96rem] leading-5 font-medium rounded-full focus:outline-none transition-all duration-150',
                      selected ? 'bg-white text-primary-800 shadow' : 'text-slate-500 hover:bg-white/[0.12]'
                    )
                  }
                >
                  { tab.name }
                </Tab>
              ))
            }
          </Tab.List>
          <Tab.Panels className="mt-6 px-1">
            <Tab.Panel>
              <div className="grid grid-cols-2">
                <WidgetCustomization/>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-2 gap-8 items-start">
                <MbsCredentials/>
                <MonoCredentials/>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default StatementSettings;
