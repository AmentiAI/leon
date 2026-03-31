import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import Tabs from '@/components/Tabs'

export const metadata = {
  title: 'Services | C&C Care',
  description: 'Full list of auto mechanic and tech repair services — mobile, on-site, same-day available.',
}

const AUTO = [
  { icon: '🛢️', cls: 'icon-orange', title: 'Oil Change & Fluid Services',    price: 'From $49',  img: 'https://images.unsplash.com/photo-1635784063388-1ff678e0c2a0?auto=format&fit=crop&w=600&q=80', imgAlt: 'Oil change service', label: 'Auto', desc: 'Conventional or synthetic oil change with filter. We top off all fluids and check levels while on-site.', items: ['Conventional oil change','Synthetic oil change','Coolant flush','Transmission fluid check','Power steering fluid top-off'] },
  { icon: '🛑', cls: 'icon-red',    title: 'Brake Service',                   price: 'From $99',  img: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=600&q=80', imgAlt: 'Brake repair', label: 'Auto', desc: 'Squealing, grinding, or soft pedal? We inspect and replace brake pads, rotors, and calipers on-site.', items: ['Brake pad inspection & replacement','Rotor resurfacing or replacement','Caliper inspection','Brake fluid flush','Parking brake adjustment'] },
  { icon: '🔋', cls: 'icon-blue',   title: 'Battery & Electrical',            price: 'From $59',  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', imgAlt: 'Car battery replacement', label: 'Auto', desc: 'Dead battery, failing alternator, or electrical gremlins — we diagnose and fix at your location.', items: ['Battery test & replacement','Alternator diagnosis','Starter motor testing','Fuse inspection','Headlight / taillight bulb replacement'] },
  { icon: '🔍', cls: 'icon-purple', title: 'Engine Diagnostics',              price: 'From $75',  img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80', imgAlt: 'Engine diagnostics', label: 'Auto', desc: "Check engine light on? We run a full OBD-II scan and diagnose the root cause — not just clear the code.", items: ['OBD-II scan & report','Fault code interpretation','Sensor testing (O2, MAF, etc.)','Idle & fuel system check','Written diagnosis report'] },
  { icon: '🔩', cls: 'icon-green',  title: 'Tune-Up & Filters',              price: 'From $79',  img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80', imgAlt: 'Engine tune up', label: 'Auto', desc: 'Keep your engine running smooth and efficient with a comprehensive tune-up at your home or office.', items: ['Spark plug replacement','Air filter replacement','Cabin filter replacement','Fuel filter replacement','Ignition coil check'] },
  { icon: '🔧', cls: 'icon-cyan',   title: 'Belts & Hoses',                  price: 'From $89',  img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80', imgAlt: 'Car belts and hoses', label: 'Auto', desc: 'Worn serpentine belt, cracked radiator hose, or timing belt service — before it leaves you stranded.', items: ['Serpentine belt inspection & replacement','Timing belt replacement','Radiator & heater hoses','Drive belt tensioner check'] },
  { icon: '🚘', cls: 'icon-orange', title: 'Pre-Purchase Inspection',         price: '$99 flat',  img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80', imgAlt: 'Vehicle inspection', label: 'Auto', desc: "Buying a used car? Don't go in blind. We inspect the vehicle and give you a full written report.", items: ['150-point inspection','Fluid condition assessment','Frame & body check','Test drive evaluation','Written report with photos'] },
  { icon: '🛞', cls: 'icon-green',  title: 'Roadside Assistance',             price: 'From $49',  img: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=600&q=80', imgAlt: 'Roadside assistance', label: 'Auto', desc: "Stranded? Fast roadside help — dead battery, flat tire, lockout, or out of fuel — we've got you.", items: ['Jump start service','Flat tire change','Emergency fuel delivery','Vehicle lockout service','Emergency tow referral'] },
  { icon: '📋', cls: 'icon-blue',   title: 'Preventive Maintenance',          price: 'From $69',  img: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=600&q=80', imgAlt: 'Preventive car maintenance', label: 'Auto', desc: 'Scheduled maintenance keeps your vehicle reliable and holds resale value. We track it all for you.', items: ['Manufacturer schedule review','Multi-point inspection','Tire rotation (if applicable)','Maintenance log update','Next service reminder'] },
]

const TECH = [
  { icon: '💻', cls: 'icon-purple', title: 'Laptop & Desktop Repair',         price: 'From $79',  img: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=600&q=80', imgAlt: 'Laptop repair', label: 'Tech', desc: "Won't boot, running slow, or hardware failure — we diagnose and repair PCs and Macs wherever you are.", items: ['Screen replacement (laptop)','Keyboard replacement','Motherboard diagnosis','Thermal paste & fan cleaning','Power jack repair'] },
  { icon: '🛡️', cls: 'icon-cyan',  title: 'Virus & Malware Removal',         price: 'From $89',  img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80', imgAlt: 'Cybersecurity virus removal', label: 'Tech', desc: 'Ransomware, pop-ups, sluggish performance — we deep-clean your system and harden it against threats.', items: ['Full system malware scan','Ransomware recovery','Browser reset & cleanup','Security software setup','Password audit & reset'] },
  { icon: '💾', cls: 'icon-blue',   title: 'Storage & Memory Upgrades',       price: 'From $69+', img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', imgAlt: 'SSD storage upgrade', label: 'Tech', desc: "Boost your computer's speed dramatically with an SSD upgrade or RAM expansion — installed at your home.", items: ['HDD to SSD migration','RAM upgrade & install','Storage expansion','Data cloning / migration','Post-upgrade benchmarking'] },
  { icon: '💿', cls: 'icon-orange', title: 'OS & Software Setup',             price: 'From $79',  img: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=600&q=80', imgAlt: 'Operating system setup', label: 'Tech', desc: 'Fresh Windows or macOS install, driver setup, software configuration — get your machine running clean.', items: ['Clean OS reinstall','Driver installation','Software setup & configuration','Microsoft Office setup','Backup & restore'] },
  { icon: '📱', cls: 'icon-pink',   title: 'Phone & Tablet Repair',           price: 'From $59',  img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80', imgAlt: 'Phone screen repair', label: 'Tech', desc: 'Cracked screen, dead battery, broken charging port — we repair iPhones, Android phones, and iPads.', items: ['Screen replacement','Battery replacement','Charging port repair','Water damage assessment','Camera lens replacement'] },
  { icon: '🗄️', cls: 'icon-green', title: 'Data Recovery',                   price: 'From $99',  img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', imgAlt: 'Data recovery hard drive', label: 'Tech', desc: 'Accidentally deleted files, crashed hard drive, or corrupted storage — we recover what matters most.', items: ['Deleted file recovery','Corrupted drive recovery','USB / SD card recovery','Secure data destruction','Cloud backup setup'] },
  { icon: '📶', cls: 'icon-blue',   title: 'Network & Wi-Fi Setup',           price: 'From $69',  img: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=600&q=80', imgAlt: 'WiFi network setup', label: 'Tech', desc: 'Slow Wi-Fi, dead zones, or setting up a new network — we optimize your home or office connectivity.', items: ['Router setup & configuration','Wi-Fi extender / mesh setup','Network security review','Guest network setup','Wired Ethernet runs'] },
  { icon: '🏠', cls: 'icon-cyan',   title: 'Home Tech Setup',                 price: 'From $59',  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', imgAlt: 'Smart home setup', label: 'Tech', desc: 'New smart TV, printer, or home office gear? We set everything up so it all works seamlessly.', items: ['Smart TV & streaming setup','Printer setup & drivers','Smart home device pairing','Home office configuration','Cable management'] },
  { icon: '🎮', cls: 'icon-orange', title: 'Game Console Repair',             price: 'From $69',  img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80', imgAlt: 'Game console repair', label: 'Tech', desc: 'PS5, Xbox, Nintendo — overheating, disc read errors, HDMI port damage, and more repaired on-site.', items: ['Thermal cleaning & repaste','HDMI port replacement','Disc drive repair','Controller repair','Hard drive / SSD upgrade'] },
]

function ServiceGrid({ services }) {
  return (
    <div className="grid-3">
      {services.map((s, i) => (
        <ScrollReveal key={s.title} delay={i * 60}>
          <div className="service-img-card">
            <div className="sic-img-wrap">
              <Image
                src={s.img}
                alt={s.imgAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="sic-img"
              />
              <div className="sic-img-overlay" />
              <span className="sic-img-label">{s.label} Service</span>
            </div>
            <div className="sic-body">
              <h3>{s.icon} {s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              <span className="sic-price">{s.price}</span>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero with background image */}
      <div style={{ position: 'relative', overflow: 'hidden', background: '#080c14' }}>
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80"
          alt="Auto and tech repair services"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.45 }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,8,16,.55), rgba(6,8,16,.82))', zIndex: 0 }} />
        <div className="page-hero page-hero-dark" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" className="breadcrumb">← Home <span>/ Services</span></Link>
          <h1>All Our Services,<br /><span className="gradient-text">All at Your Location</span></h1>
          <p>Certified auto and tech repair — fully mobile, same-day available, priced fairly from the start.</p>
        </div>
      </div>

      <section>
        <Tabs
          tabs={[{ id: 'auto', label: '🚗 Auto Services' }, { id: 'tech', label: '💻 Tech & Electronics' }]}
          panels={{
            auto: (
              <>
                <ScrollReveal>
                  <div className="highlight-banner">
                    <div>
                      <strong>Mobile Mechanic — We Come to You</strong>
                      <p>Your vehicle stays put. Our ASE-certified mechanic arrives fully equipped at your home or office. Same-day available for most services.</p>
                    </div>
                    <Link href="/contact" className="btn-primary">Book Auto Service</Link>
                  </div>
                </ScrollReveal>
                <ServiceGrid services={AUTO} />
                <ScrollReveal>
                  <div className="emergency-strip">
                    <div className="e-icon">🚨</div>
                    <div>
                      <h3>Stranded Right Now?</h3>
                      <p>Call us for emergency roadside assistance. We&apos;ll dispatch a technician to your location ASAP.</p>
                    </div>
                    <a href="tel:+15551234567" className="btn-primary">📞 Call Now</a>
                  </div>
                </ScrollReveal>
              </>
            ),
            tech: (
              <>
                <ScrollReveal>
                  <div className="highlight-banner">
                    <div>
                      <strong>Computer &amp; Electronics Repair — At Your Location</strong>
                      <p>Our CompTIA-certified tech arrives at your home or office with the tools and parts to fix laptops, phones, desktops, and more — most jobs completed the same day.</p>
                    </div>
                    <Link href="/contact" className="btn-primary">Book Tech Service</Link>
                  </div>
                </ScrollReveal>
                <ServiceGrid services={TECH} />
              </>
            ),
          }}
        />
      </section>

      <div className="cta-band">
        <h2>Don&apos;t See Your Issue?</h2>
        <p>Give us a call or send a message — if we can fix it, we will. Free diagnosis with every booking.</p>
        <Link href="/contact" className="btn-primary">📅 Get a Free Quote</Link>
        <div className="contact-chips">
          <a href="tel:+15551234567" className="chip">📞 (555) 123-4567</a>
          <a href="mailto:hello@cnccare.com" className="chip">✉️ hello@cnccare.com</a>
        </div>
      </div>
    </>
  )
}
