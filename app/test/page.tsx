"use client"

import { useState } from 'react';

import Button from '@/components/album/Button';
import Category from '@/components/album/Category';
import Dropdown from '@/components/album/Dropdown';

const Page = () => {
  const [value, setValue] = useState('react');

  const options = [
    { label: '전체', value: 'all' },
    { label: '송년회', value: 'Year-end Party' },
    { label: '창립제', value: 'foundation Day' },
    { label: '공연', value: 'performance' },
    { label: '기타', value: 'etc' },
    { label: '반응한 사진', value: 'react' },
  ];
  return (
    <div className="flex flex-col pt-40 px-2 gap-12 mb-12">
      <Dropdown options={options} value={value} onChange={setValue} />
      <Button label="저장하기" variant="저장하기" />
      <Button label="저장" variant="저장" />
      <Button label="취소" variant="취소" />
      <Button label="선택하기" variant="선택하기" />
      <Button label="사진 올리기" variant="사진 올리기_kahlua" />
      <Button label="사진 올리기" variant="사진 올리기_crew" />
      <p className="title-lg font-semibold">프리텐다드</p>
      <p className="title-lg font-medium">프리텐다드</p>
      <p className="title-lg font-normal">프리텐다드</p>
      <Category label="전체" />
    </div>
  );
};

export default Page;
