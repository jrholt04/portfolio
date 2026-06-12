const projects = [
  {
    name: 'MasterMindGame',
    description: 'iOS mobile app built with SwiftUI that simulates the classic MasterMind board game.',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    github: 'https://github.com/jrholt04/MasterMindGame',
  },
  {
    name: 'Icarus',
    description: 'A website that makes finding new books convenient — supports saving favorites, personalized recommendations, and user authentication.',
    tags: ['Ruby', 'MySQL', 'CGI', 'Apache'],
    github: 'https://github.com/jrholt04/Icarus',
  },
  {
    name: 'AdventEmailInsight',
    description: 'Email insight and analytics tool integrating the SendGrid API.',
    tags: ['.NET', 'C#', 'SendGrid'],
    github: 'https://github.com/jrholt04/AdventEmailInsight',
  },
  {
    name: 'FurhatEmotion',
    description: 'Emotion detection integration for the Furhat social robotics platform.',
    tags: ['Kotlin', 'Robotics', 'Furhat SDK'],
    github: 'https://github.com/jrholt04/FurhatEmotion',
  },
  {
    name: 'Titanic-DBMS',
    description: 'Database management system project using the Titanic dataset.',
    tags: ['Ruby', 'SQL', 'DBMS'],
    github: 'https://github.com/jrholt04/Titanic-DBMS',
  },
]

function ProjectCard({ name, description, tags, github }) {
  return (
    <div className="group relative bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-blue-400 transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 bg-blue-500/10 border border-blue-400/20 rounded text-xs text-blue-300 font-mono">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="mb-12">
        <p className="font-mono text-blue-400 text-sm mb-3 tracking-widest uppercase">My Work</p>
        <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
        <p className="text-slate-400 max-w-xl">
          A selection of projects across systems programming, web development, and tooling. More on GitHub.
        </p>
        <a
          href="https://github.com/jrholt04"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          github.com/jrholt04
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(p => <ProjectCard key={p.name} {...p} />)}
      </div>
    </main>
  )
}
