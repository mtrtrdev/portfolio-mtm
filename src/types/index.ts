export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  thumbnailUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string }[];
}

export interface Profile {
  name: string;
  initials: string;
  handle: string;
  role: string;
  location: string;
  bio: string;
  statement: string;
  socials: {
    github: string;
    qiita: string;
  };
}

