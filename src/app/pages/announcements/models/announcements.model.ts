export interface AnnouncementPreview {
  id: number;
  imageUrl: string;
  description: string;
  likes: number;
}

export interface Announcement {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  comment: string;
  date: Date;
}