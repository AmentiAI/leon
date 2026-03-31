const ITEMS = [
  { icon: '⭐', text: '5-Star Rated' },
  { icon: '✅', text: '500+ Jobs Done' },
  { icon: '🛡️', text: 'Licensed & Insured' },
  { icon: '⚡', text: 'Same-Day Available' },
  { icon: '💰', text: 'Upfront Pricing' },
  { icon: '🔧', text: 'Certified Techs' },
  { icon: '📍', text: 'We Come To You' },
  { icon: '🤝', text: 'Satisfaction Guaranteed' },
]

// Duplicated for seamless infinite scroll
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS]

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-track">
        {TRACK.map((item, i) => (
          <div className="trust-item" key={i}>
            <span className="trust-icon">{item.icon}</span>
            <span className="trust-text">{item.text}</span>
            <span className="trust-sep">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
