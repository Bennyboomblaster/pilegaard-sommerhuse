import { Lang, I18nDict } from '../data/i18n'

interface TopBarProps {
  lang: Lang
  setLang: (l: Lang) => void
  t: I18nDict
}

const langs: Lang[] = ['en', 'da', 'de']

export default function TopBar({ lang, setLang, t }: TopBarProps) {
  return (
    <header className="topbar">
      <nav className="topbar__left">
        <a href="#homes">{t.nav_homes}</a>
        <a href="#about">{t.nav_about}</a>
        <a href="#contact">{t.nav_contact}</a>
      </nav>
      <a className="brand" href="#">
        <span className="brand__split" />
        <span>Pilegaard</span>
      </a>
      <div className="topbar__right">
        <div className="lang">
          {langs.map(c => (
            <button key={c} aria-pressed={lang === c} onClick={() => setLang(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
