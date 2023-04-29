import React from 'react';
import Link from "next/link";
import Image from "@/components/core/shared/Image.jsx";
import { formatDistance } from 'date-fns'

const InfographicCard = ({ infographic }) => {
  return (
    <div className="w-full overflow-hidden">
      <Link href={ `/infographics/${ infographic.category._id }/${ infographic._id }` } className="flex w-full">
        <Image src={ infographic.image } alt={ infographic.title } className="rounded-xl h-60 w-full object-cover border"/>
      </Link>
      <div className="mt-4 overflow-hidden">
        <p className="opacity-70 mb-1 text-sm">{ formatDistance(new Date(), new Date(infographic.createdAt)) }</p>
        <Link href={ `/infographics/${ infographic.category._id }/${ infographic._id }` }>
          <h5 className="font-medium text-xl">{ infographic.title }</h5>
        </Link>
        <p className="mt-2 text-ellipsis whitespace-nowrap overflow-hidden">
          { infographic.description }
        </p>
      </div>
    </div>
  );
};

export default InfographicCard;
