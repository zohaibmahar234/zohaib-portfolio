const experiences = [
  {
    period: 'APR 2023 — PRESENT',
    role: 'Freelance Web Developer — Level 1 Seller',
    company: 'FIVERR · REMOTE',
    points: [
      'Engineered responsive UIs, improving client user engagement by 20%.',
      'Developed robust full-stack solutions using Python and JavaScript frameworks.',
      'Optimized application performance, reducing load times by 30%.',
      'Achieved Level 1 Seller status with consistent 5-star client reviews and 3 repeat clients.',
    ],
    active: true,
  },
  {
    period: '2023 — PRESENT',
    role: 'Freelance Developer',
    company: 'UPWORK',
    points: [
      'Secured projects in AI/ML and full-stack web development for international clients.',
      'Maintained a strong JSS (Job Success Score) through quality delivery and communication.',
    ],
    active: false,
  },
  {
    period: '2023 — PRESENT',
    role: 'Freelance Developer',
    company: 'FREELANCER.COM & INDEED',
    points: [
      'Worked across diverse project categories including computer vision and web apps.',
      'Expanded client network across multiple continents through consistent quality output.',
    ],
    active: false,
  },
]

export default function Experience() {
  return (
    <section className="py-20 md:py-section-gap px-4 md:px-margin-desktop max-w-[1440px] mx-auto" id="experience">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-24">
        <div className="reveal">
          <span className="font-label-caps text-label-caps text-primary mb-4 block">JOURNEY</span>
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-8">Professional Evolution</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            From first commit to global freelance platforms — a track record of delivering quality, earning trust, and building solutions that matter.
          </p>
        </div>

        <div className="space-y-20 reveal">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 border-l border-outline-variant/20">
              <div className={`absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full ${exp.active ? 'bg-primary' : 'bg-outline-variant'}`} />
              <span className="font-technical text-technical text-primary mb-2 block">{exp.period}</span>
              <h3 className="font-headline-md text-xl md:text-[26px] text-on-surface mb-2">{exp.role}</h3>
              <div className="font-label-caps text-label-caps text-outline-variant mb-6 tracking-widest">{exp.company}</div>
              <ul className="space-y-3 font-body-md text-on-surface-variant list-disc pl-4 marker:text-primary">
                {exp.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
