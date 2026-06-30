'use client';

import React, { useEffect } from 'react';
import Button from './Button';
import Icons from './Icons';
import Image from 'next/image';
import ReactionWidget from './ReactionWidget';
import { ReactionData } from '@/types/album';

type PhotoItem = {
  id: number;
  category: string;
  writer: string;
  imgUrl: string;
  date: string;
  reactions: ReactionData[];
};

interface PhotoModalProps {
  albumId: number;
  isOpen: boolean;
  onClose: () => void;
  photo: PhotoItem | null;
}

const PhotoModal = ({ isOpen, onClose, photo, albumId }: PhotoModalProps) => {
  // 스크롤 방지 및 ESC로 닫기 로직
  useEffect(() => {
    if (!isOpen) return;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex dt:w-[754px] dt:h-[895px] pad:h-[750px] pad:w-[500px] h-[542px] w-[328px] flex-col overflow-hidden rounded-[32px] bg-gray-0 shadow-2xl">
        <div className="relative flex h-[678px] w-full items-center justify-center bg-white sm:h-[500px] bg-gray-1">
          <div className="absolute right-5 top-5 z-10 cursor-pointer">
            <Icons type="close" onClick={onClose} />
          </div>

          <Image
            src={photo.imgUrl}
            alt={photo.writer}
            className="h-full w-full object-contain"
            fill
          />
        </div>

        {/* 하단 영역 (정보, 리액션, 저장버튼) - flex-1 추가 */}
        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
          {/* 정보 및 리액션 영역 */}
          <div className=" flex items-start justify-between">
            {/* 작성자 & 작성일 */}
            <div className="flex flex-col gap-1">
              <span className="text-[18px] font-bold text-black">
                {photo.writer}
              </span>
              <span className="text-[14px] font-medium text-gray-400">
                {photo.date}
              </span>
            </div>
            <div className="relative z-10">
              <ReactionWidget
                albumId={albumId}
                photoId={photo.id}
                initialReactions={photo.reactions || []}
              />
            </div>{' '}
          </div>

          {/* 저장하기 버튼 영역 */}
          <div className="flex justify-center">
            <Button label="저장하기" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
