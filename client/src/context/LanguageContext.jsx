import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    nav: { about: 'about', skills: 'skills', projects: 'projects', experience: 'experience', education: 'education', contact: 'contact', hire: 'Hire Me' },
    hero: {
      badge_available: 'Available for Freelance', badge_busy: 'Currently Busy — DM for Urgent', badge_open: 'Open to Opportunities',
      cta_work: 'VIEW MY WORK', cta_cv: 'DOWNLOAD CV',
      desc: "Engineering intelligent digital solutions at the intersection of Computer Science and AI. Built to perform, designed to impress.",
    },
    about: {
      label: 'ABOUT', quote: 'Where code meets intelligence, and ideas become impact.',
      p1: "I am Zohaib Mahar — a Computer Scientist, AI Engineer, and Software Developer based in Karachi, Pakistan, with over 3 years of hands-on experience architecting intelligent systems and enterprise-grade software solutions across global freelance platforms.",
      p2: "As a Fiverr Level 1 Seller and active on Upwork and Freelancer.com, I engineer end-to-end software solutions — from AI-powered computer vision systems and NLP pipelines to scalable web applications — blending cutting-edge artificial intelligence with modern software architecture to deliver products that don't just work, but lead.",
      stats: [['15+', 'PROJECTS'], ['10+', 'CLIENTS'], ['3+', 'REPEAT']],
    },
    skills: { label: 'EXPERTISE', title: 'Technical Arsenal', sub: 'Full-stack capability spanning AI systems to scalable cloud deployments.' },
    projects: { label: 'PORTFOLIO', title: 'Selected Works', filters: ['All Projects', 'AI / ML', 'Web Dev', 'Python'] },
    contact: {
      label: 'CONNECT', title: "Let's build something extraordinary.",
      send: 'SEND MESSAGE', sending: 'SENDING...', sent: 'Message Sent.', sent_sub: "I'll get back to you within 24 hours.",
      fields: { name: 'YOUR NAME', email: 'EMAIL ADDRESS', subject: 'SUBJECT', message: 'MESSAGE' },
    },
    cv: { title: 'Curriculum Vitae', print: 'Print / Save PDF' },
  },
  ur: {
    nav: { about: 'تعارف', skills: 'مہارت', projects: 'منصوبے', experience: 'تجربہ', education: 'تعلیم', contact: 'رابطہ', hire: 'ملازمت دیں' },
    hero: {
      badge_available: 'فری لانس کام کے لیے دستیاب', badge_busy: 'فی الحال مصروف', badge_open: 'مواقع کے لیے تیار',
      cta_work: 'میرا کام دیکھیں', cta_cv: 'سی وی ڈاؤنلوڈ کریں',
      desc: 'کمپیوٹر سائنس اور مصنوعی ذہانت کے سنگم پر ذہین ڈیجیٹل حل تیار کرنا — بہترین کارکردگی کے لیے بنائی گئی ہے۔',
    },
    about: {
      label: 'تعارف', quote: 'جہاں کوڈ ذہانت سے ملتا ہے، اور خیالات اثر بن جاتے ہیں۔',
      p1: 'میں زوہیب ماہر ہوں — کراچی، پاکستان سے تعلق رکھنے والا کمپیوٹر سائنٹسٹ، AI انجینئر، اور سافٹ ویئر ڈویلپر، جو 3 سال سے زائد تجربے کے ساتھ ذہین سسٹمز اور اعلیٰ درجے کے سافٹ ویئر حل تیار کر رہا ہوں۔',
      p2: 'فائیور لیول 1 سیلر کے طور پر، میں AI کمپیوٹر ویژن سسٹمز سے لے کر اسکیل ایبل ویب ایپلیکیشنز تک — جدید مصنوعی ذہانت اور سافٹ ویئر آرکیٹیکچر کو یکجا کر کے ایسے حل پیش کرتا ہوں جو صرف کام نہیں کرتے، بلکہ رہنمائی کرتے ہیں۔',
      stats: [['15+', 'منصوبے'], ['10+', 'کلائنٹس'], ['3+', 'مستقل']],
    },
    skills: { label: 'مہارت', title: 'تکنیکی صلاحیتیں', sub: 'فرنٹ اینڈ سے لے کر AI سسٹمز تک مکمل فل اسٹیک صلاحیت۔' },
    projects: { label: 'پورٹ فولیو', title: 'منتخب کام', filters: ['تمام', 'AI / ML', 'ویب', 'پائتھن'] },
    contact: {
      label: 'رابطہ', title: 'مل کر کچھ شاندار بنائیں۔',
      send: 'پیغام بھیجیں', sending: 'بھیجا جا رہا ہے...', sent: 'پیغام مل گیا۔', sent_sub: '24 گھنٹوں میں جواب دوں گا۔',
      fields: { name: 'آپ کا نام', email: 'ای میل', subject: 'موضوع', message: 'پیغام' },
    },
    cv: { title: 'تعلیمی سوانح', print: 'پرنٹ / PDF محفوظ کریں' },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('zm-lang') || 'en' } catch { return 'en' }
  })
  const t = translations[lang]
  const isUrdu = lang === 'ur'
  const toggleLang = () => {
    const next = lang === 'en' ? 'ur' : 'en'
    setLang(next)
    try { localStorage.setItem('zm-lang', next) } catch {}
  }
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isUrdu }}>
      <div dir={isUrdu ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLang() { return useContext(LanguageContext) }
