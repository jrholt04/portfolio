import { Link } from 'react-router-dom'

const stack = [
  { name: 'React',       slug: 'react',           color: '61DAFB' },
  { name: 'Python',      slug: 'python',          color: '3776AB' },
  { name: 'JavaScript',  slug: 'javascript',      color: 'F7DF1E' },
  { name: 'C++',         slug: 'cplusplus',       color: '00599C', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C#',          slug: 'csharp',          color: '9B4F96', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: 'Ruby',        slug: 'ruby',            color: 'CC342D' },
  { name: 'Swift',       slug: 'swift',           color: 'F05138' },
  { name: 'Kotlin',      slug: 'kotlin',          color: '7F52FF' },
  { name: 'Azure',       slug: 'azure',           color: '0078D4', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'Git',         slug: 'git',             color: 'F05032' },
  { name: 'Gatsby',      slug: 'gatsby',          color: '663399' },
  { name: 'Tailwind',    slug: 'tailwindcss',     color: '06B6D4' },
  { name: 'Vite',        slug: 'vite',            color: '646CFF' },
  { name: '.NET',        slug: 'dotnet',          color: '512BD4' },
  { name: 'SQL',         slug: 'mysql',           color: '4479A1' },
  { name: 'GitHub',      slug: 'github',          color: 'ffffff' },
  { name: 'Sanity',      slug: 'sanity',          color: 'F03E2F' },
]

function LogoCard({ name, slug, color, url }) {
  const src = url || `https://cdn.simpleicons.org/${slug}/${color}`
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/[0.03] border border-white/10 rounded-xl shrink-0 w-24 hover:border-blue-400/30 transition-colors duration-300">
      <img
        src={src}
        alt={name}
        className="w-8 h-8"
        onError={e => e.target.style.opacity = '0'}
      />
      <span className="text-xs text-slate-400 font-mono text-center leading-tight">{name}</span>
    </div>
  )
}

export default function Home() {
  const doubled = [...stack, ...stack]

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

          {/* Photo */}
          <div className="shrink-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-900/60 border-2 border-blue-400/30 flex items-center justify-center overflow-hidden">
              <img
                src="/headshot.jpg"
                alt="Jackson Holt"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full items-center justify-center">
                <svg className="w-20 h-20 text-blue-400/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-mono text-blue-400 text-sm mb-3 tracking-widest uppercase">Hello, I'm</p>
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">Jackson Holt</h1>
            <p className="text-xl text-slate-300 font-medium mb-6">Software Solution Analyst — Judicial Systems, Inc.</p>

            <p className="text-slate-400 leading-relaxed max-w-xl mb-8">
              CS graduate from Transylvania University, joining Judicial Systems Inc. as a Software Solution Analyst. I've shipped production software at Awesome INC; building React dashboards and dynamic partner pages. I also led a secure Azure data migration at AdventFS under PCI compliance constraints. I bring a builder's instinct and a background that spans web platforms, data infrastructure, AI-driven robotics, and systems programming.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/projects"
                className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 border border-white/20 hover:border-white/40 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack carousel */}
      <div className="mt-24 border-t border-white/5 pt-12">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-8 px-6 max-w-5xl mx-auto">Tech Stack</p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0a0f1e, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0a0f1e, transparent)' }} />

          <div
            className="flex gap-4 w-max"
            style={{ animation: 'marquee 30s linear infinite' }}
            onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
          >
            {doubled.map((tech, i) => (
              <LogoCard key={i} {...tech} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  )
}
