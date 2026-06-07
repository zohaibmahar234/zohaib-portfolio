import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('active')
            e.target.querySelectorAll('.line-growth').forEach((l) => l.classList.add('active'))
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((r) => observer.observe(r))
    return () => observer.disconnect()
  }, [])
}
