import ZMLogo from './ZMLogo'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-outline-variant/20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <ZMLogo size={56} />
            <p className="font-body-md text-on-surface-variant mt-6 max-w-xs">
              Computer Scientist & Full Stack Developer crafting intelligent digital solutions from Khairpur Mir's, Pakistan.
            </p>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-outline mb-6">NAVIGATION</h4>
            <div className="space-y-3">
              {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="block font-technical text-technical text-on-surface-variant hover:text-primary transition-colors uppercase">
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-outline mb-6">CONNECT</h4>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/in/zohaib-mahar-215741349" target="_blank" rel="noreferrer"
                className="block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all">LINKEDIN</a>
              <a href="https://github.com/zohaibmahar234" target="_blank" rel="noreferrer"
                className="block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all">GITHUB</a>
              <a href="mailto:zohaibmahar486@gmail.com"
                className="block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all">EMAIL</a>
              <a href="tel:+923168463954"
                className="block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all">+92 316 8463954</a>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/20 pt-8">
          <p className="font-label-caps text-[10px] text-outline-variant tracking-widest uppercase text-center">
            © 2025 ZOHAIB MAHAR. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
