'use client';
import React from 'react';
import PageHeader from '@/components/core/shared/PageHeader';
import ContactCategories from '@/components/core/contact/ContactCategories';
import ConnectWithUs from '@/components/core/contact/ConnectWithUs';
import SendMessageForm from '@/components/core/contact/SendMessageForm';

const ContactPageContent = () => {
  return (
    <>
      <div className="bg-slate-50 text-black">
        <PageHeader
          title="We'd love to hear from you"
          subtitle="Have any questions or feedback? We'd love to hear from you"
        >
          <div className="h-4" slot="append"></div>
        </PageHeader>
        <div className="space-y-36 py-20 md:py-28">
          <div className="container space-y-24">
            <ContactCategories />
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <ConnectWithUs />
              </div>
              <div>
                <SendMessageForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageContent;
