'use client'
import { useState, useEffect } from 'react'

export default function FloatingCallBtn() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="tel:+15551234567"
      className={`float-call${visible ? ' float-call--visible' : ''}`}
      aria-label="Call C&C Care"
    >
      <span className="float-call-pulse" />
      <span className="float-call-icon">📞</span>
      <span className="float-call-label">Call Now</span>
    </a>
  )
}
