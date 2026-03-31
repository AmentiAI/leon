import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import BookingForm from '@/components/BookingForm'
import FaqAccordion from '@/components/FaqAccordion'
import OpenStatus from '@/components/OpenStatus'

export const metadata = {
  title: 'Contact & Book | C&C Care',
  description: 'Book a mobile mechanic or tech repair service with C&C Care. Fast response, on-site service, honest pricing.',
}

const FAQ = [
  { q: 'How far in advance do I need to book?',            a: 'For same-day service, book before noon and we\'ll do our best to get to you that day. For scheduled appointments, 24–48 hours notice is ideal. Emergency roadside? Call us right now — no booking needed.' },
  { q: 'Do you charge for the diagnosis?',                  a: 'On-site diagnosis is free with every booked service. We assess the problem, tell you exactly what needs to be done and the cost, and you decide whether to proceed — with zero pressure.' },
  { q: 'What areas do you serve?',                          a: 'We serve a growing service area — give us a call at (555) 123-4567 or drop your address in the booking form and we\'ll confirm whether we cover your location. We\'re expanding regularly!' },
  { q: 'Do I need to be home for the service?',             a: 'For auto repairs, you just need to be present at the vehicle. For computer/tech repair, we prefer you\'re available to answer any questions, but for some jobs we can work independently. We\'ll coordinate with you beforehand.' },
  { q: 'How do you handle parts and materials?',            a: 'We quote labor and parts separately. For common parts like oil filters, batteries, or brake pads, we can often bring them on the first visit. For specialty parts, we may need to order them — we\'ll always confirm the cost with you before any purchase.' },
  { q: 'What payment methods do you accept?',               a: 'We accept cash, all major credit/debit cards, Venmo, CashApp, and Zelle. Payment is due upon completion of the service. We never ask for full payment upfront.' },
  { q: 'Is my data safe when you repair my computer?',      a: 'Absolutely. We never access your personal files unless directly required for the repair (e.g., data recovery). We recommend backing up your data before any repair as a precaution. We can sign a confidentiality agreement upon request.' },
  { q: "What if the repair doesn't fix the problem?",       a: 'We stand behind our work with a satisfaction guarantee. If the repair doesn\'t resolve the issue, we come back and make it right at no additional labor charge. We want you to be fully satisfied — always.' },
]

const QUICK = [
  { href: 'tel:+15551234567',       icon: '📞', title: 'Call Us',     sub: '(555) 123-4567\nMon–Sat 7am–8pm' },
  { href: 'mailto:hello@cnccare.com', icon: '✉️', title: 'Email Us',  sub: 'hello@cnccare.com\nReply within 1 hour' },
  { href: 'sms:+15551234567',       icon: '💬', title: 'Text Us',     sub: '(555) 123-4567\nFastest response' },
  { href: null,                     icon: '📍', title: 'Service Area', sub: 'Mobile — we come to you\nCall to confirm your area' },
]

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <Link href="/" className="breadcrumb">← Home <span>/ Contact</span></Link>
        <h1>Let&apos;s Get You <span className="gradient-text">Taken Care Of</span></h1>
        <p>Book a service, ask a question, or request a quote. We respond fast — usually within the hour.</p>
      </div>

      {/* QUICK CONTACT */}
      <section>
        <div className="quick-strip">
          {QUICK.map((q, i) => (
            <ScrollReveal key={q.title} delay={i * 80}>
              {q.href ? (
                <a href={q.href} className="quick-card">
                  <span className="q-icon">{q.icon}</span>
                  <h4>{q.title}</h4>
                  <p>{q.sub.split('\n').map((l, j) => <span key={j}>{l}{j === 0 && <br />}</span>)}</p>
                </a>
              ) : (
                <div className="quick-card" style={{ cursor: 'default' }}>
                  <span className="q-icon">{q.icon}</span>
                  <h4>{q.title}</h4>
                  <p>{q.sub.split('\n').map((l, j) => <span key={j}>{l}{j === 0 && <br />}</span>)}</p>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="bg2">
        <div className="contact-grid">

          {/* INFO */}
          <ScrollReveal className="info-panel">
            <span className="section-tag">Get In Touch</span>
            <h2>We&apos;re Ready<br />When You Are</h2>
            <p>Fill out the form and we&apos;ll confirm your appointment — usually within the hour. Same-day service available when you book before noon.</p>

            <div className="detail-item">
              <div className="d-icon icon-blue">📞</div>
              <div><h4>Phone</h4><a href="tel:+15551234567">(555) 123-4567</a><p>Call or text for fastest response</p></div>
            </div>
            <div className="detail-item">
              <div className="d-icon icon-purple">✉️</div>
              <div><h4>Email</h4><a href="mailto:hello@cnccare.com">hello@cnccare.com</a><p>We reply within 1 hour during hours</p></div>
            </div>
            <div className="detail-item">
              <div className="d-icon icon-green">📍</div>
              <div><h4>Service Area</h4><p>Mobile service — we come to your home, office, or any location. Call to confirm your area is covered.</p></div>
            </div>
            <div className="detail-item">
              <div className="d-icon icon-orange">⚡</div>
              <div><h4>Emergency Roadside</h4><a href="tel:+15551234567">Call (555) 123-4567</a><p>Stranded? We dispatch ASAP.</p></div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1rem', fontWeight: 600, marginTop: '2rem', marginBottom: '.5rem' }}>
              Business Hours
            </h3>
            <OpenStatus />
          </ScrollReveal>

          {/* FORM */}
          <ScrollReveal>
            <div className="form-panel">
              <h3>Book a Service</h3>
              <p className="sub">Tell us what you need and we&apos;ll take it from there. Free diagnosis on every booking.</p>
              <BookingForm />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before booking. Still have questions? Just call or text us.</p>
          </div>
        </ScrollReveal>
        <FaqAccordion items={FAQ} />
      </section>

      <div className="cta-band">
        <h2>Still Have Questions?</h2>
        <p>Call or text us — we&apos;re friendly, we don&apos;t bite, and there&apos;s no such thing as a dumb question.</p>
        <div className="contact-chips">
          <a href="tel:+15551234567" className="chip">📞 Call (555) 123-4567</a>
          <a href="sms:+15551234567" className="chip">💬 Text Us</a>
          <a href="mailto:hello@cnccare.com" className="chip">✉️ Email Us</a>
        </div>
      </div>
    </>
  )
}
