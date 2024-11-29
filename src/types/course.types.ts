export interface Course {
    id: number;
    title: string;
    description: string;
    duration: number;
    media_url: string;
    price: number;
    category_id: number|null;
  }