/**
 * HighSignals Logo — Sharp circular derivation
 *
 * Inspired by the original: circular form, radiating segmented elements, central focal point.
 * Modernized: replaced soft arcs with sharp geometric wedges/blades radiating from center.
 * The segments vary in length and thickness — some are bold data "bursts", others are thin
 * precision lines. Creates a turbine/compass/radar-lock feel.
 * Center uses a clean crosshair instead of an "H" — reads as precision/targeting.
 */

export default function Logo({ size = 'default', showWordmark = true, iconOnly = false }) {
  const sizes = {
    small: { icon: 34, text: 17, gap: 8 },
    default: { icon: 38, text: 21, gap: 10 },
    large: { icon: 52, text: 30, gap: 14 },
    xl: { icon: 80, text: 0, gap: 0 },
  }

  const s = sizes[size] || sizes.default
  const uid = `hs${s.icon}`
  const C = 50 // center

  // Each blade: angle (deg), inner radius, outer radius, width (stroke), opacity
  const blades = [
    // Top cluster
    { angle: -90, r1: 20, r2: 42, w: 5, o: 1 },
    { angle: -70, r1: 24, r2: 36, w: 3, o: 0.6 },
    { angle: -110, r1: 22, r2: 34, w: 3, o: 0.6 },

    // Right cluster
    { angle: 0, r1: 20, r2: 44, w: 5, o: 0.9 },
    { angle: 18, r1: 26, r2: 38, w: 2.5, o: 0.5 },
    { angle: -18, r1: 24, r2: 36, w: 2.5, o: 0.5 },

    // Bottom cluster
    { angle: 90, r1: 20, r2: 40, w: 5, o: 0.85 },
    { angle: 108, r1: 26, r2: 34, w: 3, o: 0.5 },
    { angle: 72, r1: 24, r2: 35, w: 3, o: 0.5 },

    // Left cluster
    { angle: 180, r1: 20, r2: 42, w: 5, o: 0.95 },
    { angle: 198, r1: 24, r2: 36, w: 2.5, o: 0.55 },
    { angle: 162, r1: 26, r2: 37, w: 2.5, o: 0.55 },

    // Diagonal accents — thin precision lines
    { angle: -45, r1: 28, r2: 40, w: 1.5, o: 0.35 },
    { angle: 45, r1: 30, r2: 42, w: 1.5, o: 0.3 },
    { angle: 135, r1: 28, r2: 38, w: 1.5, o: 0.35 },
    { angle: -135, r1: 30, r2: 40, w: 1.5, o: 0.3 },
  ]

  const toRad = (d) => (d * Math.PI) / 180

  const IconMark = ({ w }) => (
    <svg
      width={w}
      height={w}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id={`${uid}g`} x1="10" y1="50" x2="90" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3EBF70" />
          <stop offset="100%" stopColor="#5AEAA8" />
        </linearGradient>
      </defs>

      {/* Radiating blades */}
      {blades.map((b, i) => {
        const rad = toRad(b.angle)
        const x1 = C + b.r1 * Math.cos(rad)
        const y1 = C + b.r1 * Math.sin(rad)
        const x2 = C + b.r2 * Math.cos(rad)
        const y2 = C + b.r2 * Math.sin(rad)
        return (
          <line
            key={i}
            x1={x1.toFixed(1)} y1={y1.toFixed(1)}
            x2={x2.toFixed(1)} y2={y2.toFixed(1)}
            stroke={`url(#${uid}g)`}
            strokeWidth={b.w}
            strokeLinecap="round"
            opacity={b.o}
          />
        )
      })}

      {/* Center crosshair ring */}
      <circle cx={C} cy={C} r="13" stroke={`url(#${uid}g)`} strokeWidth="2" opacity="0.7" />

      {/* Crosshair lines — short, sharp, inside the ring */}
      <line x1="50" y1="40" x2="50" y2="45" stroke={`url(#${uid}g)`} strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="55" x2="50" y2="60" stroke={`url(#${uid}g)`} strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="50" x2="45" y2="50" stroke={`url(#${uid}g)`} strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="50" x2="60" y2="50" stroke={`url(#${uid}g)`} strokeWidth="2" strokeLinecap="round" />

      {/* Center dot */}
      <circle cx={C} cy={C} r="2.5" fill={`url(#${uid}g)`} />
    </svg>
  )

  if (iconOnly) {
    return <IconMark w={s.icon} />
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: `${s.gap}px` }}>
      <IconMark w={s.icon} />
      {showWordmark && (
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: `${s.text}px`,
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          <span style={{ color: '#E2E8F0' }}>High</span>
          <span style={{ color: '#4FE0A0' }}>Signals</span>
        </span>
      )}
    </span>
  )
}
