export interface Comment {
  id: number;
  postId: number;
  deletedAt: string | null;
}

export interface AnnouncementProps {
  id: number;
  title: string;
  likes: number;
  comments: Comment[];
  created_at: string;
  commentsCount: number;
}

export interface CommunityProps {
  id: number;
  title: string;
  likes: number;
  comments: Comment[];
  created_at: string;
  writer: string;
  commentsCount: number;
}

export interface ToggleProps {
  toggle: string;
}

export const toggleList: Array<ToggleProps> = [
  { toggle: '공지사항' },
  { toggle: '깔깔깔' },
];
