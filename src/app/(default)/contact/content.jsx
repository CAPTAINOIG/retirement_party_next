'use client';
import React from 'react';
import ContactCategories from '@/components/core/contact/ContactCategories';
import ConnectWithUs from '@/components/core/contact/ConnectWithUs';
import SendMessageForm from '@/components/core/contact/SendMessageForm';
import AdSection from '@/components/core/home/AdSection';
import PageHeader from '@/components/core/shared/PageHeader';
import ScrollReveal from '@/components/global/ScrollReveal';

const ContactPageContent = () => {
  return (
    <>
      <PageHeader title="Contact us" subtitle="Have any questions or feedback? We'd love to hear from you" />
      <div className="relative w-full">
        <div className="pt-16 pb-24 md:pt-28 md:pb-32">
          <div className="container space-y-28 md:space-y-40">
            <ScrollReveal direction="up" delay={0.1}>
              <ContactCategories />
            </ScrollReveal>
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
        <ScrollReveal direction="up" delay={0.3}>
          <AdSection />
        </ScrollReveal>
      </div>
    </>
  );
};

export default ContactPageContent;
