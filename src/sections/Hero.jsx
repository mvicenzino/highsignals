import { useState, useEffect } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const fadeUp = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
    transitionDelay: `${delay}s`,
  });

  // Helper to compute arc dasharray/dashoffset for ~80% of a circle
  const arcProps = (radius, strokeWidth, color, opacity) => {
    const circumference = 2 * Math.PI * radius;
    const visibleLength = circumference * 0.8;
    return {
      cx: 150,
      cy: 150,
      r: radius,
      fill: 'none',
      stroke: color,
      strokeWidth,
      opacity,
      strokeDasharray: `${visibleLength} ${circumference - visibleLength}`,
      strokeDashoffset: 0,
      strokeLinecap: 'round',
      transform: 'rotate(-90 150 150)',
    };
  };

  // 8 spokes evenly spaced at 45 degrees
  const spokeLabels = [
    'Narrative',
    'Targeting',
    'Competitive',
    'Proof',
    'Enablement',
    'Measurement',
    'Alignment',
    'Activation',
  ];

  const spokeRadius = 140;
  const spokes = spokeLabels.map((label, i) => {
    const angle = (i * 45 * Math.PI) / 180 - Math.PI / 2;
    const x = 150 + spokeRadius * Math.cos(angle);
    const y = 150 + spokeRadius * Math.sin(angle);
    return { label, x, y, angle };
  });

  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="hero-container"
      >
        {/* Left Column */}
        <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Eyebrow */}
          <div style={{ ...fadeUp(0), display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '16px',
                backgroundColor: '#2D6A4F',
                marginRight: '10px',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#2D6A4F',
                fontWeight: 500,
              }}
            >
              LAUNCH INTELLIGENCE&trade;
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              ...fadeUp(0.1),
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              color: '#1E3A5F',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Pressure-Test Your Product Launch
            <br className="hidden sm:block" />
            {' '}Before the Market Does
          </h1>

          {/* Subheadline */}
          <p
            style={{
              ...fadeUp(0.2),
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '18px',
              color: '#4A5568',
              lineHeight: 1.6,
              maxWidth: '480px',
              marginTop: '20px',
              marginBottom: 0,
            }}
          >
            HighSignals gives B2B SaaS &amp; AI companies a pressure-tested launch plan built to perform under real
            market scrutiny.
          </p>

          {/* CTAs */}
          <div style={{ ...fadeUp(0.3), display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '28px', alignItems: 'center' }}>
            <button
              style={{
                background: '#2D6A4F',
                color: '#ffffff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                padding: '14px 28px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1E5040')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2D6A4F')}
            >
              Get Your Launch Readiness Score &rarr;
            </button>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#1E3A5F',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              See How It Works
            </button>
          </div>

          {/* Trust line */}
          <p
            style={{
              ...fadeUp(0.4),
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              color: '#718096',
              marginTop: '16px',
              marginBottom: 0,
            }}
          >
            Takes ~5 minutes &nbsp;&middot;&nbsp; Executive-level output &nbsp;&middot;&nbsp; No commitment
          </p>
        </div>

        {/* Right Column */}
        <div
          className="hero-right"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="animate-pulse-slow"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #EBF5EE 0%, #ffffff 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <svg viewBox="0 0 300 300" width="300" height="300">
              {/* Spoke lines */}
              {spokes.map((s, i) => (
                <line
                  key={`spoke-${i}`}
                  x1={150}
                  y1={150}
                  x2={s.x}
                  y2={s.y}
                  stroke="#E2E8F0"
                  strokeWidth={0.5}
                />
              ))}

              {/* Concentric arcs */}
              <circle {...arcProps(130, 8, '#3EBF70', 0.4)} />
              <circle {...arcProps(105, 6, '#2D6A4F', 0.6)} />
              <circle {...arcProps(80, 5, '#1E7A48', 0.8)} />
              <circle {...arcProps(55, 4, '#A8DFB8', 0.5)} />

              {/* Spoke labels */}
              {spokes.map((s, i) => (
                <text
                  key={`label-${i}`}
                  x={s.x}
                  y={s.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '10px',
                    fill: '#4A5568',
                  }}
                >
                  {s.label}
                </text>
              ))}

              {/* Center dot */}
              <circle cx={150} cy={150} r={4} fill="#2D6A4F" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .hero-container {
          flex-direction: column;
        }
        .hero-left {
          width: 100%;
        }
        .hero-right {
          display: none !important;
        }
        @media (min-width: 768px) {
          .hero-container {
            flex-direction: row !important;
          }
          .hero-left {
            width: 55%;
          }
          .hero-right {
            display: flex !important;
            width: 45%;
          }
        }
      `}</style>
    </section>
  );
}
