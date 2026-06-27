import { motion } from 'framer-motion';
import { SectionTitle } from './Reveal';
import { GraduationCap, BookOpenCheck, School } from 'lucide-react';

const entries = [
  {
    title: 'B.Tech in Cybersecurity Engineering',
    place: 'VIT-AP University',
    period: '2024 – 2028',
    metric: 'CGPA: 8.13',
    icon: GraduationCap,
    color: '#00F5FF',
  },
  {
    title: 'Intermediate (MPC)',
    place: 'Sri Chaitanya Junior College',
    period: '2022 – 2024',
    metric: 'Percentage: 85.60%',
    icon: BookOpenCheck,
    color: '#6C63FF',
  },
  {
    title: 'SSC',
    place: 'Dr K.K.R Gowtham School',
    period: '2021 – 2022',
    metric: 'Percentage: 86.83%',
    icon: School,
    color: '#00FF88',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="ACADEMIC JOURNEY" title="Education" />

        <div className="relative pl-2">
          {/* vertical glowing line */}
          <div
            className="absolute left-[26px] md:left-[31px] top-2 bottom-2 w-px"
            style={{
              background:
                'linear-gradient(180deg, transparent, #00F5FF 12%, #6C63FF 50%, #00FF88 88%, transparent)',
              boxShadow: '0 0 14px rgba(0,245,255,0.5)',
            }}
          />

          <div className="space-y-10">
            {entries.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* floating node icon */}
                <div className="relative shrink-0">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
                    className="relative w-[54px] h-[54px] md:w-16 md:h-16 rounded-2xl glass-strong grid place-items-center"
                    style={{ boxShadow: `0 0 30px ${e.color}33` }}
                  >
                    <span
                      className="absolute inset-0 rounded-2xl animate-pulse"
                      style={{ boxShadow: `inset 0 0 20px ${e.color}22` }}
                    />
                    <e.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: e.color }} />
                  </motion.div>
                  {/* glowing dot on the line */}
                  <span
                    className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3 h-3 rounded-full hidden"
                  />
                </div>

                {/* glass card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative flex-1 glass-strong neon-border rounded-3xl p-6 md:p-7 overflow-hidden"
                >
                  <div
                    className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{ background: e.color }}
                  />
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-cyan-300 transition-colors">
                        {e.title}
                      </h3>
                      <p className="text-gray-400 mt-1">{e.place}</p>
                      <p className="font-mono-cyber text-xs tracking-widest text-gray-500 mt-2">
                        {e.period}
                      </p>
                    </div>
                    <span
                      className="self-start sm:self-center shrink-0 font-mono-cyber text-sm font-semibold px-4 py-2 rounded-xl glass"
                      style={{ color: e.color, boxShadow: `0 0 20px ${e.color}22` }}
                    >
                      {e.metric}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
