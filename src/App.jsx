import { useEffect, useState, useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, Sparkles, Facebook, Youtube, Instagram, Send, Loader2, CheckCircle2 } from 'lucide-react'

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
  // slight parallax reaction to mouse for overlay content
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      setPos({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Robot-like 3D scene (Spline). This URL can be swapped for any preferred robot scene.
  const splineUrl = 'https://prod.spline.design/U2M9Ew1k7wX9o6bD/scene.splinecode'

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene={splineUrl} style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl text-white" style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs md:text-sm text-white/80">Tech • Portfolio • Interactive</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Jubin Kuli</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl">
            Class 11 student from Assam, Gogamukh (Ukhamati Kali Gaon). I build playful AI and utility projects with modern, interactive 3D.
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

      {/* Subtle interactive hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70">
        Tip: Move your cursor — the robot reacts subtly.
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
              This site is my personal space to share what I'm learning and building. I enjoy experimenting with modern web tech, interactive 3D, and AI-driven utilities.
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
  const projects = useMemo(() => ([
    {
      title: 'Advanced Automation AI Agent',
      description: 'Controls apps/PC, accesses camera, automates tasks with intelligent workflows.',
      tags: ['AI', 'Automation', 'PC Control'],
      link: '#',
    },
    {
      title: 'Calculator',
      description: 'A clean, responsive calculator with keyboard support and theme.',
      tags: ['Utility', 'React'],
      link: '#',
    },
    {
      title: 'News App',
      description: 'Curated news feed with categories, search, and smooth UI.',
      tags: ['News', 'API', 'React'],
      link: '#',
    },
    {
      title: 'Reminder App',
      description: 'Smart reminders with snooze, categories, and notifications.',
      tags: ['Productivity', 'PWA'],
      link: '#',
    },
    {
      title: 'Drink Water App',
      description: 'Daily hydration tracker with streaks and friendly nudges.',
      tags: ['Health', 'Tracker'],
      link: '#',
    },
    {
      title: 'Experiments',
      description: 'A collection of small ideas and prototypes testing interactions.',
      tags: ['Lab', 'UI', 'Animations'],
      link: '#',
    },
  ]), [])

  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="relative container mx-auto px-6 md:px-10">
        <SectionHeading title="Projects" subtitle="AI, utilities, and playful experiments" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur hover:bg-white/10 transition block">
              <div className="h-36 w-full rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 mb-4 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition" />
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, ti) => (
                  <span key={ti} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'portfolio' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setResult({ ok: true, id: data.id })
      setForm({ name: '', email: '', subject: '', phone: '', message: '' })
    } catch (err) {
      setResult({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeading title="Contact" subtitle="Let's connect and build something cool" />
        <div className="grid lg:grid-cols-3 gap-6">
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

        {/* Smart contact form */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 space-y-4 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input name="name" required value={form.name} onChange={onChange} className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" name="email" required value={form.email} onChange={onChange} className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" placeholder="you@example.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Subject</label>
                <input name="subject" value={form.subject} onChange={onChange} className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" placeholder="What's this about?" />
              </div>
              <div>
                <label className="text-sm text-white/70">Phone</label>
                <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" placeholder="Optional" />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" required rows="5" value={form.message} onChange={onChange} className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" placeholder="Tell me about your idea..." />
            </div>

            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white font-semibold disabled:opacity-60">
              {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>) : (<><Send className="h-4 w-4" /> Send Message</>)}
            </button>

            {result && (
              <div className={`mt-3 text-sm rounded-lg border px-3 py-2 ${result.ok ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200' : 'border-rose-400/30 bg-rose-400/10 text-rose-200'}`}>
                {result.ok ? (
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Message sent! I'll get back soon.</div>
                ) : (
                  <div>Failed to send: {result.error}</div>
                )}
              </div>
            )}
          </form>

          {/* Socials */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
            <p className="text-white/80">
              Prefer socials? You can reach me here as well.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a href="https://github.com/jubinkuli72-dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="https://in.linkedin.com/in/jubin-kuli-a5201a397" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="https://youtube.com/@jubinkuli0217?si=GwK0m_YrEgxs0qdv" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Youtube className="h-5 w-5" /> YouTube
              </a>
              <a href="https://www.instagram.com/stk_jubin?igsh=MXczaGhrYW16aTAwNw==" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a href="https://www.facebook.com/share/14UJXBYuvKF/age" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Facebook className="h-5 w-5" /> Facebook
              </a>
            </div>
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
