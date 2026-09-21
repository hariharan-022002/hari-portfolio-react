import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import NetworkBackground from './NetworkBackground'
import { profile } from '../data/content'

const ROLES = [
  'AI & Data Analyst',
  'Full-Stack Web Developer',
  'Graphic Designer'
]

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <NetworkBackground />
        <div className="absolute inset-0 bg-grid-fade" />
      </div>

      <div className="container-px relative z-10 mx-auto w-full pt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-5"
        >
          // hello world, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          Hari Haran
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 h-9 font-mono text-lg text-accent sm:text-xl"
        >
          {typed}
          <span className="ml-1 inline-block w-[2px] animate-blink bg-accent align-middle">
            &nbsp;
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-base text-ink2 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            See my work
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Resume
          </a>
          <div className="ml-0 flex items-center gap-4 sm:ml-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink2 transition-colors hover:text-signal"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-ink2 transition-colors hover:text-signal"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-floaty text-ink2 hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
