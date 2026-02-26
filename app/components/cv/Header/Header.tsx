// app/components/Header.tsx

import styles from "./Header.module.css";
import type { Identity } from "@/data/cv.types";

type HeaderProps = {
  identity: Identity;
};

export function Header({ identity }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.identityBlock}>
        <h1 className={styles.name}>{identity.name}</h1>
        <h2 className={styles.role}>{identity.role}</h2>
        <p className={styles.target}>{identity.mobility}</p>
        <p className={styles.summary}>{identity.summary}</p>
      </div>

      <div className={styles.rightHeader}>
        <div className={styles.contactInfo}>
          <img
            src="/profile2.png"
            alt={`Photo de ${identity.name}`}
            className={styles.profilePic}
          />
          <span>{identity.contact.email}</span>
          <span>{identity.contact.phone}</span>
        </div>
      </div>
    </header>
  );
}
