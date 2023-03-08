import React from 'react';
import Link from "next/link";
import Image from "@/components/core/shared/Image.jsx";

const CategoryCard = ({ category }) => {
  return (
    <Link href={ `/infographics/${ category.id }` }>
      <div
        className="text-white rounded-xl overflow-hidden hover:brightness-125 transition-all cursor-pointer relative isolate"
      >
        <Image src={ category.image } alt={ category.name } className="absolute inset-0 z-[-1] bg-cover w-full"/>
        <div className="relative bg-black bg-opacity-50 px-12 py-14">
          <h3 className="text-[1.6rem] font-medium leading-tight">{ category.name }</h3>
          <p className="text-[1.1rem] opacity-70">
            1000+ insights
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
