import styles from "./Header.module.css";
import type { Identity } from "@/data/cv.types";

type HeaderProps = {
  identity: Identity;
};

export function Header({ identity }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <h1 className={styles.name}>{identity.name}</h1>
        <h2 className={styles.role}>{identity.role}</h2>

        <div className={styles.tags}>
          <span className={styles.tag}>Cybersécurité</span>
          <span className={styles.tag}>Développement full-stack</span>
          <span className={styles.tag}>Systèmes et infra</span>
        </div>

        <div className={styles.statusBlock}>
          <span className={styles.xpBadge}>9 ans d'expérience</span>
          <span className={styles.availability}>
            Disponible le : <strong>30/04/2026</strong>
          </span>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.brandBlock}>
          <img
            src="/images/logo_wit.png"
            alt="Wit Digital"
            className={styles.logo}
          />
        </div>
      </div>
    </header>
  );
}
