// components/Skills.tsx
import styles from "./formations.module.css"; // ou crée skills.module.css si tu préfères isoler

import type { Formations } from "@/data/cv.types";

type Props = {
  formations: Formations[];
  title: string;
};

export function Formations({ formations, title }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainTitle}>{title}</h2>
      <div className={styles.eduList}>
        {formations.map((f, i) => (
          <div key={i} className={styles.eduItem}>
            <span className={styles.year}>{f.year}</span>
            <div className={styles.eduDetail}>
              <strong>{f.title}</strong>
              <span>{f.school}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
