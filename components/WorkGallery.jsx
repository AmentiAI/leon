import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=85',
    alt: 'Certified mechanic performing on-site auto repair',
    label: 'On-Site Auto Service',
    sub: 'Mobile Mechanic',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85',
    alt: 'Circuit board detail — electronics repair',
    label: 'Electronics Repair',
    sub: 'Computer & Tech',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85',
    alt: 'Vehicle diagnostics and care',
    label: 'Vehicle Diagnostics',
    sub: 'Engine Scan & Report',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=700&q=85',
    alt: 'Laptop repair and upgrade service',
    label: 'Laptop Service',
    sub: 'Screen · SSD · RAM',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=700&q=85',
    alt: 'MacBook repair at customer location',
    label: 'MacBook Repair',
    sub: 'Same-Day Available',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85',
    alt: 'Premium vehicle care service',
    label: 'Premium Auto Care',
    sub: 'All Makes & Models',
    span: 'col-span-2',
  },
]

export default function WorkGallery() {
  return (
    <section className="gallery-section bg2">
      <div className="section-header">
        <span className="section-tag">Our Work</span>
        <h2>Seen In Action</h2>
        <p>A glimpse into the quality of care we bring to every job — at your location.</p>
      </div>

      <div className="gallery-grid">
        {PHOTOS.map((photo, i) => (
          <ScrollReveal key={i} delay={i * 60} className={`gallery-item ${photo.span}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <div className="gallery-label">
                <span className="gallery-label-sub">{photo.sub}</span>
                <span className="gallery-label-title">{photo.label}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link href="/contact" className="btn-primary">Book Your Service Today</Link>
      </div>
    </section>
  )
}
