import React from 'react';
import { IconArrowRight } from "@tabler/icons-react";

const CategoryCard = ({ category }) => {
  return (
    <div
      className={ `h-[400px] text-white p-10 rounded-xl hover:brightness-125 transition-all cursor-pointer` }
      style={ { background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ category.image })` } }
    >
      <h3 className="text-3xl font-medium">{ category.name }</h3>
      <p className="mt-1 text-lg opacity-80">
        200+ insights
      </p>
      <button className="flex items-center mt-8 py-1 px-6 rounded-full border">
        Browse <IconArrowRight className="ml-3" size="18"/>
      </button>
    </div>
  );
};

export default CategoryCard;
