import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Verticals', to: '#' },
  { label: 'Results', to: '#' },
  { label: 'Resources', to: '#' },
  { label: 'About', to: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (to) => {
    if (to === '#') return false
    return location.pathname === to
  }

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-200"
      style={{
        backgroundColor: scrolled || mobileOpen ? '#FFFFFF' : 'transparent',
        borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link
          to="/"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '20px',
            fontWeight: 700,
            color: '#1E3A5F',
            textDecoration: 'none',
          }}
        >
          HighSignals
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="relative"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: isActive(to) ? '#2D6A4F' : '#4A5568',
                textDecoration: 'none',
                paddingBottom: '4px',
                borderBottom: isActive(to) ? '2px solid #2D6A4F' : '2px solid transparent',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive(to)) e.currentTarget.style.color = '#1E3A5F'
              }}
              onMouseLeave={(e) => {
                if (!isActive(to)) e.currentTarget.style.color = '#4A5568'
              }}
            >
              {label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="#"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: '#FFFFFF',
              backgroundColor: '#2D6A4F',
              padding: '10px 20px',
              borderRadius: '6px',
              border: 'none',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1E5040')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2D6A4F')}
          >
            Get Your Readiness Score
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span
            className="block w-5 h-[2px] transition-all duration-200"
            style={{
              backgroundColor: '#4A5568',
              transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-[2px] transition-all duration-200"
            style={{
              backgroundColor: '#4A5568',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[2px] transition-all duration-200"
            style={{
              backgroundColor: '#4A5568',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden w-full px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                letterSpacing: '0.05em',
                color: isActive(to) ? '#2D6A4F' : '#4A5568',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid #F1F5F9',
                fontWeight: isActive(to) ? 600 : 400,
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="#"
            className="text-center"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: '#FFFFFF',
              backgroundColor: '#2D6A4F',
              padding: '12px 20px',
              borderRadius: '6px',
              border: 'none',
              textDecoration: 'none',
              cursor: 'pointer',
              marginTop: '4px',
            }}
          >
            Get Your Readiness Score
          </Link>
        </div>
      )}
    </nav>
  )
}
