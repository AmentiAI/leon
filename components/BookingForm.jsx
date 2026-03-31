'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function BookingForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      e.target.reset()
    }, 1200)
  }

  if (status === 'success') {
    return (
      <div className="success-msg">
        <span className="s-icon">✅</span>
        <h3>Request Received!</h3>
        <p>
          We got your booking request and will reach out to confirm your appointment within the hour.
          If it&apos;s urgent, give us a call at{' '}
          <a href="tel:+15551234567">(555) 123-4567</a>.
        </p>
        <button
          className="btn-ghost"
          style={{ marginTop: '1.5rem', width: '100%' }}
          onClick={() => setStatus('idle')}
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fname">First Name *</label>
          <input id="fname" type="text" placeholder="John" required />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name *</label>
          <input id="lname" type="text" placeholder="Smith" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input id="phone" type="tel" placeholder="(555) 000-0000" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="you@example.com" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Your Address / Location *</label>
        <input id="address" type="text" placeholder="123 Main St, City, State" required />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Type *</label>
        <select id="service" required>
          <option value="">Select a category…</option>
          <optgroup label="🚗 Auto Services">
            <option>Oil Change / Fluid Service</option>
            <option>Brake Inspection or Replacement</option>
            <option>Battery Test or Replacement</option>
            <option>Engine Diagnostic / Check Engine Light</option>
            <option>Tune-Up / Spark Plugs / Filters</option>
            <option>Belts &amp; Hoses</option>
            <option>Pre-Purchase Vehicle Inspection</option>
            <option>Roadside Assistance (Stranded)</option>
            <option>General Auto Repair (Describe Below)</option>
          </optgroup>
          <optgroup label="💻 Tech Services">
            <option>Laptop or Desktop Repair</option>
            <option>Virus / Malware Removal</option>
            <option>SSD Upgrade or RAM Upgrade</option>
            <option>OS Reinstall / Software Setup</option>
            <option>Data Recovery</option>
            <option>Phone Screen or Battery Repair</option>
            <option>Charging Port or Other Phone Repair</option>
            <option>Wi-Fi Network Setup</option>
            <option>Home Tech Setup / Smart Devices</option>
            <option>Game Console Repair</option>
          </optgroup>
          <option>Monthly Care Plan Inquiry</option>
          <option>Other / Not Sure — Describe Below</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input id="date" type="date" />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <select id="time">
            <option value="">Any time</option>
            <option>Morning (7am–12pm)</option>
            <option>Afternoon (12pm–5pm)</option>
            <option>Evening (5pm–8pm)</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="urgency">How Urgent Is This?</label>
        <select id="urgency">
          <option>Not urgent — schedule when available</option>
          <option>Soon — within the next few days</option>
          <option>Urgent — today or tomorrow if possible</option>
          <option>Emergency — I need help right now</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="desc">Describe the Problem</label>
        <textarea
          id="desc"
          placeholder="Tell us what's happening — any symptoms, error messages, noises, what you've already tried, etc."
        />
      </div>

      <div className="form-group">
        <label htmlFor="source">How Did You Hear About Us?</label>
        <select id="source">
          <option value="">Select one…</option>
          <option>Google Search</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Word of Mouth / Referral</option>
          <option>Nextdoor</option>
          <option>Other</option>
        </select>
      </div>

      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Booking Request →'}
      </button>
      <p style={{ color: 'var(--muted2)', fontSize: '.75rem', textAlign: 'center', marginTop: '.75rem' }}>
        We&apos;ll confirm your appointment by phone or email within 1 hour.
      </p>
    </form>
  )
}
