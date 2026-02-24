"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import styles from "./header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            Paul <br />
            Nelaton
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <a href="/#" className={styles.navLink}>
              {t("nav.intro")}
            </a>
            <a href="/#projets" className={styles.navLink}>
              {t("nav.projects")}
            </a>
            <Link href="/cv" className={styles.cvButton}>
              {t("nav.cv")}
            </Link>

            {/* Language toggle - Desktop */}
            <LanguageToggle />
          </nav>

          {/* Mobile menu button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <a
              href="/#"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {t("nav.intro")}
            </a>
            <a
              href="/#projets"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {t("nav.projects")}
            </a>
            <Link
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {t("nav.cv")}
            </Link>

            {/* Language toggle - Mobile */}
            <div className={styles.mobileLangWrapper}>
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
