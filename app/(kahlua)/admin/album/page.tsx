'use client';

import Banner from '@/components/about/Banner';
import AlbumFolder from '@/components/album/AlbumFolder';
import ReactionStatus from '@/components/album/ReactionBadge';
import ReactionSelector from '@/components/album/ReactionSelector';
import PhotoCard from '@/components/album/PhotoCard';
import { useState } from 'react';

const page = () => {
  const [selectedPhotoId, setSelectedPhotoId] = useState<number>(0);

  const handleToggle = (id: number) => {
    setSelectedPhotoId((prev) => (prev === id ? 0 : id));
  };
  return (
    <div className="font-pretendard relative mx-auto w-full pad:w-[786px] dt:w-[1200px] h-auto flex flex-col justify-center">
      <Banner />
      <div className="flex flex-row md:flex-col gap-[254px] justify-center">
        <AlbumFolder
          type="KAHLUA"
          thumbnailUrl="/image/album/thumbnail_ex.jpg"
        />
        <AlbumFolder type="CREW" thumbnailUrl="/image/album/thumbnail_ex.jpg" />
      </div>
      <div className="flex justify-between mt-20">
        <ReactionStatus />
        <ReactionSelector />
      </div>
      <div className="text-lg">
        <PhotoCard
          id={1}
          category="송년회"
          writer="이윤서"
          imgUrl="/image/album/thumbnail_ex.jpg"
          isSelected={selectedPhotoId === 1}
          onClick={() => handleToggle(1)}
        />
      </div>
    </div>
  );
};

export default page;
