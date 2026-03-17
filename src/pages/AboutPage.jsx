import React from 'react';

const teamMembers = [
  { name: 'Brett House', title: 'Founder and CEO' },
  { name: 'Marc Sabatini', title: 'Managing Partner & CCO' },
  { name: 'Jerome Samson', title: 'Head of Product Marketing Strategy, Fractional' },
  { name: 'Chris Yeich', title: 'Head of Content Strategy, Fractional' },
  { name: 'Janelle Comella', title: 'Marketing & Media Associate' },
];

const advisors = [
  { name: 'Rio Longacre', title: 'Partner at Credera/Omnicom' },
  { name: 'Gregory Fleischmann', title: 'Director at WilmerHale' },
  { name: 'Ellen Boyle', title: 'Founder ERB Advisory; Former CCO S&P' },
  { name: 'Sal Fuentes', title: 'CEO Decision Counsel' },
  { name: 'Caroline McCrory', title: 'CCO MediaRadar' },
  { name: 'Judah Phillips', title: 'Chief AI & Product Officer, Market Holdings' },
  { name: 'Ben Billingsley', title: 'Founder Broadsheet Communications' },
  { name: 'Michael Schoen', title: 'CPO Simpli.fi' },
  { name: 'Jeff Nicholson', title: 'CEO Tracer' },
  { name: 'Lauren Amira', title: 'VP MediaRadar' },
  { name: 'Steve Silvers', title: 'CPO Guideline.ai' },
];

const values = [
  {
    number: '01',
    title: 'Do Good Work With Good People',
    description: 'We show up with integrity and impact. We are obsessed with helping clients win and being the partner they trust.',
  },
  {
    number: '02',
    title: 'Make the Complex Clear',
    description: 'We simplify noisy markets, messy data, and complicated products into narratives that accelerate decisions.',
  },
  {
    number: '03',
    title: 'Operate With Evidence',
    description: 'Data and market signals, not opinions, guide how we think, design, and execute.',
  },
  {
    number: '04',
    title: 'Move Fast, With Precision',
    description: 'We pair urgency with discipline, because speed matters, but accuracy wins.',
  },
  {
    number: '05',
    title: 'Build Systems, Not Silos',
    description: 'We turn fragmented go-to-market motions into connected engines that scale.',
  },
];

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(160deg, #1E3A5F, #2D4A6A)',
          padding: '120px 0 80px',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 700,
              color: '#fff',
              margin: 0,
            }}
          >
            Our North Star: Make Product Launches Winnable
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '18px',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '640px',
              lineHeight: 1.6,
              marginTop: '20px',
            }}
          >
            HighSignals is a Launch Intelligence company that gives B2B software &amp; AI companies
            a pressure-tested launch plan built to perform under real market scrutiny. The goal:
            improve go-to-market quality, velocity &amp; impact without adding headcount.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#2D6A4F',
              textAlign: 'center',
              marginBottom: '16px',
              marginTop: 0,
            }}
          >
            THE HIGHSIGNALS TEAM
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              color: '#1E3A5F',
              textAlign: 'center',
              marginBottom: '48px',
              marginTop: 0,
            }}
          >
            Built by Operators, For Operators
          </h2>
          <div
            style={{
              display: 'grid',
              gap: '24px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
            className="team-grid"
          >
            {teamMembers.map((member) => (
              <div key={member.name} style={{ textAlign: 'center', padding: '32px' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #EBF5EE, #C6E6D0)',
                    margin: '0 auto',
                  }}
                />
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1E3A5F',
                    marginTop: '16px',
                    marginBottom: 0,
                  }}
                >
                  {member.name}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    color: '#718096',
                    marginTop: '4px',
                    marginBottom: 0,
                  }}
                >
                  {member.title}
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '12px',
                    color: '#2D6A4F',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1E5040')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#2D6A4F')}
                >
                  <LinkedInIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORY BOARD */}
      <section style={{ background: '#F8F9FA', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#2D6A4F',
              textAlign: 'center',
              marginBottom: '16px',
              marginTop: 0,
            }}
          >
            ADVISORY BOARD
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              color: '#1E3A5F',
              textAlign: 'center',
              marginBottom: '48px',
              marginTop: 0,
            }}
          >
            Guided by Industry Leaders
          </h2>
          <div
            style={{
              display: 'grid',
              gap: '20px',
            }}
            className="advisory-grid"
          >
            {advisors.map((advisor) => (
              <div key={advisor.name} style={{ textAlign: 'center', padding: '24px' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #EBF5EE, #C6E6D0)',
                    margin: '0 auto',
                  }}
                />
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1E3A5F',
                    marginTop: '12px',
                    marginBottom: 0,
                  }}
                >
                  {advisor.name}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    color: '#718096',
                    marginTop: '4px',
                    lineHeight: 1.4,
                    marginBottom: 0,
                  }}
                >
                  {advisor.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section style={{ background: '#1E3A5F', padding: '80px 0', color: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              color: '#fff',
              textAlign: 'center',
              marginBottom: '48px',
              marginTop: 0,
            }}
          >
            What We Stand For
          </h2>
          <div>
            {values.map((value, index) => (
              <div
                key={value.number}
                style={{
                  position: 'relative',
                  padding: '24px 0',
                  borderBottom:
                    index < values.length - 1
                      ? '1px solid rgba(255,255,255,0.1)'
                      : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '64px',
                    color: 'rgba(255,255,255,0.08)',
                    position: 'absolute',
                    top: '16px',
                    left: 0,
                    lineHeight: 1,
                  }}
                >
                  {value.number}
                </span>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#fff',
                    marginLeft: '60px',
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  {value.title}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.6,
                    marginLeft: '60px',
                    marginTop: '8px',
                    marginBottom: 0,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive grid styles */}
      <style>{`
        .team-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .advisory-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .advisory-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
          .advisory-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
