'use client';
import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/core/shared/PageHeader';
import { cn } from '@/lib/utils';
import TermsAndConditions from '@/components/core/terms/TermsAndConditions';
import PrivacyPolicy from '@/components/core/terms/PrivacyPolicy';
import { useSearchParams } from 'next/navigation';
import { Card } from '@heroui/react';

const tabs = [
  { key: 'terms', name: 'Terms and conditions' },
  { key: 'privacy', name: 'Privacy policy' },
];

const TermsPageContent = () => {
  const params = useSearchParams();
  const [activeTab, setActiveTab] = useState('terms');

  useEffect(() => {
    const t = params.get('t');
    if (t) {
      const tabExists = tabs.some((tab) => tab.key === t.toLowerCase());
      if (tabExists) setActiveTab(t.toLowerCase());
    }
  }, [params]);

  return (
    <>
      <PageHeader title="Privacy & Terms" append={<div className="h-4"></div>} />
      <div className="container pt-16 pb-24 md:pt-24 md:text-[1.1rem]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Card className="bg-default-100 sticky top-32 overflow-hidden" shadow="none">
              <div className="divide-default-100 flex flex-col divide-y" role="tablist">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    className={cn(
                      'relative cursor-pointer px-6 py-3 text-left transition-all duration-200 focus:outline-none md:px-8',
                      activeTab === tab.key
                        ? 'from-primary-50 to-primary-25 text-primary-700 bg-gradient-to-r font-semibold'
                        : 'hover:bg-default-200/40'
                    )}
                    onClick={() => setActiveTab(tab.key)}
                    tabIndex={0}
                    type="button"
                    aria-selected={activeTab === tab.key}
                    role="tab"
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </Card>
          </div>
          <div className="md:col-span-8">
            <div className="px-1">
              {activeTab === 'terms' && <TermsAndConditions />}
              {activeTab === 'privacy' && <PrivacyPolicy />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPageContent;
