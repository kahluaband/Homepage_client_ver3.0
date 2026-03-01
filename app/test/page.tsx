"use client"

import { useState } from 'react';

import Category from '@/components/album/Category';
import Button from '@/components/album/Button';
import Dropdown from '@/components/album/Dropdown';


const Page = () => {
  const [value, setValue] = useState('recent');

  const options = [
       { label: '최신순', value: 'recent' },
       { label: '오래된순', value: 'old' },
       { label: '인기순', value: 'popular' },
     ];
  return (
    <div className="flex flex-col pt-40 px-2 gap-12 mb-12">
      <Button label="저장하기" variant="저장하기" />
      <Button label="저장" variant="저장" />
      <Button label="취소" variant="취소" />
      <Button label="선택하기" variant="선택하기" />
      <Button label="사진 올리기" variant="사진 올리기_kahlua" />
      <Button label="사진 올리기" variant="사진 올리기_crew" />
      <p className="title-lg font-semibold">프리텐다드</p>
      <p className="title-lg font-medium">프리텐다드</p>
      <p className="title-lg font-normal">프리텐다드</p>
      <Dropdown options={options} value={value} onChange={setValue} />
      <Category label="전체" />
    </div>
  );
}

export default Page;