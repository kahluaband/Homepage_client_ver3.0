'use client';

import { useState } from 'react';
import Banner from '@/components/album/Banner';
import Category from '@/components/album/Category';
import Dropdown from '@/components/album/Dropdown';
import PhotoList from '@/components/album/PhotoList';
import Button from '@/components/album/Button';

const CATEGORIES: { label: string; type?: 'default' | 'kahlua' | 'crew' }[] = [
  { label: '전체' },
  { label: '창립제' },
  { label: '송년회' },
  { label: '공연' },
  { label: '기타' },
  { label: '반응한 사진', type: 'kahlua' },
];

const AlbumListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  return (
    <div className="flex ">
      <div className="flex flex-col justify-center dt:w-[1200px] pad:w-[786px] ph:w-[500px] mx-auto">
        <Banner />
        <div className="w-full ph:px-5 pad:px-0">
          <div className="flex flex-col gap-[18px]">
            {/* ph: 드롭다운 */}
            <div className="flex flex-row justify-between items-center pad:hidden">
              <Dropdown
                options={CATEGORIES.map(({ label }) => ({
                  label,
                  value: label,
                }))}
                value={selectedCategory}
                onChange={setSelectedCategory}
              />
              <Button label="선택하기" variant="tertiary" />
            </div>

            {/* pad+: 탭 */}
            <div className="hidden pad:flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2">
                {CATEGORIES.map(({ label, type }) => (
                  <Category
                    key={label}
                    label={label}
                    type={type}
                    selected={selectedCategory === label}
                    onClick={() => setSelectedCategory(label)}
                  />
                ))}
              </div>
              <div className="flex flex-row items-center gap-3">
                <Button label="선택하기" variant="tertiary" />
              </div>
            </div>
            <div id="photo-list">
              <PhotoList photos={[]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumListPage;
