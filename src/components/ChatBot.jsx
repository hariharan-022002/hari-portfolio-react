import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { profile, projects, education, skillGroups } from '../data/content'

const GREETING = {
  role: 'bot',
  text: `Hey, I'm Hari's portfolio assistant. Ask me about his projects, skills, education, or how to get in touch.`,
}

const SUGGESTIONS = ['Skills?', 'Projects?', 'Contact info?', 'Education?']

function buildReply(rawInput) {
  const input = rawInput.toLowerCase()

  if (/\b(hi|hello|hey)\b/.test(input)) {
    return `Hi there! Ask me about Hari's skills, projects, education, or how to reach him.`
  }

  if (/(skill|tech|stack|tool|language)/.test(input)) {
    const lines = skillGroups
      .map((g) => `${g.label}: ${g.skills.map((s) => s.name).join(', ')}`)
      .join('\n')
    return `Hari's stack —\n${lines}`
  }

  if (/(project|work|built|build|portfolio piece)/.test(input)) {
    const lines = projects.map((p) => `• ${p.title} — ${p.tag}`).join('\n')
    return `A few things Hari has built:\n${lines}\n\nScroll to the Projects section for details, code, and demo links.`
  }

  if (/(education|degree|study|studied|college|university|school)/.test(input)) {
    const lines = education
      .map((e) => `• ${e.degree}, ${e.school} (${e.period})`)
      .join('\n')
    return lines
  }

  if (/(contact|email|phone|reach|hire|call|whatsapp|number)/.test(input)) {
    return `You can reach Hari at ${profile.email} or ${profile.phone}, based in ${profile.location}. There's also a contact form further down the page.`
  }

  if (/(resume|cv)/.test(input)) {
    return `You can view/download Hari's resume from the button in the hero section at the top of the page.`
  }

  if (/(about|who are you|who is hari|background)/.test(input)) {
    return profile.about
  }

  if (/(github|linkedin|social)/.test(input)) {
    return `GitHub: ${profile.socials.github}\nLinkedIn: ${profile.socials.linkedin}`
  }

  if (/(thank|thanks|bye|great|cool|nice)/.test(input)) {
    return `Anytime! Feel free to reach out through the contact form if you'd like to talk further.`
  }

  return `I'm just a small FAQ bot, so I might not have that one — but I can tell you about Hari's skills, projects, education, or contact details. You could also try the contact form below for anything more specific.`
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  function send(text) {
    const trimmed = text.trim()
    if (!trimmed) return
    const userMsg = { role: 'user', text: trimmed }
    const botMsg = { role: 'bot', text: buildReply(trimmed) }
    setMessages((m) => [...m, userMsg, botMsg])
    setInput('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    send(input)
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
        aria-label="Toggle chat assistant"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Bot size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-white">Portfolio Assistant</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink2">
                  Ask about Hari
                </p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] whitespace-pre-line rounded-xl px-3 py-2 text-sm ${
                    m.role === 'bot'
                      ? 'bg-surface2 text-ink2'
                      : 'ml-auto bg-accent text-ink'
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-line px-4 py-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink2 hover:border-signal hover:text-signal"
                >
                  {s}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-line p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question…"
                className="flex-1 rounded-full border border-line bg-surface2 px-4 py-2 text-sm text-white placeholder:text-ink2 focus:border-signal focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-ink hover:bg-accent-soft"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}