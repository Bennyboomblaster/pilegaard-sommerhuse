import { Link, useLocation } from 'react-router-dom'
import { Lang, I18nDict } from '../data/i18n'
import { scrollTo } from '../utils/scrollTo'

interface TopBarProps {
  lang: Lang
  setLang: (l: Lang) => void
  t: I18nDict
}

const langs: Lang[] = ['en', 'da', 'de']

export default function TopBar({ lang, setLang, t }: TopBarProps) {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  function navClick(id: string) {
    if (onHome) {
      scrollTo(id)
    }
    // On detail pages the links navigate back to home via Link — handled below
  }

  return (
    <header className="topbar">
      <nav className="topbar__left">
        {onHome ? (
          <>
            <button onClick={() => navClick('homes')}>{t.nav_homes}</button>
            <button onClick={() => navClick('about')}>{t.nav_about}</button>
            <button onClick={() => navClick('contact')}>{t.nav_contact}</button>
          </>
        ) : (
          <>
            <Link to="/">{t.nav_homes}</Link>
            <Link to="/">{t.nav_about}</Link>
            <Link to="/">{t.nav_contact}</Link>
          </>
        )}
      </nav>
      {onHome ? (
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand__split" />
          <span>Pilegaard</span>
        </button>
      ) : (
        <Link to="/" className="brand">
          <span className="brand__split" />
          <span>Pilegaard</span>
        </Link>
      )}
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
