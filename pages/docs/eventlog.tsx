import React from 'react';
import cn from 'classnames';

// components
import Dashboard from '@components/layout/Dashboard';
import BreadCrumb from '@components/ui/BreadCrumb';
import { ChevronRightIcon } from '@heroicons/react/solid';

const BreadPages = [
  {
    name: 'docs',
    href: '/docs',
    current: false,
  },
  {
    name: 'eventlog',
    href: '/docs/eventlog',
    current: false,
  },
];

const SideBarItems = [
  {
    title: 'test1',
    key: 'test1',
  },
  {
    title: 'test2',
    key: 'test2',
  },
  {
    title: 'test3',
    key: 'test3',
  },
  {
    title: 'test4',
    key: 'test4',
  },
];

const EventLogDocsPage = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-gray-100 fixed top-0 left-[112px] h-screen p-2">
        <p className="text-xl ml-2 mb-4">Event Log</p>
        {SideBarItems.map((sideBarItem, idx) => (
          <div
            key={`${sideBarItem.key}-${idx}`}
            className="ml-4 my-4 text-gray-500 hover:text-black"
          >
            <a href={`#${sideBarItem.key}`}>
              <span className="text-2xl p-2">&middot;</span> {sideBarItem.title}
            </a>
          </div>
        ))}
      </div>
      <div className="w-full pl-[268px] m-8">
        <BreadCrumb pages={BreadPages} />
        <div className="max-w-5xl mx-auto overflow-y-scroll mt-8">
          <div id="test2" className="h-screen">
            hi2
          </div>
          <div id="test3" className="h-screen">
            hi3
          </div>
          <div id="test4" className="h-screen">
            hi4
          </div>
        </div>
      </div>
    </div>
  );
};

EventLogDocsPage.Layout = Dashboard;
export default EventLogDocsPage;
