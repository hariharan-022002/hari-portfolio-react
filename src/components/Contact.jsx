import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

const FORM_ENDPOINT = 'https://formspree.io/f/movaaryr'

const infoItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-ink py-28">
      <div className="container-px mx-auto">
        <SectionHeading index="05" label="Contact" title="Let's build something" />

        <div className="grid gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <p className="max-w-sm text-ink2">
              Open to fresher and entry-level roles across data science and web
              development. Reach out — I usually reply within a day.
            </p>
            {infoItems.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="card flex items-center gap-4 px-5 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface2 text-signal">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink2">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-white hover:text-accent">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card space-y-4 p-6"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-line bg-surface2 px-4 py-3 text-white placeholder:text-ink2 focus:border-signal focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-line bg-surface2 px-4 py-3 text-white placeholder:text-ink2 focus:border-signal focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-line bg-surface2 px-4 py-3 text-white placeholder:text-ink2 focus:border-signal focus:outline-none"
                placeholder="What are you building?"
              />
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">
              <Send size={16} />
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p className="font-mono text-xs text-signal">
                Message sent — thanks, I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-accent">
                Something went wrong. Try emailing me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
