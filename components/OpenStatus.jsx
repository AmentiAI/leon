'use client'
import { useEffect, useState } from 'react'

const HOURS = [
  { day: 'Monday',    open: '7:00 AM', close: '8:00 PM', start: 7,  end: 20 },
  { day: 'Tuesday',   open: '7:00 AM', close: '8:00 PM', start: 7,  end: 20 },
  { day: 'Wednesday', open: '7:00 AM', close: '8:00 PM', start: 7,  end: 20 },
  { day: 'Thursday',  open: '7:00 AM', close: '8:00 PM', start: 7,  end: 20 },
  { day: 'Friday',    open: '7:00 AM', close: '8:00 PM', start: 7,  end: 20 },
  { day: 'Saturday',  open: '8:00 AM', close: '6:00 PM', start: 8,  end: 18 },
  { day: 'Sunday',    open: '9:00 AM', close: '5:00 PM', start: 9,  end: 17 },
]

export default function OpenStatus() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    const now = new Date()
    const jsDay = now.getDay() // 0=Sun … 6=Sat
    // Map Sunday (0) to index 6, Mon (1) → 0, etc.
    const idx = jsDay === 0 ? 6 : jsDay - 1
    const hour = now.getHours() + now.getMinutes() / 60
    const today = HOURS[idx]
    const isOpen = hour >= today.start && hour < today.end
    setInfo({ idx, isOpen })
  }, [])

  return (
    <>
      <table className="hours-table">
        <thead>
          <tr><th>Day</th><th>Hours</th></tr>
        </thead>
        <tbody>
          {HOURS.map((h, i) => (
            <tr key={h.day} className={info?.idx === i ? 'today' : ''}>
              <td>{h.day}</td>
              <td>{h.open} – {h.close}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {info && (
        <div
          className="open-now"
          style={{ color: info.isOpen ? 'var(--green)' : 'var(--red)' }}
        >
          {info.isOpen ? 'Open now' : 'Currently closed'}
        </div>
      )}
    </>
  )
}
