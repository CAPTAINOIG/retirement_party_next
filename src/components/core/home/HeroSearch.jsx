import React from 'react';
import { IconSearch } from "@tabler/icons-react";

const HeroSearch = () => {
  return (
    <div className="relative max-w-2xl px-4 mx-auto mt-16 sm:px-6">
      <div className="relative w-full max-w-xl mx-auto bg-white rounded-full h-16 lg:max-w-none">
        <input
          type="text" name="query" id="query" placeholder="Find statistics, forecasts and studies"
          className="rounded-full w-full h-16 bg-transparent py-0 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-blue-200 focus:border-blue-200"
        />
        <button
          type="submit"
          className="absolute inline-flex items-center px-4 py-3 text-sm text-white transition duration-150 duration-300 ease-in-out rounded-full outline-none right-3 top-2 bg-blue-600 sm:px-6 sm:text-base sm:font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <IconSearch className="mr-2" size="18"/>
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSearch;
