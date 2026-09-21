import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-8">
      <div className="container-px mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink2">
          © {new Date().getFullYear()} Hari Haran. Built with React &amp; Tailwind.
        </p>
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink2 hover:text-accent"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}
