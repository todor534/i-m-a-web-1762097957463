import React from "react";

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textDecoration: "none",
    color: "#fff",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 6,
    objectFit: "cover",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#0b0b0b",
  },
  titleWrap: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.1,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 0.2,
    margin: 0,
    color: "#fff",
  },
  subtitle: {
    fontSize: 13,
    color: "#9aa3b2",
    margin: 0,
  },
  spacer: { flex: 1 },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  link: {
    color: "#fff",
    opacity: 0.9,
    textDecoration: "none",
    fontSize: 14,
    transition: "opacity 150ms ease",
  },
  cta: {
    marginLeft: 8,
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#6366f1",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default function Header(): JSX.Element {
  // optional tiny hover effect without CSS :hover
  const [hovered, setHovered] = React.useState<string | null>(null);

  const hoverProps = (key: string) => ({
    onMouseEnter: () => setHovered(key),
    onMouseLeave: () => setHovered((k) => (k === key ? null : k)),
    style: {
      ...styles.link,
      opacity: hovered === key ? 1 : styles.link.opacity,
    } as React.CSSProperties,
  });

  const logoSrc =
    "/logo.png"; // change to your blob URL if you prefer; this path is a safe default

  return (
    <header style={styles.header} role="banner">
      <div style={styles.inner}>
        <a href="#top" style={styles.brand} aria-label="Home">
          <img
            src={logoSrc}
            alt="Logo"
            style={styles.logo}
            loading="lazy"
            width={40}
            height={40}
          />
          <span style={styles.titleWrap}>
            <h1 style={styles.title}>Your Name</h1>
            <p style={styles.subtitle}>Web Designer</p>
          </span>
        </a>

        <div style={styles.spacer} />

        <nav style={styles.nav} aria-label="Primary">
          <a href="#about" {...hoverProps("about")}>
            About
          </a>
          <a href="#work" {...hoverProps("work")}>
            Work
          </a>
          <a href="#contact" {...hoverProps("contact")}>
            Contact
          </a>
          <a href="#contact" style={styles.cta}>
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
