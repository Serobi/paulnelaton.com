// components/Skills.tsx
import styles from "./skills.module.css"; // ou crée skills.module.css si tu préfères isoler

import type { SkillCategory } from "@/(pages)/dossierskills/types";

type Props = {
  skills: SkillCategory[];
  title: string; // ex: data.labels.technicalSkills
};

export function Skills({ skills, title }: Props) {
  if (!skills?.length) return null;

  return (
    <div>
      <h2 className={styles.mainTitle}>{title}</h2>

      {skills.map((category, index) => (
        <div key={index} className={styles.skillGroup}>
          <h3 className={styles.skillCategory}>{category.title}</h3>

          <div className={styles.tags}>
            {category.skills.map((skill) => (
              <span key={skill} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
