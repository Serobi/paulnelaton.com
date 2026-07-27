"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import ScrollToTop from "../scrolltotop";
import styles from "./header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

const router = useRouter();
const pathname = usePathname();

const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  closeMobileMenu();

  if (pathname === "/") {
    event.preventDefault();

    window.history.pushState({}, "", "/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBar}>
          <Link
            href="/"
            className={styles.brand}
            aria-label={t("header.brandAriaLabel")}
            onClick={handleHomeClick}
          >
            <span className={styles.brandMark}>PN</span>

            <span className={styles.brandContent}>
              <span className={styles.brandName}>Paul Nelaton</span>
              <span className={styles.brandRole}>{t("header.role")}</span>
            </span>
          </Link>

          <nav
            className={styles.desktopNav}
            aria-label={t("header.desktopNavigationLabel")}
          >
            <a href="/#about" className={styles.navLink}>
              {t("header.nav.intro")}
            </a>

            <a href="/#work" className={styles.navLink}>
              {t("header.nav.projects")}
            </a>

            <Link href="/cv" className={styles.cvButton}>
              <span>{t("header.nav.cv")}</span>
            </Link>

            <LanguageToggle />
          </nav>

          <button
            type="button"
            className={`${styles.mobileMenuButton} ${
              mobileMenuOpen ? styles.mobileMenuButtonOpen : ""
            }`}
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label={
              mobileMenuOpen
                ? t("header.closeMenu")
                : t("header.openMenu")
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileMenuBackdrop} />

        <nav
          id="mobile-navigation"
          className={styles.mobileNav}
          aria-label={t("header.mobileNavigationLabel")}
        >
          <div className={styles.mobileNavHeader}>
            <span className={styles.mobileNavLabel}>
              {t("header.navigation")}
            </span>
            <LanguageToggle />
          </div>

          <div className={styles.mobileNavLinks}>
            <a
              href="/#about"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              <span className={styles.mobileNavIndex}>01</span>
              <span>{t("header.nav.intro")}</span>
            </a>

            <a
              href="/#work"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              <span className={styles.mobileNavIndex}>02</span>
              <span>{t("header.nav.projects")}</span>
            </a>

            <Link
              href="/cv"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              <span className={styles.mobileNavIndex}>03</span>
              <span>{t("header.nav.cv")}</span>
            </Link>
          </div>

          <div className={styles.mobileNavFooter}>
            <span>{t("header.role")}</span>
            <span>{t("header.productBuilder")}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}