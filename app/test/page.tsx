'use client';

import { useState } from 'react';

import Button from '@/components/album/Button';
import Category from '@/components/album/Category';
import Dropdown from '@/components/album/Dropdown';
import Modal from '@/components/album/Modal';

const Page = () => {
  const [value, setValue] = useState('react');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Button label="저장하기" variant="primary" />
      <Button label="저장" variant="secondary" />
      <Button label="선택하기" variant="tertiary" />
      <Button label="취소" variant="cancel" />
      <Button label="삭제" variant="delete" />
      <Button label="사진 올리기" variant="uploadkahlua" />
      <Button label="사진 올리기" variant="uploadcrew" />
      <Category label="전체" />
      <Button
        label="모달 열기"
        variant="default"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>정말 사진을 삭제하시겠습니까?</p>
        <p>완료 후에는 이전 상태로 되돌릴 수 없습니다.</p>
        <Button
          label="취소"
          variant="cancel"
          onClick={() => setIsModalOpen(false)}
        />
        <Button
          label="삭제"
          variant="secondary"
          onClick={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Page;
