import styles from "./sidebar.module.css";

type CvSidebarProps = {
  children: React.ReactNode;
};

export function CvSidebar({ children }: CvSidebarProps) {
  return <aside className={styles.sidebar}>{children}</aside>;
}
