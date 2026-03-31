import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedCounter from '@/components/AnimatedCounter'

export const metadata = {
  title: 'About Us | C&C Care',
  description: 'Learn about C&C Care — our story, mission, values, and the team behind your mobile mechanic and tech repair service.',
}

const VALUES = [
  { icon: '🤝', title: 'Honesty First',        body: "We tell you what you need — not what pads our bill. No unnecessary repairs, no upselling, ever. If it doesn't need to be fixed, we'll tell you." },
  { icon: '⚡', title: 'Respect Your Time',    body: "We show up on time, work efficiently, and communicate clearly. You shouldn't have to rearrange your life for a repair." },
  { icon: '🎯', title: 'Done Right, First Time', body: "We take pride in quality. If a repair isn't done right, we come back and fix it — no questions asked, at no extra charge." },
  { icon: '💸', title: 'Fair Pricing Always',  body: "Transparent quotes before we start. No hidden fees, no surprise invoices. You know exactly what you're paying and why." },
  { icon: '🌱', title: 'Community Focused',    body: "We're a local business serving our neighbors. We reinvest in the community and offer discounts for seniors and veterans." },
  { icon: '🔒', title: 'Your Privacy Matters', body: "When we work on your tech, your data is yours. We never access personal files unnecessarily and treat every device with respect." },
]

const TEAM = [
  {
    img: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=400&q=80',
    imgAlt: 'Lead mechanic working on a vehicle',
    bg: 'rgba(59,130,246,.15)',
    name: 'Chris Carter',  role: 'Founder & Lead Mechanic',
    bio: '10+ years in automotive repair. Former dealership technician who left the shop life to build something better — faster, more honest, and mobile.',
    certs: ['ASE Certified','OBD-II Specialist'],
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    imgAlt: 'Tech specialist repairing a laptop',
    bg: 'rgba(99,102,241,.15)',
    name: 'Casey Monroe',  role: 'Lead Tech Repair Specialist',
    bio: 'CompTIA-certified tech with 8 years fixing computers and electronics. She can fix what the big-box stores say is unfixable.',
    certs: ['CompTIA A+','Apple Certified'],
  },
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    imgAlt: 'Mobile technician on location',
    bg: 'rgba(16,185,129,.15)',
    name: 'Jordan Ellis',  role: 'Mobile Technician',
    bio: 'Handles auto and tech with equal skill. Jordan specializes in roadside assistance and same-day emergency repairs.',
    certs: ['ASE Certified','Network+'],
  },
]

