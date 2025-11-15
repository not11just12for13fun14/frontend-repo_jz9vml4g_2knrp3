import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react'

function NavLink({ label, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-base text-white/90 hover:text-white transition-colors"
    >
      {label}
    </a>
  )
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-white/70">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs md:text-sm text-white/80">Tech • Portfolio • Interactive</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Jubin Kuli</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl">
            Class 11 student from Assam, Gogamukh (Ukhamati Kali Gaon). I'm fascinated by technology and love exploring modern, interactive experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:text-white hover:border-white/40 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeading title="About Me" subtitle="A quick snapshot" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
            <h3 className="text-xl font-bold text-white">Who I am</h3>
            <p className="mt-3">
              I'm Jubin Kuli from Assam, Gogamukh (Ukhamati Kali Gaon). Currently studying in Class 11. I'm deeply curious about how technology works and how it can be used to build creative, playful, and useful experiences.
            </p>
            <p className="mt-3">
              This site is my personal space to share what I'm learning and building. I enjoy experimenting with modern web tech and interactive 3D.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
            <h3 className="text-xl font-bold text-white">Quick Details</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-300" /> Assam, Gogamukh – Ukhamati Kali Gaon</li>
              <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-purple-300" /> Fascinated by technology</li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-rose-300" /> jubinkuli72@gmail.com</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-300" /> 9678613150</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const featured = [
    {
      title: 'Interactive 3D Hero',
      description: 'A playful, modern hero section powered by a Spline 3D scene with smooth gradients and glassmorphism.',
      tags: ['Spline', 'React', 'Tailwind'],
    },
    {
      title: 'Tech Explorations',
      description: 'Small experiments that explore UI animations, layouts, and creative interactions.',
      tags: ['UI', 'Animations', 'Experiments'],
    },
    {
      title: 'Learning Journey',
      description: 'Notes and mini-projects from my path learning web development and modern tools.',
      tags: ['Learning', 'Web', 'Notes'],
    },
  ]

  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="relative container mx-auto px-6 md:px-10">
        <SectionHeading title="Featured Work" subtitle="A few highlights and ideas" />
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, ti) => (
                  <span key={ti} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeading title="Contact" subtitle="Let's connect and build something cool" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 flex items-center gap-3">
            <Mail className="h-5 w-5 text-rose-300" />
            <div>
              <p className="text-white/60 text-sm">Email</p>
              <a className="text-white hover:underline" href="mailto:jubinkuli72@gmail.com">jubinkuli72@gmail.com</a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 flex items-center gap-3">
            <Phone className="h-5 w-5 text-emerald-300" />
            <div>
              <p className="text-white/60 text-sm">Phone</p>
              <a className="text-white hover:underline" href="tel:+919678613150">+91 9678613150</a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-cyan-300" />
            <div>
              <p className="text-white/60 text-sm">Address</p>
              <p className="text-white">Assam, Gogamukh, Ukhamati Kali Gaon</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
          <p className="text-white/80">
            Prefer socials? Add your links here later. You can also turn this into a contact form in the future.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
        <p>© {new Date().getFullYear()} Jubin Kuli. All rights reserved.</p>
        <a href="/test" className="text-xs hover:text-white">System status</a>
      </div>
    </footer>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setMenuOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-lg tracking-tight flex items-center gap-2" onClick={(e)=>scrollTo(e, '#home')}>
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Jubin<span className="text-cyan-400">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.href} label={l.label} href={l.href} onClick={(e)=>scrollTo(e, l.href)} />
            ))}
          </nav>
          <button className="md:hidden p-2 rounded-lg border border-white/10" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/80">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <NavLink key={l.href} label={l.label} href={l.href} onClick={(e)=>scrollTo(e, l.href)} />
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
