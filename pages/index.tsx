import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Head } from '@components/core';
import { Button } from '@components/ui';

const Root = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  height: 1000px;
`;

const Home: React.FC = () => {
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
        <title>대충만든조 졸업작품</title>
      </Head>
      <Root className="max-w-4xl p-4">
        <div
          className={cn(
            'h-48 rounded-lg border-2 border-dashed border-gray-400 place-items-center hidden sm:grid mb-4',
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
          파일을 여기에 드래그해주세요
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                inputRef?.current?.click();
              }}
            >
              파일 추가
            </Button>
            <div>
              <p className="text-lg">파일명: {file && file.name}</p>
            </div>
          </div>
          <Button
            onClick={() => {
              if (file) handleSubmit(file);
              else setMessage('파일이 없습니다 분석할 파일을 추가해주세요');
            }}
          >
            분석 시작
          </Button>
        </div>
        <p className="text-2xl font-semibold mt-4">{message}</p>
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

export default Home;
