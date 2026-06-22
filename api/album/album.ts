import { authInstance } from '@/api/auth/axios';
import type {
  AlbumCategory,
  PhotoUploadResponse,
  PresignedUrlResponse,
} from '@/types/album';

export const getPresignedUrls = async (
  albumId: number,
  files: { fileName: string; fileType: string }[]
): Promise<PresignedUrlResponse['result']['urlList']> => {
  const res = await authInstance.post<PresignedUrlResponse>(
    `/albums/${albumId}/photos/presigned-url`,
    { files }
  );
  return res.data.result.urlList;
};

export const uploadPhotosToAlbum = async (
  albumId: number,
  photos: {
    imageUrl: string;
    s3Key: string;
    category: AlbumCategory;
    uploader: string;
  }[]
): Promise<PhotoUploadResponse['result']['uploadedPhotos']> => {
  const res = await authInstance.post<PhotoUploadResponse>(
    `/albums/${albumId}/photos`,
    { photos }
  );
  return res.data.result.uploadedPhotos;
};
