import { Link } from 'react-router-dom'
import { I18nDict } from '../data/i18n'
import { assetUrl } from '../utils/assetUrl'
import '../styles/house-images.css'

interface HomesBandProps {
  t: I18nDict
}

export default function HomesBand({ t }: HomesBandProps) {
  function renderMultiline(text: string) {
    const lines = text.split('\n')
    if (lines.length === 1) return text
    return lines.map((line, i) => <span key={i} className="line">{line}</span>)
  }

  return (
    <section className="band band--warm" id="homes">
      <div className="band__header">
        <div>
          <span className="eyebrow">{t.homes_section_eyebrow}</span>
          <h2 className="display band__title" style={{ marginTop: 16 }}>
            {renderMultiline(t.homes_section_title)}
          </h2>
        </div>
        <p className="band__body">{t.homes_section_body}</p>
      </div>
      <div className="homes-b">
        <Link className="home-b" to="/houses/bornholm">
          <div className="home-b__frame">
            <img src={assetUrl('/Bornholm/facade_1.jpg')} alt="Bornholm house exterior" className="home-b__img" />
          </div>
          <div className="home-b__caption">
            <h3 className="home-b__name">{t.home_1_name}</h3>
            <span className="home-b__price">{t.home_1_price}</span>
          </div>
          <p className="home-b__meta">{t.home_1_meta}</p>
        </Link>
        <Link className="home-b" to="/houses/kregme">
          <div className="home-b__frame">
            <img src={assetUrl('/Kregme/facade_2.jpg')} alt="Kregme house exterior" className="home-b__img" />
          </div>
          <div className="home-b__caption">
            <h3 className="home-b__name">{t.home_2_name}</h3>
            <span className="home-b__price">{t.home_2_price}</span>
          </div>
          <p className="home-b__meta">{t.home_2_meta}</p>
        </Link>
      </div>
    </section>
  )
}
