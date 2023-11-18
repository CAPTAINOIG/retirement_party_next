import React, { createElement, useState } from 'react';
import IconButton from '@/components/global/IconButton';
import { IconCategory, IconChevronLeft, IconChevronRight, IconLayoutBoard } from '@tabler/icons-react';
import products from '@/lib/products';
import UploadCustomDocument from '@/components/core/shared/UploadCustomDocument';
import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const UploadDocument = ({ onBack }) => {
  const [view, setView] = useState('industry');

  return (
    <div className="h-full px-10 py-10 flex flex-col">
      {view === 'industry' && (
        <>
          <div className="max-w-xl flex items-center mb-10">
            <IconButton
              onClick={onBack}
              icon={<IconChevronLeft size="20" />}
              size="sm"
              variant="outlined"
              color="black"
              className="mr-3"
              rounded
            />
            <h5 className="font-medium text-lg">Analyze your documents</h5>
          </div>
          <div className="space-y-4">
            <div
              onClick={() => setView('industries')}
              tabIndex="0"
              className="border border-slate-300 rounded-3xl px-7 md:px-8 py-6 flex items-center justify-between hover:bg-slate-100 cursor-pointer"
            >
              <div>
                <div className="w-12 md:w-14">
                  <IconCategory className="text-red-600" size="36" />
                </div>
              </div>
              <div>
                <h6 className="font-medium">Select document category</h6>
                <p className="text-sm opacity-75 mt-1">
                  Select this option if your document is a bank statement, financial report, invoice or receipt
                </p>
              </div>
              <div>
                <IconChevronRight size="20" className="ml-3" />
              </div>
            </div>
            <div
              onClick={() => setView('custom')}
              tabIndex="0"
              className="border border-slate-300 rounded-3xl px-7 md:px-8 py-6 flex items-center justify-between hover:bg-slate-100 cursor-pointer"
            >
              <div>
                <div className="w-12 md:w-14">
                  <IconLayoutBoard className="text-cyan-600" size="36" />
                </div>
              </div>
              <div>
                <h6 className="font-medium">Custom document</h6>
                <p className="text-sm opacity-75 mt-1">
                  Select this option if your document is not of the types listed above
                </p>
              </div>
              <div>
                <IconChevronRight size="20" className="ml-3" />
              </div>
            </div>
          </div>
        </>
      )}
      {view === 'industries' && (
        <>
          <div className="max-w-xl flex items-center mb-8">
            <IconButton
              icon={<IconChevronLeft size="20" />}
              onClick={() => setView('industry')}
              size="sm"
              variant="outlined"
              color="black"
              className="mr-3"
              rounded
            />
            <h5 className="font-medium text-lg">Select industry</h5>
          </div>
          <div>
            <p className="mb-10 max-w-sm opacity-80">
              Select the category your document belongs to below to get started
            </p>
            <div className="grid grid-cols-3 gap-4">
              {products
                .filter((p) => p.type === 'document')
                .map((p) => (
                  <Link href={`${APP_URL}/${p.slug}`} key={p.slug}>
                    <div className="h-full border border-slate-300/70 rounded-3xl flex flex-col items-center justify-center text-center py-8 px-8 hover:bg-slate-100 cursor-pointer">
                      {createElement(p.icon, { size: 32, className: p.textColor })}
                      <p className="leading-snug mt-4">{p.name}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
      {view === 'custom' && <UploadCustomDocument onBack={() => setView('industry')} />}
    </div>
  );
};

export default UploadDocument;
