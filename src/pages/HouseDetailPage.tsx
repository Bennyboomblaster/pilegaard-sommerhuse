import { useState, FormEvent } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getHouse } from '../data/houses'
import { Lang, i18n } from '../data/i18n'
import '../styles/detail.css'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
}

const langs: Lang[] = ['en', 'da', 'de']

export default function HouseDetailPage({ lang, setLang }: Props) {
  const { slug } = useParams<{ slug: string }>()
  const house = getHouse(slug ?? '')
  const t = i18n[lang]

  const [arrive, setArrive] = useState('2026-07-04')
  const [depart, setDepart] = useState('2026-07-11')
  const [guests, setGuests] = useState(6)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  if (!house) return <Navigate to="/" replace />

  const nights = Math.max(1, Math.round(
    (new Date(depart).getTime() - new Date(arrive).getTime()) / 86400000
  ))
  const total = nights * house.nightlyRate

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <>
      {/* Topbar */}
      <header className="topbar">
        <nav className="topbar__left">
          <Link to="/">{t.nav_homes}</Link>
          <Link to="/#about">{t.nav_about}</Link>
          <Link to="/#contact">{t.nav_contact}</Link>
        </nav>
        <Link to="/" className="brand">
          <span className="brand__mark" />
          <span>Pilegaard</span>
        </Link>
        <div className="topbar__right">
          <div className="lang">
            {langs.map(c => (
              <button key={c} aria-pressed={lang === c} onClick={() => setLang(c)}>{c}</button>
            ))}
          </div>
        </div>
      </header>

      <Link to="/" className="detail-back">← {t.detail_back}</Link>

      {/* Hero */}
      <section className="detail-hero">
        <div>
          <span className="eyebrow">Summer home</span>
          <h1 className="display detail-hero__title">{house.name}.</h1>
          <div className="detail-hero__meta">
            {house.meta.map((m, i) => <span key={i}>{m}</span>)}
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--ink-soft)', lineHeight: 1.45, maxWidth: '42ch' }}>
          {house.quote}
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        {house.gallery.map((src, i) => (
          <div key={i}>
            <img src={src} alt={`${house.name} · photo ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Body: story + booking sidebar */}
      <section className="detail-body">
        <div className="detail-story">
          <span className="eyebrow">{t.detail_story}</span>
          <h3 style={{ marginTop: 16, marginBottom: 20 }}>{house.location}</h3>
          {house.story.map((p, i) => <p key={i}>{p}</p>)}

          <h3 style={{ marginTop: 40, marginBottom: 16, fontSize: 28 }}>{t.detail_amenities}</h3>
          <ul className="amenities">
            {house.amenities.map((a, i) => <li key={i}>{a}</li>)}
          </ul>

          <h3 style={{ marginTop: 40, marginBottom: 16, fontSize: 28 }}>{t.detail_rates}</h3>
          <div className="rate-table">
            <div className="rate-table__row rate-table__row--head">
              <span>Season</span><span>Per week</span>
            </div>
            {house.rates.map((r, i) => (
              <div key={i} className="rate-table__row">
                <span dangerouslySetInnerHTML={{ __html: r.label.replace(/^(\w+)/, '<strong>$1</strong>') }} />
                <span className="rate-table__price">{r.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking sidebar */}
        <aside>
          <div className="booking-sidebar">
            <span className="eyebrow">{t.booking_title}</span>
            <p className="booking-sidebar__title">Request these dates.</p>
            <form onSubmit={handleSubmit}>
              <div className="booking-row">
                <div className="field">
                  <label>{t.booking_arrive}</label>
                  <input type="date" value={arrive} onChange={e => setArrive(e.target.value)} />
                </div>
                <div className="field">
                  <label>{t.booking_depart}</label>
                  <input type="date" value={depart} onChange={e => setDepart(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label>{t.booking_guests}</label>
                <select value={guests} onChange={e => setGuests(+e.target.value)}>
                  {[2, 3, 4, 5, 6].map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Name</label>
                <input placeholder="Hanne Jensen" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="hanne@example.dk" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="booking-total">
                <span>{nights} nights × {house.nightlyRate.toLocaleString('da-DK')} kr</span>
                <span>{total.toLocaleString('da-DK')} kr</span>
              </div>
              <button className="btn btn--ink" type="submit" disabled={sent}>
                {sent ? 'Sent — we\'ll reply within 24h ✓' : <><span>{t.detail_book}</span><span className="btn__arrow">→</span></>}
              </button>
              <p className="contact__note">{t.booking_note}</p>
            </form>
          </div>
        </aside>
      </section>

      {/* Map */}
      <section className="map-strip">
        <div className="map-strip__head">
          <div>
            <span className="eyebrow eyebrow--light">{t.detail_location}</span>
            <h3>{house.location}</h3>
          </div>
          <p>{house.mapLabels.area} — {house.mapLabels.direction1.replace('← ', '').replace(' →', '')} away.</p>
        </div>
        <div className="map-frame">
          <svg className="map-svg" viewBox="0 0 1200 340" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(244,237,226,0.06)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="340" fill="url(#grid2)" />
            <path d="M0,80 L1200,130 L1200,0 L0,0 Z" fill="rgba(200,154,107,0.18)" />
            <path d="M0,80 L1200,130 L1200,200 L0,170 Z" fill="rgba(200,154,107,0.3)" />
            <path d="M0,170 L1200,200 L1200,340 L0,340 Z" fill="rgba(43,58,42,0.45)" />
            <text x="40" y="50" fill="#f4ede2" opacity="0.45" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="3">{house.mapLabels.area}</text>
            <text x="40" y="150" fill="#f4ede2" opacity="0.45" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="3">{house.mapLabels.landmark}</text>
            <g transform="translate(580,185)">
              <circle r="10" fill="#8b2a26" />
              <circle r="22" fill="none" stroke="#8b2a26" strokeOpacity="0.4" />
              <circle r="34" fill="none" stroke="#8b2a26" strokeOpacity="0.2" />
              <text x="26" y="-6" fill="#f4ede2" fontFamily="Instrument Serif" fontSize="22">{house.name}</text>
              <text x="26" y="14" fill="#d7d0bd" fontFamily="JetBrains Mono" fontSize="10" opacity="0.7">{house.mapLabels.address}</text>
            </g>
            <text x="860" y="310" fill="#d7d0bd" fontFamily="JetBrains Mono" fontSize="9" opacity="0.5" letterSpacing="2">{house.mapLabels.direction2}</text>
            <text x="40" y="310" fill="#d7d0bd" fontFamily="JetBrains Mono" fontSize="9" opacity="0.5" letterSpacing="2">{house.mapLabels.direction1}</text>
          </svg>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__left">{t.footer_small}</div>
        <div className="footer__right">{t.footer_built}</div>
      </footer>
    </>
  )
}
