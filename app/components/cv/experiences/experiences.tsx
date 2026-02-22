import styles from "./experiences.module.css";
import { Experience } from "@/data/cv.types";

type Props = {
  experiences: Experience[];
};

export function Experiences({ experiences }: Props) {
  return (
    <main className={styles.content}>
      <h3 className={styles.mainTitle}>Expérience Professionnelle</h3>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div key={i} className={styles.expCard}>
            <div className={styles.expHeader}>
              <div className={styles.expTitleGroup}>
                <h4>{exp.role}</h4>
                <span className={styles.company}>{exp.company}</span>
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
