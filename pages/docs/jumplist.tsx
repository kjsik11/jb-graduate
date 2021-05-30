import React from 'react';

// components
import Dashboard from '@components/layout/Dashboard';
import BreadCrumb from '@components/ui/BreadCrumb';

const BreadPages = [
  {
    name: 'docs',
    href: '/docs',
    current: false,
  },
  {
    name: 'jumplist',
    href: '/docs/jumplist',
    current: true,
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

const OtherItems = [
  {
    title: 'Event Log',
    href: '/docs/eventlog',
  },
  {
    title: 'Prefetch',
    href: '/docs/prefetch',
  },
  {
    title: 'LNK',
    href: '/docs/lnk',
  },
];

const JumpListDocsPage = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-gray-100 fixed top-0 left-[112px] h-screen p-2">
        <p className="text-xl ml-2 my-4">JumpList Document</p>
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
        <p className="text-xl ml-2 mt-8 mb-4">Other Documents</p>
        {OtherItems.map((otherItem, idx) => (
          <div
            key={`${otherItem.title}-${idx}`}
            className="ml-4 my-4 text-gray-500 hover:text-black"
          >
            <a href={otherItem.href}>
              <span className="text-2xl p-2">&middot;</span> {otherItem.title}
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

JumpListDocsPage.Layout = Dashboard;
export default JumpListDocsPage;
