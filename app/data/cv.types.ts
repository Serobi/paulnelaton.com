export interface Identity {
  name: string;
  role: string;
  location: string;
  summary: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface CV {
  identity: Identity;
  experiences: Experience[];
  skills: SkillCategory[];
}
