import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Contact from '../sections/Contact'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
