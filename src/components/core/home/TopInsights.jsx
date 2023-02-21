import React from 'react';
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
];

const TopInsights = () => {
  return (
    <div>
      <div className="container max-w-8xl mx-auto">
        <div className="mx-auto max-w-4xl sm:text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
            Trending insights
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Browse through exclusive reporting that makes you smarter
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {
            data.map((insight, i) => (
              <InsightCard insight={ insight } key={ i }/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TopInsights;
