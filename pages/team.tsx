import React from 'react';

// components
import Dashboard from '@components/layout/Dashboard';
import Link from '@components/ui/Link';
import SectionTitle from '@components/core/SectionTitle';

// icons
import Git from '@components/icons/Git';
import Insta from '@components/icons/Insta';
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
    insta: '',
    git: 'https://github.com/yeom0331',
  },
];

const DashboardPage = () => {
  return (
    <div className="pt-4 sm:pt-8 md:pt-12 pb-32 px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto ">
      <div className="pb-6 border-b border-gray-200">
        <SectionTitle title="Meet out team" picture="/icon/team.png" />
      </div>
      <div className="pt-8">
        <div className="max-w-md mx-auto space-y-20 grid gap-5 lg:space-y-0 lg:grid-cols-2 lg:max-w-screen-md xl:gap-16">
          {teamItems.map((person) => (
            <div key={person.name}>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="/source/profile.webp"
                    alt=""
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>{person.name}</h3>
                    <p className="text-lightBlue-400">{person.description}</p>
                  </div>
                  <div className="flex space-x-5">
                    <div>
                      <Link
                        href={person.git}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <Git className="w-5 h-5 text-gray-800" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href={person.insta}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <Insta className="w-5 h-5 text-gray-800" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

DashboardPage.Layout = Dashboard;
export default DashboardPage;
