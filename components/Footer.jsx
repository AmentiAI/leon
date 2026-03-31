import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="nav-logo">
            <span className="logo-icon">🔧</span>C&amp;C Care
          </Link>
          <p>Professional mobile mechanic and computer/electronics repair. We bring the expertise to your door — fast, honest, and affordable.</p>
          <div className="footer-social">
            <a href="#" className="social-btn" aria-label="Facebook">f</a>
            <a href="#" className="social-btn" aria-label="Instagram">in</a>
            <a href="#" className="social-btn" aria-label="Google">g</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services">Mobile Mechanic</Link></li>
            <li><Link href="/services">Computer Repair</Link></li>
            <li><Link href="/services">Phone Repair</Link></li>
            <li><Link href="/services">Roadside Assist</Link></li>
            <li><Link href="/services">Home Tech Setup</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Book a Service</Link></li>
            <li><Link href="/contact#faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+15551234567">(555) 123-4567</a></li>
            <li><a href="mailto:hello@cnccare.com">hello@cnccare.com</a></li>
            <li><Link href="/contact">Book Online</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 C&amp;C Care. All rights reserved.</p>
        <p>Built with care for a business that cares.</p>
      </div>
    </footer>
  )
}
