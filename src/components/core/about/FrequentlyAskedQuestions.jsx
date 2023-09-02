import React from 'react';
import Collapsible from "@/components/global/Collapsible";
import faqs from "@/lib/faqs";
import Card from "@/components/global/Card";

const FAQ = () => {
  return (
    <div id="faq">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight sticky top-36 text-center lg:text-left">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {
              faqs.map(faq => (
                <Card key={ faq.q } className="subtle-shadow">
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
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
