import Image from 'next/image'
import AnimatedCounter from '@/components/AnimatedCounter'
import ScrollReveal from '@/components/ScrollReveal'

const STATS = [
  { n: 500,  s: '+',  label: 'Jobs Completed',        icon: '🔧' },
  { n: 98,   s: '%',  label: 'Satisfaction Rate',      icon: '⭐' },
  { n: 2,    s: ' hr', label: 'Avg Response Time',     icon: '⚡' },
  { n: 40,   s: '%',  label: 'Savings vs. Dealer',     icon: '💰' },
]

export default function StatsBanner() {
  return (
    <div className="stats-banner">
      {/* Background image with heavy overlay */}
      <div className="stats-banner-bg">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          fill
          sizes="100vw"
          className="stats-banner-img"
        />
        <div className="stats-banner-overlay" />
      </div>

      <div className="stats-banner-inner">
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-tag" style={{ color: 'var(--accent3)' }}>By The Numbers</span>
            <h2 style={{ color: '#fff' }}>Results You Can Count On</h2>
          </div>
        </ScrollReveal>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="stats-item">
                <span className="stats-icon">{s.icon}</span>
                <div className="stats-num">
                  <AnimatedCounter target={s.n} suffix={s.s} />
                </div>
                <div className="stats-label">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
