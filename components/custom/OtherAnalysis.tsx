import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

// components
import Link from '@components/ui/Link';
import ChevronRight from '@components/icons/ChevronRight';

const AnalysisItems = [
  {
    name: 'Event Log',
    initials: 'EL',
    href: '/analysis/eventlog',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Prefetch',
    initials: 'P',
    href: '/analysis/prefetch',

    bgColor: 'bg-yellow-500',
  },
  {
    name: 'JumpList',
    initials: 'JL',
    href: '/analysis/jumplist',

    bgColor: 'bg-green-500',
  },
  {
    name: 'LNK',
    initials: 'L',
    href: '/analysis/lnk',

    bgColor: 'bg-indigo-600',
  },
];

const OtherAnalysis = () => {
  const router = useRouter();
  return (
    <div>
      <p className="w-full text-center text-3xl font-bold mt-10">
        다른 파일 분석하러가기
      </p>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {AnalysisItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={cn(
              'col-span-1 flex shadow-sm rounded-md h-14 hover:opacity-80',
              {
                hidden: item.href === router.asPath,
              },
            )}
          >
            <div
              className={cn(
                item.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
              )}
            >
              {item.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <p className="text-gray-900 font-medium hover:text-gray-600">
                  {item.name}
                </p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <div className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400">
                  <span className="sr-only">Open options</span>
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherAnalysis;
