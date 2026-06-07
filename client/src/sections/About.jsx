import { useRef, useEffect, useState } from 'react'
import { useLang } from '../context/LanguageContext'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const num = parseInt(target)
        const duration = 1800
        const steps = 60
        const increment = num / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= num) { setCount(num); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const { t } = useLang()

  return (
    <section className="py-20 md:py-section-gap px-4 md:px-margin-desktop max-w-[1440px] mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Photo */}
        <div className="relative reveal">
          <div className="aspect-square rounded-full border border-primary/30 p-6 md:p-8 max-w-sm mx-auto md:max-w-none">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary">
              <img src="/zohaib.jpg" alt="Zohaib Mahar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-32 h-32 md:w-40 md:h-40 bg-surface-container-high glass-panel hidden sm:flex items-center justify-center p-4 md:p-6 border border-outline-variant/20 gap-1">
            <span className="font-display-lg text-primary text-3xl md:text-4xl">3+</span>
            <span className="font-label-caps text-[9px] md:text-label-caps text-on-surface-variant leading-none">YRS EXP.</span>
          </div>
        </div>

        {/* Text */}
        <div className="reveal">
          <span className="material-symbols-outlined text-primary text-4xl md:text-6xl mb-4 md:mb-6 opacity-30 block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <h2 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface mb-6 md:mb-10 italic">
            {t.about.quote}
          </h2>
          <p className="font-body-md text-sm md:text-body-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">{t.about.p1}</p>
          <p className="font-body-md text-sm md:text-body-lg text-on-surface-variant mb-8 md:mb-12 leading-relaxed">{t.about.p2}</p>

          {/* Animated stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {t.about.stats.map(([num, label]) => {
              const digits = num.replace(/\D/g, '')
              const suffix = num.replace(/\d/g, '')
              return (
                <div key={label} className="text-center">
                  <div className="font-headline-md text-2xl md:text-headline-md text-primary mb-1 md:mb-2">
                    <AnimatedCounter target={digits} suffix={suffix} />
                  </div>
                  <div className="font-label-caps text-[9px] md:text-label-caps text-outline">{label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
