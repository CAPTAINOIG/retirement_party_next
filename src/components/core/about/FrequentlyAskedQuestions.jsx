import React from 'react';
import Collapsible from '@/components/global/Collapsible';
import faqs from '@/lib/faqs';
import Card from '@/components/global/Card';

const FAQ = () => {
  return (
    <div id="faq">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="sticky top-36 text-center text-4xl font-medium tracking-tight md:text-5xl lg:text-left">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {faqs.map((faq) => (
              <Card key={faq.q} className="subtle-shadow">
                <Collapsible
                  header={<h5 className="font-medium">{faq.q}</h5>}
                  content={<div className="px-6 pb-6 opacity-80">{faq.a}</div>}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
