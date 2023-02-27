import React from 'react';
import PageHeader from "@/components/core/shared/PageHeader.jsx";
import InsightCard from "@/components/core/shared/InsightCard.jsx";
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import { useRouter } from "next/router";

const data = [
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/400'
  },
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/401'
  },
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/402'
  },
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/400'
  },
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/401'
  },
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/402'
  },
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/400'
  },
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/401'
  },
  {
    title: 'Can India become a Lithium Superpower?',
    subtitle: 'If the world wants to achieve net-zero carbon emissions, what’s the most important thing we need?',
    image: 'https://picsum.photos/400/402'
  },
];

const Category = () => {
  const router = useRouter();

  return (
    <>
      <PageHeader
        title="Infographics for Oil and Gas"
        subtitle="200 insights"
        onBack={ () => router.push('/infographics') }
        backText="All categories"
      />

      <div className="mt-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {
              data.map((insight, i) => (
                <InsightCard insight={ insight } key={ i }/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

Category.Layout = DefaultLayout;

export default Category;
