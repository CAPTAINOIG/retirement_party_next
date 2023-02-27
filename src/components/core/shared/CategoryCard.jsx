import React from 'react';
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <Link href="/infographics/1">
      <div
        className={ `text-white px-12 py-10 rounded-xl hover:brightness-125 transition-all cursor-pointer` }
        style={ { background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ category.image })` } }
      >

        <h3 className="text-[1.6rem] font-medium leading-tight">{ category.name }</h3>
        <p className="text-[1.1rem] opacity-70">
          200+ insights
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
