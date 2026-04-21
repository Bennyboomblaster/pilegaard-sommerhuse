import { I18nDict } from '../data/i18n'
import { scrollTo } from '../utils/scrollTo'

interface SplitHeroProps {
  t: I18nDict
}

function renderMultiline(text: string) {
  const lines = text.split('\n')
  if (lines.length === 1) return text
  return lines.map((line, i) => <span key={i} className="line">{line}</span>)
}

export default function SplitHero({ t }: SplitHeroProps) {
  return (
    <section className="band band--warm hero-band">
      <span className="eyebrow">{t.hero_eyebrow}</span>
      <h1 className="display band__title" style={{ marginTop: 16, fontSize: 'clamp(52px,7vw,120px)' }}>
        {renderMultiline(t.hero_title_a)}
      </h1>
      <p style={{ maxWidth: '52ch', marginTop: 20, color: 'var(--ink-soft)', fontSize: 17, lineHeight: 1.6 }}>
        {t.hero_sub_a}
      </p>
      <button className="btn btn--red" style={{ marginTop: 28 }} onClick={() => scrollTo('homes')}>
        <span>{t.hero_cta_primary}</span>→
      </button>
    </section>
  )
}