const CERTS = [
  { icon: '🏆', title: 'ASE Certified',       sub: 'National Institute for Automotive Service Excellence' },
  { icon: '💻', title: 'CompTIA A+',          sub: 'Industry-standard IT technician certification' },
  { icon: '🍎', title: 'Apple Certified',     sub: 'Authorized repair training for Apple devices' },
  { icon: '🛡️', title: 'Fully Insured',       sub: 'General liability & professional coverage on every job' },
  { icon: '📋', title: 'Background Checked',  sub: 'All technicians pass full background screenings' },
  { icon: '🌐', title: 'CompTIA Network+',    sub: 'Certified networking and Wi-Fi expertise' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero with background image */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80"
          alt="C&C Care mobile mechanic team"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.15 }}
          priority
        />
        <div className="page-hero" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" className="breadcrumb">← Home <span>/ About</span></Link>
          <h1>Meet the Team<br /><span className="gradient-text">Behind C&amp;C Care</span></h1>
          <p>A small business built on one principle — quality repair should come to you, not the other way around.</p>
        </div>
      </div>

      {/* STORY */}
      <section>
        <div className="story-grid">
          <ScrollReveal className="story-content">
            <span className="section-tag">Our Story</span>
            <h2>Built Out of Frustration.<br />Driven by Purpose.</h2>
            <p>C&amp;C Care was born when our founder got stranded with a dead battery and was quoted <strong>$400 just to tow the car</strong> to a shop that couldn&apos;t even look at it for two days. There had to be a better way.</p>
            <p>So we built one. C&amp;C Care is rooted in the belief that <strong>skilled, honest service should come to you</strong> — not the other way around. By removing shop overhead, we deliver dealer-quality work at a fraction of the cost, without the wait.</p>
            <p>We expanded into tech repair because we kept meeting the same customers — frustrated by overpriced Apple Store repairs and big-box shops that wouldn&apos;t touch anything complicated. Same values. Same commitment. Same technician at your door.</p>
            <blockquote>&ldquo;We&apos;re not just fixing cars and computers. We&apos;re fixing the experience of getting things fixed.&rdquo;</blockquote>
            <p>Today C&amp;C Care serves hundreds of clients across the region — with the same dedication to doing the job right, at a fair price, with zero runaround.</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="story-photo-wrap">
              <Image
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=85"
                alt="Mobile mechanic performing on-site auto repair"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="story-photo"
              />
              <div className="story-photo-badge">
                <span className="story-photo-badge-icon">🔧</span>
                <div>
                  <h4>C&amp;C Care — On Location</h4>
                  <p>Fully equipped. We come to your home, office, or anywhere you need us.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg2">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2>The Values Behind Every Job We Do</h2>
            <p>These aren&apos;t talking points — they&apos;re the standards every C&amp;C Care technician is held to on every job.</p>
          </div>
        </ScrollReveal>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="value-card">
                <span className="v-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section>
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">The Team</span>
            <h2>The Certified Team<br />Behind C&amp;C Care</h2>
            <p>Small team, big expertise. Trained, certified, passionate.</p>
          </div>
        </ScrollReveal>
        <div className="team-grid">
          {TEAM.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 100}>
              <div className="team-card">
                <div className="team-photo-wrap" style={{ position: 'relative', height: '220px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.25rem' }}>
                  <Image
                    src={m.img}
                    alt={m.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(6,8,16,.7) 100%)' }} />
                </div>
                <h3>{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p>{m.bio}</p>
                <div className="cert-badges">
                  {m.certs.map(c => <span className="cert" key={c}>{c}</span>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* IMAGE BANNER — mid-page */}
      <div style={{ padding: '0 5vw 80px' }}>
        <ScrollReveal>
          <div className="img-section-banner">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85"
              alt="Computer circuit board close-up"
              fill
              sizes="100vw"
              className="img-section-banner-img"
            />
            <div className="img-section-banner-overlay">
              <span className="section-tag">Auto &amp; Tech</span>
              <h2>Auto Repair &amp; Tech Repair —<br /><span className="gradient-text">One Team Handles Both</span></h2>
              <p>Car won&apos;t start? Laptop won&apos;t boot? One team handles both — certified, insured, at your door.</p>
              <Link href="/contact" className="btn-primary">📅 Book a Service</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* CERTS */}
      <section className="bg2">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Credentials</span>
            <h2>Trained, Certified &amp; Insured</h2>
            <p>Every tech is vetted, certified, and fully insured before they step foot on your property.</p>
          </div>
        </ScrollReveal>
        <div className="certs-row">
          {CERTS.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 60}>
              <div className="cert-chip">
                <span className="c-icon">{c.icon}</span>
                <div><h4>{c.title}</h4><p>{c.sub}</p></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section>
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">By The Numbers</span>
            <h2>The Results Speak<br />For Themselves</h2>
          </div>
        </ScrollReveal>
        <div className="stat-row">
          {[
            { n: 500,  s: '+',       l: 'Jobs Completed' },
            { n: 98,   s: '%',       l: 'Satisfaction Rate' },
            { n: 3,    s: '+ Years', l: 'In Business' },
          ].map((s, i) => (
            <ScrollReveal key={s.l} delay={i * 80}>
              <div className="stat-chip">
                <div className="num"><AnimatedCounter target={s.n} suffix={s.s} /></div>
                <div className="lbl">{s.l}</div>
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={240}>
            <div className="stat-chip"><div className="num">5★</div><div className="lbl">Average Rating</div></div>
          </ScrollReveal>
        </div>
      </section>

      <div className="cta-band">
        <h2>Ready to Experience<br />the Difference?</h2>
        <p>Book today and find out why hundreds of clients trust C&amp;C Care with their vehicles and devices.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">📅 Book a Service</Link>
          <Link href="/services" className="btn-ghost">View All Services</Link>
        </div>
      </div>
    </>
  )
}
