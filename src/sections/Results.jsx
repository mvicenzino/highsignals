import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
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
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
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
  },
  {
    quote:
      'HighSignals delivered the GTM strategy and leadership that reshaped our market presence, drove double-digit growth, and supported our acquisition by TransUnion. They are MarTech and AdTech authorities, and it shows.',
    name: 'Steve Silvers',
    role: 'Chief Product Officer, Neustar',
  },
];

const caseStudyMetrics = [
  { number: '$17M', label: 'in incremental pipeline' },
  { number: '$4.3M', label: 'in closed ARR' },
  { number: '1,200', label: 'sales meetings in 7 quarters' },
];

function MetricItem({ target, prefix, suffix, label, source }) {
  const { ref, value } = useCountUp(target);

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '0 32px' }}>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '64px',
          fontWeight: 700,
          color: '#2D6A4F',
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
          color: '#4A5568',
          marginTop: '4px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          color: '#A0AEC0',
          marginTop: '4px',
        }}
      >
        {source}
      </div>
    </div>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '8px',
        padding: '32px',
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '64px',
          color: '#EBF5EE',
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
          color: '#2D3748',
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
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#E2E8F0',
            flexShrink: 0,
          }}
        />
        <div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#1E3A5F',
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              color: '#718096',
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
  return (
    <section style={{ width: '100%', background: '#F8F9FA', padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Label */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#2D6A4F',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          WHERE LAUNCH INTELLIGENCE BECOMES REVENUE IMPACT
        </div>

        {/* Headline Metrics — Desktop */}
        <div
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
                    background: '#E2E8F0',
                    flexShrink: 0,
                  }}
                />
              )}
              <MetricItem {...m} />
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
                    background: '#E2E8F0',
                    margin: '24px auto',
                  }}
                />
              )}
              <MetricItem {...m} />
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
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
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
              color: '#2D6A4F',
              background: '#EBF5EE',
              padding: '4px 10px',
              borderRadius: '4px',
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
                  color: '#1E3A5F',
                  marginBottom: '8px',
                }}
              >
                Challenge
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  color: '#4A5568',
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
                  color: '#1E3A5F',
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
                  color: '#4A5568',
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
                      color: '#2D6A4F',
                      lineHeight: 1.1,
                    }}
                  >
                    {m.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13px',
                      color: '#4A5568',
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
