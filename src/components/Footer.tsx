import { I18nDict } from '../data/i18n'

interface FooterProps {
  t: I18nDict
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="footer-b">
      <span>{t.footer_small}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {t.footer_built}
      </span>
    </footer>
  )
}
