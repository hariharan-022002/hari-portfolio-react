import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, PenTool } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

const socialLinks = [
  { key: 'github', href: profile.socials.github, icon: Github, label: 'GitHub' },
  { key: 'linkedin', href: profile.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { key: 'behance', href: profile.socials.behance, icon: PenTool, label: 'Behance' },
  { key: 'instagram', href: profile.socials.instagram, icon: Instagram, label: 'Instagram' },
]

export default function About() {
  return (
    <section id="about" className="bg-ink py-28">
      <div className="container-px mx-auto grid gap-14 md:grid-cols-[1fr_1.4fr] md:items-start">
        <SectionHeading index="01" label="About" title="A bit about how I work" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:pt-[4.5rem]"
        >
          <p className="text-lg leading-relaxed text-ink2 md:text-xl">
            {profile.about}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {socialLinks.map(({ key, href, icon: Icon, label }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink2 transition-colors hover:border-signal hover:text-signal"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
