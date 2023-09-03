"use client"
import React from 'react';
import PageHeader from "@/components/core/shared/PageHeader";
import Card from "@/components/global/Card";
import Button from "@/components/global/Button";
import Link from "next/link";

const positions = [
  {
    title: `AI Data Analyst`,
    description: `Are you passionate about data analysis and AI? Join our team of experts to analyze data from multiple sectors, providing valuable insights to our clients.`
  },
  {
    title: `Sales and Marketing Specialist`,
    description: `If you have a knack for promoting innovative solutions and building client relationships across various sectors, we want you to help us expand our reach and impact.`
  },
  {
    title: `Software Engineer`,
    description: `Join our development team to build and maintain cutting-edge AI tools that empower businesses with insights, no matter their industry.`
  },
];

const Careers = () => {
  return (
    <div className="bg-slate-50">
      <PageHeader
        title="Careers at Statisense"
      />
      <div className="py-20 md:py-28 space-y-36">
        <div className="container">
          <div className="grid md:grid-cols-11 gap-16 items-center">
            <div className="col-span-5 order-1 md:order-none text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-semibold">
                Join our Team
              </h2>
              <p className="max-w-md mt-4 md:mt-6 md:text-lg">
                Are you ready to be a part of a groundbreaking AI data company that's reshaping the landscape of data
                analysis across diverse industries? At Statisense, we're on a mission to revolutionize how businesses
                navigate and harness the power of data. We're looking for talented individuals who share our passion for
                innovation, accuracy, and delivering unparalleled insights to join our team.
              </p>
            </div>
            <div className="col-span-6 grid grid-cols-2 gap-4 md:gap-8">
              <img
                src="https://picsum.photos/400/400"
                alt="Office" className="w-full h-[120px] md:h-[200px] object-cover rounded-3xl"
              />
              <img
                src="https://picsum.photos/400/401"
                alt="Office" className="w-full h-[120px] md:h-[200px] object-cover rounded-3xl"
              />
              <img
                src="https://picsum.photos/400/402"
                alt="Office" className="w-full h-[120px] md:h-[200px] object-cover rounded-3xl"
              />
              <img
                src="https://picsum.photos/400/403"
                alt="Office" className="w-full h-[120px] md:h-[200px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="container">
        </div>
        <section aria-label="Our services" className="container">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 relative">
              <div className="sticky top-36 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  Open positions
                </h2>
                <p className="mt-4">
                  Do you crave a challenge and love to innovate? Then we have a role for you.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {
                positions.map(p => (
                  <Card key={ p.title } className="px-10 py-7 flex flex-col md:flex-row md:items-center subtle-shadow">
                    <div className="flex-1">
                      <h4 className="font-medium text-lg">{ p.title }</h4>
                      <p className="mt-2 opacity-80">{ p.description }</p>
                    </div>
                    <Link
                      href={ `mailto:jobs@statisense.com.ng?subject=Application for ${ p.title }` }
                      target="_blank" className="mt-4 md:mt-0 md:ml-4"
                    >
                      <Button variant="subtle">Apply</Button>
                    </Link>
                  </Card>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
