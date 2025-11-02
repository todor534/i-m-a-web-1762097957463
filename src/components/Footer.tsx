import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    borderTop: "1px solid #1f2937",
    padding: "20px 16px",
    background: "linear-gradient(180deg, #0f1116 0%, #0b0d12 100%)",
    color: "#e7e7eb",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontWeight: 600,
    letterSpacing: 0.2,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 6,
    background:
      "linear-gradient(135deg, #7c3aed 0%, #a78bfa 60%, #c4b5fd 100%)",
    boxShadow: "0 6px 18px rgba(124, 58, 237, 0.4)",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "0.95rem",
    opacity: 0.9,
  },
  social: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 999,
    border: "1px solid rgba(124, 58, 237, 0.45)",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "transform .2s ease, box-shadow .2s ease, opacity .2s ease",
    opacity: 0.95,
  },
  spacer: {
    flex: "1 1 auto",
  },
  backToTop: {
    fontSize: "0.95rem",
    color: "#ffffff",
    textDecoration: "none",
    border: "1px solid rgba(124, 58, 237, 0.6)",
    padding: "6px 10px",
    borderRadius: 8,
    opacity: 0.95,
    transition: "transform .2s ease, box-shadow .2s ease, opacity .2s ease",
  },
  small: {
    width: "100%",
    textAlign: "center",
    fontSize: "0.9rem",
    opacity: 0.7,
    marginTop: 10,
  },
};

function scrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer} role="contentinfo">
      {/* Scoped hover/focus styles */}
      <style>{`
        .footer-link:hover, .footer-link:focus { text-decoration: underline; opacity: 1; }
        .footer-social-link:hover, .footer-social-link:focus { 
          transform: translateY(-2px); 
          box-shadow: 0 10px 24px rgba(124,58,237,.35);
          opacity: 1;
        }
        .back-to-top:hover, .back-to-top:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(124,58,237,.35);
          opacity: 1;
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.brand} aria-label="Site identity">
          <span style={styles.logo} aria-hidden="true" />
          <span>My Portfolio</span>
        </div>

        <nav style={styles.nav} aria-label="Footer">
          <a href="#work" className="footer-link" style={styles.link}>
            Work
          </a>
          <a href="#about" className="footer-link" style={styles.link}>
            About
          </a>
          <a href="#contact" className="footer-link" style={styles.link}>
            Contact
          </a>
          <a href="mailto:hello@example.com" className="footer-link" style={styles.link}>
            Email
          </a>
        </nav>

        <div style={styles.spacer} />

        <div style={styles.social} aria-label="Social links">
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            title="Dribbble"
            className="footer-social-link"
            style={styles.socialLink}
          >
            🏀
          </a>
          <a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            title="Behance"
            className="footer-social-link"
            style={styles.socialLink}
          >
            Bē
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="footer-social-link"
            style={styles.socialLink}
          >
            GH
          </a>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            aria-label="Back to top"
            title="Back to top"
            className="back-to-top"
            style={styles.backToTop}
          >
            ↑ Top
          </a>
        </div>

        <div style={styles.small}>© {year} My Portfolio. All rights reserved.</div>
      </div>
    </footer>
  );
}
