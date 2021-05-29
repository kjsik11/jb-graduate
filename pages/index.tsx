import React from 'react';
import NextImage from 'next/image';

// components
import Common from '@components/layout/Common';
import Button from '@components/ui/Button';
import Link from '@components/ui/Link';

const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">2021 JBU SENIOR PROJECT</span>
            <span className="block text-lightBlue-400 pt-4">
              Window Artifacts Analysis
            </span>
          </h2>
          <div className="mt-8 flex justify-center">
            <Link href="/dashboard">
              <Button className="inline-flex rounded-md shadow">
                Let&apos;s analyze!
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p className="text-center text-xl font-semibold uppercase text-gray-600 tracking-wider">
              develop with
            </p>
            <div className="mt-6 grid grid-cols-2 max-w-5xl mx-auto md:grid-cols-3 lg:mt-8 space-y-4">
              <div className="col-span-1 flex justify-center">
                <NextImage
                  objectFit="contain"
                  src="/images/python.png"
                  width={200}
                  height={150}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <NextImage
                  objectFit="contain"
                  src="/images/js.png"
                  width={200}
                  height={150}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <NextImage
                  objectFit="contain"
                  src="/images/react.png"
                  width={200}
                  height={150}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <NextImage
                  objectFit="contain"
                  src="/images/vscode.png"
                  width={200}
                  height={150}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <NextImage
                  objectFit="contain"
                  src="/images/hxd.png"
                  width={200}
                  height={150}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <NextImage
                  objectFit="contain"
                  src="/images/nodejs.png"
                  width={200}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomePage.Layout = Common;
export default HomePage;
