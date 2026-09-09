import RoadmapTest from "@/components/Homepage/ProjectRoadmap/Roadmap_test";
import styles from "@/styles/page.module.css";

export const metadata = {
  title: "Roadmap — Test cybersécurité",
  robots: { index: false, follow: false },
};

export default function RoadmapTestPage() {
  return <main className={styles.page}><RoadmapTest /></main>;
}
