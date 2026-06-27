import { motion } from 'framer-motion';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';

const roles = ['Cybersecurity Engineer', 'Malware Analyst', 'Digital Forensics Enthusiast'];

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Giant faded background text */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, delay: 2.3 }}
        className="pointer-events-none select-none absolute inset-0 flex flex-col items-center justify-center font-display font-black text-center leading-[0.95] w-full px-2"
        style={{ color: '#00F5FF' }}
      >
        <span style={{ fontSize: 'clamp(2.5rem, 13vw, 13rem)' }}>SRI KRISHNA</span>
        <span style={{ fontSize: 'clamp(2.5rem, 13vw, 13rem)' }}>SAI</span>
      </motion.h1>

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.4 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono-cyber tracking-widest text-emerald-300">
              VIT-AP • SECURITY ENGINEERING
            </span>
          </motion.div>

          <div className="space-y-1 mb-6">
            {roles.map((r, i) => (
              <motion.h2
                key={r}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.5 + i * 0.15 }}
                className="font-display font-bold leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}
              >
                {i === 0 ? (
                  <span className="animated-gradient-text">{r}</span>
                ) : (
                  <span className="text-white/85">{r}</span>
                )}
              </motion.h2>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="font-mono-cyber text-lg md:text-xl tracking-[0.3em] text-cyan-300 text-glow mb-5"
          >
            DETECT. ANALYZE. DEFEND.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.15 }}
            className="text-gray-400 max-w-lg leading-relaxed mb-9"
          >
            Passionate about building intelligent malware detection systems, security
            analysis tools, and digital defense solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => go('projects')}
              className="group relative inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-[#050816] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #00F5FF, #00FF88)' }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
                style={{ background: 'linear-gradient(135deg, #00F5FF, #00FF88)' }}
              />
              <span className="relative">View Projects</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => go('contact')}
              className="group neon-border inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold glass text-white hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative float-anim">
            <div
              className="absolute -inset-6 rounded-[2.5rem] blur-2xl opacity-50"
              style={{ background: 'radial-gradient(circle, #00F5FF55, #6C63FF33, transparent 70%)' }}
            />
            <div className="relative neon-border rounded-[2rem] overflow-hidden glass-strong p-2">
              <img
                src="/uploads/upload_1.jpg"
                alt="Peravarapu Sri Krishna Sai"
                className="rounded-[1.6rem] w-[280px] sm:w-[340px] object-cover"
              />
              <div
                className="absolute inset-2 rounded-[1.6rem] pointer-events-none"
                style={{ boxShadow: 'inset 0 0 60px rgba(0,245,255,0.15)' }}
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3"
            >
              <p className="font-mono-cyber text-xs text-emerald-300">STATUS</p>
              <p className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Securing Systems
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/60 text-xs font-mono-cyber tracking-widest"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
