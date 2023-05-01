import React, { useEffect, useState } from 'react';
import { IconSearch } from "@tabler/icons-react";
import classNames from "classnames";
import IconButton from "@/components/global/IconButton.jsx";
import { useRouter } from "next/router";

const HeroSearch = ({ className }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.q) setQuery(router.query.q);
  }, [router.isReady, router.query]);

  const handleSearch = async () => {
    if (query.length < 2) return;
    await router.push('/infographics', { query: { q: query } });
  };

  const handleChange = e => {
    if (!e.target.value.length && router.asPath.includes('infographic')) {
      router.push('/infographics');
    }
    setQuery(e.target.value);
  };

  return (
    <div className={ classNames('relative max-w-xl px-4 mx-auto sm:px-6', className) }>
      <div className="relative w-full max-w-xl mx-auto rounded-full h-16 lg:max-w-none text-white">
        <input
          value={ query } onChange={ handleChange }
          onKeyUp={ e => e.key.toLowerCase() === 'enter' && handleSearch() }
          type="text" name="query" id="query" placeholder="Find infographics.."
          className="rounded-full w-full h-16 py-0 pl-8 pr-16 outline-none bg-slate-200/10 shadow-md hover:outline-none focus:ring-primary-200 focus:border-primary-200"
        />
        <IconButton
          icon={ <IconSearch size="20"/> } rounded onClick={ handleSearch } disabled={ query.length < 2 }
          variant="subtle" type="submit" className="absolute inline-flex items-center right-3 top-3"
        />
      </div>
    </div>
  );
};

export default HeroSearch;
