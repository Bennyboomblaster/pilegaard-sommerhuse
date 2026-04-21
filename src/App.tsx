import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Lang } from './data/i18n'
import HomePage from './pages/HomePage'
import HouseDetailPage from './pages/HouseDetailPage'

export interface Tweaks {
  palette: 'default' | 'autumn' | 'coastal'
}

const TWEAK_DEFAULTS: Tweaks = {
  palette: 'default',
}

export default function App() {
  const [tweaks, setTweaks] = useState<Tweaks>(TWEAK_DEFAULTS)
  const [lang, setLang] = useState<Lang>('en')
  const [editMode, setEditMode] = useState(false)

  const setTweak = (patch: Partial<Tweaks>) => {
    setTweaks(prev => {
      const next = { ...prev, ...patch }
      try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*') } catch {}
      return next
    })
  }

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (!e.data || typeof e.data !== 'object') return
      if (e.data.type === '__activate_edit_mode') setEditMode(true)
      if (e.data.type === '__deactivate_edit_mode') setEditMode(false)
    }
    window.addEventListener('message', handler)
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*') } catch {}
    return () => window.removeEventListener('message', handler)
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-palette', tweaks.palette)
  }, [tweaks.palette])

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              tweaks={tweaks}
              setTweak={setTweak}
              lang={lang}
              setLang={setLang}
              editMode={editMode}
            />
          }
        />
        <Route
          path="/houses/:slug"
          element={<HouseDetailPage lang={lang} setLang={setLang} />}
        />
      </Routes>
    </HashRouter>
  )
}
