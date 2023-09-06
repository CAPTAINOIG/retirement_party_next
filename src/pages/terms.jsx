import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageHeader from "@/components/core/shared/PageHeader";
import { Tab } from "@headlessui/react";
import Card from "@/components/global/Card";
import classNames from "classnames";
import TermsAndConditions from "@/components/core/terms/TermsAndConditions";
import PrivacyPolicy from "@/components/core/terms/PrivacyPolicy";
import DefaultLayout from "@/components/core/DefaultLayout";
import Head from "next/head";

const tabs = [
  { key: 'terms', name: 'Terms and conditions' },
  { key: 'privacy', name: 'Privacy policy' },
];

const TermsAndPrivacy = () => {
  const [index, setIndex] = useState(0);
  const { query } = useRouter();

  useEffect(() => {
    const t = query.t;
    if (t) {
      const i = tabs.findIndex(i => i.key === t.toLowerCase())
      if (i !== -1) setIndex(i)
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>Privacy & Terms • Statisense</title>
      </Head>
      <div className="bg-slate-50">
        <PageHeader
          title="Privacy & Terms"
          append={ <div className="h-4"></div> }
        />
        <div className="container pt-16 pb-24 md:pt-24 md:text-[1.1rem]">
          <Tab.Group selectedIndex={ index } onChange={ setIndex }>
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <Card className="overflow-hidden sticky top-32">
                  <Tab.List className="flex flex-col divide-y">
                    {
                      tabs.map(tab => (
                        <Tab
                          key={ tab.key }
                          className={ ({ selected }) =>
                            classNames(
                              'py-3 px-6 md:px-8 text-left focus:outline-none transition-all duration-150',
                              selected ? 'bg-slate-200/40 font-semibold' : 'hover:bg-slate-100 text-gray-700'
                            )
                          }
                        >
                          { tab.name }
                        </Tab>
                      ))
                    }
                  </Tab.List>
                </Card>
              </div>
              <div className="md:col-span-8">
                <Tab.Panels className="px-1">
                  <Tab.Panel>
                    <TermsAndConditions/>
                  </Tab.Panel>
                  <Tab.Panel>
                    <PrivacyPolicy/>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

TermsAndPrivacy.Layout = DefaultLayout;

export default TermsAndPrivacy;
