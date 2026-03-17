import { useEffect, useRef } from "react";

const deliverables = [
  {
    number: "01",
    title: "Narrative Framework\u2122",
    description:
      "Defines the canonical launch story, differentiation & message spine your entire team speaks from.",
  },
  {
    number: "02",
    title: "ICP & Targeting Framework\u2122",
    description:
      "Clarifies primary segments, buyer roles & must-win use cases before a dollar of pipeline is spent.",
  },
  {
    number: "03",
    title: "Competitive Readiness Framework\u2122",
    description:
      "Pressure-tests competitive scenarios & must-win battles so nothing surprises you in the field.",
  },
  {
    number: "04",
    title: "Offer & Proof Architecture\u2122",
    description:
      "Aligns packaging, claims & case study requirements to what buyers actually need to say yes.",
  },
  {
    number: "05",
    title: "Field Enablement System\u2122",
    description:
      "Operationalizes talk tracks, objection management & sales confidence from day one.",
  },
  {
    number: "06",
    title: "Activation & Measurement System\u2122",
    description:
      "Connects launch sequencing, pipeline targets & a 30-day executive impact readout.",
  },
];

export default function Deliverables() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = grid.querySelectorAll("[data-deliverable-card]");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 50);
            });
            observer.unobserve(grid);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ width: "100%", background: "#FFFFFF", padding: "100px 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#2D6A4F",
              marginBottom: "16px",
            }}
          >
            WHAT YOU GET
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "#1E3A5F",
              marginBottom: "16px",
            }}
          >
            The Launch Intelligence&trade; Playbook
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "#4A5568",
              maxWidth: "600px",
              margin: "0 auto",
              marginBottom: "48px",
            }}
          >
            HighSignals turns launch strategy into six pressure-tested deliverables
            your team can execute before go-live.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gap: "24px",
          }}
          className="deliverables-grid"
        >
          {deliverables.map((item) => (
            <div
              key={item.number}
              data-deliverable-card
              className="deliverable-card"
              style={{
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
                padding: "28px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s",
                opacity: 0,
                transform: "translateY(24px)",
                transitionProperty: "box-shadow, opacity, transform",
                transitionDuration: "0.3s, 0.5s, 0.5s",
              }}
            >
              {/* Number pill */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#2D6A4F",
                  background: "#EBF5EE",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                {item.number}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1E3A5F",
                  marginTop: "16px",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#4A5568",
                  lineHeight: 1.6,
                  marginTop: "8px",
                }}
              >
                {item.description}
              </p>

              {/* Bottom decoration line */}
              <div
                className="deliverable-bar"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "2px",
                  background: "#2D6A4F",
                  width: "0%",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <button
            className="deliverables-cta"
            style={{
              background: "#2D6A4F",
              color: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Start the Conversation &rarr;
          </button>
        </div>
      </div>

      <style>{`
        .deliverables-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .deliverables-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .deliverables-grid {
            grid-template-columns: 1fr;
          }
        }
        .deliverable-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        .deliverable-card:hover .deliverable-bar {
          width: 100% !important;
        }
        .deliverables-cta:hover {
          background: #1E5040 !important;
        }
      `}</style>
    </section>
  );
}
