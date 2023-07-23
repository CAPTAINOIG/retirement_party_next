"use client"
import React, { createElement } from 'react';
import requireAuth from "@/guards/require-auth";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import Card from "@/components/global/Card";
import products, { categories } from "@/lib/products";

const featured = 'custom-report';

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#11161b] text-white pt-12 md:pt-16 pb-12 md:pb-14">
        <div className="container !max-w-5xl">
          <h1
            className="text-[2rem] md:text-4xl leading-[1.3] font-semibold max-w-[300px] md:max-w-lg flex items-center"
          >
            All the tools you need to run your business
          </h1>
          <p className="mt-3 md:mt-4 opacity-75">
            Select a product below to continue
          </p>
        </div>
      </div>
      <div className="container py-12 md:py-16 !max-w-5xl min-h-screen flex flex-col space-y-10">
        <div>
          <h3 className="text-xl font-medium mb-8 px-1">Featured</h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {
              products.filter(p => p.slug === featured).map(product => (
                <FeaturedProductCard
                  product={ product }
                  key={ product.name }
                  onClick={ () => router.push(product.dashboardLink) }
                />
              ))
            }
            <div className="grid gap-4 md:gap-6">
              {
                products.filter(p => p.categories.includes('featured') && (p.slug !== featured)).map(product => (
                  <ProductCard
                    product={ product }
                    key={ product.name }
                    onClick={ () => router.push(product.dashboardLink) }
                  />
                ))
              }
            </div>
          </div>
        </div>
        {
          categories.filter(c => c.id !== 'featured').map(c => (
            <div key={ c.id }>
              <h3 className="text-xl font-medium mb-8 px-1">{ c.name }</h3>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {
                  products.filter(p => p.categories.includes(c.id)).map(product => (
                    <ProductCard
                      product={ product }
                      key={ product.name }
                      onClick={ () => router.push(product.dashboardLink) }
                    />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default requireAuth(DashboardPage);

const ProductCard = ({ product, onClick }) => {
  return (
    <Card
      onClick={ onClick }
      className={ classNames(
        'rounded-2xl px-10 py-8 transition-all h-full relative overflow-hidden',
        { 'disabled': product.status === 'coming-soon' },
        { 'hover:-translate-y-1 hover:shadow-md cursor-pointer': product.status === 'active' }
      ) }
    >
      <div>
        <div
          className={ classNames('rounded-2xl justify-center', product.textColor) }
        >
          { createElement(product.icon, { size: 44 }) }
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <h4 className="font-medium text-[1.06rem]">{ product.name }</h4>
          {
            product.status === 'coming-soon' && (
              <div
                className="absolute top-0 right-0 px-3 py-1 ml-2 leading-none bg-slate-100 text-slate-500 rounded-bl-lg text-xs inline-flex"
              >
                Coming soon
              </div>
            )
          }
        </div>
        <p className="leading-tight opacity-80 mt-1">
          { product.description }
        </p>
      </div>
    </Card>
  );
};


const FeaturedProductCard = ({ product, onClick }) => {
  return (
    <Card
      onClick={ onClick }
      className={ classNames(
        'rounded-2xl px-10 py-8 transition-all h-full border-0 !shadow-none text-white hover:-translate-y-1 cursor-pointer flex flex-col justify-center',
        product.backgroundColor,
      ) }
    >
      <div>
        <div className="rounded-2xl justify-center text-white">
          { createElement(product.icon, { size: 100 }) }
        </div>
      </div>
      <div className="mt-12">
        <div className="flex items-center">
          <h4 className="font-medium text-2xl">{ product.name }</h4>
        </div>
        <p className="text-[1.1rem] leading-snug mt-2 opacity-80 max-w-[200px]">
          { product.description }
        </p>
      </div>
    </Card>
  );
};
