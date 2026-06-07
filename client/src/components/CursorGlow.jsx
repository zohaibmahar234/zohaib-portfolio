import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef(null)
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const glowPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    // Only desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const glow = glowRef.current

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      // Dot follows instantly
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    // Glow trails with lerp
    const animate = () => {
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.08
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.08
      glow.style.transform = `translate(${glowPos.current.x - 200}px, ${glowPos.current.y - 200}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    // Show on first move
    const onFirstMove = () => {
      dot.style.opacity = '1'
      glow.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', onFirstMove, { once: true })
    rafRef.current = requestAnimationFrame(animate)

    // Hide on links/buttons
    const onEnter = () => dot.style.transform += ' scale(2.5)'
    const onLeave = () => {}
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Small precise dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#e6c364',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 0.3s',
          mixBlendMode: 'screen',
        }}
      />
      {/* Large soft glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,195,100,0.07) 0%, rgba(230,195,100,0.03) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'opacity 0.5s',
        }}
      />
    </>
  )
}
