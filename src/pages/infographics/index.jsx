import React from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import CategoryCard from "@/components/core/shared/CategoryCard.jsx";
import categories from "@/lib/categories.js";
import PageHeader from "@/components/core/shared/PageHeader.jsx";

const Infographics = () => {
  return (
    <>
      <PageHeader
        title="Browse our archives"
        subtitle="Select a category below to continue"
      />

      <div className="mt-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {
              categories.map((category) => (
                <CategoryCard category={ category } key={ category.name }/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

Infographics.Layout = DefaultLayout;

export default Infographics;
