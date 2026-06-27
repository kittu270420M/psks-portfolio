import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  y = 30,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="font-mono-cyber text-xs tracking-[0.4em] text-cyan-400 mb-3">{kicker}</p>
      <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">{title}</h2>
      <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent mb-12" />
    </Reveal>
  );
}
