"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link
          href="/"
          className={styles.brand}
          aria-label={t("footer.backToTop")}
        >
          <span className={styles.brandMark}>PN</span>

          <span className={styles.brandContent}>
            <span className={styles.brandName}>Paul Nelaton</span>
            <span className={styles.brandRole}>
              {t("footer.role")}
            </span>
          </span>
        </Link>

        <div className={styles.meta}>
          <p className={styles.copyright}>
            © {currentYear} Paul Nelaton
          </p>

          <p className={styles.builtWith}>
            {t("footer.builtWith")}
          </p>
        </div>

        <nav
          className={styles.links}
          aria-label={t("footer.externalLinks")}
        >
          <a
            href="https://github.com/Serobi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
            <span className={styles.externalArrow} aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/paul-nelaton-791721aa/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
            <span className={styles.externalArrow} aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            href="mailto:paul.nelaton@gmail.com"
            className={styles.contactButton}
          >
            <span>{t("footer.contact")}</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}