import styles from "./main.module.css";

type CvMainProps = {
  children: React.ReactNode;
};

export function CvMain({ children }: CvMainProps) {
  return <main className={styles.main}>{children}</main>;
}
