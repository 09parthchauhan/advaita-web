import { useState } from 'react'

export default function VideoEmbed({ videoId, title, caption }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 0, border: 0, background: 'none', cursor: 'pointer', overflow: 'hidden' }}
          >
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              loading="lazy"
              draggable="false"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <span style={{ position: 'absolute', inset: 0, background: 'rgba(3,3,3,0.34)' }} />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '64px', height: '64px', borderRadius: '50%', background: '#f5820a', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="22" viewBox="0 0 22 26" fill="none" aria-hidden="true">
                <path d="M21 13L1 25V1l20 12z" fill="#fff" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <p style={{ margin: '10px 0 0', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{caption}</p>
      )}
    </div>
  )
}
