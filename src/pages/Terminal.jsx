import { useState, useRef, useEffect, useCallback } from 'react'

const CHAR_DELAY = 18 // ms per character

const PROJECTS = [
  { name: 'MasterMindGame',    desc: 'iOS SwiftUI MasterMind board game' },
  { name: 'Icarus',            desc: 'Book cataloging & recommendation platform (Ruby/MySQL)' },
  { name: 'AdventEmailInsight',desc: '.NET email analytics dashboard (SendGrid)' },
  { name: 'FurhatEmotion',     desc: 'Emotion detection for Furhat social robot (Kotlin/Python)' },
  { name: 'Titanic-DBMS',      desc: 'Database management project using the Titanic dataset' },
]

const CHEATSHEET = [
  { cmd: 'help',          desc: 'Show all available commands' },
  { cmd: 'ls',            desc: 'List projects' },
  { cmd: 'cat <project>', desc: 'Show details about a project' },
  { cmd: 'whoami',        desc: 'About Jackson Holt' },
  { cmd: 'skills',        desc: 'List technical skills' },
  { cmd: 'experience',    desc: 'Work history summary' },
  { cmd: 'contact',       desc: 'Get contact info' },
  { cmd: 'github',        desc: 'Open GitHub profile' },
  { cmd: 'clear',         desc: 'Clear the terminal' },
]

// Each line has a `typed` flag — lines with typed:false skip the animation
function cheatsheetLines() {
  return [
    { type: 'system', text: '╔══════════════════════════════════════╗', typed: false },
    { type: 'system', text: '║         QUICK REFERENCE              ║', typed: false },
    { type: 'system', text: '╚══════════════════════════════════════╝', typed: false },
    { type: 'blank', typed: false },
    ...CHEATSHEET.map(({ cmd, desc }) => ({
      type: 'table', cmd: cmd.padEnd(18), desc, typed: false,
    })),
    { type: 'blank', typed: false },
    { type: 'muted', text: 'Type a command below to get started.', typed: false },
    { type: 'blank', typed: false },
  ]
}

