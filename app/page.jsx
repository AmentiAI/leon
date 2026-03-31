import Link from 'next/link'
import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import TrustBar from '@/components/TrustBar'
import WorkGallery from '@/components/WorkGallery'
import StatsBanner from '@/components/StatsBanner'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'C&C Care | Mobile Mechanic & Tech Repair',
  description: 'C&C Care — Mobile mechanic and electronics repair that comes to you. Same-day service, upfront pricing, satisfaction guaranteed.',
}

/* ---- Testimonials (6) ---- */
const TESTIMONIALS = [
  {
    initials: 'MJ', bg: 'rgba(59,130,246,.18)', tc: 'var(--accent)',
    name: 'Marcus J.', service: 'Battery Replacement', rating: 5,
    quote: 'Dead battery at 7am before my biggest meeting. C&C Care was at my driveway in 45 minutes. Back on the road by 8. Absolute lifesavers.',
  },
  {
    initials: 'SR', bg: 'rgba(99,102,241,.18)', tc: 'var(--accent2)',
    name: 'Sandra R.', service: 'Laptop Screen Repair', rating: 5,
    quote: 'Cracked screen Thursday afternoon — fixed at my kitchen table by Friday noon, for half what the Apple Store quoted. I won\'t go anywhere else.',
  },
  {
    initials: 'DK', bg: 'rgba(16,185,129,.18)', tc: 'var(--green)',
    name: 'Derek K.', service: 'Monthly Care Plan', rating: 5,
    quote: 'The Care Plan pays for itself every month. Quarterly checkups on my truck AND my laptop, priority booking, 10% off everything. Best subscription I have.',
  },
  {
    initials: 'AL', bg: 'rgba(245,158,11,.18)', tc: 'var(--orange)',
    name: 'Alyssa L.', service: 'iPhone Screen Repair', rating: 5,
    quote: 'Shattered my iPhone on a Friday afternoon. They were at my place by 6pm — screen looked brand new by 6:45. More convenient and cheaper than the Apple Store.',
  },
  {
    initials: 'TM', bg: 'rgba(239,68,68,.18)', tc: 'var(--red)',
    name: 'Tyler M.', service: 'Engine Diagnostics', rating: 5,
    quote: 'Check engine light had me panicking. Chris showed up, scanned it, explained everything clearly, and fixed the sensor the same visit. Zero upselling. Just honest work.',
  },
  {
    initials: 'JP', bg: 'rgba(34,211,238,.18)', tc: 'var(--accent3)',
    name: 'Janet P.', service: 'Ransomware Removal', rating: 5,
    quote: 'My computer was fully locked by ransomware. Casey had it cleaned, hardened, and running faster than before — without losing a single file. Truly impressive.',
  },
]

/* ---- Why Choose Us (8) ---- */
const WHY_FEATURES = [
  {
    icon: '📍',
    title: 'We Come to You',
    body: 'Your home, your office, or wherever you are. No tow trucks, no drop-offs, no sitting in a waiting room.',
  },
  {
    icon: '💰',
    title: 'Upfront, Honest Pricing',
    body: 'You receive a clear quote before we touch anything. No hidden fees, no line-item surprises — ever.',
  },
  {
    icon: '🎓',
    title: 'Dual-Certified Technicians',
    body: 'ASE-certified mechanics and CompTIA-certified IT specialists. Real credentials backed by real field experience.',
  },
  {
    icon: '⚡',
    title: 'Same-Day Service',
    body: 'Book before noon and we\'ll often arrive the same day. We prioritize speed because your time matters.',
  },
  {
    icon: '🛡️',
    title: '100% Satisfaction Guarantee',
    body: 'Not happy with the result? We return and make it right at zero additional charge. Every job, no exceptions.',
  },
  {
    icon: '🔒',
    title: 'Vetted & Fully Insured',
    body: 'Every technician passes a comprehensive background check and carries full liability insurance before working with clients.',
  },
  {
    icon: '🚗',
    title: 'Auto + Tech Under One Roof',
    body: 'Car issue Monday, computer issue Wednesday? One company handles both. No juggling multiple service providers.',
  },
  {
    icon: '📞',
    title: '7-Day Support',
    body: 'We\'re reachable 7 days a week — including after your repair. We don\'t disappear the moment we\'re paid.',
  },
]

