import { useRef, useEffect, useState } from "react";

const cards = [
  {
    stat: "69%",
    label: "of buyers see inconsistency across commercial teams",
    description:
      "Buyers decide faster and less patiently. Inconsistent stories signal misalignment and buyers move on.",
  },
  {
    stat: "73%",
    label: "of buyers punish irrelevant go-to-market in real time",
    description:
      "Relevance windows are shorter than ever. Generic launches get ignored. Competitors neutralize weak differentiation fast.",
  },
  {
    stat: "50%",
    label: "of product launches don't hit their target",
    description:
      "Sales and CS hesitate after weak launches. Each miss raises the bar for the next. Momentum is harder to rebuild than protect.",
  },
];

export default function Problems() {
  const cardsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.gridOverlay} />
      <div style={styles.container}>
        <p style={styles.sectionLabel}>THE COST OF GETTING IT WRONG</p>
        <h2 style={styles.headline}>There Is No Margin for Error</h2>
        <p style={styles.subheading}>
          The cost of launch failure has risen for growth-stage B2B SaaS & AI
          companies
        </p>

        <div ref={cardsRef} style={styles.cardsGrid}>
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                ...(visible
                  ? {
                      opacity: 1,
                      transform: "translateY(0)",
                      transitionDelay: `${i * 0.1}s`,
                    }
                  : {}),
              }}
            >
              <div style={styles.stat}>{card.stat}</div>
              <div style={styles.label}>{card.label}</div>
              <div style={styles.description}>{card.description}</div>
            </div>
          ))}
        </div>

        <p style={styles.footnote}>
          *Sources: Gartner, Forrester, McKinsey
        </p>

        <div style={styles.ctaWrapper}>
          <button className="btn-glass-ghost" onClick={() => { const el = document.getElementById('solutions'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }) }}>
            See the Playbook →
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    background: "linear-gradient(160deg, #0D1B2A 0%, #142D4A 50%, #0F2235 100%)",
    padding: "100px 0",
    position: "relative",
    overflow: "hidden",
  },
  gridOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    pointerEvents: "none",
  },
  container: {
    maxWidth: "80rem",
    margin: "0 auto",
    padding: "0 1.5rem",
    textAlign: "center",
  },
  sectionLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#3EBF70",
    marginBottom: "16px",
    marginTop: 0,
  },
  headline: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(28px, 3.5vw, 44px)",
    fontWeight: 700,
    color: "#ffffff",
    marginTop: 0,
    marginBottom: "16px",
  },
  subheading: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    color: "rgba(255,255,255,0.6)",
    maxWidth: "560px",
    margin: "0 auto",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "48px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    padding: "40px 32px",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow:
      "0 4px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    opacity: 0,
    transform: "translateY(24px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  },
  stat: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "52px",
    fontWeight: 700,
    color: "#3EBF70",
  },
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    color: "#ffffff",
    marginTop: "8px",
  },
  description: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
    marginTop: "12px",
  },
  footnote: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    color: "rgba(255,255,255,0.3)",
    textAlign: "center",
    marginTop: "40px",
  },
  ctaWrapper: {
    textAlign: "center",
    marginTop: "32px",
  },
};