function processCommand(input) {
  const raw = input.trim()
  const cmd = raw.toLowerCase()
  const args = raw.split(/\s+/)

  if (cmd === 'help') return [
    { type: 'heading', text: 'Available Commands' },
    { type: 'blank' },
    ...CHEATSHEET.map(({ cmd, desc }) => ({ type: 'table', cmd: cmd.padEnd(18), desc })),
    { type: 'blank' },
  ]

  if (cmd === 'ls') return [
    { type: 'heading', text: 'Projects' },
    { type: 'blank' },
    ...PROJECTS.map(p => ({ type: 'table', cmd: p.name.padEnd(22), desc: p.desc })),
    { type: 'blank' },
    { type: 'muted', text: 'Run  cat <project-name>  for details.' },
    { type: 'blank' },
  ]

  if (args[0].toLowerCase() === 'cat') {
    if (!args[1]) return [{ type: 'error', text: 'Usage: cat <project-name>' }, { type: 'blank' }]
    const match = PROJECTS.find(p => p.name.toLowerCase() === args[1].toLowerCase())
    if (!match) return [
      { type: 'error', text: `cat: ${args[1]}: No such project` },
      { type: 'muted', text: 'Run  ls  to see available projects.' },
      { type: 'blank' },
    ]
    return [
      { type: 'heading', text: match.name },
      { type: 'blank' },
      { type: 'output', text: match.desc },
      { type: 'link', text: `https://github.com/jrholt04/${match.name}`, href: `https://github.com/jrholt04/${match.name}` },
      { type: 'blank' },
    ]
  }

  if (cmd === 'whoami') return [
    { type: 'heading', text: 'Jackson Holt' },
    { type: 'blank' },
    { type: 'output', text: 'Role      Software Solution Analyst — Judicial Systems, Inc.' },
    { type: 'output', text: 'Education B.A. Computer Science, Transylvania University (GPA 3.78)' },
    { type: 'output', text: 'Location  Remote (KY)' },
    { type: 'output', text: 'Email     jacksonrholt04@gmail.com' },
    { type: 'blank' },
  ]

  if (cmd === 'skills') return [
    { type: 'heading', text: 'Technical Skills' },
    { type: 'blank' },
    { type: 'table', cmd: 'Languages'.padEnd(16),  desc: 'Python, C++, C#, JavaScript, Ruby, SQL, Java, Kotlin, Swift' },
    { type: 'table', cmd: 'Frameworks'.padEnd(16), desc: 'React, Gatsby, .NET, Sanity' },
    { type: 'table', cmd: 'Tools'.padEnd(16),      desc: 'Git, Azure, Jira, Postman, Visual Studio, GitHub Copilot' },
    { type: 'table', cmd: 'AI/ML'.padEnd(16),      desc: 'DeepFace, VADER, Scikit-Learn' },
    { type: 'blank' },
  ]

  if (cmd === 'experience') return [
    { type: 'heading', text: 'Work History' },
    { type: 'blank' },
    { type: 'table', cmd: '2026–Present'.padEnd(16), desc: 'Software Solution Analyst — Judicial Systems, Inc.' },
    { type: 'table', cmd: '2025'.padEnd(16),          desc: 'Software Engineer Intern (x2) — Awesome INC' },
    { type: 'table', cmd: '2024'.padEnd(16),          desc: 'Database Management Intern — AdventFS' },
    { type: 'table', cmd: '2023'.padEnd(16),          desc: 'Software Engineer Intern — AdventFS' },
    { type: 'table', cmd: '2025–2026'.padEnd(16),     desc: 'Chief Instructor — Week of Code Camp' },
    { type: 'blank' },
  ]

  if (cmd === 'contact') return [
    { type: 'heading', text: 'Contact' },
    { type: 'blank' },
    { type: 'table', cmd: 'Email'.padEnd(12),    desc: 'jacksonrholt04@gmail.com' },
    { type: 'table', cmd: 'GitHub'.padEnd(12),   desc: 'github.com/jrholt04' },
    { type: 'table', cmd: 'LinkedIn'.padEnd(12), desc: 'linkedin.com/in/jackson-r-holt' },
    { type: 'blank' },
  ]

  if (cmd === 'github') {
    window.open('https://github.com/jrholt04', '_blank')
    return [{ type: 'success', text: 'Opening github.com/jrholt04 ...' }, { type: 'blank' }]
  }

  if (cmd === 'clear') return null
  if (cmd === '') return []

  return [
    { type: 'error', text: `command not found: ${raw}` },
    { type: 'muted', text: 'Type  help  to see available commands.' },
    { type: 'blank' },
  ]
}

// Extract the full text string from a line for character-by-character typing
function lineFullText(line) {
  if (line.type === 'blank' || line.type === 'prompt') return null
  if (line.type === 'table') return line.cmd + line.desc
  return line.text ?? null
}

function Line({ line }) {
  if (line.type === 'blank') return <div className="h-1" />
  if (line.type === 'system') return <div className="text-blue-400/70 font-mono text-sm whitespace-pre">{line.display ?? line.text}</div>
  if (line.type === 'heading') return <div className="text-blue-300 font-mono text-sm font-bold">{line.display ?? line.text}</div>
  if (line.type === 'output') return <div className="text-slate-300 font-mono text-sm">{line.display ?? line.text}</div>
  if (line.type === 'muted') return <div className="text-slate-500 font-mono text-sm">{line.display ?? line.text}</div>
  if (line.type === 'error') return <div className="text-red-400 font-mono text-sm">{line.display ?? line.text}</div>
  if (line.type === 'success') return <div className="text-emerald-400 font-mono text-sm">{line.display ?? line.text}</div>
  if (line.type === 'table') {
    const full = line.cmd + line.desc
    const display = line.display ?? full
    const cmdPart = display.slice(0, Math.min(display.length, line.cmd.length))
    const descPart = display.length > line.cmd.length ? display.slice(line.cmd.length) : ''
    return (
      <div className="font-mono text-sm flex gap-0">
        <span className="text-blue-300 shrink-0 whitespace-pre">{cmdPart}</span>
        <span className="text-slate-400">{descPart}</span>
      </div>
    )
  }
  if (line.type === 'link') return (
    <a href={line.href} target="_blank" rel="noopener noreferrer"
      className="font-mono text-sm text-blue-400 underline underline-offset-2 hover:text-blue-300">
      {line.display ?? line.text}
    </a>
  )
  return null
}

