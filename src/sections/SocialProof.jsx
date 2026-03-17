const companies = [
  "Nielsen",
  "DoubleVerify",
  "Neustar",
  "TransUnion",
  "MediaRadar",
  "Kantar",
  "Numerator",
];

function CompanyPill({ name }) {
  return (
    <span
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        color: "#4A5568",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        padding: "8px 20px",
        borderRadius: "4px",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {name}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section
      style={{
        width: "100%",
        background: "#F8F9FA",
        padding: "28px 0",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span
          className="hidden sm:block"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#A0AEC0",
            whiteSpace: "nowrap",
            marginRight: "32px",
          }}
        >
          TRUSTED BY
        </span>

        <div style={{ flex: 1, overflow: "hidden" }}>
          <div
            className="marquee-track"
            style={{ display: "flex", gap: "16px" }}
          >
            {[...companies, ...companies].map((name, i) => (
              <CompanyPill key={i} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
