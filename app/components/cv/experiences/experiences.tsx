import styles from "./experiences.module.css";
import { Experience } from "@/data/cv.types";

type Props = {
  experiences: Experience[];
};

export function Experiences({ experiences }: Props) {
  return (
    <main className={styles.content}>
      <h2 className={styles.mainTitle}>Expérience Professionnelle</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div key={i} className={styles.expCard}>
            <div className={styles.expHeader}>
              <div className={styles.expTitleGroup}>
                <h3>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
              </div>
              <span className={styles.period}>{exp.period}</span>
            </div>

            <ul className={styles.expList}>
              {exp.desc.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
