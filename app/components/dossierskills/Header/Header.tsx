import styles from "./Header.module.css";
import type { Header } from "@/(pages)/dossierskills/types";

type HeaderProps = {
  header: Header;
};

export function Header({ header }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <h1 className={styles.name}>{header.name}</h1>
        <h2 className={styles.role}>{header.role}</h2>

        <div className={styles.tags}>
          {header.domains.map((domain) => (
            <span className={styles.tag} key={domain}>
              {domain}
            </span>
          ))}
        </div>

        <div className={styles.statusBlock}>
          <span className={styles.xpBadge}>
            Expérience : <strong>{header.experience} ans</strong>
          </span>
          <span className={styles.availability}>
            Disponible le : <strong>{header.dispo}</strong>
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