export default function Terminal() {
  const [history, setHistory] = useState(cheatsheetLines())
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [cmdIndex, setCmdIndex] = useState(-1)
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  // Queue of lines waiting to be typed out: [{ ...line, display: '' }, ...]
  const queueRef = useRef([])
  const animFrameRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const drainQueue = useCallback(() => {
    if (queueRef.current.length === 0) {
      setIsTyping(false)
      return
    }

    const line = queueRef.current[0]
    const full = lineFullText(line)

    // Instantly add blank and prompt lines
    if (full === null) {
      queueRef.current.shift()
      setHistory(prev => [...prev, line])
      animFrameRef.current = setTimeout(drainQueue, 0)
      return
    }

    // Start typing this line — add it with empty display
    const startLen = line.display?.length ?? 0
    if (startLen === 0) {
      setHistory(prev => [...prev, { ...line, display: '' }])
    }

    let charIndex = startLen

    const tick = () => {
      charIndex++
      if (charIndex > full.length) {
        // Line fully typed — move to next
        queueRef.current.shift()
        animFrameRef.current = setTimeout(drainQueue, 30)
        return
      }
      setHistory(prev => {
        const next = [...prev]
        next[next.length - 1] = { ...next[next.length - 1], display: full.slice(0, charIndex) }
        return next
      })
      animFrameRef.current = setTimeout(tick, CHAR_DELAY)
    }

    animFrameRef.current = setTimeout(tick, CHAR_DELAY)
  }, [])

  function enqueueLines(lines) {
    queueRef.current.push(...lines)
    if (!isTyping) {
      setIsTyping(true)
      drainQueue()
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const cmd = input.trim()
    if (!cmd || isTyping) return

    setCmdHistory(prev => [cmd, ...prev])
    setCmdIndex(-1)
    setInput('')

    if (cmd.toLowerCase() === 'clear') {
      clearTimeout(animFrameRef.current)
      queueRef.current = []
      setHistory([])
      setIsTyping(false)
      return
    }

    const result = processCommand(cmd)
    const promptLine = { type: 'prompt', text: cmd, typed: false }

    // Add prompt instantly, then queue the output lines
    setHistory(prev => [...prev, promptLine])
    if (result && result.length > 0) {
      enqueueLines(result)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1)
      setCmdIndex(next)
      setInput(cmdHistory[next] ?? '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(cmdIndex - 1, -1)
      setCmdIndex(next)
      setInput(next === -1 ? '' : cmdHistory[next])
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <div className="mb-6">
        <p className="font-mono text-blue-400 text-sm mb-3 tracking-widest uppercase">Interactive</p>
        <h2 className="text-4xl font-bold text-white mb-1">Terminal</h2>
        <p className="text-slate-400 text-sm">Use ↑ ↓ arrow keys to cycle command history.</p>
      </div>

      <div
        className="bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden shadow-2xl cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-slate-500 font-mono text-xs">jackson@portfolio ~ </span>
        </div>

        {/* Output */}
        <div className="p-5 min-h-96 max-h-[60vh] overflow-y-auto space-y-0.5">
          {history.map((line, i) => (
            line.type === 'prompt'
              ? <div key={i} className="flex gap-2 font-mono text-sm mt-2">
                  <span className="text-emerald-400 shrink-0">❯</span>
                  <span className="text-white">{line.text}</span>
                </div>
              : <Line key={i} line={line} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-5 py-4 border-t border-white/10">
          <span className="text-emerald-400 font-mono text-sm shrink-0">❯</span>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            className="flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-slate-600 caret-blue-400 disabled:opacity-40"
            placeholder={isTyping ? '' : 'type a command...'}
            spellCheck={false}
            autoComplete="off"
          />
          {isTyping && <span className="text-slate-600 font-mono text-xs animate-pulse">typing...</span>}
        </form>
      </div>
    </main>
  )
}
