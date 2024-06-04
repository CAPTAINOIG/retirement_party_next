'use client';
import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/core/shared/PageHeader';
import { Tab } from '@headlessui/react';
import Card from '@/components/global/Card';
import { cn } from '@/lib/utils';
import TermsAndConditions from '@/components/core/terms/TermsAndConditions';
import PrivacyPolicy from '@/components/core/terms/PrivacyPolicy';
import { useSearchParams } from 'next/navigation';

const tabs = [
  { key: 'terms', name: 'Terms and conditions' },
  { key: 'privacy', name: 'Privacy policy' },
];

const TermsPageContent = () => {
  const params = useSearchParams();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = params.get('t');
    if (t) {
      const i = tabs.findIndex((i) => i.key === t.toLowerCase());
      if (i !== -1) setIndex(i);
    }
  }, [params]);

  return (
    <>
      <div className="bg-slate-50 text-black">
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

export default TermsPageContent;
