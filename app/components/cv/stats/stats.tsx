// components/StatsBlock.tsx
import styles from "./stats.module.css";
import type { Stats } from "@/data/cv.types";
import { useIsMobile } from "@/components/useIsMobile";
type StatsProps = {
  stats: Stats[];
  title: string;
};

export default function Stats({ stats, title }: StatsProps) {
  const isMobile = useIsMobile();

  return (
    <section className={styles.section}>
      <h3>{title}</h3>

      <div className={styles.statsContainer}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statLabel}>{stat.label}</span>

            <div className={styles.statBarBg}>
              <div
                className={styles.statBarFill}
                style={{
                  width: `${stat.value}%`,
                  backgroundColor: stat.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
