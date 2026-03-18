import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const smoothScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      smoothScrollTo(sectionId)
    } else {
      navigate('/')
      setTimeout(() => smoothScrollTo(sectionId), 150)
    }
  }
  return (
    <footer style={{ background: 'linear-gradient(160deg, #070E18 0%, #0B1929 100%)' }} className="w-full pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">

          {/* Column 1: Brand */}
          <div className="flex-1">
            <Logo size="default" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px' }}
              className="text-white/80 mt-3"
            >
              Launch Intelligence for B2B SaaS &amp; AI
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex-1">
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#3EBF70',
              }}
              className="uppercase mb-4 font-semibold"
            >
              Quick Links
            </h4>
            <nav className="flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: '2.2' }}>
              <Link to="/solutions" className="text-white/80 hover:text-white transition-colors">Solutions</Link>
              <span onClick={() => scrollToSection('solutions')} className="text-white/80 hover:text-white transition-colors" style={{ cursor: 'pointer' }}>Verticals</span>
              <span onClick={() => scrollToSection('results')} className="text-white/80 hover:text-white transition-colors" style={{ cursor: 'pointer' }}>Results</span>
              <span onClick={() => scrollToSection('resources')} className="text-white/80 hover:text-white transition-colors" style={{ cursor: 'pointer' }}>Resources</span>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex-1">
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#3EBF70',
              }}
              className="uppercase mb-4 font-semibold"
            >
              Contact
            </h4>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px' }}
              className="text-white/80"
            >
              971 US Highway 202N Ste N<br />
              Branchburg, NJ 08876
            </p>
            <span
              onClick={() => scrollToSection('contact')}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#3EBF70', cursor: 'pointer' }}
              className="inline-block mt-4 hover:underline transition-colors"
            >
              Start the Conversation &rarr;
            </span>
          </div>

        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ background: 'rgba(0, 0, 0, 0.2)' }} className="w-full mt-10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px' }}
            className="text-white/50"
          >
            &copy; 2025-26 High Signals LLC. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
