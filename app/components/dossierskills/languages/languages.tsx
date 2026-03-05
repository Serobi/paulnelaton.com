// components/Skills.tsx
import styles from "./languages.module.css";

import type { Languages } from "@/(pages)/dossierskills/types";

type Props = {
  languages: Languages[];
  title: string;
};

export function Languages({ languages, title }: Props) {
  return (
    <div>
      <h2 className={styles.mainTitle}>{title}</h2>
      <ul className={styles.langList}>
        {languages.map((l) => (
          <li key={l.name}>
            <strong>{l.name} :</strong> {l.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
