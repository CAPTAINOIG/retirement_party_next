import React from 'react';
import { IconSearch } from "@tabler/icons-react";
import Button from "@/components/global/Button.jsx";

const HeroSearch = () => {
  return (
    <div className="relative max-w-xl px-4 mx-auto mt-16 sm:px-6">
      <div className="relative w-full max-w-xl mx-auto bg-white rounded-full h-16 lg:max-w-none">
        <IconSearch className="absolute top-1/2 -translate-y-1/2 opacity-60 left-5"/>
        <input
          type="text" name="query" id="query" placeholder="Find statistics, forecasts and studies"
          className="rounded-full w-full h-16 bg-transparent py-0 pl-14 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-blue-200 focus:border-blue-200"
        />
        <Button type="submit" className="absolute inline-flex items-center right-3 top-3">
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSearch;
