import React from 'react';
import Collapsible from "@/components/global/Collapsible";
import faqs from "@/lib/faqs";

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight sticky top-36 text-center lg:text-left">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {
              faqs.map(faq => (
                <div key={ faq.q } className="border border-slate-200 rounded-2xl">
                  <Collapsible
                    header={ (
                      <h5 className="md:text-lg font-medium">
                        { faq.q }
                      </h5>
                    ) }
                    content={ (
                      <div className="opacity-80 pb-6 px-6">
                        { faq.a }
                      </div>
                    ) }
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
