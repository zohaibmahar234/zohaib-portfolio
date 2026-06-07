const certs = [
  {
    title: 'Python for Everybody',
    issuer: 'Coursera — University of Michigan',
    year: '2023',
    icon: 'school',
    color: '#e6c364',
    link: '#',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera — Andrew Ng / DeepLearning.AI',
    year: '2023',
    icon: 'psychology',
    color: '#4ade80',
    link: '#',
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy — Dr. Angela Yu',
    year: '2022',
    icon: 'code',
    color: '#a78bfa',
    link: '#',
  },
  {
    title: 'Diploma in Information Technology',
    issuer: 'IBA Sukkur University',
    year: '2021',
    icon: 'workspace_premium',
    color: '#fb923c',
    link: '#',
  },
]

export default function Certifications() {
  return (
    <section className="py-20 md:py-section-gap bg-surface-container-lowest" id="certifications">
      <div className="px-4 md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="mb-12 md:mb-24 reveal">
          <span className="font-label-caps text-label-caps text-primary mb-3 md:mb-4 block">CREDENTIALS</span>
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter reveal">
          {certs.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="group p-6 md:p-8 border border-outline-variant/10 bg-surface hover:border-primary transition-all duration-500 block"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-lg"
                style={{ background: `${cert.color}12`, border: `0.5px solid ${cert.color}30` }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: cert.color, fontVariationSettings: "'FILL' 1" }}>
                  {cert.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-[15px] md:text-[17px] text-on-surface mb-2 group-hover:text-primary transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="font-technical text-[11px] md:text-technical text-outline-variant mb-4 leading-relaxed">{cert.issuer}</p>
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-[10px] text-outline">{cert.year}</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[16px]">open_in_new</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
