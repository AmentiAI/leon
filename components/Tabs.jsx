'use client'
import { useState } from 'react'

// panels: { [tabId]: ReactNode }
export default function Tabs({ tabs, panels }) {
  const [active, setActive] = useState(tabs[0].id)

  return (
    <>
      <div className="tab-bar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn${active === tab.id ? ' active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map(tab => (
        <div
          key={tab.id}
          className={`tab-panel${active === tab.id ? ' active' : ''}`}
        >
          {panels[tab.id]}
        </div>
      ))}
    </>
  )
}
