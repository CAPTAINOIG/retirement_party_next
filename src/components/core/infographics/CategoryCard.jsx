import React from 'react';
import Link from 'next/link';
import Image from '@/components/core/shared/Image.jsx';
import { clsx } from 'clsx';

const CategoryCard = ({ category, sm = false }) => {
  return (
    <Link href={`/insights/${category.slug}`}>
      <div
        className={clsx(
          'text-white rounded-3xl overflow-hidden hover:brightness-125 transition-all cursor-pointer relative isolate',
          { 'rounded-2xl': sm }
        )}
      >
        <Image
          src={category.image}
          alt={category.name}
          className="absolute inset-0 z-[-1] object-cover w-full h-full"
        />
        <div className={clsx('relative bg-black bg-opacity-50 px-8 md:px-12 py-8 md:py-12', { 'md:py-9': sm })}>
          <h3
            className={clsx('text-[1.6rem] font-medium leading-tight text-ellipsis overflow-hidden whitespace-nowrap', {
              'text-[1.5rem]': sm,
            })}
          >
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
