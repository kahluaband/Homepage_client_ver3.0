import { useState, useEffect } from 'react';
import { getDetailedPhotoInfo } from '@/api/album/album';
import { getUserInfo } from '@/api/user/user';

export const usePhotoOwnership = (albumId: number, photoId?: number) => {
  const [isMyPhoto, setIsMyPhoto] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!photoId) return;

    const checkOwnership = async () => {
      setIsLoading(true);
      try {
        const [photoDetail, myProfile] = await Promise.all([
          getDetailedPhotoInfo(albumId, photoId),
          getUserInfo(),
        ]);
        setIsMyPhoto(photoDetail.uploader.id === myProfile.id);
      } catch (error) {
        console.error('권한 확인 중 오류 발생:', error);
        setIsMyPhoto(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkOwnership();
  }, [albumId, photoId]);

  return { isMyPhoto, isLoading };
};
