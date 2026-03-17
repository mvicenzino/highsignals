export default function DiagnosticCTA() {
  const spokeLabels = [
    { label: 'Narrative', angle: -90 },
    { label: 'Targeting', angle: -45 },
    { label: 'Competitive', angle: 0 },
    { label: 'Proof', angle: 45 },
    { label: 'Enablement', angle: 90 },
    { label: 'Measurement', angle: 135 },
    { label: 'Alignment', angle: 180 },
    { label: 'Activation', angle: 225 },
  ];

  const cx = 110;
  const cy = 110;
  const arcRadii = [
    { r: 95, color: '#3EBF70', width: 1.5 },
    { r: 77, color: '#2D6A4F', width: 1.5 },
    { r: 59, color: '#1E7A48', width: 1.2 },
    { r: 40, color: '#A8DFB8', width: 1 },
  ];

  const toRad = (deg) => (deg * Math.PI) / 180;

  const describeArc = (r, startAngle, endAngle) => {
    const start = {
      x: cx + r * Math.cos(toRad(startAngle)),
      y: cy + r * Math.sin(toRad(startAngle)),
    };
    const end = {
      x: cx + r * Math.cos(toRad(endAngle)),
      y: cy + r * Math.sin(toRad(endAngle)),
    };
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  };

  const labelRadius = 100;

  const getLabelAnchor = (angle) => {
    const normAngle = ((angle % 360) + 360) % 360;
    if (normAngle > 60 && normAngle < 120) return 'middle';
    if (normAngle > 240 && normAngle < 300) return 'middle';
    if (normAngle >= 120 && normAngle <= 240) return 'end';
    return 'start';
  };

  return (
    <section
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #162D4A 100%)',
        padding: '80px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '960px',
            margin: '0 auto',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Column */}
          <div style={{ flex: '1 1 55%', minWidth: '300px' }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Know How Ready You Are Before You Launch
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '16px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.6,
                marginTop: '16px',
                maxWidth: '440px',
                marginBottom: 0,
              }}
            >
              The Launch Readiness Diagnostic&trade; assesses your launch across 8
              critical dimensions. Takes ~5 minutes. Executive-level output. No
              commitment.
            </p>
            <a
              href="#diagnostic"
              style={{
                display: 'inline-block',
                marginTop: '28px',
                background: '#2D6A4F',
                color: '#FFFFFF',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                padding: '16px 32px',
                borderRadius: '6px',
                border: 'none',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1E5040')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2D6A4F')}
            >
              Get Your Launch Readiness Score &rarr;
            </a>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginTop: '16px',
              }}
            >
              {[
                'Takes ~5 minutes',
                'Executive-level output',
                'No commitment',
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  &#10003; {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column — hidden below 768px via CSS class */}
          <div
            className="diagnostic-cta-radar"
            style={{
              flex: '1 1 45%',
              minWidth: '240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.15))' }}>
              <svg
                viewBox="0 0 220 220"
                width="220"
                height="220"
                style={{ overflow: 'visible' }}
              >
                {/* Spoke lines */}
                {spokeLabels.map(({ label, angle }) => {
                  const rad = toRad(angle);
                  const x2 = cx + 95 * Math.cos(rad);
                  const y2 = cy + 95 * Math.sin(rad);
                  return (
                    <line
                      key={label}
                      x1={cx}
                      y1={cy}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Concentric arcs */}
                {arcRadii.map(({ r, color, width }, i) => (
                  <path
                    key={i}
                    d={describeArc(r, -80, 260)}
                    fill="none"
                    stroke={color}
                    strokeWidth={width}
                    strokeLinecap="round"
                  />
                ))}

                {/* Center dot */}
                <circle cx={cx} cy={cy} r={3} fill="#3EBF70" />

                {/* Spoke labels */}
                {spokeLabels.map(({ label, angle }) => {
                  const rad = toRad(angle);
                  const lx = cx + labelRadius * Math.cos(rad);
                  const ly = cy + labelRadius * Math.sin(rad);
                  return (
                    <text
                      key={label}
                      x={lx}
                      y={ly}
                      textAnchor={getLabelAnchor(angle)}
                      dominantBaseline="central"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '8px',
                        fill: 'rgba(255,255,255,0.6)',
                      }}
                    >
                      {label}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive style: hide radar on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .diagnostic-cta-radar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
