export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
}

export interface Identity {
  name: string;
  role: string;
  mobility: string;
  summary: string;
  contact: ContactInfo;
}

export type Stats = {
  label: string;
  value: number;
  color: string;
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  desc: string[];
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

export type Mode = "dev" | "sec";
export type Lang = "fr" | "en";
