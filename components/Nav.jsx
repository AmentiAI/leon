'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

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
        <Image src="/logo.png" alt="C&C Car & CPU Repair logo" width={32} height={32} style={{ objectFit: 'contain', borderRadius: 6 }} priority />
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
