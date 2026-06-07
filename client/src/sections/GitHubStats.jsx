import { useState, useEffect } from 'react'

const GITHUB_USERNAME = 'zohaibmahar234'

export default function GitHubStats() {
  const [imgError, setImgError] = useState({ stats: false, langs: false, streak: false })

  const theme = 'dark' // always dark for consistency with portfolio

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=e6c364&icon_color=e6c364&text_color=b0a98a&border_color=4d4637&hide_border=false&count_private=true&bg_color=0a0a0a`

  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&title_color=e6c364&text_color=b0a98a&border_color=4d4637&bg_color=0a0a0a&hide_border=false`

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&border=4d4637&ring=e6c364&fire=e6c364&currStreakLabel=e6c364&sideLabels=b0a98a&dates=b0a98a&background=0a0a0a&stroke=4d4637`

  return (
    <section className="py-20 md:py-section-gap px-4 md:px-margin-desktop max-w-[1440px] mx-auto" id="github">
      <div className="mb-12 md:mb-24 reveal">
        <span className="font-label-caps text-label-caps text-primary mb-3 md:mb-4 block">OPEN SOURCE</span>
        <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface">GitHub Activity</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 reveal">
        {/* Stats card */}
        {!imgError.stats ? (
          <img
            src={statsUrl}
            alt="Zohaib GitHub Stats"
            className="w-full rounded border border-outline-variant/10"
            onError={() => setImgError(e => ({ ...e, stats: true }))}
          />
        ) : (
          <div className="border border-outline-variant/10 bg-surface rounded p-8 flex items-center justify-center">
            <p className="font-technical text-outline text-sm text-center">GitHub stats loading failed. <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="text-primary hover:underline">View on GitHub →</a></p>
          </div>
        )}

        {/* Top languages */}
        {!imgError.langs ? (
          <img
            src={langsUrl}
            alt="Top Languages"
            className="w-full rounded border border-outline-variant/10"
            onError={() => setImgError(e => ({ ...e, langs: true }))}
          />
        ) : (
          <div className="border border-outline-variant/10 bg-surface rounded p-8 flex items-center justify-center">
            <p className="font-technical text-outline text-sm text-center">Language stats unavailable.</p>
          </div>
        )}
      </div>

      {/* Streak */}
      <div className="reveal">
        {!imgError.streak ? (
          <img
            src={streakUrl}
            alt="GitHub Streak"
            className="w-full rounded border border-outline-variant/10"
            onError={() => setImgError(e => ({ ...e, streak: true }))}
          />
        ) : (
          <div className="border border-outline-variant/10 bg-surface rounded p-8 flex items-center justify-center">
            <p className="font-technical text-outline text-sm text-center">Streak stats unavailable.</p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center reveal">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary/10 transition-all"
        >
          VIEW ALL REPOSITORIES
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </a>
      </div>
    </section>
  )
}
