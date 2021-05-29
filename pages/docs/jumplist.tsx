import React from 'react';

// components
import Dashboard from '@components/layout/Dashboard';
import Button from '@components/ui/Button';
import Link from '@components/ui/Link';

const JumpListDocsPage = () => {
  return (
    <>
      <div className="h-full">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-lightBlue-400 pt-4">
              준비중인 페이지입니다
            </span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link href="/">
                <Button>홈으로가기</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

JumpListDocsPage.Layout = Dashboard;
export default JumpListDocsPage;
