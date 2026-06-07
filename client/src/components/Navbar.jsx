import { useState, useEffect } from 'react'
import ZMLogo from './ZMLogo'
import { useLang } from '../context/LanguageContext'

export default function Navbar({ theme, setTheme, onOpenCV }) {
  const { t, toggleLang, lang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  const navKeys = ['about', 'skills', 'projects', 'experience', 'education', 'contact']

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.35 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Mobile overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMenuOpen(false)} />}

      {/* Mobile slide menu */}
      <div className={`fixed top-0 right-0 h-full w-72 z-50 flex flex-col py-10 px-8 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: theme === 'dark' ? '#0a0a0a' : '#fafaf7', borderLeft: '0.5px solid rgba(77,70,55,0.3)' }}>
        <div className="flex justify-between items-center mb-12">
          <ZMLogo size={36} />
          <button onClick={() => setMenuOpen(false)} className="text-on-surface-variant hover:text-primary p-1">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {navKeys.map((key) => (
            <button key={key} onClick={() => scrollTo(key)}
              className={`text-left py-3 px-4 font-label-caps text-label-caps uppercase transition-colors rounded ${activeSection === key ? 'text-primary bg-primary/5' : 'text-on-surface-variant hover:text-primary'}`}>
              {t.nav[key]}
            </button>
          ))}
        </nav>
        <div className="mt-6">
          <button onClick={onOpenCV}
            className="w-full py-2.5 border border-outline-variant/30 text-on-surface-variant font-label-caps text-xs mb-3 hover:border-primary transition-colors">
            VIEW CV
          </button>
          <button onClick={() => scrollTo('contact')}
            className="w-full py-3 bg-primary text-on-primary font-label-caps text-label-caps text-sm">
            {t.nav.hire}
          </button>
        </div>
      </div>

      {/* Top nav */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel' : ''}`}>
        <div className="flex justify-between items-center px-4 md:px-margin-desktop py-4 md:py-6 w-full max-w-[1440px] mx-auto">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <ZMLogo size={36} />
          </a>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navKeys.map((key) => (
              <button key={key} onClick={() => scrollTo(key)}
                className={`font-label-caps text-label-caps uppercase transition-colors duration-300 ${activeSection === key ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                {t.nav[key]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Language toggle */}
            <button onClick={toggleLang}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary transition-all font-label-caps text-[10px]">
              {lang === 'en' ? 'اردو' : 'EN'}
            </button>

            {/* CV button */}
            <button onClick={onOpenCV}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary transition-all font-label-caps text-[10px]">
              <span className="material-symbols-outlined text-[14px]">description</span>
              CV
            </button>

            {/* Theme toggle */}
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-on-surface-variant hover:text-primary transition-all">
              <span className="material-symbols-outlined text-xl">{theme === 'dark' ? 'dark_mode' : 'light_mode'}</span>
            </button>

            <button onClick={() => scrollTo('contact')}
              className="hidden md:block px-5 py-2.5 bg-primary text-on-primary font-label-caps text-[11px] hover:scale-95 transition-transform duration-200">
              {t.nav.hire}
            </button>

            <button onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-all">
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
