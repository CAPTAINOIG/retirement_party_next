import React from 'react';
import Navbar from "@/components/global/Navbar.jsx";
import InsightCard from "@/components/core/shared/InsightCard.jsx";

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

const Infographics = () => {
  return (
    <>
      <Navbar/>
      <div
        className="pt-44 pb-32 md:pb-24 md:pt-48 text-center bg-gray-900 pattern-2"
        style={ { borderRadius: '0 0 1000px 1000px / 10%' } }
      >
        <div className="container">
          <h1 className="text-5xl text-slate-200">Browse our archives</h1>
        </div>
      </div>

      <div className="mt-24">
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

export default Infographics;
