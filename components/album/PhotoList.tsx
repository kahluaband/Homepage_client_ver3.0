'use client';

import React, { useState } from 'react';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';

type PhotoItem = {
  id: number;
  category: string;
  writer: string;
  imgUrl: string;
};

interface PhotoListProps {
  photos: PhotoItem[];
  selectedPhotoIds?: number[];
  onToggle?: (id: number) => void;
  isSelectMode?: boolean;
}

const PhotoList = ({
  photos,
  selectedPhotoIds = [],
  onToggle = () => {},
  isSelectMode = false,
}: PhotoListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const handlePhotoClick = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPhoto(null), 300);
  };

  return (
    <>
      {/* 📸 사진 리스트 영역 */}
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
