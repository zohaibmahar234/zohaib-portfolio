import { useEffect, useRef } from 'react'

export default function ZMLogo({ size = 44 }) {
  const svgRef = useRef(null)

  useEffect(() => {
    // Har baar component mount ho — replay karo (page load / nav click)
    const texts = svgRef.current?.querySelectorAll('.draw-letter')
    const line  = svgRef.current?.querySelector('.draw-line')
    if (!texts) return

    // Reset
    texts.forEach(t => {
      t.style.strokeDashoffset = '400'
      t.style.fillOpacity = '0'
    })
    if (line) { line.style.strokeDashoffset = '40'; line.style.opacity = '0' }

    // Z draws first
    requestAnimationFrame(() => {
      setTimeout(() => {
        texts[0].style.transition = 'stroke-dashoffset 0.9s ease, fill-opacity 0.5s ease 0.7s'
        texts[0].style.strokeDashoffset = '0'
        texts[0].style.fillOpacity = '1'
      }, 200)

      // dividing line
      setTimeout(() => {
        if (line) {
          line.style.transition = 'stroke-dashoffset 0.4s ease, opacity 0.4s ease'
          line.style.strokeDashoffset = '0'
          line.style.opacity = '0.45'
        }
      }, 900)

      // M draws second
      setTimeout(() => {
        texts[1].style.transition = 'stroke-dashoffset 0.9s ease, fill-opacity 0.5s ease 0.7s'
        texts[1].style.strokeDashoffset = '0'
        texts[1].style.fillOpacity = '1'
      }, 1100)
    })
  }, [])

  const h = Math.round(size * 0.68)

  return (
    <svg
      ref={svgRef}
      width={size}
      height={h}
      viewBox="0 0 60 42"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ZM Logo"
      style={{ cursor: 'default', overflow: 'visible' }}
    >
      {/* Z — stroke-draw then fill */}
      <text
        className="draw-letter"
        x="1" y="34"
        fontFamily="EB Garamond, Georgia, serif"
        fontSize="34"
        fontWeight="700"
        fontStyle="italic"
        fill="#e6c364"
        stroke="#e6c364"
        strokeWidth="0.8"
        style={{
          strokeDasharray: '400',
          strokeDashoffset: '400',
          fillOpacity: '0',
        }}
      >Z</text>

      {/* Dividing line between Z and M */}
      <line
        className="draw-line"
        x1="27" y1="37"
        x2="34" y2="5"
        stroke="#e6c364"
        strokeWidth="0.8"
        style={{
          strokeDasharray: '40',
          strokeDashoffset: '40',
          opacity: '0',
        }}
      />

      {/* M — stroke-draw then fill, delayed */}
      <text
        className="draw-letter"
        x="33" y="34"
        fontFamily="EB Garamond, Georgia, serif"
        fontSize="34"
        fontWeight="700"
        fontStyle="italic"
        fill="#e6c364"
        stroke="#e6c364"
        strokeWidth="0.8"
        style={{
          strokeDasharray: '400',
          strokeDashoffset: '400',
          fillOpacity: '0',
        }}
      >M</text>
    </svg>
  )
}
