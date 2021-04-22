import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Head } from '@components/core';
import { Button } from '@components/ui';
import ChevronRight from '@components/icons/ChevronRight';

const Root = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  height: 1000px;
`;

const items = [
  {
    name: 'MFT',
    initials: 'M',
    href: '#',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'EventLog',
    initials: 'EL',
    href: '#',

    bgColor: 'bg-purple-600',
  },
  {
    name: 'Prefetch ',
    initials: 'P',
    href: '#',

    bgColor: 'bg-yellow-500',
  },
  {
    name: 'JumpList',
    initials: 'JL',
    href: '#',

    bgColor: 'bg-green-500',
  },
  {
    name: 'LNK',
    initials: 'L',
    href: '#',

    bgColor: 'bg-indigo-600',
  },
];

const ProjectPage: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [dragOverFlag, setDragOverFlag] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');

  const handleSubmit: (file: File) => Promise<void> = React.useCallback(
    async (file) => {
      setLoading(true);
      setMessage(`${file.name} 파일 분석 진행중`);

      const promiseTest = async () =>
        await new Promise((resolve) => {
          setTimeout(() => {
            setLoading(false);
            setMessage('분석 성공!!');
            resolve(2);
          }, 2000);
        });

      await promiseTest();

      setTimeout(() => {
        setFile(null);
        setMessage('');
      }, 2000);
    },
    [],
  );

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Head>
        <title>프로젝트</title>
      </Head>
      <Root className="max-w-4xl p-4">
        <p className="mt-5 mb-4 text-4xl font-bold">
          Window Artifacts Analysis Online Page
        </p>
        <div
          className={cn(
            'h-48 rounded-lg mt-4 border-2 border-dashed border-gray-400 place-items-center hidden sm:grid mb-4',
            {
              'bg-primary text-white': dragOverFlag,
            },
          )}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
            setDragOverFlag(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
            setDragOverFlag(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragOverFlag(false);
            if (!e.dataTransfer) return;

            const file = e.dataTransfer.files[0];

            setFile(file);
          }}
        >
          분석할 파일을 여기에 드래그해주세요
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                inputRef?.current?.click();
              }}
            >
              파일 추가
            </Button>
            {file && (
              <div>
                <p className="text-lg">파일명: {file.name}</p>
                <p className="text-lg">확장자: {file.name.split('.')[1]}</p>
              </div>
            )}
          </div>
          <Button
            disabled={loading}
            onClick={() => {
              if (file) handleSubmit(file);
              else setMessage('파일이 없습니다 분석할 파일을 추가해주세요');
            }}
          >
            분석 시작
          </Button>
        </div>
        <p className="text-2xl font-semibold mt-4">{message}</p>
        <div>
          <p className="w-full text-center text-3xl font-bold mt-10">
            분석 가능한 파일 목록
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {items.map((item) => (
              <li
                key={item.name}
                className="col-span-1 flex shadow-sm rounded-md h-14"
              >
                <div
                  className={cn(
                    item.bgColor,
                    'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
                  )}
                >
                  {item.initials}
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <a
                      href={item.href}
                      className="text-gray-900 font-medium hover:text-gray-600"
                    >
                      {item.name}
                    </a>
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open options</span>
                      <ChevronRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Root>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
        }}
      />
    </>
  );
};

export default ProjectPage;
