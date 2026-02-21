import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left: Copyright */}
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>© {currentYear} Paul Nelaton</p>

            <p className={styles.builtWith}>
              Construit avec Next.js, React & TypeScript
            </p>
          </div>

          <p className={styles.tagline}>
            SYSTEM STATUS: <span style={{ color: "#00e5a8" }}>ONLINE</span>
          </p>

          <div className={styles.links}>
            <a
              href="https://github.com/Serobi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/paul-nelaton-791721aa/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a href="mailto:paul.nelaton@gmail.com" className={styles.link}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
