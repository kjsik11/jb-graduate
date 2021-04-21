import React from 'react';

import { Head } from '@components/core';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>대충만든조 졸업작품</title>
      </Head>
      <div className="h-full">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">대충 만든조 홈페이지</span>
            <span className="block text-indigo-600 pt-4">
              당신의 파일을 분석해드립니다.
            </span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/project"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                파일 분석하러 가기
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="/team"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-100"
              >
                조원 보러가기
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
