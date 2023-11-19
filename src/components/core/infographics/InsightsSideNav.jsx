import React from 'react';
import Link from 'next/link';
import { IconBookmark, IconSearch, IconTrendingUp2 } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const InsightsSideNav = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-1">
      <Link
        href="/insights"
        className={cn('py-3 px-8 rounded-3xl w-full hover:bg-slate-200 flex items-center', {
          'font-semibold bg-slate-200': pathname && pathname === '/insights',
        })}
      >
        <IconTrendingUp2 size="20" className="mr-3" /> Trending insights
      </Link>
      <Link
        href="/insights/search"
        className={cn('py-3 px-8 rounded-3xl w-full hover:bg-slate-200 flex items-center', {
          'font-semibold bg-slate-200': pathname && pathname.includes('search'),
        })}
      >
        <IconSearch size="20" className="mr-3" /> Search insights
      </Link>
      <Link
        href="/insights/saved"
        className={cn('py-3 px-8 rounded-3xl w-full hover:bg-slate-200 flex items-center', {
          'font-semibold bg-slate-200': pathname && pathname.includes('categories'),
        })}
      >
        <IconBookmark size="20" className="mr-3" /> Bookmarked insights
      </Link>
    </div>
  );
};

export default InsightsSideNav;
