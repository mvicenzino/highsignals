import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
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
            <div className="flex gap-4 mt-5">
              {/* LinkedIn */}
              <span className="text-white/30" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', cursor: 'default', opacity: 0.4 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              {/* X (Twitter) */}
              <span className="text-white/30" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', cursor: 'default', opacity: 0.4 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              {/* YouTube */}
              <span className="text-white/30" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', cursor: 'default', opacity: 0.4 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </span>
            </div>
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
          <span
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', cursor: 'default', opacity: 0.4 }}
            className="text-white/50"
          >
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  )
}
