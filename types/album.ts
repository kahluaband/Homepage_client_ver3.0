export type AlbumCategory = 'PERFORMANCE' | 'FOUNDING' | 'YEAR_END' | 'ETC';

export type PresignedUrlRequest = {
  files: { fileName: string; fileType: string }[];
};

export type PresignedUrlItem = {
  presignedUrl: string;
  s3Key: string;
  category: AlbumCategory;
};

export type PresignedUrlResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    urlList: PresignedUrlItem[];
  };
};

export type PhotoUploadItem = {
  imageUrl: string;
  s3Key: string;
  category: AlbumCategory;
  uploader: string;
};

export type PhotoUploadRequest = {
  photos: PhotoUploadItem[];
};

export type UploadedPhoto = {
  photoId: number;
  thumbnailUrl: string;
  originalUrl: string;
  category: AlbumCategory;
  uploader: { id: number; name: string; term: string };
  createdAt: string;
};

export type PhotoUploadResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    uploadedPhotos: UploadedPhoto[];
  };
};
