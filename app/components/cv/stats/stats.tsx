// components/StatsBlock.tsx
import styles from "./stats.module.css";
import type { Stats } from "@/data/cv.types";
type StatsProps = {
  stats: Stats[];
  title: string;
};

export default function Stats({ stats, title }: StatsProps) {
  return (
    <div>
      <h2 className={styles.mainTitle}>{title}</h2>

      <div className={styles.statsContainer}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
