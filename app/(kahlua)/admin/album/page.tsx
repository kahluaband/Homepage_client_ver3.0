'use client';

import Banner from '@/components/about/Banner';
import AlbumFolder from '@/components/album/AlbumFolder';

const page = () => {
  return (
    <div className="font-pretendard relative mx-auto h-auto flex flex-col justify-center pad:w-[786px] dt:w-[1200px]">
      <Banner />
      <AlbumFolder type="KAHLUA" thumbnailUrl="/image/album/thumbnail_ex.jpg" />
    </div>
  );
};

export default page;
