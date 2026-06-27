import { motion } from 'framer-motion';
import { SectionTitle } from './Reveal';
import { Github, ExternalLink, ShieldAlert, Briefcase, CalendarClock, WifiOff } from 'lucide-react';

const projects = [
  {
    title: 'Malware Detection System',
    desc: 'Intelligent system that analyzes file behavior and signatures to detect and classify malicious software in real time.',
    tags: ['Python', 'ML', 'Static Analysis'],
    icon: ShieldAlert,
    color: '#00F5FF',
  },
  {
    title: 'Online Job Recruitment System',
    desc: 'A full-stack recruitment platform connecting candidates and employers with secure authentication and role-based access.',
    tags: ['Web', 'Database', 'Auth'],
    icon: Briefcase,
    color: '#6C63FF',
  },
  {
    title: 'Timetable Optimizer',
    desc: 'Algorithmic scheduler that generates conflict-free academic timetables using constraint-based optimization.',
    tags: ['Algorithms', 'Optimization', 'Python'],
    icon: CalendarClock,
    color: '#00FF88',
  },
  {
    title: 'WiFi Intrusion Detection System',
    desc: 'Monitors wireless traffic to detect rogue access points, deauth attacks, and unauthorized intrusions on networks.',
    tags: ['Bettercap', 'Network', 'Security'],
    icon: WifiOff,
    color: '#00F5FF',
  },
];

const GH = 'https://github.com/kittu270420M';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="BUILT TO DEFEND" title="Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass-strong neon-border rounded-3xl p-7 overflow-hidden"
            >
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{ background: p.color }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl grid place-items-center glass"
                    style={{ boxShadow: `0 0 30px ${p.color}22` }}
                  >
                    <p.icon className="w-7 h-7" style={{ color: p.color }} />
                  </div>
                  <span className="font-mono-cyber text-xs text-gray-500">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono-cyber px-3 py-1 rounded-full glass text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={GH}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold glass hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={GH}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-[#050816] hover:opacity-90 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, #00F5FF, #00FF88)' }}
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
