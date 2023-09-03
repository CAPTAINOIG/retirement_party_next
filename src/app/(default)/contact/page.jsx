"use client"
import React from 'react';
import PageHeader from "@/components/core/shared/PageHeader";
import Card from "@/components/global/Card";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconSend
} from "@tabler/icons-react";
import Input from "@/components/global/Input";
import Button from "@/components/global/Button";
import TextArea from "@/components/global/TextArea";
import Select from "@/components/global/Select";
import Link from "next/link";

const categories = [
  { text: 'Support', value: 'support' },
  { text: 'Feedback', value: 'feedback' },
  { text: 'Request', value: 'request' },
];

const ContactUs = () => {
  return (
    <div className="bg-slate-50">
      <PageHeader
        title="Get in touch with us"
        subtitle="Have any questions or feedback? We'd love to hear from you"
        append={ <div className="h-4"></div> }
      />
      <div className="py-28">
        <div className="container !max-w-xl">
          <div className="space-y-16">
            <div>
              <h5 className="text-xl font-medium mb-8 text-center">Connect with us</h5>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                <Link
                  href="mailto:info@statisense.com.ng" target="_blank"
                  className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-7 px-6"
                >
                  <div><IconMail size="32"/></div>
                </Link>
                <Link
                  href="https://facebook.com/statisense" target="_blank"
                  className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-7 px-6"
                >
                  <div><IconBrandFacebook size="32"/></div>
                </Link>
                <Link
                  href="https://twitter.com/statisense" target="_blank"
                  className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-7 px-6"
                >
                  <div><IconBrandX size="32"/></div>
                </Link>
                <Link
                  href="https://www.instagram.com/statisense/" target="_blank"
                  className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-7 px-6"
                >
                  <div><IconBrandInstagram size="32"/></div>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/statisense/" target="_blank"
                  className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-7 px-6"
                >
                  <div><IconBrandLinkedin size="32"/></div>
                </Link>
              </div>
            </div>
            <Card className="px-8 py-10 md:p-10 subtle-shadow text-center">
              <h5 className="text-xl font-medium mb-10">
                Send us a message
              </h5>
              <div className="space-y-6">
                <Input label="Full name" bordered/>
                <Input label="Email address" bordered/>
                <Input label="Phone number (Optional)" bordered/>
                <Select label="Category" placeholder="Select a category" options={ categories } bordered/>
                <TextArea label="Your message" bordered/>
              </div>
              <Button rightIcon={ <IconSend size="20"/> } className="mt-10">Send</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
