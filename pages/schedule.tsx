import React from 'react';

const SchedulePage: React.FC = () => {
  return (
    <>
      <div className="h-full">
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
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600"
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
