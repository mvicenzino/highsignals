import Deliverables from '../sections/Deliverables'
import DiagnosticCTA from '../sections/DiagnosticCTA'

const steps = [
  {
    num: 1,
    title: 'Diagnostic',
    description:
      'Run the Launch Readiness Diagnostic to establish your baseline score across 8 dimensions',
  },
  {
    num: 2,
    title: 'Strategy Session',
    description:
      '60-minute working session to review your score, identify your highest-risk gaps, and map your launch timeline',
  },
  {
    num: 3,
    title: 'Playbook Build',
    description:
      'HighSignals delivers all six Launch Intelligence\u2122 frameworks, customized for your product, market, and team',
  },
  {
    num: 4,
    title: 'Launch & Measure',
    description:
      'Go-live with a 30-day executive impact readout and ongoing support through the GTM Control Tower',
  },
]

const engagements = [
  {
    name: 'Diagnostic Sprint',
    highlighted: false,
    bestFor:
      'Teams preparing for an upcoming launch who want clarity fast',
    included:
      '2-week engagement, delivers Launch Readiness Score + prioritized gap report + 1 strategy session',
    cta: 'Book a Diagnostic',
  },
  {
    name: 'Launch Playbook',
    highlighted: true,
    bestFor:
      'Companies 60\u201390 days from launch who need a complete GTM plan',
    included:
      '4\u20136 week engagement, delivers all 6 Launch Intelligence\u2122 frameworks + field enablement + measurement system',
    cta: 'Start the Conversation',
  },
  {
    name: 'GTM Control Tower',
    highlighted: false,
    bestFor:
      'Post-launch teams who need ongoing readiness and pipeline visibility',
    included:
      'Ongoing retainer, monthly reporting + enablement updates + executive readout',
    cta: "Let\u2019s Talk",
  },
]

const labelStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: '#3EBF70',
  textAlign: 'center',
  marginBottom: '16px',
}

const greenBtnStyle = {
  background: '#2D6A4F',
  color: '#FFFFFF',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  fontWeight: 500,
  padding: '14px 28px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
}

export default function SolutionsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ width: '100%', background: 'linear-gradient(160deg, #0D1B2A 0%, #142D4A 50%, #0F2235 100%)', padding: '120px 0 80px' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Launch Intelligence for the Moments That Matter Most
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              margin: '12px auto 0',
              lineHeight: 1.6,
            }}
          >
            HighSignals gives B2B software &amp; AI companies a pressure-tested launch plan
            built to perform under real market scrutiny.
          </p>
          <button
            className="btn-glass-primary"
            style={{
              marginTop: '28px',
            }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Run the Readiness Diagnostic&trade;
          </button>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '12px',
            }}
          >
            Takes ~5 minutes &nbsp;|&nbsp; Executive-level output &nbsp;|&nbsp; No commitment
          </p>
        </div>
      </section>

      {/* ── HOW WE ENGAGE ── */}
      <section style={{ width: '100%', background: '#0B1929', padding: '100px 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={labelStyle}>THE PROCESS</p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              color: '#E2E8F0',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            How a HighSignals Engagement Works
          </h2>

          {/* Desktop process flow */}
          <div className="process-flow-desktop">
            {steps.map((step, i) => (
              <div key={step.num} style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
                {/* Connector line between circles */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: 'calc(50% + 20px)',
                      right: 'calc(-50% + 20px)',
                      borderTop: '2px dashed rgba(255, 255, 255, 0.1)',
                    }}
                  />
                )}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#2D6A4F',
                    color: '#FFFFFF',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 4px 12px rgba(45, 106, 79, 0.25)',
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#E2E8F0',
                    marginTop: '16px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(226, 232, 240, 0.6)',
                    lineHeight: 1.6,
                    maxWidth: '220px',
                    margin: '8px auto 0',
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile process flow */}
          <div className="process-flow-mobile">
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{ display: 'flex', flexDirection: 'row', gap: '16px', position: 'relative' }}
              >
                {/* Vertical connector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#2D6A4F',
                      color: '#FFFFFF',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(45, 106, 79, 0.25)',
                    }}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        borderLeft: '2px dashed rgba(255, 255, 255, 0.1)',
                        minHeight: '24px',
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingBottom: i < steps.length - 1 ? '24px' : 0 }}>
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#E2E8F0',
                      margin: 0,
                      lineHeight: '40px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      color: 'rgba(226, 232, 240, 0.6)',
                      lineHeight: 1.6,
                      marginTop: '4px',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section style={{ width: '100%', background: '#0E1E30', padding: '100px 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={labelStyle}>ENGAGEMENT OPTIONS</p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              color: '#E2E8F0',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Choose Your Path
          </h2>

          <div className="engagement-grid">
            {engagements.map((eng) => (
              <div
                key={eng.name}
                className="engagement-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                  ...(eng.highlighted ? { borderTop: '3px solid #3EBF70' } : {}),
                  position: 'relative',
                }}
              >
                {eng.highlighted && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#2D6A4F',
                      background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.1), rgba(62, 191, 112, 0.08))',
                      padding: '4px 10px',
                      border: '1px solid rgba(45, 106, 79, 0.1)',
                      borderRadius: '6px',
                    }}
                  >
                    Most Popular
                  </span>
                )}

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#E2E8F0',
                    margin: 0,
                  }}
                >
                  {eng.name}
                </h3>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'rgba(226, 232, 240, 0.4)',
                    marginTop: '16px',
                    marginBottom: 0,
                  }}
                >
                  BEST FOR
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(226, 232, 240, 0.55)',
                    marginTop: '4px',
                    lineHeight: 1.5,
                  }}
                >
                  {eng.bestFor}
                </p>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(226, 232, 240, 0.55)',
                    lineHeight: 1.8,
                    marginTop: '20px',
                  }}
                >
                  {eng.included}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
                  <button
                    className="btn-glass-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                    }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {eng.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES (reused) ── */}
      <Deliverables />

      {/* ── DIAGNOSTIC CTA (reused) ── */}
      <DiagnosticCTA />

      {/* ── Responsive styles ── */}
      <style>{`
        .process-flow-desktop {
          display: flex;
          flex-direction: row;
        }
        .process-flow-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .process-flow-desktop {
            display: none;
          }
          .process-flow-mobile {
            display: flex;
            flex-direction: column;
          }
        }
        .engagement-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .engagement-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
