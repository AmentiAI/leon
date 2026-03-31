'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = [
  {
    id: 0,
    img: '/slide1.png',
    alt: 'C&C Car & CPU Repair — Mobile Mechanic and Tech Repair',
    tag: '🔧 Certified Mobile Mechanic',
    title: 'Professional Auto Repair\nDelivered to Your Door',
    body: 'Brakes, oil changes, diagnostics, and more —\nno tow, no waiting room, same-day available.',
    cta: 'Book Auto Service',
    cta2: 'View Services',
    href: '/contact',
    href2: '/services',
    accent: '#3b82f6',
    localImg: true,
  },
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=90',
    alt: 'Computer circuit board close-up representing tech repair',
    tag: '💻 Certified Tech Specialist',
    title: 'Phone & Computer Repair\nAt Your Home or Office',
    body: 'Cracked screens, viruses, data recovery, upgrades —\nfixed on-site, usually the same day you call.',
    cta: 'Book Tech Repair',
    cta2: 'View Services',
    href: '/contact',
    href2: '/services',
    accent: '#6366f1',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=90',
    alt: 'Luxury vehicle representing premium mobile auto care',
    tag: '⭐ Satisfaction Guaranteed',
    title: 'Skip the Shop.\nWe Come to You.',
    body: 'Certified, insured, and background-checked technicians —\nhonest pricing, fast service, guaranteed results.',
    cta: 'Get a Free Quote',
    cta2: 'See Pricing',
    href: '/contact',
    href2: '/pricing',
    accent: '#22d3ee',
  },
]

const INTERVAL = 7000

export default function HeroCarousel() {
  const [current, setCurrent]   = useState(0)
  const [paused, setPaused]     = useState(false)
  const timerRef                = useRef(null)
  const [progKey, setProgKey]   = useState(0)

  const goTo = useCallback((idx) => {
    setCurrent(idx)
    setProgKey(k => k + 1)
  }, [])

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo])

  useEffect(() => {
    if (paused) { clearInterval(timerRef.current); return }
    timerRef.current = setInterval(next, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [current, paused, next])

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div key={slide.id} className={`c-slide${i === current ? ' active' : ''}`}>

          {/* Photo */}
          <div className="c-img-wrap">
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="c-img"
              style={slide.localImg ? { objectFit: 'contain', objectPosition: 'center' } : {}}
            />
          </div>

          {/* Dark gradient overlay */}
          <div className="c-overlay" style={slide.localImg ? { background: 'linear-gradient(to top, rgba(6,8,16,.98) 0%, rgba(6,8,16,.45) 50%, rgba(6,8,16,.15) 100%), linear-gradient(to right, rgba(6,8,16,.7) 0%, transparent 60%)' } : {}} />

          {/* Accent color haze */}
          <div
            className="c-color-haze"
            style={{ background: `radial-gradient(ellipse 70% 70% at 15% 80%, ${slide.accent}30 0%, transparent 70%)` }}
          />

          {/* Slide content */}
          <div className="c-content">
            <div className="c-tag">
              <span className="c-tag-dot" />
              {slide.tag}
            </div>

            <h1 className="c-h1">
              {slide.title.split('\n').map((line, j) => (
                <span key={j} className="c-h1-line" style={{ animationDelay: `${0.45 + j * 0.12}s` }}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="c-body" style={{ whiteSpace: 'pre-line' }}>{slide.body}</p>

            <div className="c-actions">
              <Link href={slide.href} className="btn-primary">
                {slide.cta}
              </Link>
              <Link href={slide.href2} className="btn-ghost">
                {slide.cta2}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Side arrows */}
      <button className="c-arrow c-arrow-left"  onClick={prev} aria-label="Previous slide">‹</button>
      <button className="c-arrow c-arrow-right" onClick={next} aria-label="Next slide">›</button>

      {/* Bottom nav row */}
      <div className="c-nav-bar">
        {/* Slide counter */}
        <span className="c-counter">
          <strong>{String(current + 1).padStart(2, '0')}</strong>
          <em> / {String(SLIDES.length).padStart(2, '0')}</em>
        </span>

        {/* Progress track */}
        <div className="c-track">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`c-track-seg${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            >
              <span
                key={i === current ? progKey : `s${i}`}
                className={`c-track-fill${i === current && !paused ? ' running' : ''}`}
                style={{ animationDuration: `${INTERVAL}ms` }}
              />
            </button>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="c-scroll-hint">
          <div className="c-scroll-mouse"><span /></div>
          <span>Scroll</span>
        </div>
      </div>
    </div>
  )
}
