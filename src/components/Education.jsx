import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="bg-surface/40 py-28">
      <div className="container-px mx-auto">
        <SectionHeading index="02" label="Education" title="Where the foundation was built" />

        <div className="relative mt-4 border-l border-line pl-8 md:pl-12">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-14 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-signal bg-ink text-signal md:-left-[57px]">
                <GraduationCap size={14} />
              </span>
              <p className="eyebrow mb-2">{item.period}</p>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {item.degree}
              </h3>
              <p className="mt-1 text-ink2">{item.school}</p>
              <p className="mt-2 max-w-xl text-sm text-ink2/80">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
