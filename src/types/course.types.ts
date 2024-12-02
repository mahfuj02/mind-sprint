export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  published_at: string;
  media_url: string | null;
  category_id: number | null;
}

export type CourseInput = Omit<Course, 'id' | 'published_at'>;