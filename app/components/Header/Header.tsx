"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              Intro
            </a>
            <a href="/#projets" className={styles.navLink}>
              Projets
            </a>
            <Link href="/cv" className={styles.cvButton}>
              CV Interactif
            </Link>
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
              Intro
            </a>
            <a
              href="/#projets"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              Projets
            </a>
            <Link
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              CV Interactif
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
