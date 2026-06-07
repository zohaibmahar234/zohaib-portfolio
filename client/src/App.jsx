import { useState, useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import CursorGlow from './components/CursorGlow'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import GitHubStats from './sections/GitHubStats'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import CVPage from './sections/CVPage'
import { useScrollReveal } from './hooks/useScrollReveal'

function PortfolioApp() {
  const [loading, setLoading] = useState(true)
  const [cvOpen, setCvOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('zm-theme') || 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    theme === 'dark' ? html.classList.add('dark') : html.classList.remove('dark')
    try { localStorage.setItem('zm-theme', theme) } catch {}
  }, [theme])

  useScrollReveal()

  return (
    <>
      <CursorGlow />
      <LoadingScreen visible={loading} />
      {cvOpen && <CVPage onClose={() => setCvOpen(false)} />}

      <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#FAFAF7]'} text-on-surface`}>
        {/* Noise grain overlay */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: theme === 'dark' ? 0.4 : 0.2,
        }} />

        <Navbar theme={theme} setTheme={setTheme} onOpenCV={() => setCvOpen(true)} />

        <main style={{ position: 'relative', zIndex: 2 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          {/* GitHubStats — uncomment karo jab public repos upload ho jayein */}
          {/* <GitHubStats /> */}
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  )
}
