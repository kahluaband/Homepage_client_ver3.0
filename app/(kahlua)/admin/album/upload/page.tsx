'use client';

import Image from 'next/image';
import { useState } from 'react';

import AlbumBanner from '@/components/album/AlbumBanner';
import Button from '@/components/album/Button';
import Category from '@/components/album/Category';
import Dropdown from '@/components/album/Dropdown';
import PhotoPlus from '@/public/image/album/icons/photo-plus.svg';

const CATEGORY_OPTIONS = [
  { label: '창립제', value: '창립제' },
  { label: '송년회', value: '송년회' },
  { label: '공연', value: '공연' },
  { label: '기타', value: '기타' },
];

const Page = () => {
  const [selected, setSelected] = useState(CATEGORY_OPTIONS[0].value);

  return (
    <div className="w-[360px] font-pretendard relative mx-auto h-auto flex flex-col justify-center mt-20 pad:w-[786px] dt:w-[1200px] gap-[32px] mb:gap-[64px]">
      <AlbumBanner type="upload" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between">
          <div className="pad:hidden">
            <Dropdown
              options={CATEGORY_OPTIONS}
              value={selected}
              onChange={setSelected}
            />
          </div>
          <div className="hidden pad:flex flex-row gap-3">
            {CATEGORY_OPTIONS.map((option) => (
              <Category key={option.value} label={option.label} />
            ))}
          </div>
          <Button label="업로드 하기" variant="uploadkahlua" />
        </div>
        <section className="flex w-full h-[824px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-gray-2">
          <Image src={PhotoPlus} alt="사진 업로드" width={123} height={123} />
          <p className="title-sm text-gray-2 font-semibold pad:hidden">
            사진 업로드
          </p>
          <p className="hidden title-sm text-gray-2 font-semibold pad:block">
            사진 업로드 또는 끌어다놓기
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
