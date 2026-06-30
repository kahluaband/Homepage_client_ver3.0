'use client';

import React, { useState } from 'react';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';
import { getDetailedPhotoInfo } from '@/api/album/album';
import { ReactionData } from '@/types/album';

type PhotoItem = {
  id: number;
  category: string;
  writer: string;
  imgUrl: string;
  date: string;
  reactions?: ReactionData[]; // ✨ any 대신 정확한 타입 지정!
};

interface PhotoListProps {
  albumId: number;
  photos: PhotoItem[];
  selectedPhotoIds?: number[];
  onToggle?: (id: number) => void;
  isSelectMode?: boolean;
}

const PhotoList = ({
  albumId,
  photos,
  selectedPhotoIds = [],
  onToggle = () => {},
  isSelectMode = false,
}: PhotoListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const handlePhotoClick = async (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);

    try {
      const detailData = await getDetailedPhotoInfo(albumId, photo.id);

      setSelectedPhoto({
        ...photo,
        imgUrl: detailData.originalUrl,
        writer: detailData.uploader.name,
        reactions: detailData.reactions,
        date: detailData.createdAt,
      });
    } catch (error) {
      console.error('상세 정보를 불러오지 못했습니다.', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPhoto(null), 300);
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-5 p-5 mb:grid-cols-2 pad:grid-cols-3 dt:grid-cols-4">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            category={photo.category}
            writer={photo.writer}
            imgUrl={photo.imgUrl}
            isSelected={selectedPhotoIds.includes(photo.id)}
            isSelectMode={isSelectMode}
            onSelect={() => onToggle(photo.id)}
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </div>

      <PhotoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        photo={selectedPhoto}
      />
    </>
  );
};

export default PhotoList;
