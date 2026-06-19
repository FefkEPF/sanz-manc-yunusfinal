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

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  shortDesc?: string;
  highlights?: string[];
  process?: ServiceProcess[];
  faqs?: ServiceFAQ[];
  keywords?: string;
  metaDescription?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
