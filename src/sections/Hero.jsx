import { useState, useEffect, useRef } from 'react'

function FluidBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Blob 1 — large green, top right */}
      <div className="fluid-blob fluid-blob-1" style={{
        position: 'absolute',
        top: '-5%',
        right: '-5%',
        width: '55vw',
        maxWidth: '600px',
        aspectRatio: '1',
        background: '#14532d',
        opacity: 0.35,
        filter: 'blur(80px)',
      }} />

      {/* Blob 2 — teal accent, center */}
      <div className="fluid-blob fluid-blob-2" style={{
        position: 'absolute',
        top: '40%',
        right: '20%',
        width: '40vw',
        maxWidth: '450px',
        aspectRatio: '1',
        background: '#0f766e',
        opacity: 0.2,
        filter: 'blur(90px)',
      }} />

      {/* Blob 3 — deep blue, bottom left */}
      <div className="fluid-blob fluid-blob-3" style={{
        position: 'absolute',
        bottom: '-10%',
        left: '5%',
        width: '45vw',
        maxWidth: '500px',
        aspectRatio: '1',
        background: '#1e3a5f',
        opacity: 0.4,
        filter: 'blur(70px)',
      }} />

      {/* Blob 4 — emerald highlight, bottom right */}
      <div className="fluid-blob fluid-blob-4" style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '30vw',
        maxWidth: '350px',
        aspectRatio: '1',
        background: '#059669',
        opacity: 0.15,
        filter: 'blur(100px)',
      }} />

      {/* Blob 5 — warm accent for depth */}
      <div className="fluid-blob fluid-blob-2" style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: '25vw',
        maxWidth: '300px',
        aspectRatio: '1',
        background: '#164e63',
        opacity: 0.25,
        filter: 'blur(80px)',
        animationDelay: '-5s',
      }} />

      {/* Subtle grid lines */}
      <div className="grid-overlay" />
    </div>
  )
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  // Fix: use stable dot positions instead of Math.random() which changes on re-render
  const dotPositions = useRef(
    [0,1,2,3,4,5,6,7].map(() => 50 + Math.floor(Math.random() * 90))
  )

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const fadeUp = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
  })

  const dimensions = [
    'Narrative', 'Targeting', 'Competitive', 'Proof',
    'Enablement', 'Measurement', 'Alignment', 'Activation',
  ]

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0B1929 0%, #10263E 40%, #0D1F32 100%)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <FluidBackground />

      <div className="hero-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Left Column */}
        <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Eyebrow */}
          <div style={{ ...fadeUp(0), display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ display: 'inline-block', width: '2px', height: '16px', background: 'linear-gradient(to bottom, #2D6A4F, #3EBF70)', marginRight: '10px', flexShrink: 0, borderRadius: '1px' }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3EBF70', fontWeight: 500 }}>
              LAUNCH INTELLIGENCE&trade;
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ ...fadeUp(0.1), fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.12, margin: 0 }}>
            <span style={{ color: '#E2E8F0' }}>Pressure-Test Your</span>
            <br />
            <span style={{ color: '#E2E8F0' }}>Product Launch</span>
            <br />
            <span style={{ color: '#3EBF70' }}>Before the Market Does</span>
          </h1>

          {/* Subheadline */}
          <p style={{ ...fadeUp(0.2), fontFamily: "'DM Sans', sans-serif", fontSize: '17px', color: 'rgba(226, 232, 240, 0.65)', lineHeight: 1.7, maxWidth: '460px', marginTop: '24px', marginBottom: 0 }}>
            HighSignals gives B2B SaaS &amp; AI companies a pressure-tested launch plan built to perform under real market scrutiny.
          </p>

          {/* CTAs */}
          <div style={{ ...fadeUp(0.3), display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px', alignItems: 'center' }}>
            <button className="btn-glass-primary" style={{ fontSize: '15px', padding: '16px 32px' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Your Launch Readiness Score
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '4px' }}>
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-glass-secondary" onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </button>
          </div>

          {/* Trust line */}
          <div style={{ ...fadeUp(0.4), display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '24px' }}>
            {['Takes ~5 minutes', 'Executive-level output', 'No commitment'].map((text) => (
              <span key={text} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(226, 232, 240, 0.45)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="#3EBF70" strokeWidth="1.2" opacity="0.5"/>
                  <path d="M4.5 7L6.2 8.7L9.5 5.3" stroke="#3EBF70" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column — Radar Visual */}
        <div className="hero-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '380px', height: '380px' }}>
            {/* Ambient glow */}
            <div style={{
              position: 'absolute', inset: '-40px',
              background: 'radial-gradient(circle, rgba(62, 191, 112, 0.1) 0%, rgba(45, 106, 79, 0.05) 40%, transparent 70%)',
              borderRadius: '50%',
              animation: 'glow-pulse 4s ease-in-out infinite',
            }} />

            {/* Outer glass ring */}
            <div style={{
              position: 'absolute', inset: '0',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 0 60px rgba(255, 255, 255, 0.015)',
            }} />

            {/* SVG Radar */}
            <svg viewBox="0 0 380 380" width="380" height="380" style={{ position: 'relative', zIndex: 1 }}>
              {/* Rotating outer ring */}
              <g style={{ transformOrigin: '190px 190px', animation: 'rotate-slow 60s linear infinite' }}>
                <circle cx="190" cy="190" r="170" fill="none" stroke="rgba(62, 191, 112, 0.08)" strokeWidth="1" strokeDasharray="4 8" />
              </g>

              {/* Concentric rings */}
              {[140, 110, 80, 50].map((r, i) => (
                <circle key={r} cx="190" cy="190" r={r} fill="none"
                  stroke={`rgba(62, 191, 112, ${0.05 + i * 0.02})`}
                  strokeWidth="0.5"
                />
              ))}

              {/* Score arcs */}
              {[
                { r: 140, pct: 0.85, color: '#3EBF70', w: 3, delay: '0.5s' },
                { r: 110, pct: 0.72, color: '#2D6A4F', w: 3, delay: '0.8s' },
                { r: 80, pct: 0.9, color: '#3EBF70', w: 2.5, delay: '1.1s' },
                { r: 50, pct: 0.65, color: '#A8DFB8', w: 2, delay: '1.4s' },
              ].map(({ r, pct, color, w, delay }, i) => {
                const circ = 2 * Math.PI * r
                return (
                  <circle
                    key={i}
                    cx="190" cy="190" r={r}
                    fill="none"
                    stroke={color}
                    strokeWidth={w}
                    strokeLinecap="round"
                    strokeDasharray={`${circ * pct} ${circ * (1 - pct)}`}
                    strokeDashoffset={visible ? 0 : circ}
                    style={{
                      transformOrigin: '190px 190px',
                      transform: `rotate(${-90 + i * 25}deg)`,
                      transition: `stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}`,
                      opacity: 0.7,
                    }}
                  />
                )
              })}

              {/* Spokes + labels */}
              {dimensions.map((label, i) => {
                const angle = (i * 45 - 90) * Math.PI / 180
                const labelR = 158
                const x = 190 + labelR * Math.cos(angle)
                const y = 190 + labelR * Math.sin(angle)
                const lineEnd = 145
                const lx = 190 + lineEnd * Math.cos(angle)
                const ly = 190 + lineEnd * Math.sin(angle)
                const dotDist = dotPositions.current[i]
                const dx = 190 + dotDist * Math.cos(angle)
                const dy = 190 + dotDist * Math.sin(angle)

                return (
                  <g key={label}>
                    <line x1="190" y1="190" x2={lx} y2={ly} stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" />
                    <text
                      x={x} y={y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '9px',
                        fontWeight: 500,
                        fill: 'rgba(226, 232, 240, 0.5)',
                        letterSpacing: '0.03em',
                        opacity: visible ? 1 : 0,
                        transition: `opacity 0.5s ease ${0.8 + i * 0.1}s`,
                      }}
                    >
                      {label}
                    </text>
                    <circle
                      cx={dx} cy={dy} r={visible ? 4 : 0}
                      fill="#3EBF70"
                      style={{
                        transition: `r 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${1 + i * 0.1}s`,
                        filter: 'drop-shadow(0 0 6px rgba(62, 191, 112, 0.5))',
                      }}
                    />
                  </g>
                )
              })}

              {/* Center score */}
              <circle cx="190" cy="190" r="28" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(62, 191, 112, 0.15)" strokeWidth="1" />
              <text
                x="190" y="185"
                textAnchor="middle"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '22px',
                  fontWeight: 700,
                  fill: '#3EBF70',
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.6s ease 1.5s',
                }}
              >
                82
              </text>
              <text
                x="190" y="201"
                textAnchor="middle"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '7px',
                  fontWeight: 500,
                  fill: 'rgba(226, 232, 240, 0.45)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.6s ease 1.5s',
                }}
              >
                SCORE
              </text>

              <circle
                cx="190" cy="190" r="28"
                fill="none" stroke="#3EBF70" strokeWidth="1"
                opacity="0.3"
                style={{ animation: 'pulse-ring 3s ease-in-out infinite' }}
              />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .hero-container { flex-direction: column; }
        .hero-left { width: 100%; }
        .hero-right { display: none !important; }
        @media (min-width: 768px) {
          .hero-container { flex-direction: row !important; }
          .hero-left { width: 52%; }
          .hero-right { display: flex !important; width: 48%; }
        }

        @keyframes blob-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
          25% { transform: translate(40px, -30px) scale(1.08) rotate(5deg); border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%; }
          50% { transform: translate(-20px, 20px) scale(0.95) rotate(-3deg); border-radius: 60% 40% 50% 50% / 50% 50% 40% 60%; }
          75% { transform: translate(20px, 40px) scale(1.03) rotate(2deg); border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%; }
        }
        @keyframes blob-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%; }
          25% { transform: translate(-30px, 40px) scale(0.92) rotate(-4deg); border-radius: 60% 40% 60% 40% / 50% 50% 50% 50%; }
          50% { transform: translate(30px, -20px) scale(1.06) rotate(3deg); border-radius: 40% 60% 50% 50% / 60% 40% 60% 40%; }
          75% { transform: translate(-10px, -30px) scale(0.97) rotate(-2deg); border-radius: 55% 45% 45% 55% / 45% 55% 45% 55%; }
        }
        @keyframes blob-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 60% 40% 50% 50% / 50% 50% 40% 60%; }
          33% { transform: translate(25px, 35px) scale(1.1) rotate(6deg); border-radius: 45% 55% 60% 40% / 55% 45% 50% 50%; }
          66% { transform: translate(-35px, -15px) scale(0.93) rotate(-4deg); border-radius: 50% 50% 45% 55% / 40% 60% 55% 45%; }
        }
        @keyframes blob-drift-4 {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 55% 45% 50% 50% / 50% 50% 45% 55%; }
          50% { transform: translate(-25px, 25px) scale(1.05); border-radius: 45% 55% 55% 45% / 55% 45% 50% 50%; }
        }

        .fluid-blob-1 { animation: blob-drift-1 18s ease-in-out infinite; }
        .fluid-blob-2 { animation: blob-drift-2 22s ease-in-out infinite; }
        .fluid-blob-3 { animation: blob-drift-3 16s ease-in-out infinite; }
        .fluid-blob-4 { animation: blob-drift-4 20s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
