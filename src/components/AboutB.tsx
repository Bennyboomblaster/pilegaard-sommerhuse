import PilePhoto from './PilePhoto'
import { I18nDict } from '../data/i18n'

interface AboutBProps {
  t: I18nDict
}

export default function AboutB({ t }: AboutBProps) {
  function renderMultiline(text: string) {
    const lines = text.split('\n')
    if (lines.length === 1) return text
    return lines.map((line, i) => <span key={i} className="line">{line}</span>)
  }

  return (
    <section className="about-b" id="about">
      <div className="about-b__photo">
        <PilePhoto tone="cream" objectLabel="Jens & Lone · Pilegaard" />
      </div>
      <div>
        <span className="eyebrow">{t.about_eyebrow}</span>
        <h2 className="display about-b__title" style={{ marginTop: 16 }}>
          {renderMultiline(t.about_title)}
        </h2>
        <p className="about-b__body">{t.about_body}</p>
      </div>
    </section>
  )
}
