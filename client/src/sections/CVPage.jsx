import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

export default function CVPage({ onClose }) {
  const { t } = useLang()

  // ESC key se close karo
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    // Body scroll band karo
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handlePrint = () => {
    // Print sirf CV wala div
    const printContents = document.getElementById('cv-print').innerHTML
    const win = window.open('', '_blank', 'width=900,height=1200')
    win.document.write(`
      <html>
        <head>
          <title>Zohaib Mahar — CV</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: Georgia, serif; background: white; color: black; }
            @media print {
              @page { margin: 0.5in; size: A4; }
            }
          </style>
        </head>
        <body>${printContents}</body>
      </html>
    `)
    win.document.close()
    win.focus()
    setTimeout(() => { win.print(); win.close() }, 400)
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto py-20 px-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
    >
      {/* Button bar — floats above */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[70] flex gap-3 shadow-xl">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary font-label-caps text-[11px] hover:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[15px]">print</span>
          Print / Save PDF
        </button>
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-5 py-2.5 font-label-caps text-[11px] hover:scale-95 transition-transform"
          style={{ background: '#1a1a1a', color: '#e5e2e1', border: '0.5px solid rgba(255,255,255,0.15)' }}
        >
          <span className="material-symbols-outlined text-[15px]">close</span>
          Close
        </button>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 z-[61]" onClick={onClose} />

      {/* A4 CV card */}
      <div
        id="cv-print"
        className="relative z-[62] bg-white text-black w-full max-w-[794px] shadow-2xl"
        style={{ fontFamily: 'Georgia, serif', padding: '48px 56px', minHeight: 1000 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ borderBottom: '2px solid #111', paddingBottom: 24, marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 4 }}>ZOHAIB MAHAR</h1>
            <p style={{ fontSize: 12, letterSpacing: '0.15em', color: '#555', fontFamily: 'sans-serif' }}>COMPUTER SCIENTIST · FULL STACK DEVELOPER · AI ENGINEER</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: 12, color: '#444', lineHeight: 1.9, fontFamily: 'sans-serif' }}>
            <div>zohaibmahar486@gmail.com</div>
            <div>+92 316 8463954</div>
            <div>Khairpur Mir's, Sindh, Pakistan</div>
            <div style={{ color: '#c9a84c' }}>zohaibmahar.vercel.app</div>
          </div>
        </div>

        {/* Summary */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 10, letterSpacing: '0.15em', fontFamily: 'sans-serif', fontWeight: 700, color: '#c9a84c', marginBottom: 8 }}>PROFESSIONAL SUMMARY</h2>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: '#333' }}>
            Computer Scientist, AI Engineer, and Software Developer based in Karachi, Pakistan, with 3+ years of experience architecting intelligent systems and enterprise-grade software solutions. Fiverr Level 1 Seller with a 5-star rating. 15+ projects delivered, 10+ clients served globally. Specialized in Python, React, Node.js, OpenCV, TensorFlow, and Machine Learning.
          </p>
        </div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
          {/* LEFT */}
          <div>
            <h2 style={{ fontSize: 10, letterSpacing: '0.15em', fontFamily: 'sans-serif', fontWeight: 700, color: '#c9a84c', marginBottom: 14 }}>EXPERIENCE</h2>
            {[
              { role: 'Freelance Full Stack Developer', co: 'Fiverr · Level 1 Seller', period: 'Apr 2023 – Present', points: ['Delivered 7+ projects with 5-star ratings', 'Improved client engagement by 20%', 'Reduced app load times by 30%', '3 long-term repeat clients'] },
              { role: 'Freelance Developer', co: 'Upwork & Freelancer.com', period: '2023 – Present', points: ['AI/ML and full-stack web projects globally', 'Maintained strong Job Success Score'] },
            ].map(exp => (
              <div key={exp.role} style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{exp.role}</div>
                <div style={{ fontSize: 11, color: '#c9a84c', fontFamily: 'sans-serif', marginBottom: 4 }}>{exp.co} · {exp.period}</div>
                <ul style={{ paddingLeft: 16 }}>
                  {exp.points.map(p => <li key={p} style={{ fontSize: 12, color: '#444', lineHeight: 1.65 }}>{p}</li>)}
                </ul>
              </div>
            ))}

            <h2 style={{ fontSize: 10, letterSpacing: '0.15em', fontFamily: 'sans-serif', fontWeight: 700, color: '#c9a84c', marginBottom: 14, marginTop: 24 }}>EDUCATION</h2>
            {[
              { degree: 'BS Computer Science', inst: 'IBA Sukkur University', period: '2023 – 2027' },
              { degree: 'Diploma in IT (DIT)', inst: 'IBA Sukkur University', period: 'Aug 2020 – May 2021' },
            ].map(e => (
              <div key={e.degree} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{e.degree}</div>
                <div style={{ fontSize: 11, color: '#c9a84c', fontFamily: 'sans-serif' }}>{e.inst} · {e.period}</div>
              </div>
            ))}

            <h2 style={{ fontSize: 10, letterSpacing: '0.15em', fontFamily: 'sans-serif', fontWeight: 700, color: '#c9a84c', marginBottom: 14, marginTop: 24 }}>LANGUAGES</h2>
            {[['English', 'Fluent'], ['Urdu / Sindhi', 'Native'], ['Hindi', 'Intermediate']].map(([l, v]) => (
              <div key={l} style={{ fontSize: 12, marginBottom: 5, color: '#333' }}>
                <strong>{l}</strong> — <span style={{ color: '#666' }}>{v}</span>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <h2 style={{ fontSize: 10, letterSpacing: '0.15em', fontFamily: 'sans-serif', fontWeight: 700, color: '#c9a84c', marginBottom: 14 }}>SKILLS</h2>
            {[
              ['Frontend', 'React, HTML/CSS, JavaScript, Tailwind, Bootstrap'],
              ['Backend', 'Python, Node.js, Flask, Express, REST API'],
              ['AI / ML', 'OpenCV, TensorFlow, scikit-learn, NLP, DLIB'],
              ['Database', 'MongoDB, MySQL'],
              ['Tools', 'Git, GitHub, Docker, Linux, Vercel'],
            ].map(([label, val]) => (
              <div key={label} style={{ marginBottom: 9 }}>
                <span style={{ fontSize: 11, fontFamily: 'sans-serif', fontWeight: 700, color: '#333' }}>{label}: </span>
                <span style={{ fontSize: 12, color: '#555' }}>{val}</span>
              </div>
            ))}

            <h2 style={{ fontSize: 10, letterSpacing: '0.15em', fontFamily: 'sans-serif', fontWeight: 700, color: '#c9a84c', marginBottom: 14, marginTop: 24 }}>SELECTED PROJECTS</h2>
            {[
              ['DrowseGuard AI', 'Real-time drowsiness detection — OpenCV, DLIB'],
              ['AI Face Detection', 'Multi-face recognition for security systems'],
              ['Fake Currency Detector', 'CNN-based counterfeit currency classification'],
              ['Voting App', 'Secure real-time digital voting platform'],
              ['Sentiment Analysis', 'NLP engine for Amazon product reviews'],
              ['Online Car Showroom', 'Full-stack dealership — React, Node.js, MongoDB'],
            ].map(([title, desc]) => (
              <div key={title} style={{ marginBottom: 9 }}>
                <span style={{ fontSize: 12, fontWeight: 700 }}>{title}</span>
                <span style={{ fontSize: 11, color: '#666' }}> — {desc}</span>
              </div>
            ))}

            <h2 style={{ fontSize: 10, letterSpacing: '0.15em', fontFamily: 'sans-serif', fontWeight: 700, color: '#c9a84c', marginBottom: 14, marginTop: 24 }}>LINKS</h2>
            {[
              ['GitHub', 'github.com/zohaibmahar234'],
              ['LinkedIn', 'linkedin.com/in/zohaib-mahar-215741349'],
              ['Portfolio', 'zohaibmahar.vercel.app'],
              ['Email', 'zohaibmahar486@gmail.com'],
            ].map(([label, val]) => (
              <div key={label} style={{ fontSize: 12, marginBottom: 6 }}>
                <span style={{ color: '#333', fontWeight: 700 }}>{label}: </span>
                <span style={{ color: '#c9a84c' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
