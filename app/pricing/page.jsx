import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Tabs from '@/components/Tabs'

export const metadata = {
  title: 'Pricing | C&C Care',
  description: 'Clear, upfront pricing for every C&C Care service. No hidden fees, no bait-and-switch — honest rates for certified mobile repair.',
}

const PLANS = [
  {
    title: 'Single Visit',
    desc: 'One-time service for a specific repair or issue.',
    price: '49', sub: '+',
    note: 'Starting rate · Free on-site diagnosis included',
    featured: false,
    items: [
      { ok: true,  text: 'Free on-site diagnosis' },
      { ok: true,  text: 'Single service or repair' },
      { ok: true,  text: 'Same-day availability' },
      { ok: true,  text: '30-day labor warranty' },
      { ok: false, text: 'Priority scheduling' },
      { ok: false, text: 'Multi-device coverage' },
    ],
  },
  {
    title: 'Full Service',
    desc: 'Complete repair with full inspection and post-service follow-up.',
    price: '99', sub: '+',
    note: 'Starting rate · All labor included',
    featured: true, badge: 'Most Popular',
    items: [
      { ok: true, text: 'Free on-site diagnosis' },
      { ok: true, text: 'Full multi-point inspection' },
      { ok: true, text: 'Complete repair service' },
      { ok: true, text: 'Same-day availability' },
      { ok: true, text: '60-day labor warranty' },
      { ok: true, text: 'Follow-up check-in call' },
    ],
  },
  {
    title: 'Care Plan',
    desc: 'Monthly membership covering both your vehicle and devices.',
    price: '79', sub: '/mo',
    note: 'Billed monthly · Cancel anytime, no penalty',
    featured: false,
    items: [
      { ok: true, text: 'Priority scheduling, always' },
      { ok: true, text: 'Quarterly vehicle checkup' },
      { ok: true, text: 'Quarterly PC / device checkup' },
      { ok: true, text: '10% off all repairs' },
      { ok: true, text: '1 free roadside assist / month' },
      { ok: true, text: 'Dedicated technician contact' },
    ],
  },
]

const AUTO_RATES = [
  ['Conventional Oil Change',          '$49',  '30–45 min', 'Up to 5 qts, filter included'],
  ['Full Synthetic Oil Change',        '$69',  '30–45 min', 'Full synthetic, filter included'],
  ['Brake Pad Replacement (per axle)', '$99',  '1–1.5 hrs', 'Labor only · pads quoted separately'],
  ['Rotor Replacement (per axle)',     '$119', '1–2 hrs',   'Labor only · rotors quoted separately'],
  ['Battery Replacement',              '$59',  '20–30 min', 'Battery cost quoted separately'],
  ['Engine Diagnostic Scan',           '$75',  '30–60 min', 'Full written report included'],
  ['Spark Plug Replacement (4-cyl)',   '$89',  '45–60 min', 'Plugs quoted separately'],
  ['Air / Cabin Filter Replacement',   '$29',  '15–20 min', 'Filters quoted separately'],
  ['Serpentine Belt Replacement',      '$99',  '45–90 min', 'Belt quoted separately'],
  ['Pre-Purchase Vehicle Inspection',  '$99',  '60–90 min', '150-point written report'],
  ['Roadside Assistance',              '$49',  'On demand', 'Jump start, flat tire, lockout, fuel'],
  ['Coolant Flush',                    '$79',  '45–60 min', 'Coolant quoted separately'],
]

const TECH_RATES = [
  ['Laptop Screen Replacement',    '$89', '1–2 hrs',  'Screen cost quoted separately'],
  ['Virus / Malware Removal',      '$89', '1–3 hrs',  'Includes security software setup'],
  ['HDD to SSD Upgrade',           '$69', '1–2 hrs',  'SSD cost quoted separately, data transfer included'],
  ['RAM Upgrade & Installation',   '$49', '30–45 min','RAM cost quoted separately'],
  ['OS Reinstall (Windows / Mac)', '$79', '2–3 hrs',  'Includes driver setup and software configuration'],
  ['Data Recovery',                '$99', 'Varies',   'Final price depends on recovery severity'],
  ['Phone Screen Replacement',     '$59', '45–90 min','Screen cost quoted separately'],
  ['Phone Battery Replacement',    '$49', '30–45 min','Battery cost quoted separately'],
  ['Charging Port Repair',         '$59', '45–60 min','Parts quoted separately if needed'],
  ['Wi-Fi Network Setup',          '$69', '1–2 hrs',  'Router or hardware quoted separately'],
  ['Computer Tune-Up',             '$59', '1–2 hrs',  'Cleanup, optimization, updates'],
  ['Home Tech Setup',              '$59', '1–2 hrs',  'TV, printer, smart home devices'],
]

