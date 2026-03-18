import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Playbook', section: 'solutions' },
  { label: 'Results', section: 'results' },
  { label: 'Resources', section: 'resources' },
  { label: 'About', to: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (link) => {
    if (link.to) return location.pathname === link.to
    return false
  }

  const smoothScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (!el) return
    const navHeight = 80 // nav height + a little breathing room
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const scrollToSection = useCallback((sectionId) => {
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => smoothScrollTo(sectionId), 150)
    } else {
      smoothScrollTo(sectionId)
    }
  }, [location.pathname, navigate])

  const linkStyle = (link) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '13px',
    fontWeight: isActive(link) ? 500 : 400,
    letterSpacing: '0.03em',
    color: isActive(link) ? '#3EBF70' : 'rgba(226, 232, 240, 0.6)',
    textDecoration: 'none',
    paddingBottom: '4px',
    borderBottom: isActive(link) ? '2px solid #3EBF70' : '2px solid transparent',
    cursor: 'pointer',
  })

  const mobileLinkStyle = (link) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '14px',
    letterSpacing: '0.03em',
    color: isActive(link) ? '#3EBF70' : 'rgba(226, 232, 240, 0.6)',
    textDecoration: 'none',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    fontWeight: isActive(link) ? 600 : 400,
    cursor: 'pointer',
    display: 'block',
  })

  const renderLink = (link, style) => {
    if (link.to) {
      return (
        <Link
          key={link.label}
          to={link.to}
          className="relative transition-colors duration-200"
          style={style}
          onMouseEnter={(e) => { if (!isActive(link)) e.currentTarget.style.color = '#E2E8F0' }}
          onMouseLeave={(e) => { if (!isActive(link)) e.currentTarget.style.color = 'rgba(226, 232, 240, 0.6)' }}
        >
          {link.label}
        </Link>
      )
    }
    return (
      <span
        key={link.label}
        role="button"
        tabIndex={0}
        className="relative transition-colors duration-200"
        style={style}
        onClick={() => scrollToSection(link.section)}
        onKeyDown={(e) => { if (e.key === 'Enter') scrollToSection(link.section) }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#E2E8F0' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(226, 232, 240, 0.6)' }}
      >
        {link.label}
      </span>
    )
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-glass' : ''}`}
      style={{
        ...(!scrolled && !mobileOpen ? {
          backgroundColor: 'transparent',
          borderBottom: '1px solid transparent',
        } : {}),
        ...(mobileOpen && !scrolled ? {
          backgroundColor: 'rgba(11, 25, 41, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        } : {}),
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
          <Logo size="default" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => renderLink(link, linkStyle(link)))}

          {/* CTA */}
          <span
            role="button"
            tabIndex={0}
            className="btn-glass-primary"
            style={{ padding: '10px 20px', fontSize: '13px' }}
            onClick={() => scrollToSection('resources')}
          >
            Get Your Readiness Score
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span className="block w-5 h-[2px] transition-all duration-300" style={{ backgroundColor: 'rgba(226, 232, 240, 0.7)', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span className="block w-5 h-[2px] transition-all duration-300" style={{ backgroundColor: 'rgba(226, 232, 240, 0.7)', opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-5 h-[2px] transition-all duration-300" style={{ backgroundColor: 'rgba(226, 232, 240, 0.7)', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden"
        style={{
          maxHeight: mobileOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: 'rgba(11, 25, 41, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
          {NAV_LINKS.map((link) => renderLink(link, mobileLinkStyle(link)))}
          <span
            role="button"
            tabIndex={0}
            className="btn-glass-primary"
            style={{ textAlign: 'center', justifyContent: 'center', marginTop: '8px' }}
            onClick={() => scrollToSection('resources')}
          >
            Get Your Readiness Score
          </span>
        </div>
      </div>
    </nav>
  )
}
