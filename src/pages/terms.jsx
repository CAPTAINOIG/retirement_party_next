import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PageHeader from '@/components/core/shared/PageHeader';
import { Tab } from '@headlessui/react';
import Card from '@/components/global/Card';
import TermsAndConditions from '@/components/core/terms/TermsAndConditions';
import PrivacyPolicy from '@/components/core/terms/PrivacyPolicy';
import DefaultLayout from '@/components/core/DefaultLayout';
import Head from 'next/head';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';
import { cn } from '@/lib/utils';

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
      const i = tabs.findIndex((i) => i.key === t.toLowerCase());
      if (i !== -1) setIndex(i);
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>Privacy & Terms • Statisense</title>
        <DefaultHeadTags />
      </Head>
      <div className="bg-slate-50">
        <PageHeader title="Privacy & Terms" append={<div className="h-4"></div>} />
        <div className="container pb-24 pt-16 md:pt-24 md:text-[1.1rem]">
          <Tab.Group selectedIndex={index} onChange={setIndex}>
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <Card className="sticky top-32 overflow-hidden">
                  <Tab.List className="flex flex-col divide-y">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.key}
                        className={({ selected }) =>
                          cn(
                            'px-6 py-3 text-left transition-all duration-150 focus:outline-none md:px-8',
                            selected ? 'bg-slate-200/40 font-semibold' : 'text-gray-700 hover:bg-slate-100'
                          )
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </Card>
              </div>
              <div className="md:col-span-8">
                <Tab.Panels className="px-1">
                  <Tab.Panel>
                    <TermsAndConditions />
                  </Tab.Panel>
                  <Tab.Panel>
                    <PrivacyPolicy />
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
