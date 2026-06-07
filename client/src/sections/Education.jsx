export default function Education() {
  return (
    <section className="py-20 md:py-section-gap px-4 md:px-margin-desktop max-w-[1440px] mx-auto" id="education">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-24">
        <div className="reveal">
          <span className="font-label-caps text-label-caps text-primary mb-4 block">ACADEMIA</span>
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-8">Education & Credentials</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Academic foundation rooted in computer science — from foundational computing to advanced software engineering.
          </p>
        </div>

        <div className="space-y-20 reveal">
          <div className="relative pl-12 border-l border-outline-variant/20">
            <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-primary" />
            <span className="font-technical text-technical text-primary mb-2 block">2023 — 2027</span>
            <h3 className="font-headline-md text-[26px] text-on-surface mb-2">Bachelor of Computer Science</h3>
            <div className="font-label-caps text-label-caps text-outline-variant mb-6 tracking-widest">IBA SUKKUR UNIVERSITY · SINDH, PAKISTAN</div>
            <ul className="space-y-3 font-body-md text-on-surface-variant list-disc pl-4 marker:text-primary">
              <li>Studied core CS fundamentals — Data Structures, Algorithms, OOP, and Software Engineering.</li>
              <li>Developed expertise in AI/ML, databases, and full-stack web development.</li>
              <li>Applied academic learning to real-world freelance projects simultaneously.</li>
            </ul>
          </div>

          <div className="relative pl-12 border-l border-outline-variant/20">
            <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-outline-variant" />
            <span className="font-technical text-technical text-primary mb-2 block">AUG 2020 — MAY 2021</span>
            <h3 className="font-headline-md text-[26px] text-on-surface mb-2">Diploma in Information Technology (DIT)</h3>
            <div className="font-label-caps text-label-caps text-outline-variant mb-6 tracking-widest">IBA SUKKUR UNIVERSITY · KHAIRPUR, SINDH</div>
            <ul className="space-y-3 font-body-md text-on-surface-variant list-disc pl-4 marker:text-primary">
              <li>Completed foundational training in computer hardware, networking, and software applications.</li>
              <li>Built the technical base that launched a career in web development and AI.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 reveal">
        <span className="font-label-caps text-label-caps text-primary mb-8 block">LANGUAGES</span>
        <div className="flex flex-wrap gap-8">
          {[['ENGLISH', 'Fluent'], ['HINDI', 'Intermediate'], ['URDU / SINDHI', 'Native']].map(([lang, level]) => (
            <div key={lang} className="flex items-center gap-4 p-6 border border-outline-variant/10 bg-surface hover:border-primary transition-colors duration-500 min-w-[180px]">
              <span className="material-symbols-outlined text-primary">language</span>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface">{lang}</div>
                <div className="font-technical text-[12px] text-outline mt-1">{level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
