import { NavLink } from 'react-router-dom'

export default function Nav() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-blue-400' : 'text-slate-400 hover:text-white'
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-blue-400 font-medium tracking-tight">JH</span>
        <div className="flex gap-8">
          <NavLink to="/" end className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/work" className={linkClass}>Work</NavLink>
          <NavLink to="/terminal" className={linkClass}>Terminal</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
