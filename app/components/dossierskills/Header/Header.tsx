import styles from "./Header.module.css";
import type { Identity } from "@/(pages)/dossierskills/types";

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
          {identity.domains.map((domain) => (
            <span className={styles.tag} key={domain}>
              {domain}
            </span>
          ))}
        </div>

        <div className={styles.statusBlock}>
          <span className={styles.xpBadge}>
            {identity.experience} ans d'expérience
          </span>
          <span className={styles.availability}>
            Disponible le : <strong>{identity.dispo}</strong>
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
