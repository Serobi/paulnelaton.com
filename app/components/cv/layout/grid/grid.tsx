import styles from "./grid.module.css";

type CvGridProps = {
  columns?: 1 | 2;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
};

export function CvGrid({ columns = 2, primary, secondary }: CvGridProps) {
  return (
    <div
      className={`${styles.grid} ${
        columns === 1 ? styles.oneCol : styles.twoCol
      }`}
    >
      <div className={styles.col}>{primary}</div>

      {columns === 2 && secondary && (
        <div className={styles.col}>{secondary}</div>
      )}
    </div>
  );
}
