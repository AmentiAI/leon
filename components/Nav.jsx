'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/pricing',  label: 'Pricing' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo" onClick={close}>
        <div className="logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        C&amp;C Care
      </Link>

      <ul className={`nav-links ${open ? 'open' : ''}`} id="navLinks">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? 'active' : ''}
              onClick={close}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            className={`nav-cta${pathname === '/contact' ? ' active' : ''}`}
            onClick={close}
          >
            Book Now
          </Link>
        </li>
      </ul>

      <button
        className={`hamburger ${open ? 'open' : ''}`}
        id="hamburger"
        aria-label="Menu"
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
