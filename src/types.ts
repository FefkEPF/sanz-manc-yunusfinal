export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
