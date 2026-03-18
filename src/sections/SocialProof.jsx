/* Stylized company wordmark logos as SVG for the trusted-by marquee */

function NielsenLogo() {
  return (
    <svg width="90" height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em' }} fill="currentColor">
        nielsen
      </text>
    </svg>
  )
}

function DoubleVerifyLogo() {
  return (
    <svg width="130" height="28" viewBox="0 0 130 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em' }} fill="currentColor">
        DoubleVerify
      </text>
      <rect x="0" y="24" width="16" height="2" rx="1" fill="#3EBF70" opacity="0.6" />
    </svg>
  )
}

function NeustarLogo() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '17px', fontWeight: 700, letterSpacing: '-0.01em' }} fill="currentColor">
        Neustar
      </text>
      <circle cx="72" cy="7" r="3" fill="#3EBF70" opacity="0.5" />
    </svg>
  )
}

function TransUnionLogo() {
  return (
    <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em' }} fill="currentColor">
        TransUnion
      </text>
      <path d="M0 24 L20 24" stroke="#3EBF70" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    </svg>
  )
}

function MediaRadarLogo() {
  return (
    <svg width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em' }} fill="currentColor">
        MediaRadar
      </text>
      <circle cx="5" cy="7" r="2.5" fill="#3EBF70" opacity="0.5" />
      <circle cx="12" cy="7" r="2.5" fill="#3EBF70" opacity="0.3" />
    </svg>
  )
}

function KantarLogo() {
  return (
    <svg width="75" height="28" viewBox="0 0 75 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, letterSpacing: '0.03em' }} fill="currentColor">
        Kantar
      </text>
    </svg>
  )
}

function NumeratorLogo() {
  return (
    <svg width="105" height="28" viewBox="0 0 105 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 600, letterSpacing: '0.01em' }} fill="currentColor">
        Numerator
      </text>
      <rect x="0" y="24" width="8" height="2" rx="1" fill="#3EBF70" opacity="0.4" />
      <rect x="10" y="24" width="8" height="2" rx="1" fill="#3EBF70" opacity="0.25" />
    </svg>
  )
}

const logos = [
  { key: 'nielsen', Component: NielsenLogo },
  { key: 'doubleverify', Component: DoubleVerifyLogo },
  { key: 'neustar', Component: NeustarLogo },
  { key: 'transunion', Component: TransUnionLogo },
  { key: 'mediaradar', Component: MediaRadarLogo },
  { key: 'kantar', Component: KantarLogo },
  { key: 'numerator', Component: NumeratorLogo },
]

function LogoPill({ Component }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(226, 232, 240, 0.5)',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '10px 24px',
        borderRadius: '10px',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        transition: 'all 0.3s ease',
        height: '48px',
      }}
    >
      <Component />
    </span>
  )
}

export default function SocialProof() {
  return (
    <section
      style={{
        width: '100%',
        background: 'rgba(255, 255, 255, 0.02)',
        padding: '24px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <span
          className="hidden sm:block"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(226, 232, 240, 0.3)',
            whiteSpace: 'nowrap',
            marginRight: '32px',
          }}
        >
          TRUSTED BY
        </span>

        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div
            className="marquee-track"
            style={{ display: 'flex', gap: '20px' }}
          >
            {/* Duplicate the set for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <LogoPill key={`${logo.key}-${i}`} Component={logo.Component} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
