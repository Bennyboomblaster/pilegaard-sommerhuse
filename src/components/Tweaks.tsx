import { Tweaks as TweaksType } from '../App'

interface TweaksProps {
  tweaks: TweaksType
  setTweak: (patch: Partial<TweaksType>) => void
  visible: boolean
}

const palettes = [
  { id: 'default', c: '#8b2a26' },
  { id: 'autumn',  c: '#9a3b1e' },
  { id: 'coastal', c: '#2f5a6e' },
] as const

export default function Tweaks({ tweaks, setTweak, visible }: TweaksProps) {
  if (!visible) return null

  return (
    <div className="tweaks-panel">
      <h4>Palette</h4>
      <div className="swatch-row">
        {palettes.map(p => (
          <button
            key={p.id}
            className="swatch"
            aria-pressed={tweaks.palette === p.id}
            style={{ background: p.c }}
            onClick={() => setTweak({ palette: p.id })}
          />
        ))}
      </div>
    </div>
  )
}
