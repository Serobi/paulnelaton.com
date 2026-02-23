// components/Skills.tsx
import styles from "./languages.module.css"; // ou crée skills.module.css si tu préfères isoler

import type { Languages } from "@/data/cv.types";

type Props = {
  languages: Languages[];
  title: string; // ex: data.labels.technicalSkills
};

export function Languages({ languages, title }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainTitle}>{title}</h2>
      <ul className={styles.langList}>
        {languages.map((l) => (
          <li key={l.name}>
            <strong>{l.name} :</strong> {l.level}
          </li>
        ))}
      </ul>
    </section>
  );
}
