import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="bg-ink py-28">
      <div className="container-px mx-auto">
        <SectionHeading index="03" label="Projects" title="Things I've shipped" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="card group overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-signal backdrop-blur">
                  {project.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink2">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink2"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink2 transition-colors hover:text-accent"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink2 transition-colors hover:text-accent"
                  >
                    <ArrowUpRight size={14} /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
