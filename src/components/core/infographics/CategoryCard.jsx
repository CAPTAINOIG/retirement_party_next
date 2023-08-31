import React from 'react';
import Link from "next/link";
import Image from "@/components/core/shared/Image.jsx";

const CategoryCard = ({ category }) => {
  return (
    <Link href={ `/infographics/${ category.slug }` }>
      <div
        className="text-white rounded-3xl overflow-hidden hover:brightness-125 transition-all cursor-pointer relative isolate"
      >
        <Image
          src={ category.image } alt={ category.name }
          className="absolute inset-0 z-[-1] object-cover w-full h-full"
        />
        <div className="relative bg-black bg-opacity-50 px-8 md:px-12 py-8 md:py-12">
          <h3 className="text-[1.6rem] font-medium leading-tight text-ellipsis overflow-hidden whitespace-nowrap">
            { category.name }
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
