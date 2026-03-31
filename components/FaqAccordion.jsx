'use client'
import { useState } from 'react'

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq-wrap">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <div className="faq-q" onClick={() => toggle(i)}>
            {item.q}
            <span className="arrow">▼</span>
          </div>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  )
}
