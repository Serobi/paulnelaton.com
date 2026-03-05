// components/Skills.tsx
import styles from "./formations.module.css"; // ou crée skills.module.css si tu préfères isoler

import type { Formations } from "@/(pages)/dossierskills/types";

type Props = {
  formations: Formations[];
  title: string;
};

export function Formations({ formations, title }: Props) {
  return (
    <div>
      <h2 className={styles.mainTitle}>{title}</h2>
      <div className={styles.eduList}>
        {formations.map((f, i) => (
          <div key={`${f.year}-${f.title}`} className={styles.eduItem}>
            <span className={styles.year}>{f.year}</span>
            <div className={styles.eduDetail}>
              <strong>{f.title}</strong>
              <span>{f.school}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
