import React from 'react';
import cn from 'classnames';
import { Switch } from '@headlessui/react';

// components
import Dashboard from '@components/layout/Dashboard';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';

const ContactPage = () => {
  const [agreed, setAgreed] = React.useState(false);

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Feedback
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Window Artifacts Analysis 사용에 있어
            <br className="hidden sm:block" />
            불편한 사항 혹은 건의사항에 대하여 피드백 부탁드립니다.
          </p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <div className="mt-1">
                <Input
                  label="이름"
                  placeholder="김종식"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-lightBlue-400 focus:border-lightBlue-400 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-1">
                <Input
                  label="소속"
                  type="text"
                  placeholder="중부대학교 정보보호학과"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-lightBlue-400 focus:border-lightBlue-400 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-1">
                <Input
                  label="이메일"
                  id="email"
                  placeholder="kjsik11@naver.com"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-lightBlue-500 focus:border-lightBlue-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700"
              >
                전화번호
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-lightBlue-400 focus:border-lightBlue-400 rounded-md"
                  >
                    <option>KR</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full pl-20 focus:ring-lightBlue-400 focus:border-lightBlue-400 border-gray-300 rounded-md"
                  placeholder="+82 010-987-6543"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-1">
                <TextArea
                  label="Message (*)은 필수 입력사항"
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-lightBlue-400 focus:border-lightBlue-400 border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={cn(
                      agreed ? 'bg-lightBlue-400' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-400',
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    <a href="#" className="font-medium text-gray-700 underline">
                      개인정보
                    </a>{' '}
                    및{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      쿠키
                    </a>{' '}
                    수집에 대한 권한 허용
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full">
                전송하기
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactPage.Layout = Dashboard;
export default ContactPage;
