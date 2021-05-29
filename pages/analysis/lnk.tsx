import React from 'react';
import cn from 'classnames';

// components
import Button from '@components/ui/Button';
import Dashboard from '@components/layout/Dashboard';
import SectionTitle from '@components/core/SectionTitle';
import OtherAnalysis from '@components/custom/OtherAnalysis';
import Link from '@components/ui/Link';

// icons
import { ChevronRightIcon } from '@heroicons/react/solid';

const LnkAnalysisPage = () => {
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
    <div className="pt-4 sm:pt-8 md:pt-12 pb-32 px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto ">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <SectionTitle title="LNK" picture="/icon/lnk.png" />
          <div>
            <Link
              className="hover:opacity-80 ml-8 text-lightBlue-400 flex items-center"
              href="/docs/lnk"
            >
              See docs
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
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
            disabled={loading || !file}
            onClick={() => {
              if (file) handleSubmit(file);
              else setMessage('파일이 없습니다 분석할 파일을 추가해주세요');
            }}
          >
            분석 시작
          </Button>
        </div>
        <p className="text-2xl font-semibold mt-4">{message}</p>
        <OtherAnalysis />
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".lnk"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
        }}
      />
    </div>
  );
};

LnkAnalysisPage.Layout = Dashboard;
export default LnkAnalysisPage;
