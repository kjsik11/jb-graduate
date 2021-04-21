import React from 'react';

import { Head } from '@components/core';

const SchedulePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>대충만든조 졸업작품</title>
      </Head>
      <div className="bg-white h-full">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-indigo-600 pt-4">
              준비중인 페이지입니다
            </span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                홈으로가기
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulePage;
