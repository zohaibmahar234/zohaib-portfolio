import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: '"Zohaib delivered exactly what I needed — clean code, fast turnaround, and zero back-and-forth. Genuinely one of the best developers I\'ve worked with on Fiverr."',
    name: 'SATISFIED CLIENT',
    platform: 'FIVERR — 5 STAR REVIEW',
  },
  {
    quote: '"The AI face detection system Zohaib built was remarkably accurate. He understood the requirements immediately and delivered beyond expectations."',
    name: 'REPEAT CLIENT',
    platform: 'UPWORK — VERIFIED REVIEW',
  },
  {
    quote: '"Professional, responsive, and technically excellent. Zohaib\'s work on our web platform was outstanding. We\'ll definitely work together again."',
    name: 'LONG-TERM CLIENT',
    platform: 'FREELANCER.COM — VERIFIED REVIEW',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 md:py-section-gap bg-surface-container">
      <div className="px-4 md:px-margin-desktop max-w-[1440px] mx-auto text-center reveal">
        <span className="font-label-caps text-label-caps text-primary mb-4 block">KIND WORDS</span>
        <span className="material-symbols-outlined text-primary text-6xl mb-12" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>

        <div className="relative max-w-4xl mx-auto min-h-[200px] flex items-center justify-center">
          <div>
            <p className="font-headline-md text-[22px] md:text-headline-md italic text-on-surface mb-10">
              {testimonials[current].quote}
            </p>
            <div className="font-label-caps text-label-caps text-primary mb-1">{testimonials[current].name}</div>
            <div className="font-technical text-[12px] text-outline">{testimonials[current].platform}</div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8 mb-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary' : 'bg-outline-variant/40'}`} />
          ))}
        </div>

        <div className="flex justify-center gap-8">
          <button onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
            className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:border-primary transition-all group">
            <span className="material-symbols-outlined text-outline group-hover:text-primary">chevron_left</span>
          </button>
          <button onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:border-primary transition-all group">
            <span className="material-symbols-outlined text-outline group-hover:text-primary">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  )
}
