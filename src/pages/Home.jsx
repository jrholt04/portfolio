import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Photo */}
        <div className="shrink-0">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-900/60 border-2 border-blue-400/30 flex items-center justify-center overflow-hidden">
            {/* Replace the img src with your actual photo path, e.g. /photo.jpg */}
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

      {/* Skills strip */}
      <div className="mt-24 border-t border-white/5 pt-12">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Technical Focus</p>
        <div className="flex flex-wrap gap-2">
          {['React', 'Python', 'C++', 'C#', 'Ruby', 'JavaScript', 'SQL', 'Azure', 'Gatsby', 'Sanity', 'DeepFace', 'Scikit-Learn', 'Git', 'Agile'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
