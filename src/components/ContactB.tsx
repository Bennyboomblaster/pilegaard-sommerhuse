import { FormEvent } from 'react'
import { I18nDict } from '../data/i18n'

interface ContactBProps {
  t: I18nDict
}

export default function ContactB({ t }: ContactBProps) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    alert('Sent!')
  }

  return (
    <section className="contact-b" id="contact">
      <div className="contact-b__info">
        <span className="eyebrow">Direct</span>
        <h2 className="display" style={{ fontSize: 'clamp(40px,5vw,64px)', marginTop: 16 }}>
          {t.contact_title}
        </h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: '38ch', marginTop: 16 }}>{t.contact_body}</p>
        <dl>
          <div>
            <dt>Phone</dt>
            <dd>{t.contact_phone}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{t.contact_email}</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd style={{ fontSize: 18 }}>{t.contact_address}</dd>
          </div>
        </dl>
      </div>
      <form className="form-b" onSubmit={handleSubmit}>
        <h3>{t.booking_title}</h3>
        <div className="booking-row">
          <div className="field">
            <label>{t.booking_arrive}</label>
            <input type="date" defaultValue="2026-07-04" />
          </div>
          <div className="field">
            <label>{t.booking_depart}</label>
            <input type="date" defaultValue="2026-07-11" />
          </div>
        </div>
        <div className="booking-row">
          <div className="field">
            <label>Service</label>
            <select>
              <option>Arnager (Bornholm)</option>
              <option>Kregme</option>
            </select>
          </div>
          <div className="field">
            <label>{t.booking_guests}</label>
            <select>
              <option>2</option>
              <option>4</option>
              <option>6</option>
            </select>
          </div>
        </div>
        <button className="btn btn--red" type="submit" style={{ justifyContent: 'center', marginTop: 8 }}>
          <span>{t.booking_check}</span>→
        </button>
        <p style={{ fontSize: 12, color: 'var(--ink-faint)' }}>{t.booking_note}</p>
      </form>
    </section>
  )
}
