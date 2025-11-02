import React, { useMemo, useState } from "react";

export type PortfolioItem = {
  id: string | number;
  title: string;
  image: string;
  description?: string;
  href?: string;
};

export type GalleryProps = {
  items?: PortfolioItem[];
  heading?: string;
};

/** ---- helpers ----------------------------------------------------------- */

const isValidHttpUrl = (value?: string): value is string => {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const fallbackImage = "https://picsum.photos/seed/portfolio/960/720";

const cleanItem = (item: PortfolioItem, idx: number): PortfolioItem | null => {
  // require title and image
  const title = (item?.title ?? "").trim();
  const image = isValidHttpUrl(item?.image) ? item.image : fallbackImage;

  if (!title) return null;

  const cleaned: PortfolioItem = {
    id: item?.id ?? idx,
    title,
    image,
    description: item?.description?.trim(),
    href: isValidHttpUrl(item?.href) ? item.href : undefined,
  };

  return cleaned;
};

/** ---- defaults ---------------------------------------------------------- */

const defaultItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Landing Page Concept",
    image: "https://picsum.photos/id/1011/960/720",
    description: "Clean hero, bold typography, subtle motion.",
  },
  {
    id: 2,
    title: "Product Page",
    image: "https://picsum.photos/id/1043/960/720",
    description: "Conversion-focused layout with strong hierarchy.",
  },
  {
    id: 3,
    title: "Mobile App UI",
    image: "https://picsum.photos/id/1060/960/720",
    description: "Minimal UI, thoughtful tap targets and contrast.",
  },
  {
    id: 4,
    title: "Brand Style Tile",
    image: "https://picsum.photos/id/1025/960/720",
    description: "Colors, type, and components for cohesion.",
  },
  {
    id: 5,
    title: "Dashboard UI",
    image: "https://picsum.photos/id/1015/960/720",
    description: "Data-dense, scannable views with subtle accents.",
  },
];

/** ---- styles (inline, dark-friendly) ----------------------------------- */

const styles: { [k: string]: React.CSSProperties } = {
  section: { padding: "40px 16px" },
  container: { maxWidth: 1200, margin: "0 auto" },
  heading: {
    fontSize: 28,
    lineHeight: 1.2,
    margin: "0 0 12px 0",
    letterSpacing: "0.2px",
    color: "var(--gallery-heading, #fff)",
  },
  subheading: {
    margin: "0 0 24px 0",
    color: "var(--gallery-subheading, #a3a3a3)",
    fontSize: 15,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: 16,
  },
  card: {
    gridColumn: "span 6",
    position: "relative",
    borderRadius: 14,
    overflow: "hidden",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  cardWide: { gridColumn: "span 12" },
  imgWrap: {
    position: "relative",
    aspectRatio: "16 / 10",
    background: "#1e1e1e",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  hoverOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0.75) 100%)",
    opacity: 0,
    transition: "opacity 180ms ease",
    pointerEvents: "none",
  },
  hoverContent: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  figcaption: {
    padding: "10px 12px 12px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  captionText: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 },
  title: {
    fontSize: 16,
    fontWeight: 600,
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#fff",
  },
  desc: {
    fontSize: 13,
    color: "#a3a3a3",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  actions: { display: "flex", alignItems: "center", gap: 8 },
  button: {
    appearance: "none",
    border: "1px solid #2a2a2a",
    background: "#0f0f10",
    color: "#fff",
    fontSize: 13,
    padding: "6px 10px",
    borderRadius: 8,
    cursor: "pointer",
    transition:
      "transform 120ms ease, background 120ms ease, border-color 120ms ease",
  },
  buttonGhost: {
    background: "transparent",
    borderColor: "rgba(255,255,255,0.35)",
    color: "#fff",
  },
  buttonHover: {
    transform: "translateY(-1px)",
    borderColor: "rgba(255,255,255,0.6)",
  },
  cardInteractive: { cursor: "zoom-in" },
  srOnly: {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
};

/** ---- component --------------------------------------------------------- */

const Gallery: React.FC<GalleryProps> = ({ items, heading }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [btnHover, setBtnHover] = useState<string | null>(null);

  const list = useMemo(() => {
    const raw = (items?.length ? items : defaultItems) as PortfolioItem[];
    return raw
      .map((it, idx) => cleanItem(it, idx))
      .filter(Boolean) as PortfolioItem[];
  }, [items]);

  return (
    <section style={styles.section} aria-label={heading || "Portfolio Gallery"}>
      <div style={styles.container}>
        {heading && <h2 style={styles.heading}>{heading}</h2>}
        {!heading && (
          <>
            <h2 style={styles.heading}>Recent Work</h2>
            <p style={styles.subheading}>
              A hand-picked selection of web, app, and brand UI.
            </p>
          </>
        )}

        <div style={styles.grid}>
          {list.map((item, idx) => {
            const wide = (idx + 1) % 5 === 0; // make every 5th card span full width
            return (
              <figure
                key={item.id}
                style={{ ...styles.card, ...(wide ? styles.cardWide : null) }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="portfolio-card"
              >
                <div style={styles.imgWrap}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={styles.image}
                  />

                  {/* hover overlay */}
                  <div
                    style={{
                      ...styles.hoverOverlay,
                      opacity: hovered === idx ? 1 : 0,
                    }}
                  />
                  <div
                    style={{
                      ...styles.hoverContent,
                      opacity: hovered === idx ? 1 : 0,
                    }}
                    aria-hidden={hovered === idx ? "false" : "true"}
                  >
                    <div style={styles.captionText}>
                      <strong style={styles.title}>{item.title}</strong>
                      {item.description ? (
                        <span style={styles.desc}>{item.description}</span>
                      ) : (
                        <span className="sr-only" style={styles.srOnly}>
                          {item.title}
                        </span>
                      )}
                    </div>
                    <div style={styles.actions}>
                      <a
                        href={item.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setBtnHover(`preview-${idx}`)}
                        onMouseLeave={() => setBtnHover(null)}
                        style={{
                          ...styles.button,
                          ...(btnHover === `preview-${idx}`
                            ? styles.buttonHover
                            : null),
                        }}
                        aria-label={`Open preview of ${item.title}`}
                      >
                        Preview
                      </a>
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setBtnHover(`visit-${idx}`)}
                          onMouseLeave={() => setBtnHover(null)}
                          style={{
                            ...styles.button,
                            ...styles.buttonGhost,
                            ...(btnHover === `visit-${idx}`
                              ? styles.buttonHover
                              : null),
                          }}
                          aria-label={`Open details for ${item.title}`}
                        >
                          Visit
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <figcaption style={styles.figcaption}>
                  <div style={styles.captionText}>
                    <h3 style={styles.title} title={item.title}>
                      {item.title}
                    </h3>
                    {item.description && (
                      <p style={styles.desc} title={item.description}>
                        {item.description}
                      </p>
                    )}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
