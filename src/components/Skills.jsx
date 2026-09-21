import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/40 py-28">
      <div className="container-px mx-auto">
        <SectionHeading index="04" label="Skills" title="The stack I reach for" />

        <div className="grid gap-12 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <div key={group.label}>
              <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
                {group.label}
              </h3>
              <div className="space-y-6">
                {group.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-white">{skill.name}</span>
                      <span className="font-mono text-xs text-ink2">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.9, delay: gi * 0.1 + i * 0.08 }}
                        className="h-full rounded-full bg-gradient-to-r from-signal to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
