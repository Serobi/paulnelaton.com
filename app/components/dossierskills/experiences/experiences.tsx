import styles from "./experiences.module.css";
import { Experience } from "@/data/cv.types";

type Props = {
  experiences: Experience[];
  title: string;
};

export function Experiences({ experiences, title }: Props) {
  return (
    <div className={styles.content}>
      <h2 className={styles.mainTitle}>{title}</h2>
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.period}`} className={styles.expCard}>
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
    </div>
  );
}
