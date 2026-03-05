export interface Header {
  name: string;
  role: string;
  domains: string[];
  experience: string;
  dispo: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  desc: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Formations {
  year: string;
  title: string;
  school: string;
}

export interface Languages {
  name: string;
  level: string;
}

export interface CV {
  header: Header;
  experiences: Experience[];
  skills: SkillCategory[];
  formations: Formations[];
  languages: Languages[];
}

export interface Labels {
  label: string;
}
