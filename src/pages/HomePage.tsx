import { Tweaks } from '../App'
import { Lang, i18n } from '../data/i18n'
import TopBar from '../components/TopBar'
import SplitHero from '../components/SplitHero'
import HomesBand from '../components/HomesBand'
import AboutB from '../components/AboutB'
import ContactB from '../components/ContactB'
import Footer from '../components/Footer'
import TweaksPanel from '../components/Tweaks'

interface HomePageProps {
  tweaks: Tweaks
  setTweak: (patch: Partial<Tweaks>) => void
  lang: Lang
  setLang: (l: Lang) => void
  editMode: boolean
}

export default function HomePage({ tweaks, setTweak, lang, setLang, editMode }: HomePageProps) {
  const t = i18n[lang]
  return (
    <>
      <TopBar lang={lang} setLang={setLang} t={t} />
      <SplitHero t={t} />
      <HomesBand t={t} />
      <AboutB t={t} />
      <ContactB t={t} />
      <Footer t={t} />
      <TweaksPanel tweaks={tweaks} setTweak={setTweak} visible={editMode} />
    </>
  )
}
