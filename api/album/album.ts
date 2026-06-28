import { authInstance } from '@/api/auth/axios';
import type {
  AlbumCategory,
  AlbumListCategory,
  AlbumPhotosResponse,
  PhotoUploadResponse,
  PresignedUrlResponse,
} from '@/types/album';

// Presigned URL 발급
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

// 깔루아 공유 앨범 페이지 및 사진 조회
export const getAlbumPhotos = async (
  albumId: number,
  params?: { category?: AlbumListCategory; cursor?: number; size?: number }
): Promise<AlbumPhotosResponse['result']> => {
  const res = await authInstance.get<AlbumPhotosResponse>(
    `/albums/${albumId}/photos`,
    { params }
  );
  return res.data.result;
};

// 사진 삭제
export const deleteAlbumPhotos = async (
  albumId: number,
  photoIds: number[]
): Promise<void> => {
  await authInstance.delete(`/albums/${albumId}/photos`, {
    data: { photoIds },
  });
};

// 사진 업로드
export const uploadPhotosToAlbum = async (
  albumId: number,
  photos: {
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
