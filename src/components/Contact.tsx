import { motion } from 'framer-motion';
import { SectionTitle } from './Reveal';
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

const links = [
  {
    label: 'LinkedIn',
    value: 'Sri Krishna Sai Peravarapu',
    href: 'https://www.linkedin.com/in/sri-krishna-sai-peravarapu-761155365/',
    icon: Linkedin,
    color: '#00F5FF',
  },
  {
    label: 'GitHub',
    value: 'kittu270420M',
    href: 'https://github.com/kittu270420M',
    icon: Github,
    color: '#6C63FF',
  },
  {
    label: 'Email',
    value: 'peravarapusrikrishnasai@gmail.com',
    href: 'mailto:peravarapusrikrishnasai@gmail.com',
    icon: Mail,
    color: '#00FF88',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle kicker="GET IN TOUCH" title="Let's Connect" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 max-w-xl mx-auto -mt-6 mb-12"
        >
          Open to internships, collaborations, and conversations about cybersecurity.
          Reach out — let's build secure systems together.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-5">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass-strong neon-border rounded-3xl p-7 flex flex-col items-center text-center overflow-hidden"
            >
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ background: l.color }}
              />
              <div className="relative w-14 h-14 rounded-2xl glass grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <l.icon className="w-7 h-7" style={{ color: l.color }} />
              </div>
              <p className="relative font-display font-semibold text-white mb-1 flex items-center gap-1">
                {l.label}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="relative text-xs text-gray-400 break-all">{l.value}</p>
            </motion.a>
          ))}
        </div>

        <p className="mt-16 text-sm text-gray-600 font-mono-cyber">
          © {new Date().getFullYear()} Peravarapu Sri Krishna Sai — Detect. Analyze. Defend.
        </p>
      </div>
    </section>
  );
}
