const jobs = [
  {
    title: 'Software Solution Analyst',
    company: 'Judicial Systems, Inc.',
    period: 'July 2026 — Present',
    type: 'Full-Time',
    bullets: [
      'Incoming software analyst supporting judicial technology products and case management systems.',
      'Fully remote position reporting to the Product Strategy and Implementation Manager.',
    ],
  },
  {
    title: 'Software Engineer Intern — Rewards Dashboard',
    company: 'Awesome INC',
    period: 'Jan 2025 — May 2025',
    type: 'Internship',
    bullets: [
      'Developed a rewards-based attendance dashboard that contributed to a 10% increase in event attendance for a local pitch competition.',
      'Built and maintained the dashboard using React and Sanity, translating business requirements into functional user experiences.',
      'Collaborated cross-functionally with marketing and events teams; presented weekly demos to stakeholders.',
      'Supported defect tracking and testing efforts to deliver the product on schedule.',
    ],
  },
  {
    title: 'Software Engineer Intern — Partners Page',
    company: 'Awesome INC',
    period: 'Jan 2025 — May 2025',
    type: 'Internship',
    bullets: [
      'Designed and developed a dynamic Partners webpage to highlight supporting organizations.',
      'Built and maintained the page using React and Sanity, ensuring scalability as partners were added or removed.',
      'Collaborated with design and marketing teams to translate branding requirements into a functional web experience.',
      'Delivered weekly demos to validate alignment with business specifications.',
    ],
  },
  {
    title: 'Database Management Intern',
    company: 'AdventFS',
    period: 'May 2024 — Aug 2024',
    type: 'Internship',
    bullets: [
      'Supported data infrastructure upgrades driven by increased software usage and new PCI compliance requirements.',
      'Collaborated with the technical lead to design and execute a secure data migration strategy using Azure-based methodologies.',
      'Migrated and validated sensitive user data from legacy servers to protected environments, ensuring data integrity and continuity.',
      'Strengthened security for user data and financial transactions through successful implementation of the migration.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'AdventFS',
    period: 'May 2023 — Aug 2023',
    type: 'Internship',
    bullets: [
      'Investigated email delivery failures across high-volume client communications by analyzing SendGrid API integrations.',
      'Developed a .NET-based dashboard to surface bounced, blocked, and invalid emails, translating API error codes into actionable insights for non-technical teams.',
      'Collaborated with development and management teams using Agile practices to iteratively improve email deliverability.',
    ],
  },
  {
    title: 'Chief Instructor',
    company: 'Week of Code Camp',
    period: 'July 2025, 2026',
    type: 'Leadership',
    bullets: [
      'Led a coding camp of 20 young adults, teaching mobile app development, website development, and game design.',
    ],
  },
]

const typeColors = {
  'Full-Time': 'bg-blue-500/10 text-blue-300 border-blue-400/20',
  'Internship': 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
  'Leadership': 'bg-purple-500/10 text-purple-300 border-purple-400/20',
}

function JobCard({ title, company, period, type, bullets }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-1.5 bottom-0 w-px bg-white/10 last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-400 border-2 border-navy-900 ring-2 ring-blue-400/30" />

      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
          <span className={`px-2.5 py-0.5 text-xs font-mono border rounded-full shrink-0 ${typeColors[type]}`}>
            {type}
          </span>
        </div>
        <p className="text-blue-400 font-medium text-sm mb-1">{company}</p>
        <p className="text-slate-500 text-xs font-mono mb-4">{period}</p>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
              <span className="text-blue-400/60 mt-1 shrink-0">›</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <div className="mb-12">
        <p className="font-mono text-blue-400 text-sm mb-3 tracking-widest uppercase">Experience</p>
        <h2 className="text-4xl font-bold text-white mb-4">Work History</h2>
        <p className="text-slate-400 max-w-xl">
          A timeline of my professional roles, internships, and leadership positions.
        </p>
      </div>

      <div className="relative">
        {jobs.map((job, i) => <JobCard key={i} {...job} />)}
      </div>
    </main>
  )
}
