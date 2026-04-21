interface PilePhotoProps {
  tone?: 'warm' | 'red' | 'forest' | 'steel' | 'concrete' | 'cream' | 'orange' | 'sky' | 'dune'
  objectLabel?: string
  caption?: string
  className?: string
  style?: React.CSSProperties
}

const palettes = {
  warm:     { bg: '#e8ddc9', stripe: '#dccdb1', ink: '#6b5a3f' },
  red:      { bg: '#8b2a26', stripe: '#7a2420', ink: '#f4ede2' },
  forest:   { bg: '#2b3a2a', stripe: '#243221', ink: '#d7d0bd' },
  steel:    { bg: '#2a3138', stripe: '#232a30', ink: '#cfc9bf' },
  concrete: { bg: '#d9d4cc', stripe: '#ccc6bb', ink: '#3a3631' },
  cream:    { bg: '#f4ede2', stripe: '#ebe1d0', ink: '#2b261d' },
  orange:   { bg: '#d9541a', stripe: '#c34911', ink: '#fff5e6' },
  sky:      { bg: '#c9d5dd', stripe: '#bcc9d2', ink: '#3a4852' },
  dune:     { bg: '#d8c8a8', stripe: '#ccbc9a', ink: '#5a4a2e' },
}

export default function PilePhoto({ tone = 'warm', objectLabel, caption, className = '', style = {} }: PilePhotoProps) {
  const p = palettes[tone]
  return (
    <div
      className={`pile-photo ${className}`}
      style={{ background: p.bg, color: p.ink, ...style }}
    >
      <div
        className="pile-photo__stripes"
        style={{ ['--stripe' as string]: p.stripe }}
      />
      <div className="pile-photo__label">
        <span className="pile-photo__dot" />
        {objectLabel}
      </div>
      {caption && <div className="pile-photo__caption">{caption}</div>}
    </div>
  )
}
