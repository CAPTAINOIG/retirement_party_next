import React, { useEffect, useState } from 'react';
import { IconSearch, IconX } from '@tabler/icons-react';
import classNames from 'classnames';
import IconButton from '@/components/global/IconButton.jsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const InfographicsSearchInput = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (params.get('q')) setQuery(params.get('q'));
  }, [params]);

  const handleSearch = async () => {
    if (query.length < 2) return;
    await router.push(`/insights/search?q=${query}`);
  };

  const handleChange = (e) => {
    if (!e.target.value.length && pathname.includes('infographic')) {
      router.push('/insights');
    }
    setQuery(e.target.value);
  };

  const handleReset = () => {
    setQuery('');
    router.push('/insights');
  };

  return (
    <div className={classNames('relative max-w-2xl px-4 mx-auto sm:px-6', className)}>
      <div className="relative w-full max-w-xl mx-auto rounded-full h-[56px] md:h-[66px] lg:max-w-none text-white">
        <input
          value={query}
          onChange={handleChange}
          onKeyUp={(e) => e.key.toLowerCase() === 'enter' && handleSearch()}
          type="text"
          name="query"
          id="query"
          placeholder="Find infographics.."
          className="rounded-full w-full h-[56px] md:h-[66px] py-0 pl-8 pr-16 outline-none hover:outline-none focus:border-primary-200 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm bg-slate-800 ring-0 text-slate-300 highlight-white/5 hover:bg-slate-700 transition-all duration-150"
        />
        <div className="absolute inline-flex items-center right-4 top-1/2 -translate-y-1/2 space-x-1">
          <IconButton
            icon={<IconSearch size="20" />}
            rounded
            onClick={handleSearch}
            disabled={query.length < 2}
            color="white"
            variant="text"
          />
          {!!params.get('q') && (
            <IconButton
              icon={<IconX size="20" />}
              rounded
              onClick={handleReset}
              disabled={query.length < 2}
              color="red"
              variant="text"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InfographicsSearchInput;