const COMPARE = [
  { label: 'We come to you',               cc: '✓', dealer: '✗',         shop: '✗' },
  { label: 'Same-day availability',         cc: '✓', dealer: '✗',         shop: 'Sometimes' },
  { label: 'Upfront quote before work',     cc: '✓', dealer: 'Rarely',    shop: 'Sometimes' },
  { label: 'No shop markup on parts',       cc: '✓', dealer: '✗',         shop: '✗' },
  { label: 'Handles auto AND tech repair',  cc: '✓', dealer: '✗',         shop: '✗' },
  { label: 'Satisfaction guarantee',        cc: '✓', dealer: 'Limited',   shop: 'Limited' },
  { label: 'Typical wait time',             cc: 'Under 2 hrs', dealer: '1–3 days', shop: 'Hours–Days' },
  { label: 'Average savings vs. dealer',    cc: '20–40% less', dealer: 'Baseline', shop: 'Moderate' },
]

function RateTable({ rows }) {
  return (
    <div className="rate-table-wrap">
      <table className="rate-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Starting Price</th>
            <th>Est. Time</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([svc, price, time, note]) => (
            <tr key={svc}>
              <td>{svc}</td>
              <td>{price}</td>
              <td>{time}</td>
              <td>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function PricingPage() {
  return (
    <>
      <div className="page-hero">
        <Link href="/" className="breadcrumb">← Home <span>/ Pricing</span></Link>
        <h1>Clear Pricing.<br /><span className="gradient-text">Zero Surprises.</span></h1>
        <p>A clear quote before we start — every time. No hidden fees, no surprises, no pressure.</p>
      </div>

      {/* PLANS */}
      <section>
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Service Plans</span>
            <h2>Choose the Plan<br />That Fits Your Needs</h2>
            <p>Whether it&apos;s a one-time fix or ongoing care for your vehicle and devices, we have the right option.</p>
          </div>
        </ScrollReveal>

        <div className="pricing-grid">
          {PLANS.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div className={`price-card${p.featured ? ' featured' : ''}`}>
                {p.badge && <div className="price-badge">{p.badge}</div>}
                <h3>{p.title}</h3>
                <p className="price-desc">{p.desc}</p>
                <div className="price-amount"><sup>$</sup>{p.price}<sub>{p.sub}</sub></div>
                <span className="price-note">{p.note}</span>
                <ul className="price-list">
                  {p.items.map(item => (
                    <li key={item.text} className={item.ok ? '' : 'cross'}>{item.text}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`price-btn ${p.featured ? 'price-btn-solid' : 'price-btn-outline'}`}
                >
                  {p.featured ? 'Book Now' : 'Get Started'}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="guarantee">
            <div className="g-icon">🛡️</div>
            <div>
              <h3>100% Satisfaction Guarantee</h3>
              <p>If you&apos;re not completely satisfied with our work, we come back and make it right — at no extra charge. That&apos;s our promise on every job, every time, no exceptions.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* RATE TABLES */}
      <section className="bg2">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Rate Guide</span>
            <h2>Service Pricing,<br />Line by Line</h2>
            <p>Labor rates listed below. Parts and materials are always quoted separately and confirmed with you before any work begins.</p>
          </div>
        </ScrollReveal>

        <Tabs
          tabs={[{ id: 'auto', label: '🚗 Auto Services' }, { id: 'tech', label: '💻 Tech & Electronics' }]}
          panels={{
            auto: <RateTable rows={AUTO_RATES} />,
            tech: <RateTable rows={TECH_RATES} />,
          }}
        />

        <p style={{ textAlign: 'center', color: 'var(--muted2)', fontSize: '.8rem', marginTop: '1.5rem' }}>
          All prices shown are starting labor rates. Parts, fluids, and materials are quoted separately and require your approval before purchase.
        </p>
      </section>

      {/* COMPARISON */}
      <section>
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">The Comparison</span>
            <h2>C&amp;C Care vs.<br />The Other Guys</h2>
            <p>See why more people are choosing mobile service over the traditional repair shop experience.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}></th>
                  <th className="highlight">C&amp;C Care</th>
                  <th>Dealership</th>
                  <th>Big Box Shop</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(row => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td className="col-highlight">
                      {row.cc === '✓' ? <span className="check">✓</span>
                        : row.cc === '✗' ? <span className="cross">✗</span>
                        : <span style={{ color: 'var(--green)', fontWeight: 600 }}>{row.cc}</span>}
                    </td>
                    <td>
                      {row.dealer === '✓' ? <span className="check">✓</span>
                        : row.dealer === '✗' ? <span className="cross">✗</span>
                        : <span style={{ color: 'var(--muted)' }}>{row.dealer}</span>}
                    </td>
                    <td>
                      {row.shop === '✓' ? <span className="check">✓</span>
                        : row.shop === '✗' ? <span className="cross">✗</span>
                        : <span style={{ color: 'var(--muted)' }}>{row.shop}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      <div className="cta-band">
        <h2>Ready for a Free Quote?</h2>
        <p>Tell us your issue and we&apos;ll give you an honest price — no obligation, no pressure, no hidden agenda.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">📅 Book a Free Diagnosis</Link>
          <Link href="/services" className="btn-ghost">Browse All Services</Link>
        </div>
        <div className="contact-chips">
          <a href="tel:+15551234567" className="chip">📞 (555) 123-4567</a>
          <a href="mailto:hello@cnccare.com" className="chip">✉️ hello@cnccare.com</a>
        </div>
      </div>
    </>
  )
}
