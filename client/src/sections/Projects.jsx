import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

const projects = [
  { title: 'VOTING APP', desc: 'A secure, real-time digital voting platform with authentication, live result tracking, and tamper-proof vote recording.', tags: ['PYTHON', 'FLASK', 'MONGODB'], category: 'web', github: 'https://github.com/zohaibmahar234', color: '#e6c364', icon: 'how_to_vote' },
  { title: 'DROWSEGUARD AI', desc: 'AI-powered driver drowsiness detection using real-time eye-tracking and facial landmark analysis. Triggers instant alerts.', tags: ['PYTHON', 'OPENCV', 'DLIB'], category: 'ai', github: 'https://github.com/zohaibmahar234', color: '#4ade80', icon: 'visibility' },
  { title: 'AI FACE DETECTION', desc: 'High-accuracy face detection and recognition system for multi-face identification in real time.', tags: ['PYTHON', 'FACE_RECOGNITION', 'OPENCV'], category: 'ai', github: 'https://github.com/zohaibmahar234', color: '#e6c364', icon: 'face' },
  { title: 'FAKE CURRENCY DETECTOR', desc: 'Deep learning model that detects counterfeit currency using CNN-based classification for banking verification.', tags: ['PYTHON', 'TENSORFLOW', 'CNN'], category: 'ai', github: 'https://github.com/zohaibmahar234', color: '#a78bfa', icon: 'payments' },
  { title: 'BANK MANAGEMENT SYSTEM', desc: 'Full-featured banking application with account creation, fund transfers, transaction history, and admin controls.', tags: ['PYTHON', 'MONGODB', 'FLASK'], category: 'python', github: 'https://github.com/zohaibmahar234', color: '#e6c364', icon: 'account_balance' },
  { title: 'SENTIMENT ANALYSIS', desc: 'NLP-powered sentiment analysis engine for Amazon product reviews with high-accuracy opinion classification.', tags: ['PYTHON', 'NLP', 'SKLEARN'], category: 'ai', github: 'https://github.com/zohaibmahar234', color: '#fb923c', icon: 'sentiment_satisfied' },
  { title: 'ONLINE CAR SHOWROOM', desc: 'Full-stack online car dealership platform with inventory management, advanced filters, and booking system.', tags: ['REACT', 'NODE.JS', 'MONGODB'], category: 'web', github: 'https://github.com/zohaibmahar234', color: '#e6c364', icon: 'directions_car' },
]

const filterKeys = ['all', 'ai', 'web', 'python']

export default function Projects() {
  const [active, setActive] = useState('all')
  const { t } = useLang()
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section className="py-20 md:py-section-gap px-4 md:px-margin-desktop max-w-[1440px] mx-auto" id="projects">
      <div className="text-center mb-10 md:mb-16 reveal">
        <span className="font-label-caps text-label-caps text-primary mb-3 block">{t.projects.label}</span>
        <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface">{t.projects.title}</h2>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14 reveal">
        {filterKeys.map((key, i) => (
          <button key={key} onClick={() => setActive(key)}
            className={`px-4 md:px-5 py-2 font-label-caps text-[11px] border transition-all duration-300 ${active === key ? 'bg-primary text-on-primary border-primary' : 'border-outline-variant/30 text-outline hover:border-primary hover:text-primary'}`}>
            {t.projects.filters[i]}
            <span className="ml-1.5 opacity-50 text-[10px]">
              {key === 'all' ? projects.length : projects.filter(p => p.category === key).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-gutter reveal">
        {filtered.map((p) => (
          <div key={p.title} className="group bg-surface-container border border-outline-variant/10 overflow-hidden hover:border-primary/50 transition-all duration-500">
            <div className="aspect-video bg-surface-container-high flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${p.color}08 0%, transparent 70%)` }} />
              <div className="flex flex-col items-center gap-3 relative z-10">
                <span className="material-symbols-outlined text-5xl md:text-7xl" style={{ color: p.color, opacity: 0.6, fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
                <div className="flex flex-wrap gap-1 justify-center px-2">
                  {p.tags.slice(0, 2).map(t => (
                    <span key={t} className="px-2 py-0.5 text-[9px] font-label-caps border rounded"
                      style={{ borderColor: `${p.color}40`, color: p.color, background: `${p.color}10` }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-primary/30" />
              <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-primary/30" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-primary/30" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-primary/30" />
            </div>
            <div className="p-5 md:p-7">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-headline-md text-base md:text-[17px] text-on-surface">{p.title}</h3>
                <div className="flex gap-2 flex-shrink-0 ml-2">
                  <a href="#" className="material-symbols-outlined text-outline hover:text-primary transition-colors text-[18px]">open_in_new</a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="material-symbols-outlined text-outline hover:text-primary transition-colors text-[18px]">code</a>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-4 text-xs md:text-sm leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">{p.tags.map(tag => <span key={tag} className="font-technical text-[10px] text-primary">{tag}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
