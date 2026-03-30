import { SPARKLINE_PTS } from '../constants/index.jsx'

export function Sparkline({ color = '#4F46E5', width = 480, height = 64 }) {
  const max = Math.max(...SPARKLINE_PTS)
  const pts = SPARKLINE_PTS.map((v, i) => [
    (i / (SPARKLINE_PTS.length - 1)) * width,
    height - (v / max) * height * 0.9 + height * 0.05,
  ])
  const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const fill = `${d} L${width},${height} L0,${height} Z`
  const id = `sg-${color.replace('#', '')}`
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="sparkline-svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
