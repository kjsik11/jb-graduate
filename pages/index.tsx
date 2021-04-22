import React from 'react';
import NextImage from 'next/image';
import { Head } from '@components/core';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>대충만든조 졸업작품</title>
      </Head>
      <div className="flex items-center justify-center flex-col">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">2021 JBU SENIOR PROJECT</span>
            <span className="block text-indigo-600 pt-4">
              Window Artifacts Analysis
            </span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/project"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Let&apos;s analyze!
              </a>
            </div>
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

export default HomePage;
