import Git from '@components/icons/Git';
import Insta from '@components/icons/Insta';
import React from 'react';

const teamItems = [
  {
    name: '김종식',
    description: '웹 개발',
    url: '/',
    insta: 'https://www.instagram.com/kjjjongsk',
    git: 'https://github.com/kjsik11',
  },
  {
    name: '지창환',
    description: 'Artifacts 분석 및 개발',
    url: '/',
    insta: 'https://www.instagram.com/hwan.j95',
    git: 'https://github.com/hwans95',
  },
  {
    name: '최예지',
    description: 'API 개발',
    url: '/',
    insta: 'https://www.instagram.com/kongji_s',
    git: 'https://github.com/choikongji',
  },
  {
    name: '염정현',
    description: 'Artifacts 분석 및 개발',
    url: '/',
    insta: null,
    git: 'https://github.com/yeom0331',
  },
];
const TeamPage: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-8">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Meet our team
            </h2>
          </div>

          <ul className="space-y-4 max-w-3xl mx-auto sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
            {teamItems.map((item, idx) => (
              <li
                key={`${item.name}-${idx}`}
                className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="/source/profile.webp"
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">{item.name}</h3>
                      <p className="text-indigo-400">{item.description}</p>
                    </div>

                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          target="blank"
                          href={item.git}
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">Git</span>
                          <Git className="w-5 h-5 hover:opacity-80" />
                        </a>
                      </li>
                      <li>
                        {item.insta && (
                          <a
                            target="blank"
                            href={item.insta}
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">insta</span>
                            <Insta className="w-5 h-5 hover:opacity-80" />
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
