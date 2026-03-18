import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 2500, trigger = false) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();

    function animate(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration, trigger]);

  return value;
}

const metrics = [
  { target: 7, suffix: 'x', label: 'revenue growth', source: 'Nielsen' },
  { target: 154, suffix: '%', label: 'increase in ARR', source: 'Neustar' },
  { target: 17, prefix: '$', suffix: 'M+', label: 'in new pipeline', source: 'MediaRadar' },
];

const testimonials = [
  {
    quote:
      'HighSignals brings rare clarity to a complex MarTech world, creating momentum that drives real brand impact. They pair disciplined GTM strategy with an unwavering focus on delivering a message buyers understand and trust.',
    name: 'Mark Zagorski',
    role: 'Chief Executive Officer, DoubleVerify',
    photo: '/headshots/mark-zagorski.webp',
  },
  {
    quote:
      'HighSignals delivered the GTM strategy and leadership that reshaped our market presence, drove double-digit growth, and supported our acquisition by TransUnion. They are MarTech and AdTech authorities, and it shows.',
    name: 'Steve Silvers',
    role: 'Chief Product Officer, Neustar',
    photo: '/headshots/steve-silvers.jpg',
  },
];

const caseStudyMetrics = [
  { number: '$17M', label: 'in incremental pipeline' },
  { number: '$4.3M', label: 'in closed ARR' },
  { number: '1,200', label: 'sales meetings in 7 quarters' },
];

function MetricItem({ target, prefix, suffix, label, source, triggered }) {
  const value = useCountUp(target, 2500, triggered);

  return (
    <div style={{ textAlign: 'center', padding: '0 32px' }}>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '64px',
          fontWeight: 700,
          color: '#3EBF70',
          lineHeight: 1.1,
        }}
      >
        {prefix || ''}
        {value}
        {suffix || ''}
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          color: 'rgba(226, 232, 240, 0.6)',
          marginTop: '4px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          color: 'rgba(226, 232, 240, 0.35)',
          marginTop: '4px',
        }}
      >
        {source}
      </div>
    </div>
  );
}

function TestimonialCard({ quote, name, role, photo }) {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
        padding: '32px',
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '64px',
          color: 'rgba(62, 191, 112, 0.15)',
          lineHeight: 0,
          marginBottom: '-8px',
        }}
      >
        &ldquo;
      </div>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          color: 'rgba(226, 232, 240, 0.8)',
          lineHeight: 1.7,
          fontStyle: 'italic',
          margin: 0,
        }}
      >
        {quote}
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginTop: '20px',
        }}
      >
        <img
          src={photo}
          alt={name}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid rgba(62, 191, 112, 0.2)',
            flexShrink: 0,
          }}
        />
        <div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#E2E8F0',
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              color: 'rgba(226, 232, 240, 0.45)',
            }}
          >
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  const metricsRef = useRef(null);
  const [metricsVisible, setMetricsVisible] = useState(false);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ width: '100%', background: '#0E1E30', padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Label */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#3EBF70',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          WHERE LAUNCH INTELLIGENCE BECOMES REVENUE IMPACT
        </div>

        {/* Headline Metrics — Desktop */}
        <div
          ref={metricsRef}
          className="results-metrics-desktop"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {metrics.map((m, i) => (
            <div key={i} style={{ display: 'contents' }}>
              {i > 0 && (
                <div
                  style={{
                    width: '1px',
                    height: '80px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    flexShrink: 0,
                  }}
                />
              )}
              <MetricItem {...m} triggered={metricsVisible} />
            </div>
          ))}
        </div>

        {/* Headline Metrics — Mobile */}
        <div
          className="results-metrics-mobile"
          style={{
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {metrics.map((m, i) => (
            <div key={i}>
              {i > 0 && (
                <div
                  style={{
                    height: '1px',
                    width: '120px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    margin: '24px auto',
                  }}
                />
              )}
              <MetricItem {...m} triggered={metricsVisible} />
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: '24px',
            marginTop: '60px',
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* MediaRadar Case Study */}
        <div
          style={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
            padding: '40px',
            marginTop: '40px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              color: '#3EBF70',
              background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.1), rgba(62, 191, 112, 0.08))',
              border: '1px solid rgba(45, 106, 79, 0.1)',
              padding: '4px 10px',
              borderRadius: '6px',
              display: 'inline-block',
              marginBottom: '20px',
            }}
          >
            CASE STUDY
          </div>

          <div
            className="results-casestudy-columns"
            style={{
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            {/* Left Column */}
            <div style={{ flex: '1 1 400px', minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#E2E8F0',
                  marginBottom: '8px',
                }}
              >
                Challenge
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(226, 232, 240, 0.6)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Three acquired platforms needed one unified launch readiness system aligning
                product, marketing, sales &amp; CS into a single growth engine.
              </p>

              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#E2E8F0',
                  marginTop: '20px',
                  marginBottom: '8px',
                }}
              >
                Solution
              </div>
              <ul
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(226, 232, 240, 0.6)',
                  lineHeight: 1.8,
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                  margin: 0,
                }}
              >
                <li>Led post-M&amp;A product launch transformation at MediaRadar</li>
                <li>
                  Evolved from legacy point solution to category-leading marketing intelligence
                  platform
                </li>
              </ul>
            </div>

            {/* Right Column — Impact Metrics */}
            <div
              style={{
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                justifyContent: 'center',
              }}
            >
              {caseStudyMetrics.map((m, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#3EBF70',
                      lineHeight: 1.1,
                    }}
                  >
                    {m.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13px',
                      color: 'rgba(226, 232, 240, 0.6)',
                      marginTop: '4px',
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .results-metrics-desktop {
            display: none !important;
          }
          .results-metrics-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
