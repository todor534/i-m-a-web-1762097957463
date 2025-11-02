import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "clamp(48px, 8vw, 96px) 16px",
    background: "linear-gradient(180deg, #0f1116 0%, #0b0d12 100%)",
    color: "#e7e7eb",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 24,
    alignItems: "center",
    textAlign: "center",
  },
  eyebrow: {
    fontSize: "0.875rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#9aa3af",
    fontWeight: 700,
  },
  title: {
    fontSize: "clamp(32px, 6vw, 56px)",
    fontWeight: 800,
    lineHeight: 1.05,
    margin: "8px 0 16px",
    color: "#f9fafb",
  },
  subtitle: {
    fontSize: "clamp(16px, 2.2vw, 20px)",
    color: "#cbd5e1",
    maxWidth: 800,
    margin: "0 auto",
  },
  ctas: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    marginTop: 24,
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "#7c3aed",
    border: "none",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 12,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
    textDecoration: "none",
    display: "inline-block",
  },
  secondaryBtn: {
    background: "transparent",
    border: "1px solid rgba(124, 58, 237, 0.6)",
    color: "#e7e7eb",
    padding: "12px 20px",
    borderRadius: 12,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  },
  hint: {
    fontSize: "0.875rem",
    color: "#9aa3b8",
    marginTop: 8,
  },
};

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el && "scrollIntoView" in el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = id;
  }
}

export default function Hero() {
  return (
    <section id="home" style={styles.section} aria-label="Introduction">
      <div style={styles.container}>
        <div>
          <div style={styles.eyebrow}>Portfolio of a Web Designer</div>
          <h1 style={styles.title}>Crafting clean, conversion‑focused websites</h1>
          <p style={styles.subtitle}>
            I design thoughtful interfaces and simple brand systems that help businesses look sharp and sell
            better. Available for freelance projects and collaborations.
          </p>
          <div style={styles.ctas}>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("gallery");
              }}
              style={styles.primaryBtn}
              role="button"
              aria-label="View my work"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact");
              }}
              style={styles.secondaryBtn}
              role="button"
              aria-label="Contact me"
            >
              Contact me
            </a>
          </div>
          <div style={styles.hint}>Scroll to see selected projects ↓</div>
        </div>
      </div>
    </section>
  );
}

/*
  Optional: if you want a background image under the gradient, add this to styles.section:

  backgroundImage: `linear-gradient(180deg, rgba(15,17,22,0.92) 0%, rgba(11,13,18,0.96) 100%), url("/path/to/your/image.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
*/