/* ---- How It Works ---- */
const HOW_STEPS = [
  {
    n: '01', icon: '📋',
    title: 'Book in Minutes',
    body: 'Call, text, or submit our quick online form. Describe your issue, choose a time — done in under 2 minutes.',
  },
  {
    n: '02', icon: '🚐',
    title: 'We Arrive, Equipped',
    body: 'A certified technician shows up at your location with professional tools and the most common parts already on hand.',
  },
  {
    n: '03', icon: '🔍',
    title: 'Diagnose & Quote',
    body: 'We assess the problem on-site and present you with a clear, itemized price. You approve everything before work begins.',
  },
  {
    n: '04', icon: '✅',
    title: 'Fixed. Guaranteed.',
    body: 'We complete the repair, walk you through what was done, and you pay only when you\'re 100% satisfied.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ======= HERO CAROUSEL ======= */}
      <HeroCarousel />

      {/* ======= TRUST BAR ======= */}
      <TrustBar />

      {/* ======= SERVICES SPLIT ======= */}
      <section>
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2>Two Specialties.<br />One Call.</h2>
            <p>Auto repair and tech repair — both certified, both mobile, both at your front door.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="svc-split">
            {/* Auto half */}
            <div className="svc-half">
              <Image
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=85"
                alt="Mobile mechanic performing on-site auto repair"
                fill sizes="50vw"
                className="svc-half-img"
              />
              <div className="svc-half-overlay" />
              <div className="svc-half-content">
                <span className="section-tag">Automotive</span>
                <h3>Mobile Mechanic<br />At Your Location</h3>
                <p>Your vehicle stays in your driveway. We arrive fully equipped to handle everything from oil changes to diagnostics — no tow needed.</p>
                <div className="svc-half-chips">
                  {['Oil Change', 'Brake Service', 'Diagnostics', 'Battery', 'Tune-Up', 'Roadside'].map(c => (
                    <span key={c} className="svc-chip">{c}</span>
                  ))}
                </div>
                <Link href="/services" className="btn-primary">View Auto Services</Link>
              </div>
            </div>

            <div className="svc-half-divider" />

            {/* Tech half */}
            <div className="svc-half">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85"
                alt="Computer and electronics repair technician"
                fill sizes="50vw"
                className="svc-half-img"
              />
              <div className="svc-half-overlay" />
              <div className="svc-half-content">
                <span className="section-tag">Technology</span>
                <h3>Computer &amp; Phone<br />Repair Experts</h3>
                <p>Cracked screens, slow computers, dead phones — repaired at your home or office by a certified specialist, usually same day.</p>
                <div className="svc-half-chips">
                  {['Screen Repair', 'Virus Removal', 'Data Recovery', 'SSD Upgrade', 'Phone Repair', 'Wi-Fi Setup'].map(c => (
                    <span key={c} className="svc-chip">{c}</span>
                  ))}
                </div>
                <Link href="/services" className="btn-primary">View Tech Services</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ======= HOW IT WORKS ======= */}
      <section className="bg2">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">The Process</span>
            <h2>How It Works</h2>
            <p>From your first call to a completed repair — four simple steps, zero shop visits.</p>
          </div>
        </ScrollReveal>

        <div className="how-grid">
          {HOW_STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 80} tag="div" className="how-step">
              <span className="how-step-icon">{s.icon}</span>
              <div className="how-num-ring">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ======= STATS BANNER ======= */}
      <StatsBanner />

      {/* ======= WHY CHOOSE US ======= */}
      <section>
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Why C&amp;C Care</span>
            <h2>The Standard Every<br />Repair Shop Should Meet</h2>
            <p>We built C&amp;C Care around the experience we always wanted as customers — but could never find.</p>
          </div>
        </ScrollReveal>

        <div className="why-feature-grid">
          {WHY_FEATURES.map((w, i) => (
            <ScrollReveal key={w.title} delay={i * 60}>
              <div className="why-feature">
                <span className="why-feature-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/about" className="btn-ghost">Meet the Team →</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ======= PHOTO GALLERY ======= */}
      <WorkGallery />

      {/* ======= TESTIMONIALS ======= */}
      <section>
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Client Reviews</span>
            <h2>What Our Clients<br />Are Saying</h2>
            <p>Every review below is from a real person we served. No scripts, no incentives — just honest feedback.</p>
          </div>
        </ScrollReveal>

        <div className="testimonial-grid-new">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 70}>
              <div className="t-card-new">
                <div className="t-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="t-star">★</span>
                  ))}
                </div>
                <p className="t-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="t-author">
                  <div className="t-avatar" style={{ background: t.bg, color: t.tc }}>{t.initials}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-service">{t.service}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ======= IMAGE CTA BAND ======= */}
      <div style={{ padding: '0 5vw 80px', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div className="img-section-banner">
            <Image
              src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1600&q=85"
              alt="Professional repair technician at work"
              fill sizes="100vw"
              className="img-section-banner-img"
            />
            <div className="img-section-banner-overlay">
              <span className="section-tag">Get Started Today</span>
              <h2>Your Repair,<br /><span className="gradient-text">Scheduled Today.</span></h2>
              <p>Same-day slots available. Free on-site diagnosis. You only pay when the job is done right.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">📅 Book a Service</Link>
                <Link href="/pricing" className="btn-ghost">View Pricing</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ======= CONTACT STRIP ======= */}
      <div className="cta-band" style={{ borderTop: 'none' }}>
        <div className="contact-chips">
          <a href="tel:+15551234567" className="chip">📞 (555) 123-4567</a>
          <a href="sms:+15551234567" className="chip">💬 Text Us</a>
          <a href="mailto:hello@cnccare.com" className="chip">✉️ hello@cnccare.com</a>
          <span className="chip">📍 Mobile · We Come To You</span>
        </div>
      </div>
    </>
  )
}
