import { useRef, useEffect, useState } from 'react'

const skillCards = [
  {
    icon: 'code',
    title: 'Frontend',
    bars: [{ label: 'HTML / CSS / JS', pct: 92 }, { label: 'REACT.JS', pct: 85 }],
    tags: ['BOOTSTRAP', 'TAILWIND', 'JAVA'],
  },
  {
    icon: 'dns',
    title: 'Backend',
    bars: [{ label: 'PYTHON', pct: 90 }, { label: 'NODE.JS / EXPRESS', pct: 80 }],
    tags: ['FLASK', 'REST API', 'C++'],
  },
  {
    icon: 'psychology',
    title: 'AI / ML',
    bars: [{ label: 'COMPUTER VISION', pct: 88 }, { label: 'NLP / SENTIMENT', pct: 82 }],
    tags: ['OPENCV', 'TENSORFLOW'],
  },
  {
    icon: 'database',
    title: 'DevOps & DB',
    bars: [{ label: 'MONGODB', pct: 85 }, { label: 'GIT / GITHUB', pct: 88 }],
    tags: ['DOCKER', 'LINUX'],
  },
]

function SkillBar({ label, pct, animate }) {
  return (
    <div>
      <div className="flex justify-between font-label-caps text-[10px] text-outline mb-2">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-[1px] w-full bg-outline-variant/20 overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: animate ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function SkillCard({ card }) {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}
      className="p-6 md:p-10 border border-outline-variant/10 bg-surface hover:border-primary transition-colors duration-500">
      <span className="material-symbols-outlined text-primary mb-6 md:mb-8 text-3xl md:text-4xl block">{card.icon}</span>
      <h3 className="font-headline-md text-xl md:text-[24px] text-on-surface mb-6 md:mb-8">{card.title}</h3>
      <div className="space-y-4 md:space-y-6">
        {card.bars.map((bar) => (
          <SkillBar key={bar.label} {...bar} animate={animate} />
        ))}
        <div className="flex flex-wrap gap-2 mt-4">
          {card.tags.map((tag) => (
            <span key={tag} className="px-2 md:px-3 py-1 bg-surface-container text-[10px] font-label-caps text-outline">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="py-20 md:py-section-gap bg-surface-container-lowest" id="skills">
      <div className="px-4 md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-4 md:gap-8 reveal">
          <div>
            <span className="font-label-caps text-label-caps text-primary mb-3 md:mb-4 block">EXPERTISE</span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface">Technical Arsenal</h2>
          </div>
          <p className="font-technical text-technical text-outline-variant max-w-sm text-sm md:text-technical">
            Full-stack capability spanning intelligent AI systems to scalable cloud deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter">
          {skillCards.map((card) => (
            <SkillCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
