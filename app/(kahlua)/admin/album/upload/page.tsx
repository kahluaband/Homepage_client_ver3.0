'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, DragEvent } from 'react';

import { getUserInfo } from '@/api/user/user';
import AlbumBanner from '@/components/album/AlbumBanner';
import Button from '@/components/album/Button';
import Category from '@/components/album/Category';
import Dropdown from '@/components/album/Dropdown';
import PhotoList from '@/components/album/PhotoList';
import PhotoPlus from '@/public/image/album/icons/photo-plus.svg';

const CATEGORY_OPTIONS = [
  { label: '창립제', value: '창립제' },
  { label: '송년회', value: '송년회' },
  { label: '공연', value: '공연' },
  { label: '기타', value: '기타' },
];

const MAX_PHOTOS = 20;

type UploadPhoto = {
  id: number;
  category: string;
  writer: string;
  imgUrl: string;
  file: File;
};

const Page = () => {
  const [selected, setSelected] = useState('');
  const [photos, setPhotos] = useState<UploadPhoto[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [userName, setUserName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const createdUrlsRef = useRef<string[]>([]);

  useEffect(() => {
    return () => {
      createdUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const userInfo = await getUserInfo();
        setUserName(userInfo.name ?? '');
      } catch (error) {
        console.error('사용자 정보를 불러오지 못했습니다.', error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!userName) return;

    setPhotos((prev) =>
      prev.map((photo) => ({
        ...photo,
        writer: userName,
      }))
    );
  }, [userName]);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const addPhotos = (files: File[]) => {
    if (!files.length) return;
    if (photos.length >= MAX_PHOTOS) {
      alert(`사진은 최대 ${MAX_PHOTOS}장까지 업로드할 수 있습니다.`);
      return;
    }

    const remainingSlots = MAX_PHOTOS - photos.length;
    const limitedFiles = files.slice(0, remainingSlots);

    if (limitedFiles.length < files.length) {
      alert(`사진은 최대 ${MAX_PHOTOS}장까지 업로드할 수 있습니다.`);
    }

    const nextPhotos = limitedFiles.map((file, index) => {
      const imgUrl = URL.createObjectURL(file);
      createdUrlsRef.current.push(imgUrl);

      return {
        id: Date.now() + index,
        category: selected || '미분류',
        writer: userName,
        imgUrl,
        file,
      };
    });

    setPhotos((prev) => [...prev, ...nextPhotos]);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    addPhotos(Array.from(event.target.files ?? []));
    event.target.value = '';
  };

  const handleDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(false);
    addPhotos(Array.from(event.dataTransfer.files));
  };

  const handleDragOver = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleUpload = async () => {
    if (photos.length === 0) return;
    // API 연결
  };

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
              placeholder="카테고리"
            />
          </div>
          <div className="hidden pad:flex flex-row gap-3">
            {CATEGORY_OPTIONS.map((option) => (
              <Category
                key={option.value}
                label={option.label}
                selected={selected === option.value}
                onClick={() => setSelected(option.value)}
              />
            ))}
          </div>
          <Button
            type="button"
            label="업로드 하기"
            variant="uploadkahlua"
            onClick={handleUpload}
            disabled={photos.length === 0}
            className={
              photos.length === 0 ? 'cursor-not-allowed opacity-50' : ''
            }
          />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
        <section
          onClick={photos.length === 0 ? openFilePicker : undefined}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex w-full h-[824px] flex-col rounded-[24px] border-2 border-dashed transition-colors ${
            isDragging
              ? 'border-yellow-main bg-yellow-light/10'
              : 'border-gray-2'
          } ${photos.length > 0 ? 'justify-start overflow-y-auto' : 'items-center justify-center cursor-pointer'}`}
        >
          {photos.length > 0 ? (
            <>
              <div className="flex w-full items-center justify-between px-5 pt-5">
                <p className="text-sm font-semibold text-gray-2">
                  {photos.length}/{MAX_PHOTOS}장 선택됨
                </p>
                {photos.length < MAX_PHOTOS && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openFilePicker();
                    }}
                    className="text-sm font-semibold text-yellow-main"
                  >
                    사진 추가
                  </button>
                )}
              </div>
              <PhotoList photos={photos} />
            </>
          ) : (
            <>
              <Image
                src={PhotoPlus}
                alt="사진 업로드"
                width={123}
                height={123}
              />
              <p className="title-sm text-gray-2 font-semibold pad:hidden">
                사진 업로드
              </p>
              <p className="hidden title-sm text-gray-2 font-semibold pad:block">
                사진 업로드 또는 끌어다놓기
              </p>
              <p className="mt-2 text-sm font-medium text-gray-2">
                최대 {MAX_PHOTOS}장까지 선택할 수 있습니다.
              </p>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Page;
