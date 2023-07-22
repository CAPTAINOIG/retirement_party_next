import React, { useEffect, useState } from 'react';
import { IconSearch } from "@tabler/icons-react";
import classNames from "classnames";
import IconButton from "@/components/global/IconButton.jsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const InfographicsSearchInput = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams()
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (params.get('q')) setQuery(params.get('q'))
  }, [params]);

  const handleSearch = async () => {
    if (query.length < 2) return;
    await router.push(`/infographics?q=${ query }`);
  };

  const handleChange = e => {
    if (!e.target.value.length && pathname.includes('infographic')) {
      router.push('/infographics');
    }
    setQuery(e.target.value);
  };

  return (
    <div className={ classNames('relative max-w-2xl px-4 mx-auto sm:px-6', className) }>
      <div className="relative w-full max-w-xl mx-auto rounded-full h-[56px] md:h-[66px] lg:max-w-none text-white">
        <input
          value={ query } onChange={ handleChange }
          onKeyUp={ e => e.key.toLowerCase() === 'enter' && handleSearch() }
          type="text" name="query" id="query" placeholder="Find infographics.."
          className="rounded-full w-full h-[56px] md:h-[66px] py-0 pl-8 pr-16 outline-none bg-slate-200/10 shadow-md hover:outline-none focus:ring-primary-200 focus:border-primary-200"
        />
        <IconButton
          icon={ <IconSearch size="20"/> } rounded onClick={ handleSearch } disabled={ query.length < 2 }
          color="white" type="submit" className="absolute inline-flex items-center right-4 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default InfographicsSearchInput;
