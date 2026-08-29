export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  certificateUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  projectContext?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  problem: string;
  solution: string;
  contribution: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  category: string;
  proficiency?: 'Expert' | 'Advanced' | 'Proficient';
  context: string; // "Where I used it" based on resume
  isHighlight?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  score?: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: 'Cloud' | 'AI & Data' | 'Salesforce' | 'Core CS & PM';
  year?: string;
  credentialUrl?: string;
  highlight?: boolean;
}

export interface ResearchPaperItem {
  id: string;
  title: string;
  publisher: string;
  publicationYear: string;
  doi?: string;
  type: string;
  focus: string;
  summary: string;
  abstract: string;
  authors: string[];
  methodology: string[];
  keyFindings: string[];
  url: string;
  technologies: string[];
  bibtex: string;
}


