import { motion } from 'framer-motion'

export default function SectionHeading({ index, label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="eyebrow mb-3">{`// ${index} — ${label}`}</p>
      <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
    </motion.div>
  )
}
